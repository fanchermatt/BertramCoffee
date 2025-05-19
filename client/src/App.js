import AppLayout from "./components/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./components/employees/employees";
import Home from "./components/home/home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/employee' element={<Employee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
