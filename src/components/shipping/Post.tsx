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
import {
  TypeShippingRates,
  TypeShippingRatesAdd,
  shippingRatesData,
} from "../../type/shipping";
import { TypeAlamat } from "../../type/alamat";
import {
  readOneShipping,
  editShipping,
  readAllAlamat,
} from "../../services/api";

type Props = {
  item: TypeShippingRates;
  tampil: () => Promise<void>;
};
const Post = (props: Props) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [shippingEdit, setShippingEdit] =
    useState<TypeShippingRatesAdd>(shippingRatesData);
  const [alamat, setAlamat] = useState<TypeAlamat[]>([]);
  const { item, tampil } = props;

  // const getAlamat = async () => {
  //   await readAllAlamat().then((response) => setAlamat(response.data));
  // };

  const clickEdit = async () => {
    setOpenEdit(true)
    await readAllAlamat().then((response) => setAlamat(response.data));
    await readOneShipping(item.id).then((response) => {
      console.log(response.data)
      setShippingEdit(() => {
        const { asal, tujuan, layanan, harga, estimati }: TypeShippingRatesAdd =
          response.data;
        return {
          asal: asal,
          tujuan: tujuan,
          layanan: layanan,
          harga: harga,
          estimati: estimati,
        };
      });
    });
  };

  return (
    <TableRow>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.relasi_asal.nama}</TableCell>
      <TableCell>{item.relasi_tujuan.nama}</TableCell>
      <TableCell>{item.layanan}</TableCell>
      <TableCell>{item.harga}</TableCell>
      <TableCell>{item.estimati}</TableCell>
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
        alamat={alamat}
        shippingEdit={shippingEdit}
        setShippingEdit={setShippingEdit}
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
