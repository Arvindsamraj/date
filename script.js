// const now = new Date();

// console.log(now);
// console.log(typeof now);

// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// //timestamp
// console.log('timestamp', now.getTime());

// //date string
// console.log(now.toDateString());
// console.log(now.toTimeString());

//digital clock

const digi = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html =`
    <span>${h}</span>
    <span>${m}</span>
    <span>${s}</span>
    `;

    digi.innerHTML = html; 

}

setInterval(tick,1000);

