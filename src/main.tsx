import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routes/index.tsx'
import { Bounce, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers}/>
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      limit={1}
    />
  </StrictMode>,
)
