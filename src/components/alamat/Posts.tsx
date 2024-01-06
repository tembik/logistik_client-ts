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
import Post from "./Post";
import { TypeAlamat } from "../../type/alamat";

type Props = {
  items: TypeAlamat[];
  tampil: () => Promise<void>;
};

const Posts = (props: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Nama</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Deskripsi</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((item) => {
            return <Post key={item.id} item={item} tampil={props.tampil} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Posts;
