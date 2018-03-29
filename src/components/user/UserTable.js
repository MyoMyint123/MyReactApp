import React, { Component } from 'react'

class UserTable extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {users, callbackDetail} = this.props;
        const style = {
            margin: 12,
          };
        return(
            <div className="page-content">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th> 
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile_phone}</td>
                                    <td><button onClick={()=>callbackDetail(user.id)}>Detail</button></td>
                                </tr>
                                
                            )
                        }
                        )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserTable;