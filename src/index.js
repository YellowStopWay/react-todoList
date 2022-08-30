import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//导入antd的样式
import 'antd/dist/antd.min.css'
//导入公共样式
import './style/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

