import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from '@/store/store';
import Menu from '@/components/pages/Menu';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Provider>
  );
}

export default App;