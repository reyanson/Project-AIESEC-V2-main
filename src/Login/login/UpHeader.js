import React from 'react';
import Logo from "./Logo.png"
import BlueLogo from "./Blue-Logo.png"
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Login from "./Login";

export default function UpHeader() {
  const loginPageURL = "./"; // Replace with the actual URL of the login page


  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 15 }}>
          <TableRow>
            <TableCell sx={{ border: 0 }}>
              <a href={loginPageURL}>
                <img src={Logo} width={150} alt="Aiesec" style={{ cursor: 'pointer' }} />
              </a>
            </TableCell>
            <TableCell sx={{ border: 0 }} align="right">
              <img src={BlueLogo} width={150} alt="Man Logo" />
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  
  )
}
