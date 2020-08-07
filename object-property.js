const students = [
    {id: 21, name: 'omar sunny'},
    {id: 31, name: 'mannna'},
    {id: 41, name: 'sabnur'},
    {id: 71, name: 'deepjol'}
];

// jodi for loop run kore array te nite chai , tahole 1at akta array declare korte hobe tarpor arr.push korte hobe than funtion baire giye console.log korte hobe

let arr = [];
for(i = 0; i < students.length; i++){
 const student = students[i];
 const sName = student.name;
  const sId = student.id;
//    console.log(sId);
    arr.push(sId);
}
console.log(arr);

const names = students.map( s => s.name);
const ids = students.map(s => s.id);

// akhon jodi amra 40 ar opore id gola pete c hai tohole map.filter use korte hobbe
const bigger = students.filter(s => s.id>40);

// ar jodi find dei tohole prothom ta pabo mane sabnnur pabo

const biggerOne = students.find(s => s.id>40);
// console.log(biggerOne);