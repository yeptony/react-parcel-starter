import "./style.scss";
import React from "react"
import ReactDOM from "react-dom"

const App = () => (
  <h1>Hello React with parcel!!</h1>
)

const rootDiv = document.getElementById('root')
ReactDOM.render(<App />, rootDiv)
