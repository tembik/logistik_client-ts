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
import { useState, useEffect } from "react";
import { readAllShipping } from "../services/api";
import { TypeShippingRates } from "../type/shipping";
import FormDialogAdd from "../components/shipping/FormDialogAdd";
import Posts from "../components/shipping/Posts";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import PaidIcon from "@mui/icons-material/Paid";

const ShippingRates = () => {
  const [daftar, setDaftar] = useState<TypeShippingRates[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    getShipping();
  }, []);

  const getShipping = async () => {
    await readAllShipping().then((response) => setDaftar(response.data));
  };

  return (
    <Stack>
      <Navbar />
      <Grid container>
        <Leftbar />
        <Grid item xs={9} p={3} bgcolor="#eeeeee">
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", marginBottom: "30px" }}
          >
            <Box>
              <Typography variant="h5">Shipping Rates</Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                startIcon={<PaidIcon />}
                onClick={() => setOpen(true)}
              >
                New Shipping Rates
              </Button>
            </Box>
          </Stack>
          <Posts items={daftar} tampil={getShipping} />
        </Grid>
      </Grid>
      <FormDialogAdd open={open} setOpen={setOpen} tampil={getShipping} />
    </Stack>
  );
};
export default ShippingRates;
