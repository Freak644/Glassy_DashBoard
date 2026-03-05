import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index.css'
import './assets/style/baseStyle.css'
import MyApp from './components/myApp'
import {ToastContainer} from 'react-toastify';

createRoot(document.getElementById('rootContainer')).render(
  <StrictMode>
      <MyApp/>
      <ToastContainer/>
  </StrictMode>,
)
