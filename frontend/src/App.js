import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import DetailsPage from "./components/detailsPage/DetailsPage";
import Footer from "./components/footer/Footer";
import CategoryPosts from "./components/category/CategoryPost";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="details/:slug" element={<DetailsPage />} />
            <Route path="category/:id" element={<CategoryPosts />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
