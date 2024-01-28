import * as React from 'react';
import Box from "@mui/material/Box";
import Header from '../components/Header';
import Navbar from '../components/NavBar';
const MyLayout = ({ children, dashboard }) => (
    <Box 
        display="flex"
        flexDirection="column"
        zIndex={1}
        minHeight="100vh"
        backgroundColor="theme.palette.background.default"
        position="relative"
    >
        <Box
            display="flex"
            flexDirection="column"
            overflowX="auto"
        >
            <Header />
            <Box display="flex" flexGrow={1}>
                <Navbar />            
                <Box
                    display="flex"
                    flexDirection="column"
                    flexGrow={2}
                    paddingLeft={5}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    </Box>
);

export default MyLayout;