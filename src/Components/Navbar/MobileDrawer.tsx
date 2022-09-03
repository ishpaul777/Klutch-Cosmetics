import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  Drawer, Box, Typography, IconButton,
} from '@mui/material';

const MobileDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon sx={{ fontSize: 35 }} color="primary" />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width="75vw" textAlign="left" role="presentation">
          <IconButton onClick={() => setIsDrawerOpen(false)}>
            <CloseIcon sx={{ fontSize: 40 }} color="primary" />
          </IconButton>
          <Typography variant="h2">
            Hello
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
