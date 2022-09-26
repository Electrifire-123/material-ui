import React, { useState, useContext} from "react";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import { alpha } from "@material-ui/core/styles";
import axios from 'axios'
import { store } from "../store/details";


const Employees = () => {
  const [students,setStudents] = useContext(store)
  
  const columns = [
    {title: 'Sr No', field:'id'},
    {title: 'Name', field:'Name'},
    {title: 'Age', field:'Age'},
    {title: 'Course', field:'Course'},
    {title: 'Batch', field:'Batch'}
  ]
  
  return (
    <div style={{marginTop:'40px'}}>
      <h1 align='center'>Emplyees Data</h1>
      <MaterialTable
        sx={{margiTop:'40px'}}
        //pass here a property for the features of Table
        columns={columns}
        data={students}
        editable={{
          //This are predefined function which can be used on events
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setStudents([...students, newRow]);

              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...students];
              updatedData[oldRow.tableData.id] = newRow;
              setStudents(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...students];
              updatedData.splice(selectedRow.tableData.id, 1);
              setStudents(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
          }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          },
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          // in options we can add many features to the table like below
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          paging: true,
          pageSizeOptions: [5, 10, 20, 30, 45, 50, 100],
           pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "bottom",
          exportButton: true,
          exportAllData: true,
          exportFileName: "Employees_Data",
          addRowPosition: "last",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({
            disabled: rowData.age == null,
            // color:"primary"
          }),
          grouping: true,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#F4F07D" } :{background: "#FBF6D9"},
          headerStyle: { background: "#7DC9F4", color: "#fff" },
        }}
        title='Employees Data'
        icons={{ Add: () => <AddIcon /> }}
      />
      <h2></h2>
    </div>
  );
}

export default Employees;