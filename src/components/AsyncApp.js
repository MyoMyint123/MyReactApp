import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubreddit } from '../actions/actions'
import Picker from '../components/Picker'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

  }
 
  componentDidMount() {

  }
 
 
  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }

 
  render() {
    const { selectedSubreddit} = this.props
    return (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={['reactjs', 'frontend']}
        />
      </div>
    )
  }
}
 
AsyncApp.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}
 
function mapStateToProps(state) {
  const { selectedSubreddit } = state

 
  return {
    selectedSubreddit
  }
}
 
export default connect(mapStateToProps)(AsyncApp)