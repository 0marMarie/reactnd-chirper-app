import React, { Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <LoadingBar />
        <div className='container'>
          <Nav />
          {this.props.loading
            ? null
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' exact component={TweetPage} />
                <Route path='/new' exact component={NewTweet} />
              </div>}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)