import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Layout from './routes/Layout'
import DetailView from './routes/DetailView'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index={true} element={<App />}/>
        </Route>
        <Route index ={false} path="/coinDetails/:symbol" element={<DetailView/>}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <Link style={{ color: "white" }} to="/">
                Back to Home
              </Link>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


// issues --> CoinDetail does not actually render, and neither does the "NotFound" page