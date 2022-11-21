
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/topics",
          element: <Topics></Topics>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
      ]
      }
     
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
