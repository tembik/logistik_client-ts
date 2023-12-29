import {
  Stack,
  Box,
  Grid,
  Button,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState, useEffect, ChangeEvent } from "react";
import { readOneCustomer, EditCustomer } from "../../services/api";
import { TypeCustomer, customerData } from "../../type/customer";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tampil: () => Promise<void>;
  item: TypeCustomer;
};
const FormDialogEdit = (props: Props) => {
  const { open, setOpen, tampil, item } = props;
  const [customerEdit, setCustomerEdit] = useState<TypeCustomer>(customerData);

  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = async () => {
    await readOneCustomer(item.id).then((response) => {
      setCustomerEdit(() => {
        const { nama, email, no_telp, kota }: TypeCustomer = response.data;
        return {
          nama: nama,
          email: email,
          no_telp: no_telp,
          kota: kota,
        };
      });
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomerEdit((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async () => {
    const userData: TypeCustomer = {
      nama: customerEdit.nama,
      email: customerEdit.email,
      no_telp: customerEdit.no_telp,
      kota: customerEdit.kota,
    };
    await EditCustomer(item.id, userData).then(() => {
      setOpen(false);
      tampil();
    });
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
      <DialogTitle>Edit Customer</DialogTitle>
      <DialogContent>
        <DialogContentText gutterBottom>Wajib Diisi</DialogContentText>
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              label="Nama"
              name="nama"
              value={customerEdit.nama}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              name="email"
              value={customerEdit.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="No Telp"
              name="no_telp"
              value={customerEdit.no_telp}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Kota"
              name="kota"
              value={customerEdit.kota}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>cancel</Button>
        <Button variant="contained" onClick={handleClick}>submit</Button>
      </DialogActions>
    </Dialog>
  );
};
export default FormDialogEdit;
