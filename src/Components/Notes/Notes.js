import { useState, useEffect } from "react";
import "./Notes.css";
import logo from "../../Assets/logo.png";
import { formatDate, formatTime, formatNoteText } from "../../utils/utils";
const Link = require("react-router-dom").Link;

function NoteCard(props){
    let {url, date, time, text} = props;

    const openWebsite = () => {
        window.open(url);
    }

    return (
        <div className="col-md-6">
            <div className="note-card">
                <div className="row">
                    <div className="col-md-7 notecard-date-placeholder">
                        {formatDate(date)}
                    </div>
                    <div className="col-md-4 col-md-offset-1 notecard-time-placeholder">
                        {formatTime(time)}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10 notecard-url-placeholder" onClick={openWebsite}>
                        {url}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12 notecard-text">
                        {formatNoteText(text)}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4 col-md-offset-8 notecard-icon-holder">
                        <span className="notecard-icon-placeholder">
                            <i className="fa fa-download"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Notes(props){

    let {details} = props;
    let authToken = details.authToken;
    let username = details.username;

    const [cards, fetchCards] = useState(null);
    const [hasDataLoaded, updateIfLoaded] = useState(false);
    const [shouldCallApi, updateApiCallStatus] = useState(true);
    const [cardWidgets, updateCardRow] = useState([]);

    const fetchCardsFromAPI = async () => {
        fetch("http://localhost:3000/note", {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': authToken
            }
        }).then(response => {
            if(response.ok){
                return response.json();
            } else {
                console.log("An error occurred");
            }
        }).then(data => {
            fetchCards(data.message);
            updateIfLoaded(true);
            updateApiCallStatus(false);
        });
    }

    useEffect(() => {
        if(hasDataLoaded === false){
            fetchCardsFromAPI();
        } else {
            if(shouldCallApi){
                let elems = [];
                for (let index = 0; index < cards.length; index++) {
                    const element = cards[index];
                    let newCard = <NoteCard {...element} key={element.url} />
                    elems.push(newCard);
                }
                updateCardRow(elems);
            }
        }
    });

    return (
        <>
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <center>
                                <img src={logo} className="img-responsive" width="96" alt="Polydian logo" />
                            </center>
                        </div>
                        <div className="col-md-7">
                            <div className="input-placeholder">
                                <div className="form-group">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <Link to="/profile" className="polydian-home-link">
                            <div className="col-md-3 username-placeholder">
                                @{username}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="notes">
                <div className="container">
                    <div className="row">
                        {
                            cardWidgets.length > 0 && cardWidgets
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notes;