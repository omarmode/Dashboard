import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import Line from "./Line";
import Header from "../../components/Header";
// import Line from "./Line";
function LineChart() {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Line />
    </Box>
  );
}

export default LineChart;
