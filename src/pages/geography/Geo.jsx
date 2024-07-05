import { Box, useTheme } from "@mui/material";
import React from "react";
import { data } from "./data";
import Header from "../../components/Header";
import Geography from "./Geography";
function Geo() {
  const theme = useTheme();

  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Geography />
    </Box>
  );
}

export default Geo;
