import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

console.log("Start")

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('header')
)

class TestApp extends React.Component {

    constructor(prop) {
        super(prop)
    }

    getComponent = () => {
        console.log(this.testES7())
    }

    render = () => {
        let theme = getMuiTheme();
        return(
          <MuiThemeProvider muiTheme={theme}>
            <RaisedButton label='test' onClick={this.getComponent}/>
          </MuiThemeProvider>
        )
    }

    testES7 = () => "Must be ES7"
}

ReactDOM.render(<TestApp />, document.getElementById('content'))

// let theme = getMuiTheme();
// ReactDOM.render(
// <MuiThemeProvider muiTheme={theme}>
// <RaisedButton label='test'/>
// </MuiThemeProvider>
// , document.getElementById('content'))

