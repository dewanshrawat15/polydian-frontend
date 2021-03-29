import "./Profile.css";
import logo from "../../Assets/logo.png";
const Link = require("react-router-dom").Link;

function Profile(props){
    let {details} = props;
    return (
        <div className="profile">
            <div className="container">
            <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center">
                        <center>
                            <img className="img-responsive" src={logo} width="256" />
                        </center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center profile-username">
                        @{details.username}
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <center>
                            <Link to="" >
                                <span className="logout-bttn">
                                    Logout
                                </span>
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;