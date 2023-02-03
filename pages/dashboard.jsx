import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const tableHeading = ["Name", "Class", "Roll No."];
import ConfirmationModal from "./components/confirmation-popup";

const BookListing = ({ query }) => {
  const router = useRouter();
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);

  const handleDeletePopup = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getData = () => {
    axios
      .get(
        "https://student-management-e17fd-default-rtdb.firebaseio.com/studentData.json"
      )
      .then((res) => {
        console.log(res.data);
        const fetchedStudent = [];
        for (let key in res.data) {
          fetchedStudent.unshift({
            ...res.data[key],
            id: key,
          });
        }
        setStudents(fetchedStudent);
      })
      .catch(function (err) {});
  };

  useEffect(() => {
    console.log(students);
  }, [students]);

  const handleDelete = async (id) => {
    await axios
      .delete(
        `https://student-management-e17fd-default-rtdb.firebaseio.com/studentData/${id}.json`
      )
      .then(function (res) {
        getData();
        setOpen(false);
      })
      .catch(function (err) {});
  };

  const handleEditBook = (id) => {
    router.push(`/update/${id}`);
  };

  const handleGotoSingleView = (id) => {
    router.push(`/view/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ padding: "100px" }}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        {/* <SearchBox
          isSearch
          placeholder={"Search by Title"}
          handleChangeSearch={(e) => handleSearch(e)}
        /> */}
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {tableHeading.map((heading, index) => (
                <TableCell
                  sx={{
                    fontWeight: 700,
                    fontSize: "16px",
                    background: "red",
                    color: "#fff",
                  }}
                  key={index}
                  align="left"
                >
                  {heading}
                </TableCell>
              ))}
              <TableCell
                sx={{
                  fontWeight: 700,
                  fontSize: "16px",
                  background: "red",
                  color: "#fff",
                }}
                align="center"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students?.map((student, index) => (
              <TableRow sx={{ fontSize: "14px" }} key={index}>
                <TableCell align="left" component="th" scope="row">
                  {student?.first_name} {student?.last_name}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {student?.class} {student.division}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {student?.roll_number}
                </TableCell>

                <TableCell align="right">
                  <Button
                    onClick={() => handleGotoSingleView(student.id)}
                    variant="contained"
                    sx={{ mx: 2 }}
                  >
                    View
                  </Button>
                  <Button
                    onClick={() => handleEditBook(student.id)}
                    variant="outlined"
                    sx={{ mx: 2 }}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={handleDeletePopup}
                    variant="contained"
                    sx={{ mx: 2, background: "red" }}
                  >
                    Delete
                  </Button>
                </TableCell>
                <ConfirmationModal
                  handleAction={() => handleDelete(student.id)}
                  handleCloseModal={handleClose}
                  handleOpenModal={open}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BookListing;

BookListing.getInitialProps = ({ query }) => {
  return {
    query,
  };
};
