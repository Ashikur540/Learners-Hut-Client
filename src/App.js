import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import routers from './Routes/Config/RoutesConfig';

function App() {
  return (
    <div className="">
      <ToastContainer />
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
