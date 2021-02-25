
const parser = new DOMParser();


const xmlString = `
   <list>
   <student>
     <name lang="en">
       <first>Ivan</first>
       <second>Ivanov</second>
     </name>
     <age>35</age>
     <prof>teacher</prof>
   </student>
   <student>
     <name lang="ru">
       <first>Петр</first>
       <second>Петров</second>
     </name>
     <age>58</age>
     <prof>driver</prof>
   </student>
 </list>  
 `;

// Парсинг XML

const xmlDoc = parser.parseFromString(xmlString, "text/xml");
const students = xmlDoc.querySelectorAll("student");
let list = [];
students.forEach((student) => {
    let firstName = student.querySelector("name").querySelector("first")
        .textContent;
    let secondName = student.querySelector("name").querySelector("second")
        .textContent;
    let age = student.querySelector("age").textContent;
    let prof = student.querySelector("prof").textContent;
    let lang = student.querySelector("name").getAttribute("lang");
    let object = {
        name: firstName + " " + secondName,
        age: age,
        prof: prof,
        lang: lang,
    };
    list.push(object);
});
const obj1 = { list };
console.log("result :", obj1);