let Clock_data;

const Clock_locate = document.getElementById('Clock');

/*
1시 - a.m. 1시
2시 - a.m. 2시
3시 - a.m. 3시
4시 - a.m. 4시
5시 - a.m. 5시
6시 - a.m. 6시 (보통 여기까지 새벽이라고 표현합니다)
7시 - a.m. 7시
8시 - a.m. 8시
9시 - a.m. 9시
10시 - a.m. 10시 (보통 여기까지 아침..몇시 라고 표현합니다)
11시 - a.m. 11시 (오전 11시라고 표현합니다.대게 아침 11시라고하지 않습니다)
12시 - 정오(낮 12시를 말하며 표기시에는 p.m. 12시 라고 표현합니다)
13시 - p.m. 1시 (오후..몇시..라고 명명합니다)
14시 - p.m. 2시 "
15시 - p.m. 3시 "
16시 - p.m. 4시 "
17시 - p.m. 5시 "
18시 - p.m. 6시 "
19시 - p.m. 7시 (오후..또는 저녁..몇시 라고 표현합니다)
20시 - p.m. 8시 "
21시 - p.m. 9시 "
22시 - p.m. 10시 (오후..또는 밤..몇시 라고 표현합니다)
23시 - p.m. 11시 "
24시 - a.m. 12시
*/



function getClock() {

    date = new Date();
    const real_hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let middle = "";
    let hour;

    if (real_hour >= 12 && real_hour != 24) {
        middle = "PM";
        if (real_hour == 12) {
            hour = real_hour;
        } else {
            hour = (real_hour % 12);
        }
    } else {
        middle = "AM";
        if (real_hour == 24) {
            hour = real_hour / 2;
        } else {
            hour = real_hour;
        }
    }

    const output = middle + " " + hour + " : " + minute;
    Clock_locate.innerHTML = output;

}



function init() {
    getClock();
    setInterval(getClock, 1000);
}

init();