import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "@mui/material/Container";
import {
  Box,
  Checkbox,
  TextField,
  Button,
  Grid,
  Table,
  TableHead,
} from "@mui/material";
import {
  Switch,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const firstnamechangeHandler = (e) => {
    setFirstname(e.target.value);
  };

  const lastnamechangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const agechangeHandler = (e) => {
    setAge(e.target.value);
  };

  const handleChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const id = uuidv4().substring(0, 6);
    const newTodo = [
      ...todo,
      { id, firstname, lastname, age, checked: isChecked },
    ];
    setTodo(newTodo);
    setFirstname("");
    setLastName("");
    setAge(0);
    setIsChecked(false);
  };

  const deleteRow = (idvalue) => {
    const newTodo = todo.filter((i, id) => id !== idvalue);
    setTodo(newTodo);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      setSortBy(`${criteria}_desc`);
    } else {
      setSortBy(criteria);
    }
  };

  const filteredTodo = todo.filter((item) => {
    if (!searchQuery) return true;
    if (
      item.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.lastname.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  const itemsPerPage = 3;
  const pageCount = Math.ceil(filteredTodo.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  const displayedTodo = filteredTodo.slice(startIndex, endIndex);

  const sortedTodo = [...displayedTodo].sort((a, b) => {
    if (sortBy === "firstname") {
      return a.firstname.localeCompare(b.firstname);
    }
    if (sortBy === "lastname") {
      return a.lastname.localeCompare(b.lastname);
    }
    if (sortBy === "age") {
      return a.age - b.age;
    }
    if (sortBy === "firstname_desc") {
      return b.firstname.localeCompare(a.firstname);
    }
    if (sortBy === "lastname_desc") {
      return b.lastname.localeCompare(a.lastname);
    }
    if (sortBy === "age_desc") {
      return b.age - a.age;
    }
    return 0;
  });

  const getSortDirection = (criteria) => {
    if (sortBy === criteria) {
      return "asc";
    }
    if (sortBy === criteria + "_desc") {
      return "desc";
    }
    return "";
  };

  return (
    <>
      <Container>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem",
          }}
        >
          Please Fill data
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <TextField
            id="outlined-basic"
            label="firstname"
            variant="outlined"
            value={firstname}
            onChange={firstnamechangeHandler}
          />
          <TextField
            id="filled-basic"
            label="lastname"
            variant="outlined"
            value={lastname}
            onChange={lastnamechangeHandler}
          />
          <TextField
            id="standard-basic"
            label="age"
            type="number"
            value={age}
            onChange={agechangeHandler}
          />
          <Checkbox checked={isChecked} onChange={handleChecked} />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: "3rem", cursor: "hover" }}
          >
            ADD Details
          </Button>
        </Box>
        <Grid>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              justifyContent: "ccenter",
              alignItems: "center",
              margin: "3rem",
            }}
          >
            your Data Here
          </Typography>
          <Box sx={{ m: 2 }}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearch}
            />
          </Box>
          <div>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 700, alignItems: "flex-start" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>id</StyledTableCell>
                    <StyledTableCell
                      align="left"
                      onClick={() => handleSort("firstname")}
                    >
                      firstname{" "}
                      {getSortDirection("firstname") === "asc" && (
                        <ArrowDropUp sx={{ color: "white" }} fontSize="small" />
                      )}
                      {getSortDirection("firstname") === "desc" && (
                        <ArrowDropDown
                          sx={{ color: "white" }}
                          fontSize="small"
                        />
                      )}
                    </StyledTableCell>

                    <StyledTableCell
                      align="left"
                      onClick={() => handleSort("lastname")}
                    >
                      lastname{" "}
                      {getSortDirection("lastname") === "asc" && (
                        <ArrowDropUp sx={{ color: "white" }} fontSize="small" />
                      )}
                      {getSortDirection("lastname") === "desc" && (
                        <ArrowDropDown
                          sx={{ color: "white" }}
                          fontSize="small"
                        />
                      )}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      onClick={() => handleSort("age")}
                    >
                      age{" "}
                      {getSortDirection("age") === "asc" && (
                        <ArrowDropUp sx={{ color: "white" }} fontSize="small" />
                      )}
                      {getSortDirection("age") === "desc" && (
                        <ArrowDropDown
                          sx={{ color: "white" }}
                          fontSize="small"
                        />
                      )}
                    </StyledTableCell>

                    <StyledTableCell align="left">isPaid</StyledTableCell>
                    <StyledTableCell align="left">Edit</StyledTableCell>
                    <StyledTableCell align="left">Delete</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedTodo?.map((item, id) => (
                    <StyledTableRow key={item.id}>
                      <StyledTableCell align="left">{item.id}</StyledTableCell>
                      <StyledTableCell align="left">
                        {item.firstname}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {item.lastname}
                      </StyledTableCell>
                      <StyledTableCell align="left">{item.age}</StyledTableCell>
                      <StyledTableCell align="left">
                        <Switch
                          checked={item.checked}
                          onChange={() => {
                            const updatedTodo = todo?.map((todoItem) => {
                              if (todoItem.id === item.id) {
                                return {
                                  ...todoItem,
                                  checked: !todoItem.checked,
                                };
                              }
                              return todoItem;
                            });
                            setTodo(updatedTodo);
                          }}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Button
                          style={{ marginRight: ".5rem" }}
                          variant="contained"
                          onClick={() => {
                            console.log('edit has to be implemented here!!!')
                          }}
                        >
                          Edit
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Button
                          style={{ marginRight: ".2rem" }}
                          variant="contained"
                          onClick={() => {
                            deleteRow(id);
                          }}
                        >
                          Delete
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <Pagination
                count={pageCount}
                page={page}
                onChange={handleChangePage}
              />
            </Box>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default App;
