import './App.css';
import { useState } from 'react';
import CryptoJS from 'crypto-js';

function App() {
  const [password, setPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState("");
  const [plaintext, setPlaintext] = useState("");
  const [encrypted, setEncrypted] = useState("");

  const encrypt = (plaintext) => {
    setPlaintext(plaintext);
    setEncrypted(CryptoJS.AES.encrypt(plaintext, password).toString());
  }

  const decrypt = (encrypted) => {
    setEncrypted(encrypted);
    setPlaintext(CryptoJS.AES.decrypt(encrypted, password).toString(CryptoJS.enc.Utf8));
  }

  const updatePW = (password) => {
    setPassword(password)
    let hidden = "";
    for (let i = 0; i < password.length; i++) {
      hidden += "*";
    }
    setHiddenPassword(hidden)
  }

  return (
    <div className="App">
      <nav>
        <h1>Hush</h1>
        <h1>NFT Forge</h1>
      </nav>
      <section>
        <label>Password</label>
          <br/><textarea className="password" value={hiddenPassword} onFocus={(e) => {e.target.select()}} onChange={(e)=>{ updatePW(e.target.value) }}/>
          <br/>
          <br/><label>Plain Text</label>
          <br/><textarea className="plaintext" value={plaintext} onFocus={(e) => {e.target.select()}} onChange={(e)=>{ encrypt(e.target.value) }}/>
          <br/>
          <br/><label>Encrypted</label>
          <br/><textarea className="encrypted" value={encrypted} onFocus={(e) => {e.target.select()}} onChange={(e)=>{ decrypt(e.target.value) }}/>
      </section>
    </div>
  );
}

export default App;
