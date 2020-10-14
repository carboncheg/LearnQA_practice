const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const http = new XMLHttpRequest(),
    url = 'https://worldtimeapi.org/api/timezone/Asia/Yekaterinburg';
http.open('GET', url);
http.send();

http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(http.responseText);
        let unixtime = data['unixtime'];

        let date = new Date(unixtime * 1000),
            hour = date.getHours(),
            username = 'Серёжа';
    
        if (hour >= 0 && hour <= 4) {
            console.log(`Доброй ночи, ${username}`);
        }
        if (hour >= 5 && hour <= 9) {
            console.log(`Доброе утро, ${username}`);
        }
        if (hour >= 10 && hour <= 16) {
            console.log(`Добрый день, ${username}`);
        }
        else {
            console.log(`Добрый вечер, ${username}`);
        }
    }
};