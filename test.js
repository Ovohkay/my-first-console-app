

let x={
    name: "gideon", performance:{phy:100, chem:99, math:80}
}
x.total=Object.values(x.performance).reduce((a,b) => a+b);
console.log(x)
console.log(Object.values(x.performance).reduce((a, b) => a + b))

classData.forEach((el) =>{
    console.log(el.performance)
});

let xx =[]
for (var i in x.performance){

}
