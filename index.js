// Your code here
function createEmployeeRecord(employeeInfo){
    return{
        "firstName":employeeInfo[0],
         "familyName":employeeInfo[1],
         "title":employeeInfo[2],
         "payPerHour":employeeInfo[3],
         "timeInEvents":[],
         "timeOutEvents":[]
    }
}

function createEmployeeRecords(employeeList){
    return employeeList.reduce((acc,curr) =>{
        acc.push(createEmployeeRecord(curr));
        return acc;
    },[]);
}

function createTimeInEvent(employee,timeIn){
    let dateTime = timeIn.split(' ');
    employee.timeInEvents.push({
        "type":"TimeIn",
        "hour":parseInt(dateTime[1]),
        "date":dateTime[0]
    });
    return employee;
}

function createTimeOutEvent(employee,timeOut){
    const dateTime = timeOut.split(' ');
    employee.timeOutEvents.pish({
        "type":"timeOut",
        "hour":parseInt(dateTime[1]),
        "date":dateTime[0]
    });
    return employee;
}

function hoursWorkedOnDate(employee,date){
    const timeInByDate = employee.timeInEvents.find(element => element.date === date); 
    const timeOutByDate = employee.timeOutEvents.find(element => element.date === date);
    return (timeOutByDate.hour - timeInByDate.hour)/100;
}

function wagesEarnedOnDate(employee, date){
    const hours = hoursWorkedOnDate(employee, date);
    return parseInt(employee.payPerHour) * hours;
}

function allWagesFor(employee){
    return employee.timeInEvents.reduce((acc,curr)=>{
        return acc += wagesEarnedOnDate(employee,curr.date);
    },0);
}

function calculatePayroll(employeesList){
    return employeesList.reduce((acc,curr)=>{
        return acc += allWagesFor(curr);
    },0);
}