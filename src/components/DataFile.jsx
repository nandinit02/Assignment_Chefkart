import React from 'react'
// import "../App.css";
import axios from "axios";
import {useEffect,useState} from "react";
import  Papa from 'papaparse'
import DataTable from 'react-data-table-component'


// const statusColorMap = {
//   true:"#00FF00",
//   false:"#FF0000",
//   //PENDING: "yellow"
//   // etc
// };


const DataFile=()=>{
  const [data, setData]=React.useState([]);
  const getData=async()=>{
    try{
      const response=await axios("https://dl.dropboxusercontent.com/s/3clzb20vwtabrcf/MOCK_DATA%20%281%29.json?dl=0");
      setData(response.data);
    }catch(error){
      console.log(error);
    }
  };
  const columns=[
    {
      name:"ID",
      selector: (row)=>row.id,
    //  Header: 'Visible',

      sortable:true,
    },
    {
      name:"First Name",
      selector: (row)=>row.first_name,
      sortable:true,
    },
    {
      name:"Last Name",
      selector: (row)=>row.last_name,
      sortable:true,
    },
    {
      name:"Email",
      selector: (row)=>row.email,
      sortable:true,
    },
    {
      name:"Gender",
      selector: (row)=>row.gender,
      sortable:true,
    },
    {
      name:"IP Address",
      selector: (row)=>row.ip_address,
      sortable:true,
    },
    {
      name:"Time",
      selector: (row)=>row.time,
      sortable:true,
    },
    {
      name:"Status",
  sortable:true,

      selector: row=>row.status.toString(),
    //  Header: "Status",
      // accessor: "status",
       // Cell: (props) => {
       //   return (
       //     <p style={{ color: statusColorMap[props.value] }}>{props.value}</p>
       //   );
       // },
       render(text, record) {
           return {
             props: {
               style: { background: (text) == false ? "red" : "green" }
             },
             children: <div>{text}</div>
           };
         }

    },
    {
      name:"Mobile",
      selector: (row)=>row.mobile,
      sortable:true,
    },
    {
      name:"Area",
      selector: (row)=>row.area,
      sortable:true,
    },
    {
      name:"Show",
      selector: (row)=>row.show.toString(),
      sortable:true,
      // Header: "Show",
      //  accessor: "show",
      //  Cell: (props) => {
      //    return (
      //      <p style={{ color: statusColorMap[props.value] }}>{props.value}</p>
      //    );
      //  },
      render(text, record) {
          return {
            props: {
              style: { background: (text) == false ? "red" : "green" }
            },
            children: <div>{text}</div>
          };
        }
      // Header: 'Visible',
      //  accessor:  d => d.Visible.toString() + '',
    },
    {
      name:"Edit",
      selector: (row)=>row.edit.toString(),
      sortable:true,
      // Header: "Edit",
      //  accessor: "edit",
      //  Cell: (props) => {
      //    return (
      //      <p style={{ color: statusColorMap[props.value] }}>{props.value}</p>
      //    );
      //  },
      render(text, record) {
          return {
            props: {
              style: { background: (text) == false ? "red" : "green" }
            },
            children: <div>{text}</div>
          };
        }
    },

  ]


  useEffect(()=>{
    getData();
  },[]);
  // React.useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('MOCK_DATA(1).csv')
  //     const reader = response.body.getReader()
  //     const result = await reader.read() // raw array
  //     const decoder = new TextDecoder('utf-8')
  //     const csv = decoder.decode(result.value) // the csv text
  //     const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
  //     const data = results.data // array of objects
  //     setData(data)
  //   }
  //   getData()
  // }, []) // [] means just do this once, after initial render

  return (
    <DataTable columns={columns} data={data} pagination
fixedHeader
fixedHeaderScrollHeight="450px"
selectableRows
selectableRowsHighlight
highlightOnHover

    />
  )


};


// const [tableRows, setTableRows] = useState([]);
//
//  //State to store the values
//  const [values, setValues] = useState([]);
//
//  const changeHandler = (event) => {
//    // Passing file data (event.target.files[0]) to parse using Papa.parse
//    Papa.parse(event.target.files[0], {
//      header: true,
//      skipEmptyLines: true,
//      complete: function (results) {
//        const rowsArray = [];
//        const valuesArray = [];
//
//        // Iterating data to get column name and their values
//        results.data.map((d) => {
//          rowsArray.push(Object.keys(d));
//          valuesArray.push(Object.values(d));
//        });
//
//        // Parsed Data Response in array format
//        setParsedData(results.data);
//
//        // Filtered Column Names
//        setTableRows(rowsArray[0]);
//
//        // Filtered Values
//        setValues(valuesArray);
//      },
//    });
//  };
//
//  return (
//    <div>
//      {/* File Uploader */}
//      <input
//        type="file"
//        name="file"
//        onChange={changeHandler}
//        accept=".csv"
//        style={{ display: "block", margin: "10px auto" }}
//      />
//      <br />
//      <br />
//      {/* Table */}
//      <table>
//        <thead>
//          <tr>
//            {tableRows.map((rows, index) => {
//              return <th key={index}>{rows}</th>;
//            })}
//          </tr>
//        </thead>
//        <tbody>
//          {values.map((value, index) => {
//            return (
//              <tr key={index}>
//                {value.map((val, i) => {
//                  return <td key={i}>{val}</td>;
//                })}
//              </tr>
//            );
//          })}
//        </tbody>
//      </table>
//    </div>
//  );
// }
export default DataFile
