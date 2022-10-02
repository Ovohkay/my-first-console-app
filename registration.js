let patientData = [];

patientData.push({
  name: "joy",
  occurence: { temperature: 90, headache: 80, weakness: 85 },
});

patientData.push({
  name: "peace",
  occurence: { temperature: 100, headache: 99, weakness: 80 },
});

patientData.push({
  name: "bola",
  occurence: { temperature: 80, headache: 88, weakness: 77 },
});

patientData.push({
  name: "kemi",
  occurence: { temperature: 85, headache: 97, weakness: 73 },
});

console.log("occurence %", patientData);

let totalOccurence = [];

patientData.forEach((el) => {
  totalOccurence.push(
    Object.values(el.occurence).reduce((a, b) => {
      return a + b;
    })
  );

  el.total = Object.values(el.occurence).reduce((a, b) => a + b);
});
console.log(patientData);

const sortedData = (x) => {
  return (a, b) => {
    if (a[x] < b[x]) {
      return 1;
    } else if (a[x] > b[x]) {
      return -1;
    } else {
      return 0;
    }
  };
};
//
console.log(
  "patient with the highest occurance:",
  patientData.sort(sortedData("total"))[0].name
);
