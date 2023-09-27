// // 组件形式写法
// import App from '../App'
// import Home from '../views/Home'
// import About from '../views/About'

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// const baseRouter = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/" element={<Navigate to="/home" />}></Route>
//         <Route path="home" element={<Home />}></Route>
//         <Route path="about" element={<About />}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// )

// export default baseRouter

// Navigate重定向组件
import { Navigate } from 'react-router-dom'

// 路由懒加载
import React, { lazy } from 'react'
const Page1 = lazy(() => import('../views/Page1'))
const Page2 = lazy(() => import('../views/Page2'))
const Home = lazy(() => import('../views/Home'))
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
)

const routes = [
  {
    path: '/',
    element: <Navigate to="/page1" />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },
]

export default routes
