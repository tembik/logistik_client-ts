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
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState, useEffect, ChangeEvent } from "react";
import { postShipping, readAllAlamat } from "../../services/api";
import { TypeShippingRatesAdd, shippingRatesData } from "../../type/shipping";
import { TypeAlamat, alamatData } from "../../type/alamat";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tampil: () => Promise<void>;
};

const FormDialogAdd = (props: Props) => {
  const { open, setOpen, tampil } = props;
  const [alamat, setAlamat] = useState<TypeAlamat[]>([]);
  const [shippingAdd, setShippingAdd] =
    useState<TypeShippingRatesAdd>(shippingRatesData);

  useEffect(() => {
    getAlamat();
  }, []);

  const getAlamat = async () => {
    await readAllAlamat().then((response) => setAlamat(response.data));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setShippingAdd((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async () => {
    const userData: TypeShippingRatesAdd = {
      asal: shippingAdd.asal,
      tujuan: shippingAdd.tujuan,
      layanan: shippingAdd.layanan,
      harga: shippingAdd.harga,
      estimati: shippingAdd.estimati,
    };
    await postShipping(userData).then(() => {
      setOpen(false);
      tampil();
    });
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
      <DialogTitle>Buat Ongkos Kirim</DialogTitle>
      <DialogContent>
        <DialogContentText gutterBottom>Wajib Diisi</DialogContentText>
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              select
              label="Pilih Alamat Asal"
              name="asal"
              onChange={handleChange}
              sx={{ width: 200 }}
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
              onChange={handleChange}
              sx={{ width: 200 }}
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
            <TextField label="Layanan" name="layanan" onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField label="Harga" name="harga" onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField label="Estimati" name="estimati" onChange={handleChange} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default FormDialogAdd;
