import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userActions } from '../../actions'
import Page from '../Page'
import { getUsers, getUserDetail } from '../../services/api'
import UserTable from './UserTable'
import UserDetail from './UserDetail'


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      detail: false, 
      create: false,
      detailData: null     
    };

  }

  componentDidMount() {
    fetch('http://localhost:8080/api/user/read.php')
      .then((res) => res.json())
        .then((data) => {
          console.log(data['records'])
          this.props.dispatch(userActions.loadUsers(data['records']))
      });    

    // getUsers().then((data) => {
    //   console.log(data)
    //   this.props.dispatch(loadUsers(data))
    // });    
  }

  handleDetail = (idSlug) =>{
    fetch('http://localhost:8080/api/user/detail.php', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        id:idSlug,
      })
    }).then((res) => res.json())
        .then((data) => {
          this.setState({detailData: data, show: false, detail: true})
      });   

    // getUserDetail(idSlug).then((data)=>{
    //   this.setState({detailData: data[0], show: false, detail: true})
    // })

  }

  handleNewform = () => {
    this.setState({show: false, detail: false, create: true});
  }

  handleDefault = () =>{
    this.setState({show: true, detail: false});
  }
  
  render() {
    const { users} = this.props;
    const { show, detail, create, detailData } = this.state;
    return (
      <Page>
        {
          show  ?
                <div className="page-content">
                  <UserTable users={users} callbackDetail={(idSlug)=>this.handleDetail(idSlug)} />
                </div>
                :
                null
        }
        {
          detail ?
                  <div className="page-content">
                    <UserDetail user={detailData} callbackBack={this.handleDefault} />
                  </div>
                  :
                  null
        }
        
      </Page>
    )
  }
}
 
// AsyncApp.propTypes = {
//   selectedSubreddit: PropTypes.string.isRequired,
//   dispatch: PropTypes.func.isRequired
// }
 
function mapStateToProps(state) {
  const { users } = state
 
  return {
    users
  }
}
 
export default connect(mapStateToProps)(Users)