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
import { TypeShippingRates } from "../../type/shipping";

type Props = {
  items: TypeShippingRates[];
  tampil: () => Promise<void>;
};

const Posts = (props: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Asal</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Tujuan</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Layanan</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Harga</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Estimati</TableCell>
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
