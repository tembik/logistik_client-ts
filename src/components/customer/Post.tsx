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
import { TypeCustomer, customerData } from "../../type/customer";
import { readOneCustomer, EditCustomer } from "../../services/api";

type Props = {
  item: TypeCustomer;
  tampil: () => Promise<void>;
};
const Post = (props: Props) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [customerEdit, setCustomerEdit] = useState<TypeCustomer>(customerData);
  const { item, tampil } = props;

  const clickEdit = async () => {
    setOpenEdit(true);
    await readOneCustomer(item.id).then((response: any) => {
      console.log(response.data);
      setCustomerEdit(() => {
        const { nama, email, no_telp, kota }: TypeCustomer = response.data;
        return {
          nama: nama,
          email: email,
          no_telp: no_telp,
          kota: kota,
        };
      });
    });
  };

  return (
    <TableRow>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.nama}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.no_telp}</TableCell>
      <TableCell>{item.kota}</TableCell>
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
        customerEdit={customerEdit}
        setCustomerEdit={setCustomerEdit}
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
