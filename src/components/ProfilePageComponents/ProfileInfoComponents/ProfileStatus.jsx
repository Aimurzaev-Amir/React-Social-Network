import React from "react";

// let ProfileStatus = (props) => {
//   return (
//     <div>
//       {props.editMode ? (
//         <input
//           onChange={props.onStatusChange}
//           autoFocus={true}
//           onBlur={props.SaveStatus}
//           type="text"
//           value={props.localStatus}
//         />
//       ) : (
//         <p onClick={props.ChangeStatus}>
//           {props.status ? props.status : "User status"}
//         </p>
//       )}
//     </div>
//   );
// };

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    localStatus: this.props.status,
  };
  ChangeStatus = () => {
    this.setState({
      editMode: true,
    });
  };
  SaveStatus = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.localStatus)
  };

  onStatusChange = (e) => {
    this.setState({
      localStatus: e.target.value,
    })
  }
  render() {
    return(
      <div>
      {this.state.editMode ? (
        <input
          onChange={this.onStatusChange}
          autoFocus={true}
          onBlur={this.SaveStatus}
          type="text"
          value={this.state.localStatus}
        />
      ) : (
        <p onClick={this.ChangeStatus}>
          {this.props.status ? this.props.status : "User status"}
        </p>
      )}
    </div>
    )
  }
};

export default ProfileStatus;
