import React, { Component } from 'react';
// import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserApi,deleteUserApi } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false,
        };
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }
    getAllUsersFromReact = async () => {
        let response = await getAllUsers('All');
        console.log('getAllUsers response:', response);
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users,
            });
        }
    };
    toogleModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        });
    };

    createNewUser = async (data) => {
        try {
            let res = await createNewUserApi(data);
            console.log('Checking res:', res);
            if (res && res.errCode !== 0) {
                alert(res.errMessage);
            }
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModal: false,
                });
                emitter.emit('EVENT_CLEAR_MODAL_DATA',data)
            }
            // console.log('[DAD] give data,', data)
        } catch (e) {
            console.log(e);
        }
    };

    hanleClickDelete = async (user) => {
      let res = await deleteUserApi(user.id)
      console.log('res hanleClickDelete', res)
      if(res && res.errCode === 0){
         await this.getAllUsersFromReact();
      }


    }

    render() {
        const { arrUsers } = this.state; //destruturing
        //   console.log(">>> Checking state current", this.state.arrUsers);
        return (
            <div className="user-container">
                <ModalUser
                    isOpenModal={this.state.isOpenModal}
                    toogleModal={this.toogleModal}
                    createNewUser={this.createNewUser}
                />
                <div className="title text-center">Manager users with QA</div>
                <div className="user-table mt-3 mx-1">
                    <div className="user-title">
                        <h2 onClick={() => this.toogleModal()}>
                            <i className="fas fa-plus"></i>Create New User
                        </h2>
                    </div>

                    <table id="customers">
                        <tbody>
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
                                        <tr key={user.id}>
                                            <td>{user.email}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.address}</td>
                                            <td>
                                                <button className="btn-edit" type="">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="btn-delete" type=""
                                                onClick={ () => this.hanleClickDelete(user)}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
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
