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
import { useState } from "react";
import FormDialogEdit from "./FormDialogEdit";
import FormDialogDelete from "./FormDialogDelete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TypeShippingRates } from "../../type/shipping";

type Props = {
  item: TypeShippingRates;
  tampil: () => Promise<void>;
};
const Post = (props: Props) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { item, tampil } = props;
  return (
    <TableRow>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.relasi_asal.nama}</TableCell>
      <TableCell>{item.relasi_tujuan.nama}</TableCell>
      <TableCell>{item.layanan}</TableCell>
      <TableCell>{item.harga}</TableCell>
      <TableCell>{item.estimati}</TableCell>
      <TableCell>
        <Button size="small" color="success" startIcon={<EditIcon />} onClick={() => setOpenEdit(true)}>
        Edit
        </Button>{" "}
        |{" "}
        <Button size="small" color="error" startIcon={<DeleteIcon />} onClick={() => setOpenDelete(true)}>
        Delete
        </Button>
      </TableCell>
      <FormDialogEdit open={openEdit} setOpen={setOpenEdit} item={item} tampil={tampil} />
      <FormDialogDelete open={openDelete} setOpen={setOpenDelete} item={item} tampil={tampil}/>
    </TableRow>
  );
};
export default Post;
