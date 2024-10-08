import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect, useState } from 'react';
import { fetchInvoices } from '../../store/invoiceListSlice';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import Loader from '../Common/Loader/Loader';
import { InvoiceStage } from '../../utils/types';

interface InvoiceListProps {
  stage: InvoiceStage;
}

function InvoiceList(props: InvoiceListProps) {
  const { invoiceRecords, totalInvoicesCount, isLoading } = useAppSelector((state) => ({
    invoiceRecords: state.invoiceList.records,
    totalInvoicesCount: state.invoiceList.totalRecordCount,
    isLoading: state.invoiceList.isLoading,
  }));
  const { stage } = props;
  const [currentRowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setPage] = useState(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setPage(0);
    setRowsPerPage(10);
    dispatch(fetchInvoices({ startPage: 0, rowsPerPage: 10, stage }));
  }, [dispatch, stage]);

  const onRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newRowsPerPage: number = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    dispatch(fetchInvoices({ startPage: 0, rowsPerPage: newRowsPerPage, stage }));
  };

  const onPageChange = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
    dispatch(
      fetchInvoices({
        startPage: newPage,
        rowsPerPage: currentRowsPerPage,
        stage,
      }),
    );
  };

  return isLoading ? (
    <Loader />
  ) : (
    <TableContainer component={Paper} sx={{ height: '100%' }}>
      <Table aria-label='custom pagination table' stickyHeader>
        <TableHead>
          <TableCell>ID</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Created Date</TableCell>
          <TableCell>Updated Date</TableCell>
        </TableHead>
        <TableBody>
          {invoiceRecords.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{ width: 160 }}>
                <Link to={'/invoice-preview'} target='_blank' rel='noopener noreferrer'>
                  {row.id}
                </Link>
              </TableCell>
              <TableCell style={{ width: 160 }}>{row.customer}</TableCell>
              <TableCell style={{ width: 160 }}>{row.total_amount}</TableCell>
              <TableCell style={{ width: 160 }}>{row.created_date}</TableCell>
              <TableCell style={{ width: 160 }}>{row.updated_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter
          sx={{
            position: 'sticky',
            bottom: 0,
            opacity: 1,
            background: '#fff',
          }}
        >
          <TableRow sx={{ width: '100%', border: '1px solid black' }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={totalInvoicesCount}
              rowsPerPage={currentRowsPerPage}
              page={currentPage}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={onPageChange}
              onRowsPerPageChange={onRowsPerPageChange}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default InvoiceList;
