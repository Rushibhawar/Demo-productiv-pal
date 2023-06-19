import React,{useState,} from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Nav from 'react-bootstrap/Nav'




function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Table() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  return (
    <>
    {/* <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>React-Bootstrap Tab Component</h4>
      <Tabs defaultActiveKey="second">
        <Tab eventKey="first" title="Dashboard">
        page1
        </Tab>
        <Tab eventKey="second" title="Setting">
          Hii, I am 2nd tab content
        </Tab>
        <Tab eventKey="third" title="Aboutus">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs> 

   
    </div>  */}
    {/* <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box> */}
      <Nav variant="tabs" defaultActiveKey="link-1">
  <Nav.Item>
    <Nav.Link eventKey="link-1">Active</Nav.Link>
    
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" >
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
    </>
  );
}





// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';
// import { AgGridReact } from '@ag-grid-community/react';

// import { ModuleRegistry, ColDef } from '@ag-grid-community/core';
// import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import '@ag-grid-community/styles/ag-grid.css';
// import '@ag-grid-community/styles/ag-theme-alpine.css';
// import { MenuModule } from '@ag-grid-enterprise/menu';
// import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';

// ModuleRegistry.registerModules([ClientSideRowModelModule, MenuModule, ExcelExportModule]);


// const GridExample = () => {
//     const [columnDefs, setColumnDefs] = useState<ColDef[]>([
//         { headerName: 'Make', field: 'make' },
//         { headerName: 'Model', field: 'model' },
//         { headerName: 'Price', field: 'price' },
//     ]);

//     const [rowData, setRowData] = useState<any[]>([
//         { make: 'Toyota', model: 'Celica', price: 35000 },
//         { make: 'Ford', model: 'Mondeo', price: 32000 },
//         { make: 'Porsche', model: 'Boxster', price: 72000 }
//     ]);

//     return <div className='ag-theme-alpine'
//         style={{
//             width: '100%',
//             height: '100%'
//         }}>
//         <AgGridReact
//             columnDefs={columnDefs}
//             rowData={rowData}
//             onGridReady={params => params.api.sizeColumnsToFit()}>
//         </AgGridReact>
//     </div>;
// };