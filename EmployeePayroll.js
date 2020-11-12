// CHECKING IF EMPLOYEE IS PRESENT OR ABSENT
const PRESENT = 1;
const ABSENT = 0;
let attendance = Math.floor(Math.random()*10) % 2;
if(attendance == ABSENT){
    console.log("Employee is absent");
    return;
}
else
    console.log("Employee is present");

// CONSTANTS IF EMPLOYEE IS PRESENT
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const PER_HOUR_WAGE = 20;
const NUM_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

var total_emp_hours = 0;
var total_working_days = 0;

var employeeWageArray = new Array()
var employeeWageMapArray = new Array

// FUNCTION TO SET EMPLOYEE HOURS
function demo(options){
    let emp_hours = 0;
    switch(options){
        case IS_PART_TIME:
            emp_hours = PART_TIME_HOUR; break;
        case IS_FULL_TIME:
            emp_hours = FULL_TIME_HOUR; break;
    }
    return emp_hours;
}

// FUNCTION TO CALCULATE DAILY WAGE OF AN EMPLOYEE
function calculateDailyWage(emp_hours){
    return emp_hours * PER_HOUR_WAGE;
}

while(total_emp_hours <= MAX_WORKING_HOURS && total_working_days <= NUM_WORKING_DAYS){
    let daily_emp_hours = demo(Math.floor(Math.random()* 10) % 3)
    employeeWageArray.push(calculateDailyWage(daily_emp_hours))
    total_emp_hours += daily_emp_hours
    total_working_days ++
}

// 7A: CALCULATE TOTAL WAGES OF EMPLOYEE
let total_emp_Wage = 0;
function sum(dailyWage){
    total_emp_Wage += dailyWage;
}
employeeWageArray.forEach(sum)
console.log("Total Wages From ForEach: " + total_emp_Wage)

function wages(totalWage, dailyWage){
    return totalWage + dailyWage
}
console.log("Total Wages From Reduce:  " + employeeWageArray.reduce(wages))

// 7B: MAP FUNCTION: TO SHOW DAY AND DAILY WAGE
let day = 0;
function mapDayToDailyWage (emp_daily_wage){
    day ++;
    return "Day: " + day + "  Daily Wage: " + emp_daily_wage + "\n";
}
employeeWageMapArray = employeeWageArray.map(mapDayToDailyWage)
console.log("Map: Day to Daily Wages \n" + employeeWageMapArray)

// 7C: DAYS ON WHICH FULL TIME WAGE IS EARNED
function displayDaysFullTimeWage (dailyWage){
    return dailyWage.includes("160");
}
let fullTimeWageArray = employeeWageMapArray.filter(displayDaysFullTimeWage)
console.log("Days (Full Time Wage): " + fullTimeWageArray)