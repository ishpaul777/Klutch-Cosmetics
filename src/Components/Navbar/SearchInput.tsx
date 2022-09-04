import PropTypes from 'prop-types';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line react/prop-types
const SearchInput = ({ isMatchSmallScreen }:any) => {
  const Search = styled('div')(({ theme }) => ({
    // color: 'primary',
    height: '40px',
    position: 'relative',
    alignSelf: 'center',
    borderRadius: '5px',
    border: '1px solid grey',
    marginTop: isMatchSmallScreen && '1.2rem',
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(() => ({
    padding: '8px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // color: 'primary',
    '& .MuiInputBase-input': {
    //   color: 'black',
      padding: '8px',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      //   transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '18ch',
      },
    },
  }));
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon color="primary" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        color="primary"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

SearchInput.prototype = {
  isMatchSmallScreen: PropTypes.bool,
};
export default SearchInput;
