import { Router } from "express";
import {
  addAccountingInfo,
  deleteAccountingInfo,
  getAccountingInfo,
  updateAccountingInfo,
} from "../controllers/accountingController";

const accountingRoutes = Router();

/**
 * @swagger
 * /api/accounting:
 *   get:
 *     summary: Get accounting information
 *     description: This endpoint allows users to get accounting information from cloud vault. It validates the input data against a defined schema and returns appropriate success or error messages.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page:
 *                 type: number
 *                 description: Page number
 *               recordsPerPage:
 *                 type: number
 *                 description: Elements per page
 *               totalItems:
 *                 type: number
 *                 description: All available records
 *             required:
 *               - page
 *               - recordsPerPage
 *     responses:
 *       201:
 *         description: Accounting information successfully fetched
 *       400:
 *         description: Bad request due to validation error
 *       500:
 *         description: Internal server error
 */
accountingRoutes.get("/", getAccountingInfo);

/**
 * @swagger
 * /api/accounting:
 *   post:
 *     summary: Add accounting information
 *     description: This endpoint allows users to add new accounting information to cloud vault. It validates the input data against a defined schema and returns appropriate success or error messages.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               accountNumber:
 *                 type: string
 *                 description: The account number. This field is required.
 *               accountName:
 *                 type: string
 *                 description: The name associated with the account. This field is required.
 *               iban:
 *                 type: string
 *                 description: The IBAN (International Bank Account Number). This field is required and must be exactly 32 characters long, starting with two uppercase letters.
 *               address:
 *                 type: string
 *                 description: The address associated with the account. This field is required.
 *               amount:
 *                 type: number
 *                 description: The amount of money for the transaction. This field is required and must be a positive number.
 *               type:
 *                 type: string
 *                 description: The type of transaction, which can either be "sending" or "receiving". This field is required.
 *             required:
 *               - accountNumber
 *               - accountName
 *               - iban
 *               - address
 *               - amount
 *               - type
 *     responses:
 *       201:
 *         description: Accounting information successfully added
 *       400:
 *         description: Bad request due to validation error
 *       500:
 *         description: Internal server error
 */

accountingRoutes.post("/", addAccountingInfo);
/**
 * @swagger
 * /accounting:
 *   put:
 *     summary: Update accounting information
 *     description: Updates the accounting information for a specific record.
 *     tags:
 *       - Accounting
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field1:
 *                 type: string
 *                 description: Description of field1
 *               field2:
 *                 type: integer
 *                 description: Description of field2
 *             required:
 *               - field1
 *               - field2
 *     responses:
 *       200:
 *         description: Accounting information updated successfully.
 *       400:
 *         description: Invalid request data.
 *       404:
 *         description: Accounting information not found.
 *       500:
 *         description: Server error.
 */
accountingRoutes.put("/", updateAccountingInfo);
/**
 * @swagger
 * /accounting:
 *   delete:
 *     summary: Delete accounting information
 *     description: Deletes the accounting information for a specific record.
 *     tags:
 *       - Accounting
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the accounting record to delete
 *     responses:
 *       200:
 *         description: Accounting information deleted successfully.
 *       400:
 *         description: Invalid request data.
 *       404:
 *         description: Accounting information not found.
 *       500:
 *         description: Server error.
 */
accountingRoutes.delete("/", deleteAccountingInfo);

export default accountingRoutes;
