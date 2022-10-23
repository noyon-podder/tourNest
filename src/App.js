import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import BookingTab from './components/BookingTab/BookingTab';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
       path: '/',
       element: <BookingTab></BookingTab>,
       loader: () => fetch('http://localhost:5000/')
      }
    ]
  }])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
