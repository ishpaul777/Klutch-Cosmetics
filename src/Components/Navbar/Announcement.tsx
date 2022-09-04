import { AppBar, Toolbar, Typography } from '@mui/material';

const Announcement = () => (
  <div>
    <AppBar
      position="static"
      color="secondary"
      elevation={0}
      sx={{
      }}
    >
      <Toolbar variant="dense" sx={{ alignItems: 'center', justifyContent: 'center', minHeight: '35px' }}>
        <Typography variant="subtitle1">
          Free Standard Shipping on orders over $99.99
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Announcement;
