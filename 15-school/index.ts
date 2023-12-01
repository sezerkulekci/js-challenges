namespace school {
  /** 
  öğrencinin adı , devamsızlık süresi , not ortalamasına
  1- kalan öğrenciler =>
                            not ortalama 2 den düşük ve devamsızlık 10'dan büyük
                            ortalama 2 den yüksek devamsızlık 20 den büyük
  2- kalma ihtimali olan => 
                           öğrenci ortalama 2 den düşük - devamsızlık 10 dan düşük 5 ten fazla
                           öğrenci ortalama 2den yüksek - devamsızlık 20 den düşük 15 dan fazla
  3- en iyi öğrenci    =>
                          ortalaması 3 ten yüksek - devamsızlığı 10 dan düşük
  4-en kötü öğrenci    =>
                          ortalaması 2 den düşük - devamsızlığı 10 dan fazla
  ****
  2 üzeri ortalama varsa max devamsızlık 20 gün
  2 altı ortalama varsa max devamsızlık 10 gün
  
  
  */
  interface Student {
    name: string,
    average: number,
    appset: number
  }

  const students: Student[] = [
    {
      name: "Abdürrezzak",
      average: 1.8,
      appset: 4,
    },
    {
      name: "Şadiye",
      average: 3.2,
      appset: 7,
    },
    {
      name: "mahmut",
      average: 3.1,
      appset: 6,
    },
    {
      name: "Satılmış",
      average: 1.1,
      appset: 18,
    },
    {
      name: "bayram purcu",
      average: 1.2,
      appset: 16,
    },
    {
      name: "Pakize",
      average: 3.8,
      appset: 23,
    },
    {
      name: "Yalvaç",
      average: 1.7,
      appset: 8,
    },
    {
      name: "Durmuş",
      average: 1.7,
      appset: 18,
    },
  ];

  let kalanlar: Student[] = [];
  let kalmayaYakin: Student[] = [];
  let enIyi: Student | undefined = undefined;
  let enKotu: Student | undefined = undefined;

  students.forEach((student) => {
    if (student.average < 2 && student.appset >= 10) {
      kalanlar.push(student);
    } else if (student.average > 2 && student.appset >= 20) {
      kalanlar.push(student);
    } else if (student.average < 2 && student.appset < 10 && student.appset > 5) {
      kalmayaYakin.push(student);
    } else if (
      student.average > 2 &&
      student.appset < 20 &&
      student.appset > 15
    ) {
      kalmayaYakin.push(student);
    }

    if (enIyi == undefined) {
      enIyi = student;
    } else if (student.average > enIyi.average && student.appset < 10) {
      enIyi = student;
    }

    if (enKotu == undefined) {
      enKotu = student;
    } else if (student.average < enKotu.average && student.appset > 10) {
      enKotu = student;
    }
  });

  console.log("kalan öğrenciler :", kalanlar);
  console.log("kalmaya yakın öğrenciler :", kalmayaYakin);
  console.log("en iyi öğrenci :", enIyi);
  console.log("en kötü öğrenci :", enKotu);

}