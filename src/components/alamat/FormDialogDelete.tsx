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
import { deleteAlamat } from "../../services/api";
import { TypeAlamat } from "../../type/alamat";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tampil: () => Promise<void>;
  item: TypeAlamat;
};

const FormDialogDelete = (props: Props) => {
  const { open, setOpen, tampil, item } = props;

  const handleClick = async () => {
    await deleteAlamat(item.id).then(() => {
      setOpen(false);
      tampil();
    });
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
      <DialogTitle>Konfirmasi</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Apakah Anda Ingin menghapus alamat {item.nama}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Tidak</Button>
        <Button variant="contained" onClick={() => handleClick()}>
          ya
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default FormDialogDelete;
