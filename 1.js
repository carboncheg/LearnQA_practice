let date = new Date(),
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