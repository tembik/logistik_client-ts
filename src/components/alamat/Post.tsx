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
import { TypeAlamat, alamatData } from "../../type/alamat";
import { readOneAlamat } from "../../services/api";

type Props = {
  item: TypeAlamat;
  tampil: () => Promise<void>;
};
const Post = (props: Props) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [alamatEdit, setAlamatEdit] = useState<TypeAlamat>(alamatData);
  const { item, tampil } = props;

  const clickEdit = async () => {
    setOpenEdit(true);
    await readOneAlamat(item.id).then((response) => {
      console.log(response.data);
      setAlamatEdit(() => {
        const { nama, deskripsi }: TypeAlamat = response.data;
        return {
          nama: nama,
          deskripsi:deskripsi
        };
      });
    });
  };

  return (
    <TableRow>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.nama}</TableCell>
      <TableCell>{item.deskripsi}</TableCell>
      <TableCell>
        <Button
          size="small"
          color="success"
          startIcon={<EditIcon />}
          onClick={clickEdit}
        >
          Edit
        </Button>{" "}
        |{" "}
        <Button
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => setOpenDelete(true)}
        >
          Delete
        </Button>
      </TableCell>
      <FormDialogEdit
        open={openEdit}
        setOpen={setOpenEdit}
        item={item}
        tampil={tampil}
        alamatEdit={alamatEdit}
        setAlamatEdit={setAlamatEdit}
      />
      <FormDialogDelete
        open={openDelete}
        setOpen={setOpenDelete}
        item={item}
        tampil={tampil}
      />
    </TableRow>
  );
};
export default Post;
