import CommonButton from './common/CommonButton/CommonButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
function Header() {
const title={
  color: "var(--blue, #202A39)",
  fontfamily: "Montserrat",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
}
const head ={
  display: "flex",
  padding:  "30px 50px",
  justifyContent: "space-between",
  alignItems: "center",
}
const buttonLStyles = {
  flex: "end",
  fullWidth: true,
  border: "0px",
  opacity: "1",
  borderRadius: "15px",
  gap: "6px",
  color: "grey;",
  fontfamily: "Montserrat",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  '&:hover': {
    border: "0px",
    backgroundColor: "var(--orange, #F49C31)",
  },
  }

return (
<Box sx={{
  marginLeft:"17.5%",
  marginRight:"-1%",
  padding: "0px",
}
}>
  <Box container 
  sx={head}>
  <Box sx={title}> Visitor Pass Managment</Box>
    <CommonButton
      variant="outlined"
      sx= {buttonLStyles}
      startIcon={<LogoutIcon />}
      disableRipple
      disableFocusRipple
      disableElevation
      >
        Logout
    </CommonButton>
  </Box>
  <Divider />
</Box> 
  );
}

export default Header;




