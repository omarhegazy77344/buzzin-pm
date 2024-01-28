export const NavbarLayout = {
drawer: {   
        width: "18.22%",
        backgroundColor: 'transparent',
        flexShrink: 0, 
        '& .MuiDrawer-paperAnchorDockedLeft': {
          backgroundColor: '#101F33',
          width: "18.22%",
          boxSizing: 'border-box',
          color: 'rgba(255, 255, 255, 0.7)',
        },
},
icons: {
    '& .MuiSvgIcon-root': {
      fontSize: 35,
    },
},
text: {
        marginLeft:"-14px",
        fontWeight: '600',
        fontSize: '20px',
}

};
