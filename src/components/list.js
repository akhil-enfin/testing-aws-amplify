import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import img from "../assets/img/no-search-result.svg";
import logo from "../../src/logo.svg";

const message = "No appointment is available at";
const apiService = require("../services/api.service");

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      place: this.props.match.params.place,

      data: [],
      isLoading: true,
    }
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    // this.setState({ isLoading: true });
    this.getApi();
  }
  getApi = async () => {
    await apiService
      .listAppoinments(this.state.id)
      .then((res) => {
        console.log(res.data.centers.length, "rsssss");
        this.setState({ data: res.data.centers }, () => {
          this.setState({ isLoading: false });
          console.log(this.state.data.length, "gettt");
        });
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log(err);
      });
  };
  checkAvilable = (sessions) => {
    console.log(sessions, "sessions");
  };
  render() {
    return (
      <div className="container">
        { this.state.isLoading === false ? (
          <div>
            {this.state.data.length > 0 ? (
              <React.Fragment>

                <Accordion allowMultipleExpanded>
                  {this.state?.data.map((item) => (
                    <AccordionItem key={item.center_id}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.name}{" "}
                          {/* <div className="block-name">Block Name : {item.block_name}</div> */}

                          <span
                            className={
                              item?.fee_type === "Free" ? "feeType" : "paidType"
                            }
                          >
                            {item.fee_type}
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <table class="w3-table w3-bordered">
                          <tr>
                            <th>available capacity</th>
                            <th>date</th>
                            <th>Action</th>
                          </tr>
                          {item.sessions.map((val, i) => {
                            return (
                              <tr key={i}>
                                <td>{Math.round(val.available_capacity)}</td>
                                <td>{val.date}</td>
                                <td>
                                  {" "}
                                  <a
                                    href="https://selfregistration.cowin.gov.in/"
                                    target="_blank"
                                  >
                                    schedule
                                </a>
                                </td>
                              </tr>
                            );
                          })}
                        </table>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}

                </Accordion>
                <div style={{ textAlign: 'center', marginTop: '36px' }}>
                  <button className="refresh" onClick={() => window.location.reload()}>Refresh</button>
                </div>
              </React.Fragment>
            ) : (
                <div className="item-center">
                  <div className="figure text-center">
                    <img
                      src={img}
                      className="figure-img img-fluid rounded"
                      alt=""
                    />
                    <div className="figure-caption text-center">
                      <p className="h3">{message} {" "}{this.state.place}.</p>
                      <button className="refresh" onClick={() => window.location.reload()}>Refresh</button>
                    </div>
                  </div>
                </div>
              )}
          </div>
        ) : (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

              </header>
            </div>
          )
        }
      </div>
    );

  }
}
