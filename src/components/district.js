import React from "react";
import { NavLink, Redirect } from "react-router-dom";

export default class District extends React.Component {
  state = {
    district: [
      { district_id: 301, district_name: "Alappuzha" },
      { district_id: 307, district_name: "Ernakulam" },
      { district_id: 306, district_name: "Idukki" },
      { district_id: 297, district_name: "Kannur" },
      { district_id: 295, district_name: "Kasaragod" },
      { district_id: 298, district_name: "Kollam" },
      { district_id: 304, district_name: "Kottayam" },
      { district_id: 305, district_name: "Kozhikode" },
      { district_id: 302, district_name: "Malappuram" },
      { district_id: 308, district_name: "Palakkad" },
      { district_id: 300, district_name: "Pathanamthitta" },
      { district_id: 296, district_name: "Thiruvananthapuram" },
      { district_id: 303, district_name: "Thrissur" },
      { district_id: 299, district_name: "Wayanad" },
    ],
  };

  componentDidMount() { }

  render() {
    return (
      <div class="container">
        <h2>List Districts</h2>
        <div class="list-group">
          {this.state.district.map((dis) => {
            return (
              <NavLink class="list-group-item"
                to={'/' + dis.district_id + '/' + dis.district_name}>
                {dis.district_name}
              </NavLink>

            );
          })}
        </div>
      </div>
    );
  }
}
