import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "./Components/MenuBar";
import CreateEmployee from "./Pages/CreateEmployee";
import EditEmpData from "./Pages/EditEmpData";
import Employees from "./Pages/Employees";
import Details from "./store/details";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Details>
          <BrowserRouter>
            <MenuBar />
            <Routes>
              <Route path="/" element={<CreateEmployee />} />
              <Route path="/users" element={<Employees />} />
              <Route path="/update/:id" element={<EditEmpData />} />
            </Routes>
          </BrowserRouter>
        </Details>
      </header>
    </div>
  );
};

export default App;
