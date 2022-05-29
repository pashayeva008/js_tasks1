//while ile yazzz!!!
//************************************ */

// 1. `['cup', 'plate', 'spoon', 'knife', 'fork']` array’inin bütün elementlərini while ilə konsolda göstərin

// const arr=['cup', 'plate', 'spoon', 'knife', 'fork'];

// let i = 0;
// while (i <arr.length) {
//     console.log(arr[i])
//     i++;

// }
//********************************* */

// 2. `['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']` bu array içərisində “s” hərfiylə başlayan elementləri dinamik şəkildə konsolda göstərin

// const arr=['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni'];
// let i=0;
// while(i<arr.length){
// element=arr[i]
// i++;
// if(element[0]==='s'){
// console.log(element);
// }
// }
//******************************************** */

// 3. 1-dən 100-ə kimi olan bütün ədədlərin toplamını tapın (1+2+3+...+99+100)
// let i=1;
// cem=0;
// while(i<=100){

//     i++
//     cem+=i
// }
// console.log(cem);
//********************************* */

// 4. `['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']` arrayinin 5-hərfli elementləri arasında 5 hərfli olanların son hərfini while ilə göstərin. 5 hərfli olmayanları `continue` deyərək keçin.
// const arr = [
//   "kitab",
//   "defter",
//   "qelem",
//   "karandas",
//   "jurnal",
//   "pozan",
//   "vereq",
// ];
// let i = 0;
// while (i < arr.length) {
//   let element = arr[i];
//   i++;
//   if(element.length!==5){
//      continue;

//   }
//   let result=element[element.length-5]
//   console.log(result);

// }
//**************************** */

// 5. 100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin.
// let num = 100000;
// while(num>0){

// if( num % 9999 === 0){
// console.log(num);
// break;
// }
// num--;
// }
//************************************* */
// 6. `'Men her gun Javascript oyrenirem’` bu stringin saitlər çıxarılmış vəziyyətini konsolda göstərin.

// const sentence='Men her gun Javascript oyrenirem';
// const saitler='euaio';
// let result = "";
// let counter=0;
// while(counter < sentence.length){
// const letter=sentence[counter]
// if(!saitler.includes(letter)){
// result += letter;
// }
// counter++
// }
// console.log(result);


//FOR ILE YAZZZ!!!
// 1)
// a)
//  const arr=['cup', 'plate', 'spoon', 'knife', 'fork'];

// for(let i=0;i<arr.length; i++){
// console.log(arr[i])
// }
//b)
// for(let i of arr){
//   console.log(i);
// }
//------------
//2)
//  const arr=['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni'];
//a
// for(let i=0;i<arr.length;i++){
//   element=arr[i];
//   if(element[0]==='s'){
//     console.log(element);
//   }
// }
//b
// for (let i of arr){

//   if (i[0] === "s") {
//     console.log(i);
//   }

// }
//-----------------
//3)
// sum=0;
// for(let i=1;i<=100;i++){
// sum+=i;
// }
// console.log(sum);
//---------------
//4)
// const arr = [
//   "kitab",
//   "defter",
//   "qelem",
//   "karandas",
//   "jurnal",
//   "pozan",
//   "vereq",
// ];
// for(let i of arr){
//     if(i.length !==5){
//         continue;
//     }
//     console.log(i[i.length-1])
// }
//----------------------------
//5)
//  for(let i = 100000; i>0 ;i--){
//      if(i % 9999 === 0){
//         console.log(i);

//         break;
//      }
//}

//---------------------------------
//6) 

// let result = "";
// const sentence='Men her gun Javascript oyrenirem';
// const saitler ='euaio';

// for(let char of sentence){
// if(!saitler.includes(char)){
//     result += char;
// }
// }
// console.log(result);
//----------------------
//7)
//  Aşağıdakı objecti:
// - Keylerini konsolda gosterin
// - Valuelerini konsolda gosterin

// const computer = {
//   cpu: "intel i5",
//   ram: "8",
//   gpu: "NVIDIA",
// };
//a
// console.log(Object.keys(computer));
// console.log(Object.values(computer));
//b
//key
// for(i in computer){
//     console.log(i)
// }
// value
// for (i in computer) {
//   console.log(computer[i]);
// }
//----------------------------------

//7)
// Yuxarıdakı array-ə görə objectdə qarşılıq gələn hərflərin sayını yazın və objecti-i konsolda göstərin. Nəticə aşağıdakı kimi olmalıdır:

// const letterList = ['a', 'a', 'b', 'a', 'c', 'b', 'b', 'e']
// const letterCount = {a: 0, b: 0, c: 0, e: 0}
// for(let el of letterList ){
//   letterCount[el]++
// }
// console.log(letterCount);