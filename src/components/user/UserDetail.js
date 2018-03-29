import React, {Component} from 'react'

const UserDetail = (props) =>{
    return(
        <div className="page-content">
            <div>
                <ul>
                    <li>{props.user.name}</li>          
                    <li>{props.user.email}</li>             
                    <li>{props.user.mobile_phone}</li> 
                </ul>
            </div>
            <div>
                <button className="btn btn-default" onClick={props.callbackBack}>Back</button>
            </div>
        </div>
    )
}

export default UserDetail;