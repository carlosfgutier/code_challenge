var userInfo = [
    {
        name: 'Adam',
        age: 20,
        salary: 30100
    },
    {
        name: 'Bob',
        age: 60,
        salary: 102000
    },
    {
        name: 'Carla',
        age: 31,
        salary: 57000
    },
    {
        name: 'Dave',
        age: 42,
        salary: 22000
    },
    {
        name: 'Ethel',
        age: 80,
        salary: 91000
    },
    {
        name: 'Frank',
        age: 28,
        salary: 73000
    },
    {
        name: 'Gina',
        age: 21,
        salary: 16000
    },
];

// On load, show metric
$(document).ready(function () {
    sortByAge();
});

// When Sort by Age is clicked, run function
$("#by_age").on("click", function () {
    sortByAge();
});

// When Sort by Salary is clicked, run function 
$("#by_salary").on("click", function () {
    sortBySalary();
});

//----------------------------------------------------
// SORT FUNCTIONS
//----------------------------------------------------

// Sort by age
function sortByAge() {
    // Clear this section before plotting new data
    $("#entry_list").html("");

    // Set chart name
    $("#chart_title").text("Users by Age")

    // Create varialbe to hold new array with objects organized in decending order by age
    var byAgeArr = userInfo.sort(function (a, b) {
        return b.age - a.age;
    });

    // Loop through each object and do the following
    for (var prop1 in byAgeArr) {

        // Get the highest age property among all abjects
        var highestVal = Math.max.apply(Math, userInfo.map(function (o) {
            return o.age;
        }));

        // Create HTML showing user info and bar
        $("#entry_list").append("<li class='entry'> <h3 class='label'>" + byAgeArr[prop1].name + "<br>Age: " + byAgeArr[prop1].age + "</h3> <div class='bar_container'> <div class='bar bar" + byAgeArr[prop1].age + "'>-</div> </div> </li>");

        // Create a class name for each individual bar
        // Used class instead of id in case two or more users share the same age
        var newClass = ".bar" + byAgeArr[prop1].age;

        // Set width of new class
        // Set the percentage of the current value out of the array's highest value, which is 100%
        $(newClass).css("width", byAgeArr[prop1].age*100/highestVal + "%");
    };
};

// Sort by salary
function sortBySalary() {
    // Clear this section before plotting new data
    $("#entry_list").html("");

    // Set chart name
    $("#chart_title").text("Users by Salary")

    // Create varialbe to hold new array with objects organized in decending order by salary
    var bySalaryArr = userInfo.sort(function (a, b) {
        return b.salary - a.salary;
    });

    // Loop through each object and do the following
    for (var prop1 in bySalaryArr) {

        // Get the highest salary property among all abjects
        var highestVal = Math.max.apply(Math, userInfo.map(function (o) {
            return o.salary;
        }));

        // Create HTML showing user info and bar
        $("#entry_list").append("<li class='entry'> <h3 class='label'>" + bySalaryArr[prop1].name + "<br>$" + bySalaryArr[prop1].salary + "</h3> <div class='bar_container'> <div class='bar bar" + bySalaryArr[prop1].salary + "'>-</div> </div> </li>");

        // Create class name for each individual bar
        // Used class instead of id in case more than one user has the same salary
        var newClass = ".bar" + bySalaryArr[prop1].salary;

        // Set width of new class
        // Set the percentage of the current value represents out of the array's highest value, which is 100%
        $(newClass).css("width", bySalaryArr[prop1].salary*100/highestVal + "%");
    };
};

// The End.