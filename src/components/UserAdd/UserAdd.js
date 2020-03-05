import React from "react";

class AddUser extends React.Component {
    state = {
        show: false
    };
    toggle = () => {
        this.setState({show: !this.state.show})
    };
    showForm = (e) => {
        e.preventDefault();
        this.toggle();
    };
    passShowForm = (state) => {
        this.setState({show: state})
    };

    render() {
        if (this.state.show) {
            return (
                <div className={"userAdd"}>
                    <span className={"userAddTitle"}>Nowy pracownik</span>
                    <div className={"userAddIcon"} onClick={this.showForm}/>
                    {/*<UserAddForm passShowForm={this.passShowForm}/>*/}
                    {/*<UserList businessDays={this.props.businessDays}/>*/}
                </div>
            )
        } else {
            return (
                <div className={"userAdd"}>
                    <span className={"userAddTitle"}>Nowy pracownik</span>
                    <div className={"userAddIcon"} onClick={this.showForm}/>
                    {/*<UserList businessDays={this.props.businessDays}/>*/}
                </div>
            )
        }
    }
}

export default AddUser