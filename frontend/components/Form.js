import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAdd(this.state.input)
  }

  handleChange = (e) => {
    this.setState(e)({
      ...this.state,
      input: e.target.value
    })
  }
  render() {
    return (
      (<form>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Add</button>
      </form>)
    )
  }
}

export default Form;
