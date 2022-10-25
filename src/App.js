import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import routers from './Routes/Config/RoutesConfig';


function App() {
  return (
    <div className="">
      <RouterProvider router={routers}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
