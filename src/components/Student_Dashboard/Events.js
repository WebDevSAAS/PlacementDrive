import * as React from 'react';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function DisableRowSelection() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div>
      <div>
      <Typography
        variant="h5"
        component="div"
        sx={{
          margin: "1rem 1rem 2.5rem 1rem",
          flexGrow: 1,
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
        display="block"
      >
        Events : 
      </Typography>
      </div>
      <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        {...data}
        isRowSelectable={(params) => params.row.quantity > 50000}
        checkboxSelection
      />
    </div>
    </div>
    
  );
}
