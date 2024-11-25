import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import BinIcon from '@atoms/Icons/Bin';
import PencilIcon from '@atoms/Icons/Pencil';
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from '@atoms/Table/Table';
import useModal from '@hooks/useModal';
import { fetchBankRecords } from '@helpers/fetchBankRecords';
import { TableNavigation } from '@molecules/TableNavigation/TableNavigation';
import Modal from '@organisms/Modal/Modal';
import RemoveAccoutingRecordForm from '@organisms/RemoveAccoutingRecordForm/RemoveAccoutingRecordForm';
import AccountingForm from '../AccountingForm/AccountingForm';
import { TransactionType } from '../AccountingForm/formSchema';

interface Data {
  page: number;
  recordsPerPage: number;
  totalItems: number;
  records: Record[];
  searchId: string;
}

export interface Record {
  id: string;
  accountNumber: string;
  accountName: string;
  iban: string;
  address: string;
  amount: number;
  type: TransactionType;
}

const RecordsTable = () => {
  const { t } = useTranslation();
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
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsPage = parseInt(searchParams.get('page') ?? '1');
  const searchParamsRecordsPerPage = parseInt(
    searchParams.get('recordsPerPage') ?? '1',
  );
  const page = searchParamsPage > 0 ? searchParamsPage : 1;
  const recordsPerPage =
    searchParamsRecordsPerPage > 0 ? searchParamsRecordsPerPage : 15;
  const [pageNumber, setPageNumber] = useState(page);
  const [removalModalRecordId, setRemovalModalRecordId] = useState<
    string | null
  >(null);
  const [editModalRecordData, setEditModalRecordData] = useState<Record | null>(
    null,
  );

  const { data, error, isLoading } = useQuery<Data>({
    queryKey: ['records', pageNumber, recordsPerPage],
    queryFn: () =>
      fetchBankRecords({ page: pageNumber, recordsPerPage: recordsPerPage }),
    enabled: !!pageNumber && !!recordsPerPage,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center">{t('recordsTable.loading')}</div>
    );
  }

  if (error instanceof Error) {
    return (
      <div className="flex justify-center">
        {`${t('recordsTable.error')} ${error.message}`}
      </div>
    );
  }

  const onPaginationButtonClickHandler = (
    e: React.MouseEvent<HTMLAnchorElement>,
    newPageNumber: number,
  ) => {
    e.preventDefault();

    searchParams.set('page', newPageNumber.toString());
    setSearchParams(searchParams);

    setPageNumber(newPageNumber);
  };

  const onShowRemoveWarningModal = ({ id }: { id: string }) => {
    openRemovalWarningModal();
    setRemovalModalRecordId(id);
  };

  const onHideRemoveWarningModal = () => {
    closeRemovalWarningModalOpen();
    setRemovalModalRecordId(null);
  };

  const onShowEditModal = (data: Record) => {
    openEditModal();
    setEditModalRecordData(data);
  };

  const onHideEditModal = () => {
    closeEditModalOpen();
    setEditModalRecordData(null);
  };

  return (
    <>
      <Modal
        isOpen={isRemovalWarningModalOpen || isEditModalOpen}
        onClose={
          isRemovalWarningModalOpen ? onHideRemoveWarningModal : onHideEditModal
        }
        isSmall={isRemovalWarningModalOpen}
        title={
          isRemovalWarningModalOpen
            ? t('recordsTable.form.removeForm.header')
            : t('recordsTable.form.editForm.header')
        }
      >
        {isEditModalOpen && editModalRecordData ? (
          <AccountingForm
            formData={editModalRecordData}
            onClose={onHideEditModal}
          />
        ) : (
          <RemoveAccoutingRecordForm
            id={removalModalRecordId}
            onClose={onHideRemoveWarningModal}
          />
        )}
      </Modal>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>

      <div>
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableHead>
                {t('recordsTable.tableHeaders.accountName')}
              </TableHead>
              <TableHead>{t('recordsTable.tableHeaders.id')}</TableHead>
              <TableHead>
                {t('recordsTable.tableHeaders.accountNumber')}
              </TableHead>
              <TableHead>{t('recordsTable.tableHeaders.iban')}</TableHead>
              <TableHead>{t('recordsTable.tableHeaders.address')}</TableHead>
              <TableHead>{t('recordsTable.tableHeaders.amount')}</TableHead>
              <TableHead>{t('recordsTable.tableHeaders.type')}</TableHead>
              <TableHead>{t('recordsTable.tableHeaders.action')}</TableHead>
            </TableHeader>
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
                      <TableData className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {accountName}
                      </TableData>
                      <TableData>{id}</TableData>
                      <TableData>{accountNumber}</TableData>
                      <TableData>{iban}</TableData>
                      <TableData>{address}</TableData>
                      <TableData>{amount}</TableData>
                      <TableData>
                        {type === TransactionType.SENDING
                          ? t(
                              'recordsTable.form.modalFields.validationSchema.typeSending',
                            )
                          : type === TransactionType.RECEIVING
                            ? t(
                                'recordsTable.form.modalFields.validationSchema.typeReceiving',
                              )
                            : t(
                                'recordsTable.form.modalFields.validationSchema.typeUnknown',
                              )}
                      </TableData>
                      <TableData className="flex justify-center">
                        <PencilIcon
                          onClick={() =>
                            onShowEditModal({
                              id,
                              accountNumber,
                              accountName,
                              iban,
                              address,
                              amount,
                              type,
                            })
                          }
                        />

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
                    {t('recordsTable.noRecords')}
                  </TableData>
                </tr>
              </TableBody>
            )}
          </Table>
        </TableWrapper>

        <TableNavigation
          pages={Math.ceil((data?.totalItems || 0) / recordsPerPage)}
          currentPage={data?.page || 1}
          items={recordsPerPage}
          totalItems={data?.totalItems || 0}
          onClick={(e, pageNumber) =>
            onPaginationButtonClickHandler(e, pageNumber)
          }
        />
      </div>
    </>
  );
};

export default RecordsTable;
