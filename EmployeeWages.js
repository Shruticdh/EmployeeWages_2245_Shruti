// UseCase1 :- Ability to Check Employee is present or Absent- Use Math.Random to check Absent or Present
// Use const which signal that the identifier won't be reassigned. And use let where the variable may be reassigned. Both have Block Scope.
//  Traditional var has function scope

// use const to make variacble that will not change 
const isPresent = 1;

// let variable to find random number no. 0 or 1
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

const noWork = 0;
const partTime_hours = 4;
const fullTime_hours = 8; 
const perHourWork_wages = 20;

let empWorkType = Math.floor(Math.random() * 3);
 
let workHour;

switch(empWorkType){
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
    }
    let dailyWages = workHour * perHourWork_wages;

    console.log(`Employee Daily Wages: ${dailyWages}`);