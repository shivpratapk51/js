// conversion of datatypes
let score = "33abc"
 console.log(typeof score);

let scoreInNumber = Number(score)
console.log(typeof scoreInNumber);
console.log(scoreInNumber); // NaN (Not a Number)

//Conversion
    //String to Number
        // "33" => 33
        // "33abn" => NaN
        // "shiv" => NaN
    //Boolean to Number
        // true => 1
        // false => 0
    //null to number
        // null => 0
    //undefined to number
        // undefined => NaN
    // Number to Boolean
        // 1 => true
        // 0 => false
    //String to Bolean
        // '' => false
        // "shiv" => true
    //Number to String
        // 33 => "33"