import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import SRLink from '../../assets/Icons/SRLink';
import CPManually from '../../assets/Icons/CPManually';
const Create= () => {

  const buttonStyles = {
    borderRadius: "10px",
    backgroundColor: "var(--orange, #F49C31)",
    boxShadow: "0px 6px 10px 0px rgba(71, 44, 11, 0.14)",
    border: "1px solid var(--stroke, #D9D9D9)",
    display: "flex",
    width: "250px",
    padding: "16px 32px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    textTransform: 'none',
    color: "var(--white, var(--white, #FFF));",
    fontfamily: "Montserrat",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    centerRipple:true,
    '&:hover': {
      backgroundColor: "var(--orange, #F49C31)",
    },
  }

  const cardGrid={
    // gridTemplateColumns: ['1fr', '1fr'],
    // gap: "30px",
  }
  const cardStyle ={
    display: "flex",
    width: "Auto",
    padding: "30px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    borderRadius: "24px",
    border:" 1px solid #E4E4E4",
    background:"#FBFDFF",
  }
  const cardText ={
    color: "var(--blue, #202A39)",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    maxWidth: "660px",
  }

  const pageStyle={
    display: "flex",
    flexDirection:"column",
    gap: "30px",
    marginLeft:"345px",
    padding:"50px",
    flexGrow: 1 
  }

  const titleStyle = {
      // marginLeft: '50px',
      // marginTop: '50px',
      color: "var(--orange, #F49C31)",
      fontfamily: "Montserrat",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
  }

  const allcards={
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "30px",
  }

  const cardContainer={
    padding: "30px",
    display: "flex",
    width: "100%",
    marginRight:"15px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    borderRadius: "24px",
    border:" 1px solid #E4E4E4",
    background:"#FBFDFF",
    boxShadow: 3,
  }

  const cardTextF ={
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  }

  const cardTitel ={
    color: "var(--blue, #202A39)",
    fontFamily: "Montserrat",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  }

  return (


  <Box sx={pageStyle}>
    
    <Box sx={titleStyle}> 
      Create Pass
    </Box>

    <Box sx={allcards}>
      <Box sx={
        cardContainer
      }>
        <Box >
          <CPManually />
        </Box>
        <Box item sx={cardTextF}>
          <Box item sx={cardTitel}>
            Create Pass Manually
          </Box>
          <Box item sx={cardText}>
            <Typography>Design custom access tickets with personalized details and security features. Print, distribute, and implement verification for effective use.</Typography>
          </Box> 
        </Box>
        <Box item >
          <CommonButton
            variant="contained"
            Color= "var(--orange, #F49C31)"
            sx= {buttonStyles}
            >
              Continue
          </CommonButton>
        </Box>
      </Box>

      <Box sx={
        cardContainer
      }>
        <Box >
          <SRLink />
        </Box>
        <Box item sx={cardTextF}>
          <Box item sx={cardTitel}>
            Self Registration Link
          </Box>
          <Box item sx={cardText}>
            <Typography>Streamline user sign-up with a simple, secure online link. Facilitates easy access and registration for events, services, or platforms.</Typography>
          </Box> 
        </Box>
        <Box item >
          <CommonButton
            variant="contained"
            Color= "var(--orange, #F49C31)"
            sx= {buttonStyles}
            >
              Continue
          </CommonButton>
        </Box>
      </Box>
    </Box>
  </Box>
);
}

export default Create;