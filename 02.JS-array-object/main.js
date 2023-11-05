// let numbers =[12,7,3,9,6,15,8];
// I.Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran program yazın.
// let quadratic=[]
// for ( i=0; i<numbers.length; i++) {
//     quadratic[i]=numbers[i]*numbers[i];
// }
// console.log(quadratic)

// II.Verilmiş array-in min elementi ilə max elementinin yerini dəyişən program tərtib edin.
// let maxIndex = 0;
// let minIndex = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > numbers[maxIndex]) {
//     maxIndex = i;
//   } else if (numbers[i] < numbers[minIndex]) {
//     minIndex = i;
//   }
//   let temp=numbers[maxIndex];
//   numbers[maxIndex] = numbers[minIndex]; 
//   numbers[minIndex] = temp;
// }
// console.log(numbers);



// III.Verilmiş array-in min elementinin indeksini çapa verən program tərtib edin.
// let min = numbers[0];
// let number=0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//     number=i;
//    }
//   }
//   console.log(number);

// const employees = [
//   { name: "Jamil", salary: 50000, departement: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// I.ortalama maaşı 65000-dən çox olan departamentləri çapa verən program tərtib edin.
// let empsalary = [];
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].salary > 65000) {
//       console.log(employees[i]);}
//     }

// II.ortamala maaşı 65000-dən çox olan və departamenti "IT"olanları çapa verən program tərtib edin.

// for (let i = 0; i < employees.length; i++) {
//  if( employees[i].salary > 65000 &&
//     employees[i].department==="IT") {
//     console.log(employees[i]);}
// }

// III.sadəcə departement "HR" olanları array'a yığıb, həmin arrayı console edin.
// for(let i=0; i<employees.length; i++){
//     if(employees[i].department==="HR"){
//         console.log(employees[i]);
//     }
// }

// BONUS-------------------------------------------------------
let countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands"
  ];

//   I.Ölkələrin neçə hərfdən ibarət olduğunu çap edən proqram yazırsınız. Cavab konsolda bu şəkildə olmalıdır:
//   Məsələn:
//   Afghanistan - 11
//   Albania - 7
//   Algeria -7
//   Andorra -7
//   və s
// for( let i=0;i<countries.length;i++){
// console.log(`${countries[i]} - ${countries[i].length}`); 
// }

// II.Baş hərfi ilə son hərfi A olan  ölkələrin adını çap edən proqram yazırsınız.
let countriesname=[]
for(let i=0;i<countries.length;i++){
   if( countries[i].toLocaleLowerCase()[0]==="a"&&countries[i].toLocaleLowerCase()[countries[i].length-1]==="a") {
    countriesname.push(countries[i]);
   } 
}
console.log(countriesname);


