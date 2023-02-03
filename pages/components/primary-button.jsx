import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";

const PrimaryButton = ({
  text,
  onClick,
  variant,
  loading,
  disabled,
  type,
  fullWidth,
  dark,
  mb,
  sx,
}) => {
  return (
    <LoadingButton
      color="primary"
      onClick={onClick}
      variant={variant}
      type={type ? type : "submit"}
      sx={{
        boxShadow: "none",
        height: "48px",
        mb: mb,

        // color: "#fff",
        ...sx,
      }}
      loading={loading}
      fullWidth={fullWidth}
      disabled={loading || disabled}
    >
      <Typography
        fontSize={"14px"}
        fontWeight={700}
        variant="body1"
        component={"p"}
        textTransform={"none"}
      >
        {text}
      </Typography>
    </LoadingButton>
  );
};

export default PrimaryButton;
