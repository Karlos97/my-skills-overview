import { ReactNode, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import IconLeft from '@atoms/Icons/IconLeft';
import IconRight from '@atoms/Icons/IconRight';
import { Table, TableBody, TableRow, TableWrapper } from '@atoms/Table/Table';
import PaginationButton from '@atoms/PaginationButton/PaginationButton';
import { fetchBankRecords } from '@helpers/fetchBankRecords';
import Modal from '@organisms/Modal/Modal';
import useModal from '@/helpers/hooks/useModal';
import RemoveAccoutingRecordForm from '@organisms/RemoveAccoutingRecordForm/RemoveAccoutingRecordForm';
import BinIcon from '@atoms/Icons/Bin';
import PencilIcon from '@/components/atoms/Icons/Pencil';

interface Data {
  page: number;
  perPage: number;
  records: Record[];
  searchId: string;
}

interface Record {
  id: string;
  accountNumber: string;
  accountName: string;
  iban: string;
  address: string;
  amount: number;
  type: string;
}
const TableHeader = ({ children }: { children: ReactNode }) => (
  <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-800 text-left">
    {children}
  </th>
);

interface TableDataProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
}

const TableData = ({
  children,
  className = '',
  colSpan = 1,
}: TableDataProps) => (
  <td
    className={`${className} whitespace-nowrap px-4 py-2 font-medium text-slate-700`}
    colSpan={colSpan}
  >
    {children}
  </td>
);

const RecordsTable = () => {
  const {
    isModalOpen: isRemovalWarningModalOpen,
    openModal: openRemovalWarningModal,
    closeModal: closeRemovalWarningModalOpen,
  } = useModal();

  const {
    isModalOpen: isEditModalOpen,
    openModal: openEditModal,
    closeModal: closeEditModalOpen,
  } = useModal();
  const [pageNumber, setPageNumber] = useState(1);
  const [removalModalRecordId, setRemovalModalRecordId] = useState<
    string | null
  >(null);

  const perPage = 15;

  const { data, error, isLoading } = useQuery<Data>({
    queryKey: ['records', pageNumber, perPage],
    queryFn: () => fetchBankRecords({ page: pageNumber, perPage }),
    enabled: !!pageNumber && !!perPage,
  });

  if (isLoading) {
    return <div className="flex justify-center">Loading...</div>;
  }

  if (error instanceof Error) {
    return <div className="flex justify-center">Error: {error.message}</div>;
  }

  const onPaginationButtonClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: number,
  ) => {
    e.preventDefault();

    setPageNumber(pageNumber + value);
  };

  const onShowRemoveWarningModal = ({ id }: { id: string }) => {
    openRemovalWarningModal();
    setRemovalModalRecordId(id);
  };

  const onHideRemoveWarningModal = () => {
    closeRemovalWarningModalOpen();
    setRemovalModalRecordId(null);
  };

  return (
    <>
      <Modal
        isOpen={isRemovalWarningModalOpen || isEditModalOpen}
        onClose={
          isRemovalWarningModalOpen
            ? onHideRemoveWarningModal
            : closeEditModalOpen
        }
        isSmall={isRemovalWarningModalOpen}
        title={isRemovalWarningModalOpen ? 'Remove record' : 'Edit record'}
      >
        {isRemovalWarningModalOpen ? (
          <RemoveAccoutingRecordForm id={removalModalRecordId} />
        ) : (
          <p>Edit</p>
        )}
      </Modal>
      <TableWrapper>
        <div className="overflow-x-auto rounded-t-lg">
          <Table>
            <thead>
              <tr>
                <TableHeader>Id</TableHeader>
                <TableHeader>Account Number</TableHeader>
                <TableHeader>Account Name</TableHeader>
                <TableHeader>IBAN</TableHeader>
                <TableHeader>Address</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Action</TableHeader>
              </tr>
            </thead>
            {data?.records?.length ? (
              <TableBody>
                {data?.records.map(
                  ({
                    id,
                    accountNumber,
                    accountName,
                    iban,
                    address,
                    amount,
                    type,
                  }) => (
                    <TableRow key={id}>
                      <TableData>{id}</TableData>
                      <TableData>{accountNumber}</TableData>
                      <TableData>{accountName}</TableData>
                      <TableData>{iban}</TableData>
                      <TableData>{address}</TableData>
                      <TableData>{amount}</TableData>
                      <TableData>{type}</TableData>
                      <TableData className="flex justify-center">
                        <PencilIcon onClick={() => openEditModal()} />

                        <BinIcon
                          onClick={() => onShowRemoveWarningModal({ id })}
                        />
                      </TableData>
                    </TableRow>
                  ),
                )}
              </TableBody>
            ) : (
              <TableBody>
                <tr>
                  <TableData className="text-center" colSpan={8}>
                    This page is empty!
                  </TableData>
                </tr>
              </TableBody>
            )}
          </Table>
        </div>

        <div className="rounded-b-lg border-t border-gray-200 dark:border-gray-500 px-4 py-2 bg-gray-50 dark:bg-gray-400">
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <PaginationButton
              onClick={(e) => onPaginationButtonClickHandler(e, -1)}
              disabled={pageNumber === 1}
              isIcon
            >
              <IconLeft />
            </PaginationButton>
            <PaginationButton isActive>{pageNumber}</PaginationButton>

            <PaginationButton
              onClick={(e) => onPaginationButtonClickHandler(e, 1)}
              disabled={(data?.records?.length || 0) < perPage}
              isIcon
            >
              <IconRight />
            </PaginationButton>
          </ol>
        </div>
      </TableWrapper>
    </>
  );
};

export default RecordsTable;
