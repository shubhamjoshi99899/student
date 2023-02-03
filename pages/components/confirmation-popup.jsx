import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

const ConfirmationModal = ({
  handleOpenModal,
  handleCloseModal,
  handleAction,
  handleRoute,
}) => {
  return (
    <>
      <Dialog
        open={handleOpenModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <IconButton
          onClick={handleCloseModal}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ p: 5 }}>
          <Box sx={{ textAlign: "center" }}>
            <Image src="/delete.gif" width={64} height={64} alt="Created" />
          </Box>
          <DialogTitle>
            <Typography
              textAlign="center"
              sx={{ color: "#000" }}
              fontWeight="600"
              variant="h6"
            >
              Are you sure you want to delete this student?
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" textAlign="center">
              You’ve successfully deleted the student{" "}
              {/* <span style={{ fontWeight: 700 }}>{text}</span>. */}
            </Typography>
          </DialogContent>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ maxWidth: "230px" }}
              onClick={handleAction}
            >
              Delete Student
            </Button>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
};

export default ConfirmationModal;
