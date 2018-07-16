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