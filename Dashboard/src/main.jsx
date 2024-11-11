import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'



const element = document.querySelector('#root')
const root = ReactDOM.createRoot(element)

root.render(<App/>)