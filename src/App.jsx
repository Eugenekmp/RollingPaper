import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/post/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
