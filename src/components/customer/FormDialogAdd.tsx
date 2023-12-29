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
import { useState, ChangeEvent } from "react";
import { postCustomer } from "../../services/api";
import { TypeCustomer, customerData } from "../../type/customer";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tampil: () => Promise<void>;
};

const FormDialogAdd = (props: Props) => {
  const { open, setOpen, tampil } = props;
  const [customerAdd, setCustomerAdd] = useState<TypeCustomer>(customerData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCustomerAdd((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async () => {
    const userData: TypeCustomer = {
      nama: customerAdd.nama,
      email: customerAdd.email,
      no_telp: customerAdd.no_telp,
      kota: customerAdd.kota,
    };
    await postCustomer(userData).then(() => {
      setOpen(false);
      tampil();
    });
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
      <DialogTitle>Buat Customer Baru</DialogTitle>
      <DialogContent>
        <DialogContentText gutterBottom>Wajib Diisi</DialogContentText>
        <Grid container spacing={2}>
          <Grid item>
            <TextField label="Nama" name="nama" onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField label="Email" name="email" onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField label="No Telp" name="no_telp" onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField label="Kota" name="kota" onChange={handleChange} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button variant="contained" onClick={handleClick}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};
export default FormDialogAdd;
