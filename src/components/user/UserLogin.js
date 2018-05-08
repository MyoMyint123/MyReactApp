import React, { Component } from 'react'

import InputField from '../product/InputField';

class UserLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:{username:'', password:''}
        }
    }

    handleChange =(event)=>{
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({user});
    }

    render(){
        const user = this.state.user;
        return(
            <div className="d-flex">
                <div className="login-content">
                    <form className="form-horizontal">
                        <InputField
                            type="text"
                            name="username"
                            value={user.username}
                            placeholder="Enter Username"
                            onChange={this.handleChange} />
                        <InputField
                            type="password"
                            name="password"
                            value={user.password}
                            placeholder="Enter Password"
                            onChange={this.handleChange} />
                        <div className="form-group">
                            <div className="col-sm-6">
                                <input className="btn btn-success btn-sm" type="submit" value="Save" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserLogin;