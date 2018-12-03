import React, {Component, Fragment} from 'react'
import { CSSTransition } from 'react-transition-group'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState({
      show: this.state.show === true ? false : true
    })
  }

  render () {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          tomeout={300}
          className='fade'
        >
          <div>hee</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }
}

export default App