import { useEffect, useRef } from "react";
import $ from "jquery";
import DataTables from "datatables.net";

// Import necessary styles
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { $CombinedState } from "redux";
// Importing dataset
type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
  }
const DataTable = DataTables(window);
const defaultData: Person[] = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]
  

export default function AgGrid(){

    const tableRef = useRef();
    useEffect(() => {
    // new DataTable(tableRef.current, {
    //     data: defaultData,
    //     columns: [
    //       { title: "Name" },
    //       { title: "Occupation" },
    //       { title: "City" },
    //       { title: "ZIP" },
    //       { title: "Birthday" },
    //       { title: "Salary" },
    //     ],
    //   });
     
let table = new DataTable('#table_id', {
    
});
    }, []);
    return(
        <>
        <table id="table_id" className="display">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
        </tr>
    </tbody>
</table>
        </>
    )
}