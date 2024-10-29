import { backendLink } from '@helpers/constans';

export const deleteRecord = async (id: string) => {
  const response = await fetch(`${backendLink}/api/accounting/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('There was an error during the deletion of the record.');
  }

  return response.json();
};
