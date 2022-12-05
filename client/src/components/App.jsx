import React, { Fragment } from 'react'
import InputTodo from './InputTodo'
import ListTodos from './ListTodos'
import '../index.css'

function App() {
  return (
    <div className="App">
      <Fragment>
        <div className="container">
          <InputTodo/>
          <ListTodos/>
        </div>
      </Fragment>
    </div>
  )
}

export default App
