import React from 'react'
import ReactDOM from 'react-dom'

console.log("Start")

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('header')
)

class TestApp extends  React.Component {
    getComponent = () => {
        console.log(this.testES7())
    }

    render() {
        return(
          <div>
            <ul>
              <li onClick={this.getComponent}>Component 1</li>
            </ul>
          </div>
        )
    }

    testES7 = () => "Must be ES7"

}

ReactDOM.render(<TestApp />, document.getElementById('content'))

