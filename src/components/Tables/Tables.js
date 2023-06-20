import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Chip, Typography } from '@mui/material';
import BasicMenu from '../MenuItem/MenuItem';

function preventDefault(event) {
  event.preventDefault();
}

export default function Tables({ userData }) {
  return (
    <React.Fragment>
      <Typography component='h2' variant='h6' color='primary' gutterBottom>
        Users
      </Typography>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData ? (
            userData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <BasicMenu />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <div>No Data</div>
          )}
        </TableBody>
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
