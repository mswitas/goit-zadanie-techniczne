const employee = [
    { personalInfo: 'John', key: 'firstName' },
    { personalInfo: 'Doe', key: 'lastName' },
    { personalInfo: 30, key: 'age' },
    { 
        personalInfo: [
            { address: 'Anytown', key: 'city' },
            { address: 'NY', key: 'state' },
            { address: '12345', key: 'postalCode' },
        ],
        key: 'address',
    },
    { employmentDetails: 'Software Engineer', key: 'position' },
    { employmentDetails: 'Engineering', key: 'department' },
    { employmentDetails: '2022-01-01', key: 'startDate' },
    { employmentDetails: null, key: 'endDate' },
    {
        employmentDetails: [
            { manager: 'Alice', key: 'firstName' },
            { manager: 'Smith', key: 'lastName' },
            { manager: 'alice@example.com', key: 'email' },
        ],
        key: 'manager',
    },
];

const getEmployeeInfo = (employee, key) => {
    const foundByKey = employee.find(empInfo => empInfo.key === key);
    const info = foundByKey ? foundByKey[Object.keys(foundByKey)[0]] : "Klucz nie istnieje";
   
    return info;
}

console.log(getEmployeeInfo(employee, "firstName"));
console.log(getEmployeeInfo(employee, "lastName"));
console.log(getEmployeeInfo(employee, "position"));
console.log(getEmployeeInfo(employee, "street"));