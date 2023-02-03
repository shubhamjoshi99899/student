import * as React from "react";
import {
  Box,
  InputAdornment,
  InputLabel,
  TextField,
  Theme,
} from "@mui/material";

const CustomizedInputField = ({
  label,
  id,
  placeholder,
  value,
  formik,
  error,
  onClick,
  helperText,
  name,
  multiline,
  rows,
  type,
  required,
  sx,
  percent,
  disabled,
  handleChange,
}) => {
  return (
    <Box>
      <InputLabel
        sx={{
          fontWeight: 600,
          fontSize: "1rem",
          mb: 1,
        }}
        htmlFor={id}
      >
        {label}
      </InputLabel>
      <TextField
        onClick={onClick}
        InputProps={{
          style: {
            height: rows > 0 ? "auto" : "48px",
            borderRadius: "0.3125rem",
            fontSize: "0.9375rem",
            boxShadow: "none",
          },
          endAdornment: percent && (
            <InputAdornment position="start">%</InputAdornment>
          ),
          inputProps: percent && {
            type: "number",
            min: "0",
            max: "100",
          },
        }}
        fullWidth
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={formik ? formik.handleChange : handleChange}
        id={id}
        rows={rows}
        multiline={multiline}
        error={error}
        name={name}
        helperText={helperText}
        sx={{
          "& ::placeholder": {
            color: "#242424",
            fontSize: "0.9375rem",
            fontWeight: "400",
          },
          ...sx,
        }}
        type={type ? type : "text"}
        disabled={disabled}
      />
    </Box>
  );
};
export default CustomizedInputField;
