import { React, useEffect, useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MainListItems from './listItems';
import {
  Button,
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
  TextField,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Tables from '../../components/Tables/Tables';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { getAllUsersFunc, uploadCSVFunc } from '../../services/Apis';
import { useForm } from 'react-hook-form';

// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterType, setFilterType] = useState('All');
  const [userData, setUserData] = useState([]);
  const [searchUser, setSearchUser] = useState('');
  const { register, handleSubmit } = useForm();
  const [filterByGender, setFilterByGender] = useState('All');
  const [filterByCountry, setFilterByCountry] = useState('');

  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const response = await getAllUsersFunc(
        searchUser,
        filterByGender,
        filterByCountry
      );
      if (response.status === 200) {
        console.log(response);
        setUserData(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);

    const response = await uploadCSVFunc(formData);
    console.log('file --->', response);
  };

  useEffect(() => {
    getAllUsers();
  }, [searchUser, filterByGender, filterByCountry]);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterType = (e) => {
    setFilterType(e.target.value);
    if (e.target.value === 'All') {
      setFilterByGender('All');
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
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
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component='nav'>
            <MainListItems />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Grid
                    container
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Grid item xs={6} component='form' autoComplete='off'>
                      <FormControl fullWidth>
                        <TextField
                          id='outlined-controlled'
                          label='Search User by Name'
                          onChange={(event) => {
                            setSearchUser(event.target.value);
                          }}
                        />
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      component='form'
                      noValidate
                      autoComplete='off'
                    >
                      <FormControl fullWidth sx={{ marginBottom: 3 }}>
                        <InputLabel id='demo-simple-select-label'>
                          Filter by
                        </InputLabel>
                        <Select
                          labelId='demo-simple-select-label'
                          id='demo-simple-select'
                          value={filterType}
                          label='Filter by'
                          onChange={handleFilterType}
                        >
                          <MenuItem value={'All'}>All users</MenuItem>
                          <MenuItem value={'Gender'}>Gender</MenuItem>
                          <MenuItem value={'Country'}>Country</MenuItem>
                        </Select>
                      </FormControl>
                      {filterType == 'Gender' ? (
                        <FormControl sx={{ marginLeft: 1 }}>
                          <FormLabel id='demo-radio-buttons-group-label'>
                            Gender
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby='demo-radio-buttons-group-label'
                            defaultValue='female'
                            name='radio-buttons-group'
                            onChange={(e) => setFilterByGender(e.target.value)}
                          >
                            <FormControlLabel
                              value='Female'
                              control={<Radio />}
                              label='Female'
                            />
                            <FormControlLabel
                              value='Male'
                              control={<Radio />}
                              label='Male'
                            />
                          </RadioGroup>
                        </FormControl>
                      ) : filterType === 'Country' ? (
                        <FormControl fullWidth>
                          <TextField
                            id='outlined-controlled'
                            label='Type Country Name'
                            onChange={(event) => {
                              setFilterByCountry(event.target.value);
                            }}
                          />
                        </FormControl>
                      ) : (
                        ''
                      )}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label for='file-upload' class='custom-file-upload'></label>
                    <input id='file-upload' type='file' {...register('file')} />
                    <Button type='submit' variant='contained' width={'50%'}>
                      Upload
                    </Button>
                  </form>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Tables userData={userData} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
