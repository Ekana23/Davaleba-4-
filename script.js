// import "./styles.css";

// დავალება 1.
// გამოითვალეთ ახალი მასივი სადაც ყოველი ელემენტი იქნება საკუთრ თავზე გამრავლებული
const numbers = [28, 77, 45, 99, 27];
const newArr = numbers.map((num) => {
  return num * num;
  // return num ** 2;
});
console.log(newArr);

// დავალება 2
// გამოითვალეთ ახალი მასივი, სადაც იქნება ყველა ელემენტი რომელიც მეტია 5 ზე
const randomNumbers = [4, 11, 42, 14, 39];
const moreThanFive = randomNumbers.filter((num) => {
  return num > 5;
});
console.log(moreThanFive);

// დავალება 3
// გამოითვალეთ ახალი მასივი სადაც ყველა მომხამრებელის სახელ ექნება მინიჭებული დამატებითი სტრინგი
// "გავლილი აქვს რეგისტრაცია" map მეთოდის დახმარებით
const finalParticipants = ["გიორგი", "საბა", "ალექსი", "ნათია", "ნიკო"];
const nameIsRegistered = finalParticipants.map((name) => {
  return name + " " + "გავლილი აქვს რეგისტრაცია";
});
console.log(nameIsRegistered);

// Resoft:123

// დავალება 4
const students = [
  { name: "John James", status: true },
  { name: "Micheal Obi", status: false },
  { name: "Bola Ade", status: true },
  { name: "Emmanuel", status: false },
  { name: "Faithfulness Alamu", status: true },
];

const renderStudents = (students) => {
  return students.map((st) => {
    return `
    <div>
      სახელი: ${st.name}
      სახელი: ${st.status}
    </div>
  `;
  });
};

const html = renderStudents(students);
document.body.innerHTML = html;
console.log(renderStudents(students));
// 1 გამოითვალეთ ახალი მასივი html სტრინგის სადაც თითოეული ობიექტი იქნება შემდეგი html ფორმატში
// <div>
//  სახელი: {name}
// სტატუსი: {status}
// </div
//
//
// map მეთოდი

// იპოვეთ სტუდენტი რომელსაც ჰქვია სახელი John James და შეინახეთ ცვლადში. find მეთოდი
const findJohn = students.find(({ name }) => {
  return name === "John James";
});
console.log(findJohn);
// დავალება 5
// გაფილტრეთ სტუნდენტების მასივი და დატოვეთ მხოლდო ის სტუდენტი რომელის სახელი
// 1. შეიცავს სიტყვას John და ამავდროულად აქვს სტატუსი true
const findTrueJohn = students.filter((st) => {
  return st.name.includes("John") && st.status === true;
});
console.log(findTrueJohn);
// დავალება 6
// გამოითხოვეთ fetch ის დახამრებით მონაცემები სერვერიდან
// https://jsonplaceholder.typicode.com/todos
// 1. ყოველი პოსტის completed ველი განაახლეთ true მნიშვნელობით
// 2. მიღებული ახალი მასივი შეიტანეთ დომში შემდეგი მარკაპით
// // <div>
//    სათაური: {title}
//    სტატუსი: {status}
// </div
function lastDav() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      const smth = result.map((st) => {
        return `
      <div>
      სათაური: ${st.title}
      სტატუსი: ${st.status}
      </div>
      `;
      });
      document.body.innerHTML = smth;
    });
}
lastDav();
