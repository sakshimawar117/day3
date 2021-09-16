//Change all the string characters to capital letters using toUpperCase() method
let str="prachi"
console.log( str.toUpperCase())
//Change all the string characters to lowercase letters using toLowerCase() method

let str2="radhika"
console.log( str2.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method
let str3="ritika"
console.log(str3.substr(1,5))

//Slice out the phrase good teacher from Murtaza is good teacher.

let str4="Murtaza is good teacher"
console.log(str4.substring(0,10))

//Check if the string contains a word Script using includes() method

let str5="learn javascript"

console.log(str5.includes("script"))

//Split the string into an array using  method
let str6="sakshi"

console.log(str6.split('[]'));

//Split the string Murtaza is awesome in programming at the space using split() method

let str7='Murtaza,is,awesome,in,programming'

console.log(str7.split(','))

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change itto an array.

let str8 ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(str8.split('[]'));


//Change you will learn JavaScript to you will learn Python using replace() method.

let str9 =' you will learn JavaScript'

console.log(str9.replace(' you will learn JavaScript','you will learn Python'));

//What is character at index 5 in ' JavaScript' string? Use charAt() method.

let str10='JavaScript'

console.log(str10.charAt(5))


//What is the character code of J in JavaScript' string using charCodeAt()

str11='JavaScript'
console.log(str11.charCodeAt('j'))

//Use indexOf to determine the position of the first occurrence of a in JavaScript

 console.log(str11.indexOf('j'))

 //Use lastIndexOf to determine the position of the last occurrence of a in JavaScript.


str12='python'
console.log(str12.indexOf('n'))

//Use indexOf to find the position of the first occurrence of the word because in the following
//sentence:'You cannot end a sentence with because because because is a conjunction'

str13='You cannot end a sentence with because because because is a conjunction'
console.log(str13.indexOf('because'))

//Use lastIndexOf to find the position of the last occurrence of the word because in the following
//sentence:'You cannot end a sentence with because because because is a conjunction'


str14='You cannot end a sentence with because because because is a conjunction'


console.log(str14. lastIndexOf('because'))

//Use search to find the position of the first occurrence of the word because in the following
//sentence:'You cannot end a sentence with because because because is a conjunction'

str15='You cannot end a sentence with because because because is a conjunction'
console.log(str15.search("because"))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' JavaScript '.
let str16 = ' JavaScript '
console.log(str16)
console.log(str16.trim(' '))

//Use startsWith() method with the string JavaScript is awesome and make the result true

str17=" JavaScript is awesome"
console.log(str17)
console.log(str17.startsWith())
console.log(str17.startsWith("string JavaScript is awesome"))

//Use endsWith() method with the string JavaScript is awesome and make the result true

str18=" JavaScript is awesome"
console.log(str18)
console.log(str18.endsWith())
console.log(str18.endsWith(" JavaScript is awesome"))
//Use concat() and merge ' JavaScript is' and 'awesome' to a single string, 'JavaScript is awesome'
str19="JavaScript is"
str20= " awesome"

console.log(str19.concat( str20 ))

//Use repeat() method to print 30 Days Of JavaScript 2 times

str21="30 Days Of JavaScript "

console.log(str21.repeat(2))
//Check if 'on' is found in both python and jargon

str22="python and jargon"

console.log(str22.includes('on'))
//I hope this course is not full of jargon. Check if jargon is in the sentence.

str23="I hope this course is not full of jargon"
console.log(str23.includes('jargon'))

//Access the 'JavaScript' string characters using a random number.
/*str24="JavaScript"

console.log(str24.Math.rando()* 11)*/
/*Use console.log() and escape characters to print the following pattern.
o 1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/

str25="o 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125"
console.log(str25)


//Use substr to slice out the phrase because because because from the following 
//sentence: 'You cannotend a sentence with because because because is a conjunction'

str26="You cannotend a sentence with because because because is a conjunction"
console.log(str26.split('because'))




