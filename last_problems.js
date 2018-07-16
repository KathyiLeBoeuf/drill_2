function daysOfMonths(month, leapYear){
    switch(month) {
        case 'January' :
        case 'March' :
        case 'May' :
        case 'July' :
        case 'August' :
        case 'October' :
        case 'December' :
            return `${month} has 31 days.`
        case 'February' :
            switch(leapYear) {
                case true :
                    return `${month} has 29 days.`
                default :
                    return `${month} has 28 days.`
            }
        case 'April' :
        case 'June' :
        case 'September' :
        case 'November' :
            return `${month} has 30 days.`
        default :
            return 'Must provide a valid month.'
    }
}

console.log(daysOfMonths('January'));
console.log(daysOfMonths('February'));
console.log(daysOfMonths('February', true));
console.log(daysOfMonths('Kathy'));





function rockPaperScissors(num) {
    let computer = Math.floor(Math.random() * 3) + 1;

    if (computer ===  num) {
        return "It's a tie"
    } if (computer === 1 && num !== 2) {
        return "Computer Rock beats Scissors"
    } if (computer === 2 && num !== 3) {
        return "Computer Paper beats Rock"
    } if(computer === 3 && num !== 1) {
        return "Computer Scisors beats Paper"
    } if (num === 1 && computer !== 2) {
        return "Computer Rock beats Scissors"
    } if (num === 2 && computer !== 3) {
        return "Computer Paper beats Rock"
    } if(num === 3 && computer !== 1) {
        return "Computer Scisors beats Paper"
}
;
console.log(rockPaperScissors(3));
console.log(rockPaperScissors(3));
console.log(rockPaperScissors(3));
console.log(rockPaperScissors(3));