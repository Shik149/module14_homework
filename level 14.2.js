const jsonString = `
 {"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}
 `;


const person = JSON.parse(jsonString);


const result = {
    name: person.name,
    age: person.age,
    skills: person.skills,
    salary: person.salary,
};

console.log('result', result);