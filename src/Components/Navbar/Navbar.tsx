import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Stack, Box, useTheme, useMediaQuery,
} from '@mui/material';
import Tab from '@mui/material/Tab';
import { TabContext, TabList } from '@mui/lab';
import SearchInput from './SearchInput';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
  const theme = useTheme();
  const isMatchSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  // States
  const [currentPage, setCurrentPage] = useState('0');
  const [currentProductPage, setcurrentProductPage] = useState('1');
  const handlePageChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentPage(newValue);
    setcurrentProductPage('0');
  };
  const handleProductPageChange = (event: React.SyntheticEvent, newValue: string) => {
    setcurrentProductPage(newValue);
    setCurrentPage('0');
  };
  const pages = ['About', 'Cart', 'Login'];
  const productCategories = ['Acne', 'Sun', 'Ezcema', 'Psoriasis', 'Vitiligio'];
  return (
    <Box component="header" sx={{ padding: isMatchSmallScreen ? '.5rem' : '1.5rem 1.8rem' }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
        <Toolbar sx={{ flexWrap: 'wrap', flex: 1, justifyContent: 'space-between' }}>
          {
            isMatchSmallScreen
              ? (
                <>
                  <MobileDrawer />
                  <Typography
                    variant="h4"
                    component="a"
                    sx={{
                      textAlign: 'left',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '2rem',
                      flexGrow: 1,
                      marginLeft: '1rem',
                      width: '20%',
                      flex: 1,
                    }}
                  >
                    klutch
                  </Typography>
                  <SearchInput isMatchSmallScreen={isMatchSmallScreen} />
                </>
              )
              : (
                <>
                  <Typography
                    variant="h4"
                    component="a"
                    sx={{
                      textAlign: 'left',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '2rem',
                      flexGrow: 1,
                      width: '20%',
                      flex: 1,
                    }}
                  >
                    klutch
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <TabContext value={currentPage}>
                      <Box sx={{ p: 1, m: 0 }}>
                        <TabList onChange={handlePageChange} aria-label="lab API tabs example">
                          { pages.map((page) => (
                            <Tab
                              key={page}
                              color="primary"
                              label={page}
                              value={`${pages.indexOf(page) + 1}`}
                            />
                          ))}
                        </TabList>
                      </Box>
                    </TabContext>
                    <SearchInput />
                  </Stack>
                  <Stack direction="row" spacing={6} sx={{ width: '100%', justifyContent: 'center', p: 0 }}>
                    <TabContext value={currentProductPage}>
                      <Box sx={{ p: 0, m: 0 }}>
                        <TabList onChange={handleProductPageChange} aria-label="lab API tabs example">
                          {productCategories.map((category) => (
                            <Tab key={category} color="primary" label={category} value={`${productCategories.indexOf(category) + 1}`} sx={{ p: 0, m: 0 }} />
                          ))}
                        </TabList>
                      </Box>
                    </TabContext>
                  </Stack>
                </>
              )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
