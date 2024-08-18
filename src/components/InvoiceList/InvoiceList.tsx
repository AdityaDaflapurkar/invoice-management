import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Paper, TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchInvoices } from '../../store/invoiceListSlice';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
    renderCell: (params) => <Link to='/'>{params.value}</Link>,
  },
  { field: 'customer', headerName: 'Customer', flex: 1 },
  { field: 'total_amount', headerName: 'Amount', flex: 1 },
  {
    field: 'created_date',
    headerName: 'Created At',
    flex: 1,
  },
  {
    field: 'updated_date',
    headerName: 'Updated At',
    flex: 1,
  },
];

function InvoiceList() {
  const { invoiceRecords, totalInvoicesCount } = useAppSelector((state) => ({
    invoiceRecords: state.invoiceList.records,
    totalInvoicesCount: state.invoiceList.totalRecordCount,
  }));
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchInvoices({ startPage: 0, rowsPerPage: 5 }));
  }, [dispatch]);
  console.log(totalInvoicesCount + 'totalInvoicesCount');
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <DataGrid
          rows={invoiceRecords}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 15, 20]}
          rowCount={totalInvoicesCount}
          disableColumnMenu
          disableColumnSorting
          disableRowSelectionOnClick
        />
        {/* <TablePagination rowsPerPage={10} page={0} count={48} onPageChange={() => {}} /> */}
      </Paper>
    </div>
  );
}

// const InvoiceList: React.FC = () => {
//   const invoiceList = useAppSelector((state) => state.invoiceList);

//   return <></>;
// };

export default InvoiceList;
