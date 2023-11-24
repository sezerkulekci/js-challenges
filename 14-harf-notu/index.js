/* harf notunu hesapla*/

const marks = [
  {
    student: "Ali",
    mark: 45,
  },
  {
    student: "Büşra",
    mark: 85,
  },
  {
    student: "Durmuş",
    mark: 18,
  },
  {
    student: "Merve",
    mark: 64,
  },
  {
    student: "Namık",
    mark: 33,
  },
  {
    student: "Engin",
    mark: 72,
  },
];
let a = [];
let b = [];
let c = [];
let d = [];
let f = [];

marks.forEach((x) => {
  if (x.mark >= 85) {
    a.push(x);
  } else if (x.mark >= 70 && x.mark < 85) {
    b.push(x);
  } else if (x.mark >= 55 && x.mark < 70) {
    c.push(x);
  } else if (x.mark >= 40 && x.mark < 55) {
    d.push(x);
  } else {
    f.push(x);
  }
});

const print = (students, letter) => {
  students.forEach((x) => {
    console.log(
      `Öğrenci adı: ${x.student} not: ${x.mark} harf notu: ${letter} `
    );
  });
};

print(a, "A");
print(b, "B");
print(c, "c");
print(d, "D");
print(f, "F");
