import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
class UserManage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         arrUsers: [],
      };
   }

   async componentDidMount() {
      let response = await getAllUsers("All");
      if (response && response.errCode === 0) {
         this.setState({
            arrUsers: response.users,
         });
      }
      console.log("getAllUsers response:", response);
   }
   render() {
      const {arrUsers} =  this.state
    //   const arrUsers = this.state.arrUsers;
    //   console.log(">>> Checking state current", this.state.arrUsers);
      return (
         <div className="user-container">
            <div className="title text-center">Manager users with QA</div>
            <div className="user-table mt-3 mx-1">
               <h1>A Fancy Table</h1>

               <table id="customers">
                  <tr>
                     <th>Email</th>
                     <th>First name</th>
                     <th>Last name</th>
                     <th>Address</th>
                     <th>Actions</th>
                  </tr>
                  {arrUsers &&
                     arrUsers.map((user, index) => {
                        return (
                           <tr>
                              <td>{user.email}</td>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.address}</td>
                              <td>
                                <button className="btn-edit" type=""><i className="fas fa-edit"></i></button>
                                <button className="btn-delete" type=""><i className="fas fa-trash"></i></button>
                              </td>
                           </tr>
                        );
                     })}
               </table>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {};
};

const mapDispatchToProps = (dispatch) => {
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
