import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function createData(CName, SName, population, size) {
  const density = population / size;
  return {CName, SName, population, size, density };
}

const columns = [
  { id: 'CName', label: 'Company Name', minWidth: 170 , align: 'center'},
  { id: "SName", label: "Supervisor's Name", minWidth: 100, align: 'center'},
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
    
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  
];

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];


const Logs= () => {


  const pageStyle={
    display: "flex",
    flexDirection:"column",
    gap: "30px",
    marginLeft:"345px",
    padding:"50px",
    flexGrow: 1 
  }

  const titleStyle = {
      color: "var(--orange, #F49C31)",
      fontfamily: "Montserrat",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
  }

  const Tablestyle={
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "30px",
  }

  const tableContainer={
    display: "flex",
    maxHeight: 736,
    borderRadius: "24px 24px 0px 0px",
    border:" 1px solid #E4E4E4",
    background:"#FBFDFF",
    boxShadow: 3,
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);

  };

  return (
<Box sx={pageStyle}>
    <Box sx={titleStyle}> 
      Logs
    </Box>
    <Box sx={Tablestyle}>
    <Paper 
      sx={{ borderRadius: "24px",
        border:" 1px solid #E4E4E4",
        background:"#FBFDFF",
        boxShadow: 3,
        width: '100%',  
        overflow: 'hidden' }}>
      <TableContainer sx={tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  sx={{
                        height:"80px",
                        backgroundColor: "var(--orange, #F49C31)",}}
                        
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value) 
                            : value 
                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{
          borderRadius: "0px 0px 10px 10px",
          backgroundColor: "var(--orange, #F49C31)",
        }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
  </Box>

);
}
export default Logs;
