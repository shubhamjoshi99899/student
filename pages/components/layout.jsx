import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Drawer from "./drawer";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <Box sx={{ ml: 20 }}>
      {router.pathname === "/" || router.pathname?.includes("sign_up") ? (
        ""
      ) : (
        <Drawer />
      )}

      {children}
    </Box>
  );
};

export default Layout;
