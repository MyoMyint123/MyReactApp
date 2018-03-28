import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadUsers } from '../../actions/actions'


class Users extends Component {
  constructor(props) {
    super(props)
  }
 
  componentDidMount() {

      const user = [{name:'Myo Myint Kyi'}]
    this.props.dispatch(loadUsers(user))
  }
  
  render() {
    const { users} = this.props
    return (
      <div>
        <ul>
        {
            users.map((user,index)=>{
                return(
                    <li key={index}>{user.name}</li>
                )
            }
            )
        }
        </ul>
      </div>
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