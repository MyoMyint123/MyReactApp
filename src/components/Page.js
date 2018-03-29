import React, {Component} from 'react'

class Page extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const children = this.props.children;
        return(
            <div className="page">
                <div className="header">
                    <span>Page Header</span>
                </div>
                {children}
            </div>
        )
    }
}

export default Page;