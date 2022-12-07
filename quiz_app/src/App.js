
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h3 className='questionNr'>Question 1/4</h3>
        <h3 className='question'>What is the capital of Albania?</h3>
        <div className='buttons'>
          <div className='upper'>
            <button className='b'>Tirana</button>
            <button className='b'>Durres</button>
          </div>
          <div className='lower'>
            <button className='b'>Mumbai</button>
            <button className='b'>Dubai</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
