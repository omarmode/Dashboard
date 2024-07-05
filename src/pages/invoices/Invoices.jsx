import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { columns, rows } from "./data";

function Invoices() {
  return (
    <Box sx={{ height: 651, width: "99.5%", mx: "auto" }}>
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}

export default Invoices;
