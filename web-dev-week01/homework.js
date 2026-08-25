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

