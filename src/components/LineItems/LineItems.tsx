import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Footer, { FooterButton } from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import { useNavigate } from 'react-router-dom';
import { Edit } from '@mui/icons-material';
import { LineItem } from '../../utils/types';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import LineItemDialog from './LineItemDialog';
import { addLineItem, removeLineItem, updateLineItem } from '../../store/invoiceDraftSlice';

const LineItems: React.FC = () => {
  const navigate = useNavigate();
  const lineItems = useAppSelector((state) => state.invoiceDraft.lineItems);
  const dispatch = useAppDispatch();
  const [openRows, setOpenRows] = useState<number[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<LineItem | null>(null);
  console.log('ll' + JSON.stringify(lineItems));

  const handleRowToggle = (index: number) => {
    setOpenRows((prevOpenRows) =>
      prevOpenRows.includes(index)
        ? prevOpenRows.filter((i) => i !== index)
        : [...prevOpenRows, index],
    );
  };

  const onDeleteLineItem = (item: LineItem) => {
    dispatch(removeLineItem(item));
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setCurrentItem(null);
    setDialogOpen(false);
  };

  const handleSaveItem = (updatedItem: LineItem) => {
    if (updatedItem && updatedItem.description) {
      const itemIndex = lineItems.findIndex((item) => item.id === updatedItem.id);
      if (itemIndex >= 0) {
        dispatch(
          updateLineItem({
            index: itemIndex,
            data: updatedItem,
          }),
        );
      } else {
        dispatch(addLineItem(updatedItem));
      }
      handleDialogClose();
    }
  };

  const handleEdit = (item: LineItem) => {
    setCurrentItem(item);
    handleDialogOpen();
  };

  const onSaveProceed = () => {
    navigate('/customize-template');
  };

  const getFooterPrimaryProps = (): FooterButton => {
    return {
      text: 'Save and Proceed',
      action: onSaveProceed,
      disabled: false,
    };
  };

  const footerPrimaryProps: FooterButton = getFooterPrimaryProps();

  return (
    <>
      <Header title='Add or Edit Line Items'></Header>
      <Button
        variant='contained'
        color='primary'
        startIcon={<AddIcon />}
        onClick={handleDialogOpen}
        sx={{ margin: 2 }}
      >
        Add New Item
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table' style={{ border: '1px solid, black' }}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Description</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price ($)</TableCell>
              <TableCell>Total Price ($)</TableCell>
              <TableCell>Final Price ($)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lineItems.map((item, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>
                    {(item.discounts.length > 0 || item.taxes.length > 0) && (
                      <IconButton
                        aria-label='expand row'
                        size='small'
                        onClick={() => handleRowToggle(index)}
                      >
                        {openRows.includes(index) ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{(+item.unit_price)?.toFixed(2)}</TableCell>
                  <TableCell>{(+item.total_price)?.toFixed(2)}</TableCell>
                  <TableCell>{(+item.final_price)?.toFixed(2)}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(item)} color='primary'>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => onDeleteLineItem(item)} color='error'>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={openRows.includes(index)} timeout='auto' unmountOnExit>
                      <Box margin={1}>
                        <Grid container spacing={2}>
                          {item.discounts.length > 0 && (
                            <Grid item xs={12} md={6}>
                              <Typography variant='h6' gutterBottom component='div'>
                                Discounts
                              </Typography>
                              <Table
                                size='small'
                                aria-label='discounts'
                                style={{ border: '2px solid grey' }}
                              >
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Discount %</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {item.discounts.map((discount, discountIndex) => (
                                    <TableRow key={discountIndex}>
                                      <TableCell>{discount.description}</TableCell>
                                      <TableCell>{discount.discountPercent.toFixed(2)}%</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Grid>
                          )}
                          {item.taxes.length > 0 && (
                            <Grid item xs={12} md={6}>
                              <Typography variant='h6' gutterBottom component='div'>
                                Taxes
                              </Typography>
                              <Table
                                size='small'
                                aria-label='taxes'
                                style={{ border: '2px solid grey' }}
                              >
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Tax %</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {item.taxes.map((tax, taxIndex) => (
                                    <TableRow key={taxIndex}>
                                      <TableCell>{tax.description}</TableCell>
                                      <TableCell>{tax.taxPercent.toFixed(2)}%</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Grid>
                          )}
                        </Grid>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <LineItemDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleSaveItem}
        currentItem={currentItem}
      />

      <Footer primary={footerPrimaryProps} />
    </>
  );
};

export default LineItems;
