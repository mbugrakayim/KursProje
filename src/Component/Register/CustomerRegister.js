
import alertify from "alertifyjs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import CustomerService from "../../Services/CustomerService";
import style from "./customer.module.css";
function CustomerRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveCustomer= e=>{
    e.preventDefault();
    const customer = { firstName , lastName  ,phoneNo ,email ,password};
    const user = "user" + 1;
    localStorage.setItem(user,JSON.stringify(customer));
    alertify.success("Yeni Üye Kaydı Başarılı...");
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
    setPhoneNo("");
    navigate("/");
  }
  return (
    <div
      className="container"
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="row">
        <div className="col-md-12">
          <div className={style.heading}>
            <h2 className="text-center">HESABINIZI OLUŞTURUN!</h2>
          </div>
        </div>
        <div
          className="col-md-10"
          style={{ background: "#f9f9f9"  , marginLeft :"10%"}}
        >
          <div className={style.contact}>
            <div
              className="col-md-7"
              style={{ padding: "20px 30px 21px", float: "left" }}
            >
              <div>
                <div className="form">
                  <h2>Kayıt olun</h2>
                </div>
                <form style={{ padding: "20px 0" }}>
                  <div
                    className="form-group input-group"
                    style={{ marginBottom: "15px" }}
                  >
                    <span className={style.icon}>
                      <i className="fa fa-user" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Adınız"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div
                    className="form-group input-group"
                    style={{ marginBottom: "15px" }}
                  >
                    <span className={style.icon}>
                      <i className="fa fa-user" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Soyadınız"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  
                  <div
                    className="form-group input-group"
                    style={{ marginBottom: "15px" }}
                  >
                    <span className={style.icon}>
                      <i className="fa fa-phone-alt" />
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Telefon Numaranız"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </div>
                  <div
                    className="form-group input-group"
                    style={{ marginBottom: "15px" }}
                  >
                    <span className={style.icon}>
                      <i className="fa fa-envelope" />
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="E-posta adresiniz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div
                    className="form-group input-group"
                    style={{ marginBottom: "15px" }}
                  >
                    <span className={style.icon}>
                      <i className="fa fa-key" />
                    </span>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Şifreniz"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-lg"
                    style={{ width: "100%" }}
                    onClick={e => saveCustomer(e)}
                  >
                    Kaydı Tamamla
                  </button>
                </form>
              </div>
            </div>
            <div
              className="col-md-5"
              style={{
                padding: "20px 20px 150px",
                background: "#2a2a2a",
                float: "left",
              }}
            >
              <div
                style={{ padding: "20px 20px 50px", background: "#2a2a2a" }}
              >
                <h2 style={{ color: "white" }}>Ücretsiz Kaydolun</h2>
                <p
                  style={{
                    color: "white",
                    padding: "20px 0",
                    fontSize: "16px",
                  }}
                >
                  Kayıt olarak birçok avantaj elde edeceksiniz
                </p>
                <p style={{ color: "white" }}>
                  Yeni Filmlerden Haberden Olun
                </p>
                <p style={{ color: "white" }}>
                  Güncel Burç Yorumlarından ilk siz haberden olun
                </p>
                <p style={{ color: "white" }}>Oyunlarda Bonus puan kazanın</p>
              </div>
              <div style={{ color: "white" }}>
                <i
                  className="fa fa-envelope"
                  style={{
                    background: "#fff",
                    borderRadius: "18px",
                    color: "black",
                    height: "35px",
                    marginRight: "10px",
                    marginTop: "10px",
                    padding:"10px",
                    textAlign:"center",
                    width:"35px"
                  }}
                />
                <span>asddsqweas@gmail.com</span>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerRegister;
