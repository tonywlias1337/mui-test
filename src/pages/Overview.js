import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button, Drawer, List, ListItem, ListItemText, makeStyles, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, IconButton } from '@material-ui/core';
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

const DrawerWidth = 300;
const HeaderHeight = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    TableContent: {
        position: 'absolute',
        top: '0',
        left: '0',
        padding: theme.spacing(3),
        backgroundColor: '#fafafa',
        width: 'calc(100% - 300px)', // Adjust based on drawer width
        height: '100%',
      },
      tableContainer: {
        width: '50px',
      },
  },
  inputField: {
    border: 'none',
    outline: 'none',
    padding: '4px',
    width: '100%', // Adjust the width of input fields
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
    const [editMode, setEditMode] = useState(false);
    const [customerData, setCustomerData] = useState({
      name: 'Oleksandr',
      phoneNumber: '+000000',
      email: 'test@email.com',
      street: 'mazepy',
      city: 'Ivano-Frankivsk'
    });
  
    const handleEdit = () => {
      setEditMode(!editMode);
    };
  
    const handleChange = (field, value) => {
      setCustomerData({ ...customerData, [field]: value });
    };
  
    return (
      <div className={classes.content} style={{ backgroundColor: '#fafafa', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 10, left: 0, width: '1000px', height: '200px' }}>
        <div style={{ backgroundColor: '#fafafa', padding: '25px', position: 'relative' }}>
          <Typography variant="h6" gutterBottom style={{ color: 'gray' }}>
          &nbsp;&nbsp;Customer 
            <div style={{ position: 'absolute', top: 20, right: 35 }}>
              {editMode ? (
                <IconButton onClick={handleEdit} className={classes.editButton}>
                  {editMode ? (
                    <EditIcon style={{ margin: 0, padding: 0 }} />
                  ) : (
                    <>
                      <EditIcon style={{ margin: 0, padding: 0 }} />
                    </>
                  )}
                </IconButton>
              ) : (
                <Button variant="outlined" color="primary" onClick={handleEdit} className={classes.editButton}>
               <EditIcon/>&nbsp;Edit
                </Button>
              )}
            </div>
          </Typography>
          <TableContainer component={Paper} style={{ width: '100%', height: '100%' }}>
            <Table style={{ borderCollapse: 'collapse' }}>
              <TableBody>
                <TableRow>
                  <TableCell style={{ borderBottom: 'none', padding: 15, display: 'flex', alignItems: 'center' }}>
                    <AccountCircleIcon style={{fontSize: 45, color:'#105e65', margin: 0, padding: 0 }} />
                    <Typography variant="body1" style={{ fontSize: '32px',margin: 0, marginLeft: '8px' }}>{editMode ? (
                      <input
                        type="text"
                        value={customerData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                    ) : (
                      customerData.name
                    )}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ borderBottom: 'none', padding: 15, display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon style={{ color:'#105e65', margin: 0, padding: 0 }} />
                    <Typography variant="body1" style={{ margin: 0, marginLeft: '8px' }}>{editMode ? (
                      <input
                        type="text"
                        value={customerData.phoneNumber}
                        onChange={(e) => handleChange('phoneNumber', e.target.value)}
                      />
                    ) : (
                      customerData.phoneNumber
                    )}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ borderBottom: 'none', padding: 15, display: 'flex', alignItems: 'center' }}>
                    <EmailIcon style={{color:'#105e65', margin: 0, padding: 0 }} />
                    <Typography variant="body1" style={{ margin: 0, marginLeft: '8px' }}>{editMode ? (
                      <input
                        type="text"
                        value={customerData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    ) : (
                      customerData.email
                    )}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ borderBottom: 'none', padding: 15, display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon style={{color:'#105e65', margin: 0, padding: 0 }} />
                    <Typography variant="body1" style={{ margin: 0, marginLeft: '8px' }}>{editMode ? (
                      <input
                        type="text"
                        value={customerData.street}
                        onChange={(e) => handleChange('street', e.target.value)}
                      />
                    ) : (
                      customerData.street
                    )}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ borderBottom: 'none', padding: 15, display: 'flex', alignItems: 'center' }}>
                    <LocationCityIcon style={{color:'#105e65', margin: 0, padding: 0 }} />
                    <Typography variant="body1" style={{ margin: 0, marginLeft: '8px' }}>{editMode ? (
                      <input
                        type="text"
                        value={customerData.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                      />
                    ) : (
                      customerData.city
                    )}</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
    );
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
