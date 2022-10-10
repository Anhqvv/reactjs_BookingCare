import React, { Component } from 'react';
// import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        };
        this.listenToEmitter();
    }
    listenToEmitter = () => {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            });
        });
    };
    componentDidMount() {}
    toggle = () => {
        this.props.toogleModal();
    };
    //Notice
    handleOnChangeInPut = (e, id) => {
        let copyState = { ...this.state };
        copyState[id] = e.target.value;
        this.setState({
            ...copyState,
        });
        // console.log('copyState',copyState)
    };
    handleAddNewUser = () => {
        let isValid = this.checkValidInput();
        if (isValid === true) {
            this.props.createNewUser(this.state);
        }
        //   console.log('Checking this.props from child:', this.props);

        //   console.log('Use data to submit: ', this.state);
    };
    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            // console.log('>>>Checking arrInput:', arrInput[i]);
            if (!this.state[arrInput[i]]) {
                isValid = false;
                // alert('Checking valid now...')
                break;
            }
        }
        return isValid;
    };

    render() {
        //  console.log('Data from UserManage: ', this.props)
        return (
            <>
                {' '}
                <Modal
                    className="modal-user-container"
                    centered
                    isOpen={this.props.isOpenModal}
                    toggle={() => this.toggle()}
                >
                    <ModalHeader toggle={() => this.toggle()}>Create New User</ModalHeader>
                    <ModalBody>
                        <form>
                            <div>
                                <div className="modal-user-body">
                                    <div className="input-container">
                                        <label htmlFor="">Email: </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your email ..."
                                            onChange={(e) => this.handleOnChangeInPut(e, 'email')}
                                            value={this.state.email}
                                        />
                                    </div>
                                    <div className="input-container">
                                        <label htmlFor="">Password: </label>
                                        <input
                                            type="password"
                                            placeholder="Enter your password ..."
                                            onChange={(e) => this.handleOnChangeInPut(e, 'password')}
                                            value={this.state.password}
                                        />
                                    </div>
                                </div>
                                <div className="modal-user-body">
                                    <div className="input-container">
                                        <label htmlFor="">First Name: </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your first name ..."
                                            onChange={(e) => this.handleOnChangeInPut(e, 'firstName')}
                                            value={this.state.firstName}
                                        />
                                    </div>
                                    <div className="input-container">
                                        <label htmlFor="">Last Name: </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your last name ..."
                                            onChange={(e) => this.handleOnChangeInPut(e, 'lastName')}
                                            value={this.state.lastName}
                                        />
                                    </div>
                                </div>
                                <div className="modal-user-body">
                                    <div className="input-container max-w-input">
                                        <label htmlFor="">address: </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your address ..."
                                            onChange={(e) => this.handleOnChangeInPut(e, 'address')}
                                            value={this.state.address}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className="px-5" onClick={() => this.handleAddNewUser()}>
                            Add New
                        </Button>{' '}
                        <Button color="secondary" className="px-5 ml-3" onClick={() => this.toggle()}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
