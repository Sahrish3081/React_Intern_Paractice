import { useState } from 'react'
import './App.css'
import logo from './assets/images.jpg'
import { Fragment } from 'react'
function App() {
  const [count, setCount] = useState(0)
  return (
    <Fragment>
  <div className="container">
    <div className="head">
      <img src={logo} alt="React Logo" />
      <h1>React Facts</h1>
    </div>

    <div className="content">
      <h2>Why Developers Love React</h2>

      <ul>
        <li>⚛️ React is a JavaScript library for building user interfaces.</li>
        <li>🧩 It uses reusable components to create scalable applications.</li>
        <li>⚡ Virtual DOM improves performance by updating only what changes.</li>
        <li>🔄 One-way data flow makes applications predictable and easier to debug.</li>
        <li>🌍 React is widely used in modern web development and has a strong community.</li>
      </ul>
    </div>
  </div>
</Fragment>
    
  )
}

export default App
