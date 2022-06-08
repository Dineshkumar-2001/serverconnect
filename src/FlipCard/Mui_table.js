import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default class Mui_table extends Component {

    constructor() {
        super();
        this.state = {
          tshirtquantity: "",
          T_shirt:'',
          Belt:''
          
        };
      }
    render(){
        let data = JSON.parse(localStorage.getItem("Jean1"));
        let data1 = JSON.parse(localStorage.getItem("T_shirt"));
        let data2 = JSON.parse(localStorage.getItem("Buy_belt_product"));
    
        let y1 = this.state.tshirtquantity;
        let x1 = this.state.T_shirt;
        let z1 = this.state.Belt;
        return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>
            <TableCell align="center" ><h2>Product Id</h2></TableCell>
            <TableCell align="center" ><h2>Name</h2></TableCell>
            <TableCell align="center" ><h2>Price</h2></TableCell>
            <TableCell align="center" ><h2>Quantity</h2></TableCell>
            <TableCell align="center" ><h2>Sub Total</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((line1) => (
            <TableRow
            //   
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell component="th" scope="row" align="center">
              <h3> {line1.id}</h3>
              </TableCell>
              <TableCell align="center"><h3>{line1.name}</h3></TableCell>
              <TableCell align="center"><h3>{line1.Prize}</h3></TableCell>
              <TableCell align="center"><h3><input style={{border:'none',width:'60px'}} type='number'  onChange={(e) =>
                          this.setState({ tshirtquantity: e.target.value })
                        }/></h3></TableCell>
              <TableCell align="center"><h2>{y1 * line1.Prize}{localStorage.setItem('Mui_jean', y1 * line1.Prize)}</h2></TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableBody>
          {data1.map((line2) => (
            <TableRow
              key={line2.id}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell component="th" scope="row" align="center">
              <h3> {line2.id}</h3>
              </TableCell>
              <TableCell align="center"><h3>{line2.name}</h3></TableCell>
              <TableCell align="center"><h3>{line2.Prize}</h3></TableCell>
              <TableCell align="center"><h3><input style={{border:'none',width:'60px'}} type='number'  onChange={(e) =>
                          this.setState({ T_shirt: e.target.value })
                        }/></h3></TableCell>
              <TableCell align="center"><h2>{x1 * line2.Prize}{localStorage.setItem('Mui_shirt', x1 * line2.Prize)}</h2></TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableBody>
          {data2.map((line3) => (
            <TableRow
              key={line3.id}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell component="th" scope="row" align="center">
              <h3> {line3.id}</h3>
              </TableCell>
              <TableCell align="center"><h3>{line3.name}</h3></TableCell>
              <TableCell align="center"><h3>{line3.Prize}</h3></TableCell>
              <TableCell align="center"><h3><input style={{border:'none',width:'60px'}} type='number'  onChange={(e) =>
                          this.setState({ Belt: e.target.value })
                        }/></h3></TableCell>
              <TableCell align="center"><h2>{z1 * line3.Prize}{localStorage.setItem('Mui_Belt', z1 * line3.Prize)}</h2></TableCell>
            </TableRow>
          ))}
        </TableBody>


        <TableBody>
        
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
                <TableCell align="center"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="center"><h2>Total</h2></TableCell>
              <TableCell align="center"><h2>{(JSON.parse(localStorage.getItem("Mui_jean"))+(JSON.parse(localStorage.getItem("Mui_shirt"))+JSON.parse(localStorage.getItem("Mui_Belt"))))}</h2></TableCell>
              
             
            </TableRow>
          
        </TableBody>

      </Table>
    </TableContainer>
  );
    }
  
}
