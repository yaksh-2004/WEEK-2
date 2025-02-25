// Using type alias to type the date object
type myDate = Date;
const todayDate: myDate = new Date();
console.log(todayDate.toDateString());

// Using interface to type the date object
interface dateInterface {
    today: Date;
}
const currDate: dateInterface = {
    today: new Date(),
}
console.log(currDate.today.toDateString());
