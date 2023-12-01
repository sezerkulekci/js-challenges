namespace harfNotu {
  /* harf notunu hesapla*/
  interface Mark {
    name: string,
    mark: number
  }
  const marks: Mark[] = [
    {
      name: "Ali",
      mark: 45,
    },
    {
      name: "Büşra",
      mark: 85,
    },
    {
      name: "Durmuş",
      mark: 18,
    },
    {
      name: "Merve",
      mark: 64,
    },
    {
      name: "Namık",
      mark: 33,
    },
    {
      name: "Engin",
      mark: 72,
    },
  ];
  let a: Mark[] = [];
  let b: Mark[] = [];
  let c: Mark[] = [];
  let d: Mark[] = [];
  let f: Mark[] = [];

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

  const print = (student: Mark[], letter: string): void => {

    student.forEach((x) => {
      console.log(
        `Öğrenci adı: ${x.name} not: ${x.mark} harf notu: ${letter} `
      );
    });
  };

  print(a, "A");
  print(b, "B");
  print(c, "c");
  print(d, "D");
  print(f, "F");

}