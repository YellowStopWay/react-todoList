import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import { AuthRoute } from '@/components/AuthRoute'
import Publish from '@/pages/Publish/index.js'
import Article from '@/pages/Article/index.js'
import Home from '@/pages/Home/index.js'
import { HistoryRouter, history } from './utils/history'
function App () {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          {/* 需要鉴权的路由 */}
          <Route path="/*" element={
            <AuthRoute>
              <Layout />
            </AuthRoute>
          } >
            <Route index element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="publish" element={<Publish />} />
          </Route>
          {/* 不需要鉴权的路由 */}
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </HistoryRouter>
  )
}

export default App
