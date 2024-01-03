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
  MenuItem,
} from "@mui/material";
import { useState, useEffect, ChangeEvent } from "react";
import { readOneCustomer, EditCustomer } from "../../services/api";
import { TypeCustomer, customerData } from "../../type/customer";
import {
  readOneShipping,
  editShipping,
  readAllAlamat,
} from "../../services/api";

import { TypeAlamat } from "../../type/alamat";
import {
  TypeShippingRates,
  TypeShippingRatesAdd,
  shippingRatesData,
} from "../../type/shipping";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tampil: () => Promise<void>;
  item: TypeShippingRates;
  alamat: TypeAlamat[]
  shippingEdit: TypeShippingRatesAdd
  setShippingEdit: React.Dispatch<React.SetStateAction<TypeShippingRatesAdd>>
};
const FormDialogEdit = (props: Props) => {
  const { open, setOpen, tampil, item, alamat ,shippingEdit, setShippingEdit } = props;
  // const [shippingEdit, setShippingEdit] =
    // useState<TypeShippingRatesAdd>(shippingRatesData);
  // const [alamat, setAlamat] = useState<TypeAlamat[]>([]);

  // useEffect(() => {
  //   getAlamat();
  // }, []);

  // const getAlamat = async () => {
  //   await readAllAlamat().then((response) => setAlamat(response.data));
  // };
  // useEffect(() => {
  //   getShipping();
  // }, []);

  // const getShipping = async () => {
  //   await readOneShipping(item.id).then((response) => {
  //     setShippingEdit(() => {
  //       const { asal, tujuan, layanan, harga, estimati }: TypeShippingRatesAdd =
  //         response.data;
  //       return {
  //         asal: asal,
  //         tujuan: tujuan,
  //         layanan: layanan,
  //         harga: harga,
  //         estimati: estimati,
  //       };
  //     });
  //   });
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShippingEdit((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async () => {
    const shippingData: TypeShippingRatesAdd = {
      asal:shippingEdit.asal,
      tujuan:shippingEdit.tujuan,
      layanan:shippingEdit.layanan,
      harga:shippingEdit.harga,
      estimati:shippingEdit.estimati
    };
    await editShipping(item.id, shippingData).then(() => {
      setOpen(false);
      tampil();
    });
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
      <DialogTitle>Edit Ongkos Kirim</DialogTitle>
      <DialogContent>
        <DialogContentText gutterBottom>Wajib Diisi</DialogContentText>
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              select
              label="Pilih Alamat Asal"
              name="asal"
              sx={{ width: 200 }}
              value={shippingEdit.asal}
              onChange={handleChange}
            >
              {alamat.map((item) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
                    {item.nama}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>

          <Grid item>
            <TextField
              select
              label="Pilih Alamat Tujuan"
              name="tujuan"
              sx={{ width: 200 }}
              value={shippingEdit.tujuan}
              onChange={handleChange}
            >
              {alamat.map((item) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
                    {item.nama}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Layanan"
              name="layanan"
              value={shippingEdit.layanan}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField label="Harga" name="harga" value={shippingEdit.harga} onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField
              label="Estimati"
              name="estimati"
              value={shippingEdit.estimati}
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
