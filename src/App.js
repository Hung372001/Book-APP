import Heder from "./Components/Heder";
import Header_NavBar from "./Components/Heder_NavBar/Header_NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#f75454",
      },
    },
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Header_NavBar />
        <Heder />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
