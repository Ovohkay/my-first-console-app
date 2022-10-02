let classData = []

classData.push({name: "peter", performance:{phy:90, chem:80, math:85}})

classData.push({name: "gideon", performance:{phy:100, chem:99, math:80}})


classData.push({name: "malush", performance:{phy:80, chem:88, math:77}})


classData.push({name: "samuel", performance:{phy:85, chem:97, math:73}})

console.log(classData)
let classScore = []
classData.forEach((el) =>{
    classScore.push(
    Object.values(el.performance).reduce((a,b)=> 
     {  return a + b;
    }) 
  )
});
// console.log(
//     "the average class performance is: ",
//     classScore.reduce((a,b) =>a+b) /classScore.length
// );

//classData.forEach((el) =>{
//   classScore.push(
//   Object.values(el.performance).reduce((a,b)=> 
//    {  return a + b;
//   }) 
// )
// el.total = Object.values(el.performance).reduce((a,b) => a + b)
// });
// console.log(classData);

// const sortedData = (x)=> {
//   return (a, b) => {
//     if (a[x] < b[x]) {
//       return 1;
//     } else if (a[x] > b[x]) {
//       return -1
//     }
//     else{
//       return 0;
//     }
//   }
// }

// console. log(classData.sort(sortedData("total"))[0].name);
