export const navbarlayout = {
  drawer: {
    '& .MuiDrawer-paper': {
      width: '350px',
      height: '1080px',
      padding: '24.5px 50px 24.5px 40px',
      gap: '65px',
      boxSizing: 'border-box',
      backgroundColor: '#202A39',
      color: 'rgba(255, 255, 255, 0.7)',
      alignitems: 'flex-start',
      display: 'flex',
      flexdirection: 'column',

  },
  
  '& .Mui-selected': {
    borderradius:' 15px',
    background: 'var(--orange, #F49C31)',
    display: 'flex',
    padding: '10px 16px',
    alignitems: 'center',
    gap: '8px',
    alignself: 'stretch',
  },
  
  flexshrink: '0',
  },

  title:{
    display: 'flex',
    padding: '0px 20px',
    justifycontent:' center',
    alignitems: 'flex-end',
    gap: '20px',
  },

  logo:{
    width: '120px',
    height: '60px',
    viewBox: '0 0 120 61',
  },

  item: {
    width:'268px',
    height:'52px',
    display: 'flex',
    padding:' 10px 16px',
    alignitems:' center',
    gap: '8px',
    alignself: 'stretch',
    borderradius:' 15px',
  },
  icons: {
    width: '32px',
    height: '32px',
    viewBox: '0 0 32 33',
    // color: 'rgba(255, 255, 255, 0.7)!important',
    // marginLeft: '20px',
},
  text: {
    '& span': {
      flex: '1 0 0',
      color: 'var(--white, var(--white, #FFF))',
      fontfamily:' Montserrat',
      fontsize: '18px',
      fontstyle: 'normal',
      fontweight: '600',
      lineheight: 'normal',
      marginLeft: '-10px',
      // fontWeight: '600',
      // fontSize: '16px',
    }
}

}