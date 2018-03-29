import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadUsers } from '../../actions/actions'
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
      detailData: null     
    };

  }

  componentDidMount() {
    getUsers().then((data) => {
      this.props.dispatch(loadUsers(data))
    });    
  }

  handleDetail = (idSlug) =>{
    getUserDetail(idSlug).then((data)=>{
      this.setState({detailData: data[0], show: false, detail: true})
    })
  }

  handleDefault = () =>{
    this.setState({show: true, detail: false});
  }
  
  render() {
    const { users} = this.props;
    const { show, detail, detailData } = this.state;
    return (
      <Page>
        {
          show  ?
                <UserTable users={users} callbackDetail={(idSlug)=>this.handleDetail(idSlug)} />
                :
                null
        }
        {
          detail ?
                  <UserDetail user={detailData} callbackBack={this.handleDefault} />
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