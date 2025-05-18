import AppLayout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./components/employee";
import Home from "./components/home";
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
