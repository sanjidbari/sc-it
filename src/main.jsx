import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './Components/Home/Home.jsx';
import Banner from './Components/Banner/Banner.jsx'
import Brightspace from './Components/Brightspace/Brightspace.jsx'
import Chromebook from './Components/Chromebook/Chromebook.jsx'
import EMA from './Components/EMA/EMA.jsx'
import SumSchool from './Components/SumSchool/SumSchool.jsx'
import Account from './Components/Account/Account.jsx'
import Ticket from './Components/Ticket/Ticket.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'
import Connects from './Components/Connects/Connects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <Banner></Banner>,
      },
      {
        path:'Account',
        element: <Account></Account>,
      },
      {
        path: 'Brightspace',
        element: <Brightspace></Brightspace>
      },
      {
        path: 'Chromebook',
        element: <Chromebook></Chromebook>
      },
      {
        path: 'EMA',
        element: <EMA></EMA>
      },
      {
        path: 'TDSB Connects',
        element: <Connects></Connects>
      },
      {
        path: 'Ticket',
        element: <Ticket></Ticket>
      },
      {
        path: 'Contacts',
        element: <Contacts></Contacts>
      },
      {
        path: 'Summer School',
        element: <SumSchool></SumSchool>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
