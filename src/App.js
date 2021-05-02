//import modules
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Components/Footer";

//import Components
import Header from "./Components/Header/Header";
import HomeScreen from "./Screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Route render={(props) => <Header location={props.location} />} />
        <Route path="/" exact component={HomeScreen} />

        <Route path="/:category" exact component={HomeScreen} />

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
