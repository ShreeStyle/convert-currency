import './App.css';

function App() {
  return (
    <div className="App">

     <h2> Currency Converter</h2>

     <input
     type = "number"
     placeholder='Enter amounttt plz'
     style = {{marginRight : "10px", padding : "6px"}}>

     </input>

    <select style={{marginRight : "10px", padding : "6px"}}>
    <option value= "USD">USD - US dollar</option>
        <option value= "RUB">RUB - Russian ruble</option>

    <option value= "EUR">EUR - Euro</option>

    <option value= "INR">INR - Indian rupee</option>

    <option value= "GBP">GBP - British pound </option>
    <option value= "JPY">JPY - Japanese Yen</option>
    <option value= "AUD">AUD - Australian dollar</option>
    <option value= "CAD">CAD - Canadian dollar</option>
    <option value= "CHF">CHF - SWiss franc</option>
    <option value= "CNY">CNY - Chinese YUan</option>

    </select>




    <select style={{marginRight : "10px", padding : "6px"}}>
    <option value= "USD">USD - US dollar</option>
        <option value= "RUB">RUB - Russian ruble</option>

    <option value= "EUR">EUR - Euro</option>

    <option value= "INR">INR - Indian rupee</option>

    <option value= "GBP">GBP - British pound </option>
    <option value= "JPY">JPY - Japanese Yen</option>
    <option value= "AUD">AUD - Australian dollar</option>
    <option value= "CAD">CAD - Canadian dollar</option>
    <option value= "CHF">CHF - SWiss franc</option>
    <option value= "CNY">CNY - Chinese YUan</option>

    </select>

    
{/* 
     <input type="number"></input> */}
     <button>Convert</button>



    </div>
  );
}

export default App;
