//import modules
import { BrowserRouter, Route } from "react-router-dom";

//import Components
import Header from "./Components/Header/Header";
import HomeScreen from "./Screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Route path="/" exact component={HomeScreen} />
    </BrowserRouter>
  );
}

export default App;
