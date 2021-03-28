
function Notes(props){
    let {authToken} = props;
    console.log(authToken);
    return (
        <div className="notes">
            <div className="container"></div>
        </div>
    );
}

export default Notes;