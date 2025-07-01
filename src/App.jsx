import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import '@/index.css'
import store from '@/store/store'
import Menu from '@/components/pages/Menu'

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  )
}

export default App