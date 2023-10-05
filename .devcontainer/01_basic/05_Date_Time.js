let myDate = new Date();
console.log(myDate.toString());//output is current day moth and time
console.log(myDate.toLocaleString());//output as same as obove but in form of mm/dd/yy
console.log(myDate.toJSON());//o/p yy/mm/dd 
let myCreatedDate = new Date(2023, 11, 1);// means monh is started in js with "0". like for jan we wrote 2023,0,2
console.log(myCreatedDate.toDateString());// output is day month dd/yy
let myTimeStamp = Date.Now()
console.log(Math.floor(Date.Now()/1000));