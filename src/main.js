import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

console.log("Start")

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('header')
)

class TestApp extends React.Component {

    constructor() {
        super()
        this.state = {
            value: '1_0',
            things: [1, 'two', 'iii']
        }
    }

    getComponent = () => {
        console.log(this.testES7())
    }

    handleChange = (event, index, value) => this.setState({value});  // short for {value: value}

    render = () => {
        let theme = getMuiTheme();
        let items = this.state.things.map( (x,n) => {
            let key = `${x}_${n}`
            return(<MenuItem key={n} value={key} primaryText={key}/>)
        })
        return(
          <MuiThemeProvider muiTheme={theme}><div>
            <RaisedButton label='test' onClick={this.getComponent}/><br/>
            <SelectField floatingLabelText="Frequency" value={this.state.value}
              onChange={this.handleChange}>{items}</SelectField>
          </div></MuiThemeProvider>
        )
    }

    testES7 = () => {
        let added = {...this.state}
        added.things.push('otters')
        this.setState(added)
        return `Must be ES7: ${this.state.value}`
    }
}

ReactDOM.render(<TestApp/>, document.getElementById('content'))
