import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useMoralis } from "react-moralis";

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

const Navigation = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const history = useNavigate();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          area-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Example NFT Marketplace
        </Typography>
        {isAuthenticated ? (
          <>
            <Button size="large" color="inherit">
              Explore
            </Button>

            <Button
              size="large"
              color="inherit"
              onClick={() => history("/create")}
            >
              Create
            </Button>

            <Avatar
              sx={{ marginLeft: "16px" }}
              src={`https://api.kwelo.com/v1/media/identicon/${user.attributes.ethAddress}`}
            />
          </>
        ) : (
          <Button color="inherit" onClick={() => authenticate()}>
            Connect Wallet
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
