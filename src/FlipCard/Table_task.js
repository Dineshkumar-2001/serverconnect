import { border, display } from "@mui/system";
import React, { Component } from "react";
import Jeens from "./Jeen.json";
export default class Table_task extends Component {
  constructor() {
    super();
    this.state = {
      tshirtquantity: "",
      T_shirt:'',
      Belt:''
      
    };
  }

  render() {
    let data = JSON.parse(localStorage.getItem("Jean"));
    

    let y1 = this.state.tshirtquantity;
    let x1 = this.state.T_shirt;
    let z1 = this.state.Belt;

    return (
      <div>
        <div className="table_head">
          <tbody>
            {data.map((x) => {
              return (
                <table className="table_border">
                  <tr className="table_border">
                    <th className="table_border">Product Id</th>
                    <th className="table_border">Name</th>
                    <th className="table_border">Price</th>
                    <th className="table_border">Quantity</th>
                    <th className="table_border">Sub Total</th>
                  </tr>

                  <tr className="table_border">
                    <td className="table_border"> {x.id}</td>
                    <td className="table_border">{x.name}</td>
                    <td className="table_border">{x.Prize}</td>
                    <td className="table_border">
                      <input
                        type="number"
                        onChange={(e) =>
                          this.setState({ tshirtquantity: e.target.value })
                        }
                        style={{ width: "60px", border: "none" }}
                      />
                    </td>
                    <td className="table_border">{y1 * x.Prize}{localStorage.setItem('Tab_jean', y1 * x.Prize)}</td>
                  </tr>

                  {/* //----------------------------------------------------------------------------// */}

                  {/* <tbody>
                  {data1.map((y) => {
              return (
                  <tr className="table_border">
                    <td className="table_border"> {y.id}</td>
                    <td className="table_border">{y.name}</td>
                    <td className="table_border">{y.Prize}</td>
                    <td className="table_border">
                      <input
                        type="number"
                        onChange={(e) =>
                          this.setState({ T_shirt: e.target.value })
                        }
                        style={{ width: "60px", border: "none" }}
                      />
                    </td>
                    <td className="table_border">{x1 * y.Prize} {localStorage.setItem('Tab_T_shirt', x1 * y.Prize)}</td>
                  </tr>
                   );
                  })}
          </tbody> */}
 
          {/* //----------------------------------------------------------------------------// */}

          {/* <tbody>
                  {data2.map((z) => {
              return (
                  <tr className="table_border">
                    <td className="table_border"> {z.id}</td>
                    <td className="table_border">{z.name}</td>
                    <td className="table_border">{z.Prize}</td>
                    <td className="table_border">
                      <input
                        type="number"
                        onChange={(e) =>
                          this.setState({ Belt: e.target.value })
                        }
                        style={{ width: "60px", border: "none" }}
                      />
                    </td>
                    <td className="table_border">{z1 * z.Prize} {localStorage.setItem('Tab_Belt',  z1 * z.Prize)}</td>
                  </tr>
                   );
                  })}
          </tbody> */}

          {/* //----------------------------------------------------------------------------// */}


          <tr className="table_border">
                    <td className="table_border" colSpan={4} style={{marginLeft:'40px'}}>Total</td>
                    <td className="table_border" >{(JSON.parse(localStorage.getItem("Tab_jean"))+(JSON.parse(localStorage.getItem("Tab_T_shirt"))+JSON.parse(localStorage.getItem("Tab_Belt"))))}</td>
                  </tr>


                </table>

                
              );
            })}
          </tbody>

        
        </div>
      </div>
    );
  }
}
