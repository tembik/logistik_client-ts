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
import { editAlamat } from "../../services/api";
import { TypeAlamat } from "../../type/alamat";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tampil: () => Promise<void>;
  item: TypeAlamat;
  alamatEdit: TypeAlamat;
  setAlamatEdit: React.Dispatch<React.SetStateAction<TypeAlamat>>;
};

const FormDialogEdit = (props: Props) => {
  const { open, setOpen, tampil, item, alamatEdit, setAlamatEdit } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlamatEdit((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async () => {
    const alamatData: TypeAlamat = {
      nama: alamatEdit.nama,
      deskripsi:alamatEdit.deskripsi
    };
    await editAlamat(item.id, alamatData).then(() => {
      setOpen(false);
      tampil();
    });
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
      <DialogTitle>Edit Alamat</DialogTitle>
      <DialogContent>
        <DialogContentText gutterBottom>Wajib Diisi</DialogContentText>
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              label="Nama"
              name="nama"
              value={alamatEdit.nama}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Deskripsi"
              name="deskripsi"
              value={alamatEdit.deskripsi}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>cancel</Button>
        <Button variant="contained" onClick={handleClick}>
          submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default FormDialogEdit;
