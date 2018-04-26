import React, {Component} from 'react'
import Sidebar from './Sidebar'

class Page extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const children = this.props.children;
        return(
            <div className="d-flex">
                <div className="sidebar">
                <Sidebar />
                </div>
                <div className="content">
                    <div className="page">
                        <div className="header">
                            <span>Page Header</span>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;