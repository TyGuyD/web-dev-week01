const courses = [
  { code: "WEB210", title: "Intro to Web", credits: 3, enrolled: 24, cap: 30 },
  { code: "WEB250", title: ".NET Web Dev", credits: 4, enrolled: 30, cap: 30 },
  { code: "DAT200", title: "SQL Fundamentals", credits: 3, enrolled: 12, cap: 25 },
  { code: "PRG115", title: "Intro to C#", credits: 4, enrolled: 28, cap: 30 },
];

function courseLine(course) {
  const { code, title, credits } = course;
  return `${code}: ${title} (${credits} credits)`;
}

function isFull(course) {
  const { enrolled, cap } = course;
  return enrolled === cap;
}

function openCourses(coursesArray) {
  return coursesArray.filter(course => !isFull(course));
}

function courseTitles(coursesArray) {
  return coursesArray.map(({ title }) => title);
}

const openCourseLines = coursesArray => openCourses(coursesArray).map(courseLine);

function findCourse(coursesArray, code) {
  return coursesArray.find(course => course.code === code);
}

function addCourse(coursesArray, newCourse) {
  return [...coursesArray, newCourse];
}

function totalCredits(coursesArray) {
  return coursesArray.reduce((sum, { credits }) => sum + credits, 0);
}

console.log(courseLine(courses[1]));
console.log(isFull(courses[1]));
console.log(openCourses(courses));
console.log(courseTitles(courses));
console.log(openCourseLines(courses));
console.log(findCourse(courses, 'WEB250'));
console.log(addCourse(courses, { code: "WEB300", title: "Advanced Web Topics", credits: 4, enrolled: 0, cap: 30 }));
console.log(totalCredits(courses));


