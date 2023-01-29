import "./App.css";

import Header from "../Header/index";
import ProductList from "../ProductList/index";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>My name is jeff</h1>
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
