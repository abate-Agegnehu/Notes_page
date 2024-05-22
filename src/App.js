import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./components/Layout";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
