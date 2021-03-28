import "./Login.css";
import vector from "../../Assets/vector.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props){
    let { setAuthToken } = props;

    const [username, setUsername] = useState(null);
    const [password, setPassowrd] = useState(null);

    const history = useHistory();

    const handleSubmit = async () => {
        let details = {
            "username": username,
            "password": password
        };
        fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        }).then(response => {
            if(response.ok){
                return response.json();
            }
            else{
                console.error("An error occured");
            }
        }).then(data => {
            setAuthToken(data.authToken);
            history.push("/notes");
        });
    }

    const updateUsernameOrPassword = (identifier, e) => {
        if(identifier === "username"){
            setUsername(e.target.value);
        }
        if(identifier === "password"){
            setPassowrd(e.target.value);
        }
    }

    return (
        <div className="home">
            <div className="laptop">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-container">
                                <div className="row">
                                    <div className="col-md-10">
                                        <h1 className="login-container-title shift-left">
                                            Enter
                                        </h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="login-container-text shift-left">
                                            Login and start using Polydian
                                        </p>
                                    </div>
                                </div>
                                <br /><br />
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="shift-left">
                                            <div className="form-group auth-groups">
                                                <label htmlFor="email-laptop">Username:</label>
                                                <input name="username" type="text" className="form-control" id="email-laptop" onChange={(e) => updateUsernameOrPassword("username", e)} />
                                            </div>
                                            <div className="form-group auth-groups">
                                                <label htmlFor="pwd-laptop">Password:</label>
                                                <input name="password" type="password" className="form-control" id="pwd-laptop" onChange={(e) => updateUsernameOrPassword("password", e)} />
                                            </div>
                                            <br />
                                            <button onClick={handleSubmit} type="submit" className="btn btn-default auth-bttn">
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-image-placeholder">
                                <img className="img-responsive" src={vector} alt="Login register screen vector" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="row">
                    <div className="col-md-10">
                        <h1 className="login-container-title text-center">
                            Enter
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="login-container-text text-center">
                            Login and start using Polydian
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-responsive" src={vector} alt="Login register screen vector" />
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-10">
                        <div style={{
                            paddingLeft: 20,
                            paddingRight: 20
                        }}>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group auth-groups">
                                    <label htmlFor="email-mob">Username:</label>
                                    <input name="username" type="text" className="form-control" id="email-mob" onChange={(e) => updateUsernameOrPassword("username", e)} />
                                </div>
                                <div className="form-group auth-groups">
                                    <label htmlFor="pwd-mob">Password:</label>
                                    <input name="password" type="password" className="form-control" id="pwd-mob" onChange={(e) => updateUsernameOrPassword("password", e)} />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-default auth-bttn">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;