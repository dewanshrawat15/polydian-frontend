import "./Home.css";
import hero from "../../Assets/hero.png";

const Link = require("react-router-dom").Link;

function Home(){
    return (
        <div className="home">
            <div className="laptop">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <h1 className="home-title shift-left">Polydian</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="polydian-hero-container shift-left">
                                <div className="row">
                                    <div className="col-md-11">
                                        <h1 className="polydian-hero-container-title">Welcome to Polydian</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="polydian-hero-container-text">
                                            A note generation platform to generate notes from the given website URL. Just
                                            login into our system and enter the URL of the website you need to create a note from.
                                        </p>
                                    </div>
                                </div>
                                <br /><br />
                                <div className="row">
                                    <div className="col-md-8">
                                        <Link to="/login" className="polydian-hero-container-link">
                                            <span className="polydian-hero-container-bttn">
                                                Enter the platform <i className="fa fa-chevron-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <center>
                                <img width="512" className="img-responsive" src={hero} alt="Polydian hero vector" />
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <h1 className="home-title text-center">Polydian</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <center>
                                <img width="512" className="img-responsive" src={hero} alt="Polydian hero vector" />
                            </center>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <h1 className="polydian-hero-container-title text-center">Welcome to Polydian</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="polydian-hero-container-text text-center">
                                A note generation platform to generate notes from the given website URL. Just
                                login into our system and enter the URL of the website you need to create a note from.
                            </p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-8">
                            <center>
                                <Link to="/login" className="polydian-hero-container-link">
                                    <span className="polydian-hero-container-bttn">
                                        Enter the platform <i className="fa fa-chevron-right"></i>
                                    </span>
                                </Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;