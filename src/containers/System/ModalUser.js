import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalUser extends Component {
   constructor(props) {
      super();
      this.state = {};
   }

   componentDidMount() {

   }
   toggle = () => {
    this.props.toogleModal()
   }

   render() {
       console.log('Data from UserManage: ', this.props)
      return (
         <>
            {" "}
            <Modal
               className="modal-user-container" 
               centered


               isOpen={this.props.isOpenModal}
               toggle={() => this.toggle()}
            >
               <ModalHeader toggle={() => this.toggle()}>
                  Create New User
               </ModalHeader>
               <ModalBody>
                <form>
            
                  <div>
                  <div className="modal-user-body">             
                  <div className="input-container">
                    <label htmlfor="">Email: </label>
                    <input type="text" placeholder="Enter your email ..."/>
                  </div>
                  <div className="input-container">
                    <label htmlfor="">Password: </label>
                    <input type="password" placeholder="Enter your password ..."/>
                  </div>
                </div>
                <div className="modal-user-body">             
                  <div className="input-container">
                    <label htmlfor="">First Name: </label>
                    <input type="text" placeholder="Enter your first name ..."/>
                  </div>
                  <div className="input-container">
                    <label htmlfor="">Last Name: </label>
                    <input type="text" placeholder="Enter your last name ..."/>
                  </div>
                  </div>
                  <div className="modal-user-body">
                    
                  <div className="input-container max-w-input">
                    <label htmlfor="">address: </label>
                    <input type="text" placeholder="Enter your address ..."/>
                  </div>
                  </div>
                </div>
                </form>
               </ModalBody>
               <ModalFooter>
                  <Button color="primary" className="px-5" onClick={() => this.toggle()}>
                     Save Changes
                  </Button>{" "}
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
