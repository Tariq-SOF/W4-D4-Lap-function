function MultiplicationFunction(X) {
    return X.toUpperCase()
  }

  console.log(MultiplicationFunction("tariq mansuer alshalahi"));

//Q2


  
//   function countVowels(sytr) {
//     str.match(/[aeiou]/gi); // يطابق الحروف الصوتية باستخدام تعبير منتظم
    
//     if (vowels === null) {
//       return 0; // إذا لم يتم العثور على حروف صوتية، فإن العدد يكون صفر
//     }
    
//     return vowels.length; // يعيد عدد الحروف الصوتية المطابقة
//   }

//Q5 

// function word(x){
//     let words = x.split("");
//     let longestWord = "";
//     for( let i=0 ; i< words.length ; i++ ){
//     if (words.length > longestWord.length){
//         longestWord = words;
//    }
// }
 
//    return longestWord;
// }
function findLongestWord(str) {
  // قسم السلسلة إلى مصفوفة من الكلمات
  const words = str.split(" ");

  let longestWord = "";

  // قم بتكرار كل كلمة في المصفوفة
  for (let i = 0; i < words.length; i++) {
    // قم بإزالة أي أحرف غير أبجدية رقمية من الكلمة
    const word = words[i].replace(/[^a-zA-Z0-9]/g, "");

    // تحقق مما إذا كانت الكلمة الحالية أطول من الكلمة الأطول السابقة
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}


console.log(findLongestWord("جافاسكريبت ممتعة!")); 

//Q6 
function tariq6(x){
return x.split('').sort().join('');
}

console.log(tariq6("tariq"));

//Q7
function sum(a,b){
return a+b
}
console.log(sum(10,5));
//Q8

function age(ageY){
    var day=350;
    var ageD = ageY * day;
    return ageD;
}
console.log(age(20));

//Q9
function comfert(our){
    var sec=3600;
    var secO = sec * our;
    return secO;
}
console.log(comfert(7));

//Q10
function Boolea(x){
    return x<=0
}
console.log(Boolea(5));

//Q11
function integr(x){

return Math.abs(x).toString().length;
}
console.log(integr(20));

//Q12

function ob(x){
return Object.entries(x);
}
let z ={name : "tariq" , num: 50};
console.log(ob(z));

//Q13 

function 



