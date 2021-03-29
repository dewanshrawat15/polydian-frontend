import "./Profile.css";

function Profile(props){
    let {details} = props;
    return (
        <div className="profile">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        {details.username}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;