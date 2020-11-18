import React, {useEffect, useState} from 'react';
import Computer from 'bitcoin-computer';
import './App.css';

function App () {
  const [computer] = useState (
    new Computer ({
      seed: 'pumpkin ball buddy resemble dutch trust mushroom trumpet gun fashion vibrant nature',
    })
  );
  const [balance, setBalance] = useState (0);
  const [amount, setAmount] = useState (0);
  const [to, setTo] = useState ('');
  useEffect (
    async () => {
      setBalance (await computer.db.wallet.getBalance ());
    },
    [computer.db.wallet]
  );

  const handleSubmit = async evt => {
    evt.preventDefault ();
    const {txid} = await computer.db.wallet.send (parseInt (amount), to);
    alert (`Sent ${amount} to ${to} in tx with id\n${txid}`);
  };
  const ID = 'Greg Ward';
  return (
    <div className="App">

      <h3 class="title">Local Peace Initiative</h3>

      <div class="nav">
        <img src="../hburg.jpg" alt="harrisonburg logo" />
      </div>
      <div class="wallet-ui">
        <h2>Friendly City Member Wallet</h2>
        <h3>ID: {ID}</h3>
        <b>
          Address
        </b> &nbsp; {computer.db.wallet.getAddress ().toString ()}
        <br /><b>Balance</b>&nbsp;{balance}
        <h3>Send</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Amount&nbsp;
            <input
              type="
        number"
              value={amount}
              onChange={e => setAmount (e.target.value)}
            />
          </label>
          <br />
          <label>
            To&nbsp;
            <input
              type="
        string"
              value={to}
              onChange={e => setTo (e.target.value)}
            />
          </label>
          <br />
          <input type="submit" value="Send Token" />
        </form>
      </div>
      <div class="footer">
        <ul class="businesses">
          <li>Participating Businesses</li>
          <li>My Rewards</li>
          <li>My Dashboard</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
