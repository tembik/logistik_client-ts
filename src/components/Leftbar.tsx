import { Stack, Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PersonIcon from "@mui/icons-material/Person";
import PaidIcon from "@mui/icons-material/Paid";
import SendIcon from "@mui/icons-material/Send";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Leftbar = () => {
  return (
    <Grid item xs={3}>
      <Stack spacing={2} p={3} direction="column">
        <Stack>
          <Box>
            <Link to="/">
              <Button variant="text" startIcon={<HomeIcon />}>
                Dashboard
              </Button>
            </Link>
          </Box>
        </Stack>
        <Stack direction="column">
          <Box>
            <Link to="/customer">
              <Button variant="text" startIcon={<PersonIcon />}>
                Customer
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to="/shipping">
              <Button variant="text" startIcon={<PaidIcon />}>
                Ongkos Kirim
              </Button>
            </Link>
          </Box>
          <Box>
            <Button variant="text" startIcon={<SendIcon />}>
              Pengiriman
            </Button>
          </Box>
          <Box>
            <Button variant="text" startIcon={<TrendingUpIcon />}>
              Lacak Resi
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Grid>
  );
};
export default Leftbar;
