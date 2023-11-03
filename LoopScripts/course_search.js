let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];
  

   // When does the PROG200 course start?
var PROG200 
for (let i = 0; i < courses.length; i++) {
    if (courses[i].CourseId == "PROG200") {
        PROG200 = courses[i];
    }
}
console.log( PROG200.StartDate);

// What is the title of the PROJ500 course?

let PROJ500
for (let i=0; i < courses.length; i++) {
    if (courses[i].CourseId == "PROJ500") {
        PROJ500 = courses[i];
    }
}
console.log(PROJ500.Title);


// What are the titles of the courses that cost $50 or less?

var cheapcourses = []; 

for (let i=0; i < courses.length; i++) {    
    if (courses[i].Fee <= 50) {
        cheapcourses.push(courses[i]);
    }
}
for (let i=0; i < cheapcourses.length; i++) {
    console.log(cheapcourses[i].Title);
}


// What classes meet in "Classroom 1"?

var  classroom1 = [];
for (let i=0; i < courses.length; i++) {
    if (courses[i].Location == "Classroom 1") {
        classroom1.push(courses[i]);
    }  
}

for (let i=0; i < classroom1.length; i++) {
    console.log(classroom1[i].CourseId);
}
