import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./signin.css"
const Signin = ()=>{
    return <div className="signin__page">
        <Navbar />
            <form className="signin__form">
                <h2 className="signin__title">Sign In</h2>
                <div className="signin__inputs__container">
                    <input className="signin__input" 
                    type="text"
                    placeholder="Email Address"
                    />
                    <input className="signin__input" 
                    type="password"
                    placeholder="Password Address"
                    />
                </div>
                <button className="signin__input_button">
                    sign in
                </button>
                <div className="sigin__help">
                    <label htmlFor="remember">
                        <input type="checkbox" />
                        remember me 
                    </label>
                    <a href="#">need help?</a>
                </div>

                <div className="sigin__footer">
                    <div className="footer__top">
                        New to Netflix? <Link to="/signup">Sign up now.</Link> 
                    </div>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                </div>
            </form>  
    </div>
}


export default Signin;