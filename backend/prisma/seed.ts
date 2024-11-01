// prisma/seed.ts

import { PrismaClient, BankTransferType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create mock accounting records
  await prisma.accountingRecord.createMany({
    data: [
      {
        accountNumber: "1234567890",
        accountName: "Alice",
        iban: "DE893704004405320130001234567323",
        address: "123 Main St, Cityville",
        amount: 1000.0,
        type: BankTransferType.sending,
      },
      {
        accountNumber: "0987654321",
        accountName: "Bob",
        iban: "FR893704004405320130001234567111",
        address: "456 Elm St, Townsville",
        amount: 1500.5,
        type: BankTransferType.receiving,
      },
      // Add more mock records as needed
    ],
  });

  console.log("Mock data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
