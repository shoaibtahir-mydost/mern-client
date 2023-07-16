import { React, useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloseIcon from "@mui/icons-material/Close";
import MainListItems from "../Home/listItems";
import {
  Alert,
  Button,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Menu,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Tables from "../../components/Tables/Tables";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { getAllUsersFunc, uploadCSVFunc } from "../../services/Apis";
import { useForm } from "react-hook-form";
import VirtualizedList from "../../components/List/List";

// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchType, setSearchType] = useState("All");
  const [userData, setUserData] = useState([]);
  // const [searchUser, setSearchUser] = useState("");
  const [searchQuery, setSearchQuery] = useState();
  const { register, handleSubmit } = useForm();
  const [filterByGender, setFilterByGender] = useState("All");
  const [filterByCountry, setFilterByCountry] = useState("");
  const [snackbar, setSnackbar] = useState(false);
  const [appNumber, setAppNumber] = useState("");
  const [appYear, setAppYear] = useState("");
  const [appName, setAppName] = useState("");
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");

  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const response = await getAllUsersFunc(
        appNumber,
        appYear,
        appName,
        title,
        abstract
      );

      if (response.status === 200) {
        setUserData(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = async () => {
    getAllUsers();
  };

  // useEffect(() => {
  //   getAllUsers();
  // }, [searchUser, filterByGender, filterByCountry]);

  const handleCloseSnackbar = (event, reason) => {
    setSnackbar(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchType = (e) => {
    setSearchType(e.target.value);
    setAppNumber("");
    setAppYear("");
    setAppName("");
    setTitle("");
    setAbstract("");
    const textField = document.getElementById("outlined-controlled");
    textField.value = "";
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSearchQuery = (e) => {
    let searchValue = e.target.value;
    if (searchType === "appNum/appYear") {
      const value = searchValue.split("/");
      setAppNumber(value[0]);
      setAppYear(value[1]);
    } else if (searchType === "appName") {
      setAppName(searchValue);
    } else if (searchType === "title") {
      setTitle(searchValue);
    } else if (searchType === "abstract") {
      setAbstract(searchValue);
    }
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
        File Uploaded Successfully
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Note archived"
          action={action}
        />

        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Grid
                    container
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Grid item xs={6} component="form" autoComplete="off">
                      <FormControl fullWidth>
                        <TextField
                          id="outlined-controlled"
                          label="Type your search query"
                          onChange={handleSearchQuery}
                        />
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      component="form"
                      noValidate
                      autoComplete="off"
                    >
                      <FormControl fullWidth sx={{ marginBottom: 3 }}>
                        <InputLabel id="demo-simple-select-label">
                          Search by
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={searchType}
                          label="Search by"
                          onChange={handleSearchType}
                          defaultValue={"appName"}
                          /*
                          Application number
                          2. Applicant name
                          3. Key word in title and abstract columns
                          */
                        >
                          <MenuItem value={"appNum/appYear"}>
                            Application Number/Application Year
                          </MenuItem>
                          <MenuItem value={"appName"}>Applicant Name</MenuItem>
                          <MenuItem value={"title"}>Title</MenuItem>
                          <MenuItem value={"abstract"}>Abstract</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                        <Button
                          type="submit"
                          onClick={onSubmit}
                          variant="contained"
                        >
                          Search
                        </Button>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  {/* <Tables userData={userData} showAction={true} /> */}
                  <VirtualizedList userData={userData} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
