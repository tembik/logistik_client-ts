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
import { postAlamat } from "../../services/api";
import { TypeAlamat, alamatData } from "../../type/alamat";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tampil: () => Promise<void>;
};

const FormDialogAdd = (props: Props) => {
  const { open, setOpen, tampil } = props;
  const [alamatAdd, setAlamatAdd] = useState<TypeAlamat>(alamatData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAlamatAdd((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async () => {
    const alamatData: TypeAlamat = {

      nama: alamatAdd.nama,
      deskripsi:alamatAdd.deskripsi
    };
    await postAlamat(alamatData).then(() => {
      setOpen(false);
      tampil();
    });
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
      <DialogTitle>Buat Alamat Baru</DialogTitle>
      <DialogContent>
        <DialogContentText gutterBottom>Wajib Diisi</DialogContentText>
        <Grid container spacing={2}>
          <Grid item>
            <TextField label="Nama" name="nama" onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField label="Deskripsi" name="deskripsi" onChange={handleChange} />
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
