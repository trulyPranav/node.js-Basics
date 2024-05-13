//Global Objects

// console.log(global);

setTimeout(() => {
    console.log('In a span of 3s');
    clearInterval(repeat);
}, 4000);

const repeat = setInterval(() => {
    console.log('Repeat After Me; Veru Kootukare, Onnich nmk Povaaam!')
}, 1000);
