import "./App.css";
import Modal from "./Components/Modal";
function App(){
  return(
    <body>
      <div className="todo-container">
        <div className="card">
          <div className="card-content">
              <h2>Learn React</h2>
            <button className="btn">Done</button>
            <Modal/>        
          </div>
        </div>
      </div>
      <div className="todo-container">
        <div className="card">
          <div className="card-content">
              <h2>Play Video Games</h2>
            <button className="btn">Done</button>
            <Modal/>        
          </div>
        </div>
      </div>
      <div className="todo-container">
        <div className="card">
          <div className="card-content">
              <h2>Do Homework</h2>
            <button className="btn">Done</button>
            <Modal/>        
          </div>
        </div>
      </div>
    </body>
  );
}
export default App;