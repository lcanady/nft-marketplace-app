import { CameraAlt } from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const Create = () => {
  return (
    <Box>
      <Typography sx={{ mt: 12 }} variant="h4" gutterBottom component="div">
        Create an NFT
      </Typography>
      <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
        <Stack gap={2} sx={{ flexGrow: 1 }}>
          <TextField label="NFT Name" variant="filled" fullWidth required />
          <TextField
            label="NFT Description"
            variant="filled"
            fullWidth
            multiline
            rows={12}
            required
          />
          <TextField
            label="Price"
            variant="filled"
            required
            placeholder="0.0"
            type="number"
            helperText="The marketplace takes a 7.5% fee per sale"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">ETH</InputAdornment>
              ),
            }}
          />
          <Button fullWidth variant="contained">
            Create
          </Button>
        </Stack>
        <Paper
          sx={{
            width: "50vw",
            height: "50vh",
            maxWidth: "600px",
            maxHeight: "600px",
          }}
        >
          <CameraAlt />
        </Paper>
      </Stack>
    </Box>
  );
};

export default Create;
