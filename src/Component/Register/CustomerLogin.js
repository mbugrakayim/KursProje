
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomerService from "../../Service/CustomerService";
import "./Modal.css";
import alertify from "alertifyjs";


function CustomerLogin({ closeModal, isLoggedin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const loginCustomer = (e) => {
    e.preventDefault();
    let getAllUser = [];
    for (let i = 0; i < localStorage.length; i++) {
      getAllUser[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));

    }
    getAllUser.forEach((item, index) => {

      if (item.email === email && password === item.password) {
        localStorage.setItem("loggedin", true);
        alertify.success(`Hoşgeldin ${item.firstName} ${item.lastName}`);
        isLoggedin(true);
        closeModal(false);
        history("/");

      } else if (getAllUser.length - (index + 1) < 0) {
        alertify.warning("Biz Seni Hatanla Sevdik Orhan...")
        setEmail("");
        setPassword("");
      }
    })

  }
  const forgotPw = (e) =>{
    alertify.set('notifier','position', 'top-center');
    alertify.warning('Çok Yakında Sizleler..');
  }
  useEffect((e)=>{
    alertify.set('notifier','position', 'bottom-right');
  });
  return (
    <div className="modalBackground animate">
      <div className="modalContainer">
        <div className="login-box">
          <h2>Login</h2>
          <form onKeyPress={e => {
            if (e.key === 'Enter') {
              loginCustomer(e);
            }
          }} >
            <div className="user-box">
              <input type="mail" name="" value={email} onChange={e => setEmail(e.target.value)} required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="" value={password} onChange={e => setPassword(e.target.value)} required />
              <label>Password</label>
            </div>
            <a href="#" onClick={e => loginCustomer(e)} >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
            <a href="#" className="cancelBtn" onClick={() => closeModal(false)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Cancel
            </a>
          </form>
          <div style={{ marginTop: "15px" }}>
            <a className="forgotBtn" href="#" onClick={()=>forgotPw()}>Forgot Password?</a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CustomerLogin;
