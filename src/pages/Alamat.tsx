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
import Posts from "../components/alamat/Posts";
import FormDialogAdd from "../components/alamat/FormDialogAdd";
import { readAllAlamat } from "../services/api";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import { TypeAlamat } from "../type/alamat";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const Alamat = () => {
  const [daftar, setDaftar] = useState<TypeAlamat[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    getAlamat();
  }, []);

  const getAlamat = async () => {
    await readAllAlamat().then((response) => setDaftar(response.data));
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
              <Typography variant="h5">Alamat</Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                startIcon={<AddLocationAltIcon />}
                onClick={() => setOpen(true)}
              >
                New Alamat
              </Button>
            </Box>
          </Stack>
          <Posts items={daftar} tampil={getAlamat} />
        </Grid>
      </Grid>
      <FormDialogAdd open={open} setOpen={setOpen} tampil={getAlamat} />
    </Stack>
  );
};
export default Alamat;
