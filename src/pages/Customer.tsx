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
import { useEffect, useState } from "react";
import Posts from "../components/customer/Posts";
import FormDialogAdd from "../components/customer/FormDialogAdd";
import { readAllCustomer } from "../services/api";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import { TypeCustomer } from "../type/customer";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Customer = () => {
  const [daftar, setDaftar] = useState<TypeCustomer[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = async () => {
    await readAllCustomer().then((response) => setDaftar(response.data));
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
              <Typography variant="h5">Customers</Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                startIcon={<PersonAddIcon />}
                onClick={() => setOpen(true)}
              >
                New Customers
              </Button>
            </Box>
          </Stack>
          <Posts items={daftar} tampil={getCustomer} />
        </Grid>
      </Grid>
      <FormDialogAdd open={open} setOpen={setOpen} tampil={getCustomer} />
    </Stack>
  );
};
export default Customer;
