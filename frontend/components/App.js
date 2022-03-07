import React from 'react'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          <li>Walk the dog</li>
          <li>Take out trash</li>
        </ul>

        <form>
          <input/>
             <button>Add</button>
           </form>

           <button>Clear</button>
      </div>
    )
  }
}
