import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { subreddit } from '../actions/index'
import Picker from '../components/Picker'
import Page from './Page'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

  }
 
  componentDidMount() {

  }
 
 
  handleChange(nextSubreddit) {
    this.props.dispatch(subreddit.selectSubreddit(nextSubreddit))
  }

 
  render() {
    const { selectedSubreddit} = this.props
    return (
      <div>
        <Page>
          <Picker
            value={selectedSubreddit}
            onChange={this.handleChange}
            options={['reactjs', 'frontend']}
          />
        </Page>
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