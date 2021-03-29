const formatDigit = (num) => {
    if (num === 0){
        return "12";
    }
    else {
        if (num >= 1 && num <= 9){
            return "0" + num.toString();
        } else {
            return num.toString();
        }
    }
}

const formatNum = (num) => {
    if(num > 12){
        return formatDigit(num - 12);
    } else {
        return formatDigit(num);
    }
}

const formatTime = (timeStr) => {
    let hour, minutes;
    timeStr = timeStr.split(":");
    hour = parseInt(timeStr[0]);
    minutes = parseInt(timeStr[1]);
    let timeString = "";
    let mode;
    if(hour > 12){
        mode = "P.M.";
    } else {
        mode = "A.M.";
    }
    let tempHour = formatNum(hour);
    timeString = tempHour + ":" + formatDigit(minutes) + " " + mode;
    return timeString;
}

const getMonth = (monthNum) => {
    let monthString;
    switch (monthNum) {
        case 1:
            monthString = "January"
            break;
        case 2:
            monthString = "February";
            break;
        case 3:
            monthString = "March";
            break;
        case 4:
            monthString = "April";
            break;
        case 5:
            monthString = "May";
            break;
        case 6:
            monthString = "June";
            break;
        case 7:
            monthString = "July";
            break;
        case 8:
            monthString = "August";
            break;
        case 9:
            monthString = "September";
            break;
        case 10:
            monthString = "October";
            break;
        case 11:
            monthString = "November";
            break;
        case 12:
            monthString = "December";
            break;
    }
    return monthString;
}

const formatDate = (dateString) => {
    let dateStringLs = dateString.split("/");
    let date, month, year;
    date = formatDigit(parseInt(dateStringLs[0]));
    month = getMonth(parseInt(dateStringLs[1]));
    year = parseInt(dateStringLs[2]);
    let dateStr = date + "th " + month + " " + year.toString();
    return dateStr;
}

const formatNoteText = (noteText) => {
    return noteText.substring(0, 180);
}

exports.formatTime = formatTime;
exports.formatDate = formatDate;
exports.formatNoteText = formatNoteText;