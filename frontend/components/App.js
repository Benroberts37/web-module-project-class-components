import React from 'react'
import Todo from './Todo'
import Form from './Form'
import Todolist from './TodoList'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: true
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  render() {
    const { todos } = this.state

    return (
      <div>
        <h1>Todos</h1>

        <Todolist todos = {todos}/>
        <Form />

           <button>Clear</button>
      </div>
    )
  }
}

export default App
