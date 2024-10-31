const mul = (a,b) => {return a*b};
console.log(mul(5,6));
const student = {
    rollNo : 1,
    name: "Akhil",
    class: 12,
    display(){
        console.log(`The student's name is ${this.name} and his roll no is ${this.rollNo}, He studies in class ${this.class}`);
    }
}
console.log(student.display());