import React from 'react';
import User from '../../assets/user.png'
import './Login.css';

function Login() {
  return(
      <div className="Container">
        <form>
            <section>
                <img src={User} alt="image user" />
            </section>
            <section className="Inputs">
                <h2>Member Login</h2>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="password"/>
                <button>Login</button>
                <p>Esqueceu sua senha? <a href="#">Clique aqui!</a></p>   
            </section>
        </form>
      </div>
  );
}

export default Login;