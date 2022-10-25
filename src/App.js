import { RouterProvider } from 'react-router';
import './App.css';
import routers from './Routes/Config/RoutesConfig';


function App() {
  return (
    <div className="">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
