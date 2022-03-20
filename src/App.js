import { useCallback, useState } from 'react'
import Hover from './components/Hover'

import useInput from './hooks/useInput'

import List from './components/List'

import useDebaunce from './hooks/useDebounce'

import axios from 'axios'
import useRequest from './hooks/useRequest'

function App() {
  // const username = useInput('')
  // const password = useInput('')

  // const [value, setValue] = useState('')
  // const debouncedCallback = useDebaunce(search, 1000)
  // function search(query) {
  //   fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json)
  //     })
  // }
  // const onChange = (e) => {
  //   setValue(e.target.value)
  //   debouncedCallback(e.target.value)
  // }

  const [todos, loading, error] = useRequest(fetchTodos)

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos?query=`)
  }

  if (loading) {
    return <h1>Идет загрузка</h1>
  }

  if (error) {
    return <h1>Произошла ошибка</h1>
  }

  return (
    <div className='App'>
      {/* 1. 
      <input type='text' {...username} placeholder='username' />
      <input type='text' {...password} placeholder='password' />
      <button onClick={() => console.log(username.value, password.value)}>
        click
      </button>  */}

      {/* 2. <Hover /> */}

      {/* 3.  <List /> */}

      {/* 4. <input type='text' value={value} onChange={onChange} /> */}

      <div>
        {todos &&
          todos.map((todo) => (
            <div
              key={todo.id}
              style={{ padding: 30, border: '2px solid black' }}
            >
              {todo.id}. {todo.title}
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
