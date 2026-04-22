// Problem 3.2 · Nested access
// A course with an instructor
// Create a course object with title, duration, and a nested instructor object (with name and email). Then print the instructor's email in a template-literal sentence.
// 3-2-nested.js
// // Expected output:
// // "Contact the instructor (Bhuwan) at bhuwan@selisegroup.com"

const course = {
    title : "JavaScript Basics",
    duration : "5 weeks",
    instructor : {
        name : "Bhuwan",
        email : "bhuwan@selisegroup.com"
    }
};
console.log(`Contact the instructor (${course.instructor.name}) at ${course.instructor.email}`);
