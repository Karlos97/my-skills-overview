import { backendLink } from '@helpers/constans';

export const fetchBankRecords = async ({
  page,
  recordsPerPage,
}: {
  page: number;
  recordsPerPage: number;
}) => {
  const response = await fetch(
    `${backendLink}/api/accounting?page=${page}&recordsPerPage=${recordsPerPage}`,
  );

  if (!response.ok) {
    throw new Error('There was an error during fetching of records.');
  }

  return response.json();
};
