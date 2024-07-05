import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Dachbord from "./pages/Dachbord/Dachbord";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import Invoices from "./pages/invoices/Invoices";
import Form from "./pages/form/Form";
import Calendar from "./pages/calendar/Calendar";
import Faq from "./pages/faq/Faq";
import Bar from "./pages/bar/Bar";
import Pie from "./pages/pie/Pie";
import Line from "./pages/line/Line";
import Geography from "./pages/geography/Geography";
import LineChart from "./pages/line/LineChart";
import Geo from "./pages/geography/Geo";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dachbord />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geo />} />
      {/* ... etc. */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
