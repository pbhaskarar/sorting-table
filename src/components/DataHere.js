// import React, { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import Container from '@mui/material/Container'
// import { Box, Checkbox, TextField, Button, Grid,  Table, TableHead,} from '@mui/material';
// import { Switch, TableBody, TableContainer, TableRow, Typography } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
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

// const App = () => {
//   const [firstname, setFirstname] = useState('')
//   const [lastname, setLastName] = useState('')
//   const [age, setAge] = useState(0)
//   const [isChecked, setIsChecked] = useState(false);
//   const [todo, setTodo] = useState([]);

//   useEffect(()=>{
//     const storedTodo = localStorage.getItem('todo');
//     if(storedTodo){
//       setTodo(JSON.parse(storedTodo))
//     }
//   },[])

//   useEffect(()=>{
//     localStorage.setItem('todo', JSON.stringify(todo));
//   }, [todo]);
 
//   const firstnamechangeHandler = (e) =>{
//     setFirstname(e.target.value)
//   }
//   const lastnamechangeHandler = (e) =>{
//     setLastName(e.target.value)
//   }
//   const agechangeHandler = (e) =>{
//     setAge(e.target.value)
//   }

//   const handleChecked = (e) => {
//       setIsChecked(e.target.checked);
//   };

//   const submitHandler = (e) =>{
//     e.preventDefault();
//     const id = uuidv4();
//     const newTodo = [...todo, { id, firstname, lastname, age, isChecked }];
//     setTodo(newTodo);
//     setFirstname('');
//     setLastName('');
//     setAge(0);
//     setIsChecked(false);
//   }
//   // console.log(todo)

//   const deleteRow = (idvalue) =>{
//     const newTodo = todo.filter((i, id) => id !== idvalue);
//     setTodo(newTodo)
//   }
//   return (
//    <>
//    <Container >
//    <Typography variant='h4' sx={{textAlign: 'center', justifyContent: 'ccenter', alignItems: 'center', margin: '2rem'}}>
//     Please Fill data
//    </Typography>
//      <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//         // background: 'gray'
//       }}
//       noValidate
//       autoComplete="off"
//       onSubmit={submitHandler}
//     >
     
//       <TextField id="outlined-basic" label="firstname" variant="outlined"  value={firstname}  onChange={firstnamechangeHandler}  />
//       <TextField id="filled-basic" label="lastname" variant="outlined"  value={lastname}  onChange={lastnamechangeHandler} />
//       <TextField id="standard-basic" label="age" type='number'  value={age} onChange={agechangeHandler}  />
//       <Checkbox
//       checked={isChecked}
//       onChange={handleChecked}/>
//       <Button variant="contained" color="primary" type='submit' sx={{marginTop: '3rem', cursor: 'hover'}}>
//         ADD Details
//       </Button>
//     </Box>
//     {/* <AllData todo={todo} deleteRow= {deleteRow} /> */}
//     <Grid>
//     <Typography variant='h5' sx={{textAlign: 'center', justifyContent: 'ccenter', alignItems: 'center', margin: '3rem'}}>
//     your Data Here
//    </Typography>
//    <div style={{ height: 400, width: '100%' }}>
//   <DataGrid
//     rows={todo}
//     columns={[
//       { field: 'id', headerName: 'id', width: 100 },
//       { field: 'firstname', headerName: 'Firstname', width: 150 },
//       { field: 'lastname', headerName: 'Lastname', width: 150 },
//       { field: 'age', headerName: 'Age', type: 'number', width: 100 },
//       {
//         field: 'isChecked',
//         headerName: 'Is Checked',
//         renderCell: (params) => (
//           <Switch
//             checked={params.value}
//             onChange={() => {
//               const updatedTodo = todo.map((todoItem) => {
//                 if (todoItem.id === params.row.id) {
//                   return {
//                     ...todoItem,
//                     isChecked: !todoItem.isChecked,
//                   };
//                 }
//                 return todoItem;
//               });
//               setTodo(updatedTodo);
//             }}
//           />
//         ),
//         width: 150,
//       },
//       {
//         field: 'delete',
//         headerName: 'Delete',
//         renderCell: (params) => (
//           <Button
//             style={{ margin: '1rem' }}
//             variant="contained"
//             onClick={() => {
//               deleteRow(params.row.id);
//             }}
//           >
//             Delete
//           </Button>
//         ),
//         width: 150,
//       },
//     ]}
//     checkboxSelection
//     autoHeight
//     pageSize={5}
//   />
// </div>
//     </Grid>
//    </Container>
//    </>
//   )
// }

// export default App