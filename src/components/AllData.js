
// import React from 'react';import { Button, Switch, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
// import Paper from '@mui/material/Paper';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import { styled } from '@mui/material/styles';
// const label = { inputProps: { 'aria-label': 'Switch demo' } };

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));
  
//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 0,
//     },
//   }));

// const AllData = ({todo, deleteRow}) => {
//   return (
//    <>
//    <Typography variant='h5' sx={{textAlign: 'center', justifyContent: 'ccenter', alignItems: 'center', margin: '2rem'}}>
//     your Data Here
//    </Typography>
//    <div>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>id</StyledTableCell>
//             <StyledTableCell align="right">firstname</StyledTableCell>
//             <StyledTableCell align="right">lastname</StyledTableCell>
//             <StyledTableCell align="right">age</StyledTableCell>
//             <StyledTableCell align="right">checked</StyledTableCell>
//             <StyledTableCell align="right">delete</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {todo.map((item,id) => (
//             <StyledTableRow key={item.id}>
//               <StyledTableCell align="right">{item.id}</StyledTableCell>
//               <StyledTableCell align="right">{item.firstname}</StyledTableCell>
//               <StyledTableCell align="right">{item.lastname}</StyledTableCell>
//               <StyledTableCell align="right">{item.age}</StyledTableCell>
//               <StyledTableCell align="right"><Switch {...label} /></StyledTableCell>
//               <Button style={{margin: '1rem'}} variant='contained' onClick={() =>{deleteRow(id)}}>Delete</Button>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//    </div>
   
//    </>
//   )
// }

// export default AllData