import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化
import 'reset-css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// ui样式
// 全局样式
import './assets/styles/global.scss'
// 组件样式

// import Router from './router'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
