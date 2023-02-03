import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { classOptions, secttionOption } from "../../utils/selectOptions";
import { CreateStudentValidationSchema } from "../../utils/validationSchema";
import SelectField from "../components/selectfield";
import CustomizedInputField from "../components/textfield";
const AddStudent = () => {
  const router = useRouter();
  const [student, setStudent] = useState({});
  const [isView, setIsView] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const getData = (query) => {
    axios
      .get(
        `https://student-management-e17fd-default-rtdb.firebaseio.com/studentData/${router.query.add_student}.json`
      )
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      })
      .catch(function (err) {});
  };

  const formik = useFormik({
    initialValues: {
      first_name: student?.first_name ? student?.first_name : "",
      middle_name: student?.middle_name ? student?.middle_name : "",
      last_name: student?.last_name ? student?.last_name : "",
      address_one: student?.address_one ? student?.address_one : "",
      address_two: student?.address_two ? student?.address_two : "",
      city: student?.city ? student?.city : "",
      class: student?.class ? student?.class : "",
      division: student?.division ? student?.division : "",
      landmark: student?.landmark ? student?.landmark : "",
      pincode: student?.pincode ? student?.pincode : "",
      roll_number: student?.roll_number ? student?.roll_number : "",
    },
    validationSchema: CreateStudentValidationSchema,
    enableReinitialize: true,

    onSubmit: (values) => {
      submitForm(values);
    },
  });

  useEffect(() => {
    if (router?.query?.form === "view") {
      setIsView(true);
    } else if (router.query.form === "update") {
      setIsUpdate(true);
    }
  }, [router]);

  console.log(router?.query);

  const submitForm = (values) => {
    {
      isUpdate
        ? axios
            .put(
              `https://student-management-e17fd-default-rtdb.firebaseio.com/studentData/${router.query.add_student}.json`,
              values
            )
            .then((res) => {
              console.log(res.data);
              router.push("/dashboard");
            })
        : axios
            .post(
              "https://student-management-e17fd-default-rtdb.firebaseio.com/studentData.json",
              values
            )
            .then((res) => {
              console.log(res.data);
              router.push("/dashboard");
            });
    }
    console.log(values);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Typography fontSize="24px" fontWeight={700}>
          {isView ? "View Student" : isUpdate ? "Edit Student" : "Add Student"}
        </Typography>
        {isView && (
          <Typography fontSize="20px" fontWeight={500} mb={5}>
            The form below is not editable, please select edit option to edit
            the form
          </Typography>
        )}
        <form onSubmit={formik.handleSubmit}>
          <Grid mb={4} container spacing={2}>
            <Grid item xs={4}>
              <CustomizedInputField
                label={"First name"}
                placeholder={"Enter your first name"}
                formik={formik}
                name="first_name"
                value={formik.values.first_name}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
                type={"text"}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomizedInputField
                label={"Middle name"}
                placeholder={"Enter your middle name"}
                name="middle_name"
                value={formik.values.middle_name}
                type={"text"}
                formik={formik}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomizedInputField
                label={"Last name"}
                placeholder={"Enter your last name"}
                name="last_name"
                value={formik.values.last_name}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
                type={"text"}
                formik={formik}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectField
                data={classOptions}
                label="Class"
                placeholder={"Enter your class"}
                name="class"
                value={formik.values.class}
                error={formik.touched.class && Boolean(formik.errors.class)}
                helperText={formik.touched.class && formik.errors.class}
                type={"text"}
                onChange={formik.handleChange}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectField
                data={secttionOption}
                label="Division"
                placeholder={"Enter your division"}
                name="division"
                value={formik.values.division}
                error={
                  formik.touched.division && Boolean(formik.errors.division)
                }
                helperText={formik.touched.division && formik.errors.division}
                type={"text"}
                onChange={formik.handleChange}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomizedInputField
                label="Roll Number"
                placeholder={"Enter roll number"}
                name="roll_number"
                value={formik.values.roll_number}
                error={
                  formik.touched.roll_number &&
                  Boolean(formik.errors.roll_number)
                }
                helperText={
                  formik.touched.roll_number && formik.errors.roll_number
                }
                type={"text"}
                formik={formik}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomizedInputField
                label="Address 1"
                placeholder={"Enter your primary addrress"}
                multiline={true}
                rows={3}
                name="address_one"
                value={formik.values.address_one}
                error={
                  formik.touched.address_one &&
                  Boolean(formik.errors.address_one)
                }
                helperText={
                  formik.touched.address_one && formik.errors.address_one
                }
                formik={formik}
                type={"text"}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomizedInputField
                label="Address 2"
                multiline={true}
                rows={3}
                placeholder={"Enter your secondary addrres"}
                name="address_two"
                value={formik.values.address_two}
                formik={formik}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomizedInputField
                label="Landmark"
                placeholder={"Enter Landmark"}
                value={formik.values.landmark}
                name="landmark"
                formik={formik}
                error={
                  formik.touched.landmark && Boolean(formik.errors.landmark)
                }
                helperText={formik.touched.landmark && formik.errors.landmark}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomizedInputField
                label="City"
                placeholder={"Enter City"}
                name="city"
                value={formik.values.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                formik={formik}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomizedInputField
                label="Pincode"
                placeholder={"Enter pincode"}
                name="pincode"
                value={formik.values.pincode}
                error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                helperText={formik.touched.pincode && formik.errors.pincode}
                formik={formik}
                type={"text"}
                disabled={isView}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#242424",
                  },
                }}
              />
            </Grid>
            <Grid item xs={5}>
              {!isView && (
                <Button
                  fullWidth
                  sx={{ height: "48px", background: "red" }}
                  variant="contained"
                  type="submit"
                >
                  {isUpdate ? "Update Student" : "Add Student"}
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddStudent;

AddStudent.getInitialProps = async ({ query }) => {
  return { query };
};
