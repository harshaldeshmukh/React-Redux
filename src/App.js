import logo from './logo.svg';
import './App.css'; 
import User from './User';
import HomeContainer from './containers/HomeContainer';



function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
    
      {/* <User data={{name:"Harshal Deshmukh", age:26}}/> */}

      <HomeContainer/>
    </div>
  );
}

export default App;
