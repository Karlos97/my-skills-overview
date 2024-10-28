import { Request, Response } from "express";
import { ZodError } from "zod";
import { PrismaClient } from "@prisma/client";
import {
  getAccountingSchema,
  postAccountingSchema,
  putAccountingSchema,
} from "../validation/accountingSchema";
import logger from "../logger";
import zodErrorMessageConverter from "../helpers/zodErrorMessageConverter";
import redisClient from "../config/redisSetup";

const prisma = new PrismaClient();

interface Record {
  accountNumber: string;
  accountName: string;
  iban: string;
  address: string;
  amount: number;
  type: "sending" | "receiving";
}

interface UpdateRecord extends Record {
  id: string;
}

interface ResponseData {
  page: number;
  perPage: number;
  records: Record[];
}

export const getAccountingInfo = async (req: Request, res: Response) => {
  try {
    const bodyData = getAccountingSchema.parse(req.query);

    const cachedRecord = await redisClient.get(
      `recordPage:${bodyData.page}&recordPerPage:${bodyData.perPage}`
    );

    if (cachedRecord) {
      logger.info("Accounting information fetched from cache.");
      const parsedData = JSON.parse(cachedRecord) as unknown as ResponseData;
      res.status(200).json(parsedData);
      return;
    }

    const accountingRecords = await prisma.accountingRecord.findMany({
      skip: (bodyData.page - 1) * bodyData.perPage,
      take: bodyData.perPage,
    });

    const responseData: ResponseData = {
      page: bodyData.page,
      perPage: bodyData.perPage,
      records: accountingRecords,
    };

    await redisClient.setEx(
      `recordPage:${bodyData.page}&recordPerPage:${bodyData.perPage}`,
      3600,
      JSON.stringify(responseData)
    );

    logger.info("Accounting information fetched and cached.");
    res.status(200).json(responseData);
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessage = zodErrorMessageConverter(error);
      res.status(400).json({ error: errorMessage });
      logger.error(`Zod validation error log message: ${errorMessage}`);
    } else {
      logger.error(`Error fetching data: ${error}`);
      res.status(500).json({ error: "Failed to retrieve data." });
    }
  }
};

export const addAccountingInfo = async (req: Request, res: Response) => {
  try {
    const data: Record = postAccountingSchema.parse(req.body);

    const newRecord = await prisma.accountingRecord.create({
      data: {
        accountNumber: data.accountNumber,
        accountName: data.accountName,
        iban: data.iban,
        address: data.address,
        amount: data.amount,
        type: data.type,
      },
    });

    await redisClient.setEx(
      `record:${newRecord.createdAt}`,
      3600,
      JSON.stringify({ data })
    );

    logger.info("Accounting information added.");
    res.status(201).json({ message: "Accounting information added." });
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessage = zodErrorMessageConverter(error);
      res.status(400).json({ error: errorMessage });
      logger.error(
        `This is a Zod validation error log message: ${errorMessage}`
      );
    } else {
      logger.error(`Error adding data: ${error}`);
      res.status(500).json({ error: "Failed to add data." });
    }
  }
};

export const updateAccountingInfo = async (req: Request, res: Response) => {
  try {
    const data: UpdateRecord = putAccountingSchema.parse(req.body);
    const { id } = data;

    // Update the record in the database
    const updatedRecord = await prisma.accountingRecord.update({
      where: { id },
      data: {
        accountName: data.accountName,
        iban: data.iban,
        address: data.address,
        amount: data.amount,
        type: data.type,
      },
    });

    // Update the cache
    await redisClient.setEx(
      `record:${id}`,
      3600,
      JSON.stringify({ data: updatedRecord })
    );

    logger.info("Accounting information updated.");
    res.status(200).json({
      message: "Accounting information updated.",
      data: updatedRecord,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessage = zodErrorMessageConverter(error);
      res.status(400).json({ error: errorMessage });
      logger.error(`Zod validation error log message: ${errorMessage}`);
    } else {
      logger.error(`Error updating data: ${error}`);
      res.status(500).json({ error: "Failed to update data." });
    }
  }
};

// Delete Accounting Record
export const deleteAccountingInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Delete from the database
    await prisma.accountingRecord.delete({
      where: { id },
    });

    // Remove from cache
    await redisClient.del(`record:${id}`);

    logger.info("Accounting information deleted.");
    res.status(200).json({ message: "Accounting information deleted." });
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessage = zodErrorMessageConverter(error);
      res.status(400).json({ error: errorMessage });
      logger.error(`Zod validation error log message: ${errorMessage}`);
    } else {
      logger.error(`Error deleting data: ${error}`);
      res.status(500).json({ error: "Failed to delete data." });
    }
  }
};
