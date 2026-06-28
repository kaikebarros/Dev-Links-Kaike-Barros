import "./App.css";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <>
    <div className="app">
      <Header />
      <Profile />
      <Card />
      <Footer />
      </div>
    </>
  );
}

export default App;
