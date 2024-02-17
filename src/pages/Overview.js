import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button, Drawer, List, ListItem, ListItemText, makeStyles, Table, TableContainer, TableHead, TableBody,TextField, TableRow, TableCell, Paper, IconButton } from '@material-ui/core';
import {  Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import AccountCircleIcon from '@material-ui/icons//AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DoneIcon from '@material-ui/icons/Done';
import PowerIcon from '@material-ui/icons/Power';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import ExtensionIcon from '@material-ui/icons/Extension';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import FilterNoneOutlinedIcon from '@material-ui/icons/FilterNoneOutlined';

const DrawerWidth = 300;
const HeaderHeight = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#fafafa',
    height: '100vh', // Ensure full viewport height
    padding: theme.spacing(0), // Add padding as needed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#548a8f',
    height: HeaderHeight,
    top: 0,
    bottom: HeaderHeight,
  },
  tabsContainer: {
    position: 'absolute',
    bottom: 0,
    left: DrawerWidth,
  },

  VehicleNameContainer: {
    top: 10,
    position: 'absolute',
    left: DrawerWidth - 25,
  },

  drawer: {
    width: 0,
    flexShrink: 0,
  },

  drawerPaper: {
    width: DrawerWidth,
    marginTop: HeaderHeight,
    backgroundColor: '#fafafa',
    display: 'flex',
    border: 'none',
    flexDirection: 'flex-start',
  },

  listItem: {
    color: '#105e65',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '40px',
    top: 20
  },

  listItemText: {
    textTransform: 'uppercase',
    marginLeft: theme.spacing(1), // Add some space between icon and text
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: HeaderHeight,
    height: `calc(100vh - ${HeaderHeight}px)`,
    marginLeft: DrawerWidth,
    position: 'relative',
  },

  toolbar: {
    marginTop: 0,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 6,
    right: theme.spacing(1),
  },
  button: {
    borderRadius: '5px',
    marginRight: theme.spacing(2),
  },
  buyButton: {
    backgroundColor: '#105e65',
    color: 'white',
  },
  closeButton: {
    backgroundColor: '#a33e43',
    color: 'white',
  },
  tab: {
    backgroundColor: '#105e65',
    borderBottom: 'none',
    minWidth: 'auto',
    padding: '6px 28px',
    marginRight: theme.spacing(0),
    borderRadius: '15px 15px 0 0',
    '&:hover': {
      borderBottom: 'none',
    },
  },
  selectedTab: {
    backgroundColor: '#fafafa',
    color: 'black',
    borderBottom: 'none',
    border: '3px solid black',
    borderRadius: '15px',
    minWidth: 'auto',
    padding: '6px 28px',
    marginRight: theme.spacing(0),
    borderRadius: '15px 15px 0 0',
    '&:hover': {
      borderBottom: 'none',
    },
  },
  indicator: {
    display: 'none',
  },

  statusIcon: {
    marginLeft: theme.spacing(4),
    color: 'white',
    backgroundColor: '#141f34',
    borderRadius: '15px',
    padding: theme.spacing(0.5)
  },

  // Define status-specific background colors
  activePaid: {
    backgroundColor: '#2e7d32', // Dark green
    color: 'white',
    borderRadius: '15px',
    padding: theme.spacing(0.5),
  },
  closed: {
    backgroundColor: '#c62828', // Dark red
    color: 'white',
    borderRadius: '15px',
    padding: theme.spacing(0.5),
  },
  table: {
    borderCollapse: 'collapse',
    width: '10%',
  },
  tableRow: {
    '& > *': {
      borderBottom: 'none',
      padding: '8px', // Adjust the padding of table cells
    },
  },
  inputField: {
    border: 'none',
    outline: 'none',
    padding: '4px',
    width: '100%', // Adjust the width of input fields
  },

  cancelButton: {
    right: 10,
    color: 'red',
    borderColor: 'red'
  },
  nameLabel: {
    fontSize: '1.9rem', 
  },

}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState('Active');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBuyNow = () => {
    setStatus('ActivePaid');
  };

  const handleCloseOffer = () => {
    setStatus('Closed');
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.VehicleNameContainer}>
          <Typography variant="h4" style={{ marginRight: '0', }}>New vehicle contract</Typography>
          {status === 'ActivePaid' ? (
            <Typography variant="body2" className={`${classes.statusIcon} ${classes.activePaid}`}>&nbsp; ActivePaid &nbsp;</Typography>
          ) : status === 'Closed' ? (
            <Typography variant="body2" className={`${classes.statusIcon} ${classes.closed}`}> &nbsp; Closed &nbsp;</Typography>
          ) : (
            <Typography variant="body2" className={classes.statusIcon}> &nbsp; Active &nbsp; </Typography>
          )}

        </Toolbar>
        <Tabs value={value} onChange={handleChange} classes={{ indicator: classes.indicator }} className={classes.tabsContainer}>
          <Tab label="General" className={value === 0 ? classes.selectedTab : classes.tab} />
          <Tab label="Statistics" className={value === 1 ? classes.selectedTab : classes.tab} />
        </Tabs>
        <div className={classes.buttonContainer}>
          <Button className={`${classes.button} ${classes.buyButton}`} onClick={handleBuyNow}>
            &nbsp; <ShoppingCartIcon /> { }
            &nbsp; Buy now &nbsp;
          </Button>
          <Button className={`${classes.button} ${classes.closeButton}`} onClick={handleCloseOffer}>
            &nbsp; <CloseIcon /> { }
            &nbsp; Close Offer &nbsp;
          </Button>
        </div>
        <div >
          {value === 0 && <GeneralPage />}
          {value === 1 && <StatisticsPage />}
        </div>
        <div><NavigationMenu /></div>
      </AppBar>
    </div>
  );
};

const NavigationMenu = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
     <div className={classes.toolbar} />
      <List>
        <ListItem button component={Link} to="/Overview" className={classes.listItem}>
          <DashboardIcon />
          <ListItemText primary="Overview" className={classes.listItemText} />
        </ListItem>
        <ListItem button component={Link} to="/Customers" className={classes.listItem}>
          <PeopleIcon />
          <ListItemText primary="Customers" className={classes.listItemText} />
        </ListItem>
        <ListItem button component={Link} to="/Administration" className={classes.listItem}>
          <SettingsIcon />
          <ListItemText primary="Administration" className={classes.listItemText} />
        </ListItem>
      </List>
    </Drawer>
  );
};

const StatisticsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.content} style={{ backgroundColor: '#fafafa' }}>
      { }
    </div>
  );
};

const GeneralPage = () => {
  const classes = useStyles();
  const [editModeCustomer, setEditModeCustomer] = useState(false);
  const [editModeVehicle, setEditModeVehicle] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: 'Oleksandr',
    phoneNumber: '+000000',
    email: 'test@email.com',
    street: 'mazepy',
    city: 'Ivano-Frankivsk',
  });
  const [vehicleData, setVehicleData] = useState({
    CarPlate: 'AT0000AK',
    ID: 'AMLMEAF931LKS0000',
    Date: '24.02.2022',
    Model: 'Volvo V40',
    Fuel: 'Diesel',
    BatteryCap: '140 kW',
  });

  const handleEditCustomer = () => {
    setEditModeCustomer(!editModeCustomer);
  };

  const handleEditVehicle = () => {
    setEditModeVehicle(!editModeVehicle);
  };

  const handleCancelEditCustomer = () => {
    setEditModeCustomer(false);
    // Reset customer data to its original values
    setCustomerData({
      name: 'Oleksandr',
      phoneNumber: '+000000',
      email: 'test@email.com',
      street: 'mazepy',
      city: 'Ivano-Frankivsk',
    });
  };

  const handleCancelEditVehicle = () => {
    setEditModeVehicle(false);
    // Reset vehicle data to its original values
    setVehicleData({
      CarPlate: 'AT0000AK',
      ID: 'AMLMEAF931LKS0000',
      Date: '24.02.2022',
      Model: 'Volvo V40',
      Fuel: 'Diesel',
      BatteryCap: '140 kW',
    });
  };

  const handleChangeCustomer = (field, value) => {
    setCustomerData({ ...customerData, [field]: value });
  };

  const handleChangeVehicle = (field, value) => {
    setVehicleData({ ...vehicleData, [field]: value });
  };
  const contractDetailsData = {
    ID: '00001',
    durationDistance: '36 months / 140.000 km',
    startDate: '01/02/2024',
    endDate: '01/02/2027',
    totalPrice: '$3.555,00 $',
    customerPriceMonth: '98,75 $',
    odometerExpiration: '140.001 km',
    startMileage: '1 km',
  };

  return (
    <div className={classes.content}>
      {/* Customer Table */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '200px' }}>
        <div style={{  padding: '25px', position: 'relative' }}>
          <Typography variant="h6" gutterBottom style={{ color: 'grey' }}>
            &nbsp;&nbsp;Customer 
            <div style={{ position: 'absolute', top: 20, right: 35 }}>
              {editModeCustomer ? (
                <>
                  <Button variant="outlined" color="error" onClick={handleCancelEditCustomer} className={`${classes.editButton} ${classes.cancelButton}`}>
                    Cancel
                  </Button>
                  <IconButton onClick={handleEditCustomer} className={classes.editButton}>
                    <DoneIcon style={{ color: '#013220', margin: -10, padding: 0 }} />
                  </IconButton>
                </>
              ) : (
                <Button variant="outlined" color="primary" onClick={handleEditCustomer} className={classes.editButton}>
                  <EditIcon />&nbsp;Edit
                </Button>
              )}
            </div>
          </Typography>
          {/* Customer Table Content */}
          <TableContainer component={Paper} style={{ width: '100%', height: '100%' }}>
            <Table style={{ borderCollapse: 'collapse' }}>
              <TableBody>
                {Object.entries(customerData).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell style={{ borderBottom: 'none', padding: 15, display: 'flex', alignItems: 'center' }}>
                      {getIconByKey(key)} {/* Adding icon */}
                      <Typography variant={key === 'name' ? 'h6' : 'body1'} className={key === 'name' ? classes.nameLabel : null} style={{ margin: 0, marginLeft: '16px' }}>
                        {editModeCustomer ? (
                          <TextField
                            type="text"
                            value={value}
                            onChange={(e) => handleChangeCustomer(key, e.target.value)}
                            className={classes.inputField}
                          />
                        ) : (
                          value
                        )}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {/* Vehicle Table */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '200px' }}>
        <div style={{ padding: '25px', position: 'relative' }}>
          <Typography variant="h6" gutterBottom style={{ color: 'grey' }}>
            &nbsp;&nbsp;Vehicle 
            <div style={{ position: 'absolute', top: 20, right: 35 }}>
              {editModeVehicle ? (
                <>
                  <Button variant="outlined" color="error" onClick={handleCancelEditVehicle} className={`${classes.editButton} ${classes.cancelButton}`}>
                    Cancel
                  </Button>
                  <IconButton onClick={handleEditVehicle} className={classes.editButton}>
                    <DoneIcon style={{ color: '#013220', margin: -10, padding: 0 }} />
                  </IconButton>
                </>
              ) : (
                <Button variant="outlined" color="primary" onClick={handleEditVehicle} className={classes.editButton}>
                  <EditIcon />&nbsp;Edit
                </Button>
              )}
            </div>
          </Typography>
          {/* Vehicle Table Content */}
          <TableContainer component={Paper} style={{ width: '100%', height: '100%' }}>
            <Table style={{ borderCollapse: 'collapse' }}>
              <TableBody>
                {Object.entries(vehicleData).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell style={{ borderBottom: 'none', padding: 15, display: 'flex', alignItems: 'center' }}>
                      {getIconByKey(key)} {/* Adding icon */}
                      <Typography variant={key === 'CarPlate' ? 'h6' : 'body1'} className={key === 'CarPlate' ? classes.nameLabel : null} style={{ margin: 0, marginLeft: '16px' }}>
                        {editModeVehicle ? (
                          <TextField
                            type="text"
                            value={value}
                            onChange={(e) => handleChangeVehicle(key, e.target.value)}
                            className={classes.inputField}
                          />
                        ) : (
                          value
                        )}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}

              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
        {/* Contract Details Table */}
        <div style={{ marginTop: '435px' }}>
        <Typography variant="h6" gutterBottom style={{ color: 'grey' }}>
          &nbsp;&nbsp;Contract Details
        </Typography>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table>
            <TableBody>
              <TableRow> 
                <TableCell style={{padding:5, borderBottom: 'none' }}> 
                <Typography variant="h5" gutterBottom style={{  }}>
                <FilterNoneOutlinedIcon style={{color:'#105e65',fontSize: 30}}/> 
                New vehicle contract
        </Typography >
                </TableCell>
                <TableCell style={{ borderBottom: 'none' }}></TableCell>
              </TableRow>
              {/* Contract details data */}
              {Object.entries(contractDetailsData).map(([key, value]) => (
                <TableRow key={key} className={classes.noBorder}>
                  <TableCell style={{  color: 'grey', borderBottom: 'none', padding: 3}}>{key}</TableCell>
                  <TableCell style={{  borderBottom: 'none',padding: 3 }}>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const getIconByKey = (key) => {
  switch (key) {
    case 'name':
      return <AccountCircleIcon style={{ fontSize: 40, color: '#105e65', margin: 0, padding: 0 }} />;
    case 'phoneNumber':
      return <PhoneIcon style={{ color: '#105e65', margin: 0, padding: 0 }} />;
    case 'email':
      return <EmailIcon style={{ color: '#105e65', margin: 0, padding: 0 }} />;
    case 'street':
      return <LocationOnIcon style={{ color: '#105e65', margin: 0, padding: 0 }} />;
    case 'city':
      return <LocationCityIcon style={{ color: '#105e65', margin: 0, padding: 0 }} />;
    case 'BatteryCap':
      return <PowerIcon style={{ color: '#105e65', margin: 0, padding: 0 }} />;
    case 'Fuel':
      return <LocalGasStationIcon style={{ color: '#105e65', margin: 0, padding: 0 }} />;
    case 'Model':
      return <ExtensionIcon style={{ color: '#105e65', margin: 0, padding: 0 }} />;
    case 'Date':
       return <CalendarTodayIcon style={{ color: '#105e65', margin: 0, padding: 0 }} />;
    case 'ID':
       return <EditIcon style={{ color: '#105e65', margin: 0, padding: 0 }} />;
       case 'CarPlate':
        return <DirectionsCarIcon style={{ fontSize: 40,color: '#105e65', margin: 0, padding: 0 }} />;      
    default:
      return null;
  }
};

const MainPage = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Header />
      </div>
    );
  };
  
  export default MainPage;
