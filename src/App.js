import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Create from "./pages/Create";
import Home from "./pages/Home";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navigation />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Box>
  );
}

export default App;
