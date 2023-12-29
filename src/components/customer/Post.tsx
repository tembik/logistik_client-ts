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
import {useState} from 'react'
import FormDialogEdit from "./FormDialogEdit";
import FormDialogDelete from "./FormDialogDelete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TypeCustomer } from "../../type/customer";

type Props = {
  item: TypeCustomer;
  tampil: () => Promise<void>;
};
const Post = (props: Props) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false)
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const { item, tampil } = props;
  return (
    <TableRow>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.nama}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.no_telp}</TableCell>
      <TableCell>{item.kota}</TableCell>
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
