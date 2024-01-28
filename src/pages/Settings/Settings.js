import React from "react";
import Box from "@mui/material/Box";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const Settings = () => {
  const [showCPassword, setShowCPassword] = useState(false);
  const handleClickShowCPassword = () => setShowCPassword(!showCPassword);
  const handleMouseDownCPassword = () => setShowCPassword(!showCPassword);

  const [showNPassword, setShowNPassword] = useState(false);
  const handleClickShowNPassword = () => setShowNPassword(!showNPassword);
  const handleMouseDownNPassword = () => setShowNPassword(!showNPassword);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword); 

  const buttonStyles = {
    borderRadius: "10px",
    backgroundColor: "var(--orange, #F49C31)",
    boxShadow: "0px 6px 10px 0px rgba(71, 44, 11, 0.14)",
    border: "1px solid var(--stroke, #D9D9D9)",
    display: "flex",
    width: "235px",
    padding: "16px 32px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    textTransform: "none",
    color: "var(--white, var(--white, #FFF));",
    fontfamily: "Montserrat",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    centerRipple: true,
    "&:hover": {
      backgroundColor: "var(--orange, #F49C31)",
    },
  };
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    marginLeft: "345px",
    padding: "50px",
    flexGrow: 1,
  };
  const titleStyle = {
    // marginLeft: '50px',
    // marginTop: '50px',
    color: "var(--orange, #F49C31)",
    fontfamily: "Montserrat",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  };
  const allcards = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "30px",
  };
  const cardContainer = {
    padding: "30px",
    display: "flex",
    width: "100%",
    marginRight:"15px",
    maxWidth: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "50px",
    borderRadius: "24px",
    border: " 1px solid #E4E4E4",
    background: "#FDFDFF",
    boxShadow: 3,
  };
  const cardTitel = {
    color: "var(--blue, #202A39)",
    fontFamily: "Montserrat",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  };
  return (
    <Box sx={pageStyle}>
      <Box sx={titleStyle}>Settings</Box>
      <Box sx={allcards}>
        <Box sx={cardContainer}>
          <Box item sx={cardTitel}>
            Change Password
          </Box>
          <TextField
            required
            fullWidth
            color="warning"
            label="Current Password"
            id="CurrentPassword"
            InputLabelProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                shrink: true,
                padding: "5px",
              },
            }}
            InputProps={{
              htmlFor: "outlined-adornment-password",
              id: "outlined-adornment-password",
              type: showCPassword ? "text" : "password",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      marginRight: "5px",
                    }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowCPassword}
                    onMouseDown={handleMouseDownCPassword}
                    edge="end"
                  >
                    {showCPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                padding: "5px",
                borderRadius: "10px",
              },
            }}
          />
          <TextField
            required
            fullWidth
            color="warning"
            label="New Password"
            id="New Password"
            InputLabelProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                shrink: true,
                padding: "5px",
              },
            }}
            InputProps={{
              htmlFor: "outlined-adornment-password",
              id: "outlined-adornment-password",
              type: showNPassword ? "text" : "password",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      marginRight: "5px",
                    }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNPassword}
                    onMouseDown={handleMouseDownNPassword}
                    edge="end"
                  >
                    {showNPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                padding: "5px",
                borderRadius: "10px",
              },
            }}
          />
          <TextField
            InputLabelProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                shrink: true,
                padding: "5px",
              },
            }}
            InputProps={{
              htmlFor: "outlined-adornment-password",
              id: "outlined-adornment-password",
              type: showPassword ? "text" : "password",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      marginRight: "5px",
                    }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                padding: "5px",
                borderRadius: "10px",
              },
            }}
            required
            fullWidth
            color="warning"
            label="Confirm Password"
            id="Confirm"
          />
          <Box item>
            <CommonButton
              variant="contained"
              Color="var(--orange, #F49C31)"
              sx={buttonStyles}
            >
              Change Password
            </CommonButton>
          </Box>
        </Box>
        <Box sx={cardContainer}>
          <Box item sx={cardTitel}>
            Change Password
          </Box>
          <TextField
            required
            fullWidth
            color="warning"
            label="Name"
            id="Name"
            InputLabelProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                shrink: true,
                padding: "5px",
              },
            }}
            InputProps={{
              sx: {
                padding: "5px",
                borderRadius: "10px",
              },
            }}
          />
          <TextField
            required
            fullWidth
            type="email"
            color="warning"
            label="E-mail"
            id="E-mail"
            InputLabelProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                shrink: true,
                padding: "5px",
              },
            }}
            InputProps={{
              sx: {
                padding: "5px",
                borderRadius: "10px",
              },
            }}
            
          />
          <TextField
            required
            fullWidth
            color="warning"
            label="Phone Number"
            id="Phone Number"
            InputLabelProps={{
              sx: {
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                shrink: true,
                padding: "5px",
              },
            }}
            InputProps={{
              sx: {
                padding: "5px",
                borderRadius: "10px",
              },
            }}
          />
          <Box item>
            <CommonButton
              variant="contained"
              Color="var(--orange, #F49C31)"
              sx={buttonStyles}
              type="submit"
            >
              Change Details
            </CommonButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
