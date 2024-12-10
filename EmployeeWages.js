'use strict'
// UseCase1 :- Ability to Check Employee is present or Absent- Use Math.Random to check Absent or Present
// Use const which signal that the identifier won't be reassigned. And use let where the variable may be reassigned. Both have Block Scope.
//  Traditional var has function scope
console.log("UseCase1");

const isPresent = 1;

let employeeCheck = Math.floor(Math.random() * 2);
    
if(employeeCheck === isPresent){
    console.log("Employee Present");
}
else{
    console.log("Employee Not Present");
}



// UseCase2 :- 
// Ability to Calculate Daily Employee Wage based on part time or full time work
// Use Math.Random to check No Time, Part Time or Full Time- 
// Assume Part Time is 4 Hrs and Full time is 8 Hrs and per hour wage is $20- Solve Using  Switch Statement
console.log("UseCase2");

const noWork = 0;
const partTime_hours = 4;
const fullTime_hours = 8; 
const perHourWork_wages = 20;

let empWorkType = Math.floor(Math.random() * 3);
 
let workHour;

switch(empWorkType , isPresent){
    case 0:
        workHour = noWork;
        console.log("Employee didn't work today");
        break;

    case 1:
        workHour = partTime_hours;
        console.log("Employee worked part-time today");
        break;

    case 2:
        workHour = fullTime_hours;
        console.log("Employee worked full-time today");
        break;  
        
    default: 
        console.log("Invalid worktype");  
        return 0;  
    }
    let dailyWages = workHour * perHourWork_wages;

    console.log(`Employee Daily Wages: ${dailyWages}`);




// UseCase3 :- Refactor the Code to write a function to get work hours
console.log("UseCase3");
function togetwoekhours(){
let employeeCheck2 = Math.floor(Math.random() * 3);
    switch(employeeCheck2){
        case 0:
            return noWork;
        case 1:
            return partTime_hours;
        case 2:
            return fullTime_hours;
        default:
            return 0;
    }
}

let totalworkhours = togetwoekhours();
console.log(`Employee Daily hours: ${totalworkhours}`);

function tocacalculateDailyWages(totalworkhours){
    return totalworkhours * perHourWork_wages;
}

let DailyWages = tocacalculateDailyWages(totalworkhours);
console.log(`Employee Daily Wages: ${DailyWages}`);



// UseCase4 :- Calculating Wages for a Month assuming 20 Working Days in a Month
console.log("UseCase4");
const WorkingDays = 20;
function totalMonthlyWages(DailyWages ,totalworkhours){
    let totalWages = 0;
    for(let i=1; i<=WorkingDays; i++){
        totalWages +=DailyWages;
    }
    return totalWages;
}

let monthlyWages = totalMonthlyWages(DailyWages,totalworkhours);
console.log(`Employee Monthly Wages: ${monthlyWages}`);






// Constants
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;

// Function to get work hours based on employee type
function getWorkHours(workType) {
    switch (workType) {
        case 0:
            return 0; // No work
        case 1:
            return PART_TIME_HOURS; // Part-time
        case 2:
            return FULL_TIME_HOURS; // Full-time
        default:
            return 0;
    }
}


console.log("UseCase5");
function calculateDailyWage(workHours) {
    return workHours * WAGE_PER_HOUR;
}
function calculateWages() {
    let totalWorkingHours = 0;
    let totalWages = 0;
    let totalWorkingDays = 0;

    for (let day = 1; day <= MAX_WORKING_DAYS; day++) {
        let empWorkType = Math.floor(Math.random() * 3); 
        let workHours = getWorkHours(empWorkType);

        if (totalWorkingHours + workHours > MAX_WORKING_HOURS) {
            workHours = MAX_WORKING_HOURS - totalWorkingHours; 
        }

        totalWorkingHours += workHours;
        totalWages += calculateDailyWage(workHours);

        console.log(
            `Day ${day}: Work Type = ${empWorkType}, Hours Worked = ${workHours}, Daily Wage = $${calculateDailyWage(workHours)}, Total Hours = ${totalWorkingHours}`
        );

        if (totalWorkingHours >= MAX_WORKING_HOURS) {
            break;
        }

        totalWorkingDays = day; 
    }

    return {
        totalWages,
        totalWorkingHours,
        totalWorkingDays,
    };
}

let result = calculateWages();
console.log(`Total Working Days: ${result.totalWorkingDays}`);
console.log(`Total Working Hours: ${result.totalWorkingHours}`);
console.log(`Total Wages Earned: $${result.totalWages}`);
