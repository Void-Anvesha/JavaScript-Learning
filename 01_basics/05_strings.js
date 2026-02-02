const name="Anvesha"
const surName="Rastogi"
//Concatenation
console.log(name+surName);

//string Interpolation
//Use this
console.log(`Hello my name is ${name} & my surName is ${surName}`);

//New way of defining str
const Name=new String('Anves-ha')
console.log(Name[0]);

//To find the length of str
console.log(Name.length);

//Converts str to uppercase
console.log(Name.toUpperCase());
//Returns char at provided idx
console.log(Name.charAt(3));
//Returns the idx of char
console.log(Name.indexOf('s'));


//To find the substring
//can't give neg values here
const newStr=Name.substring(0,4)
console.log(newStr);


const anotherStr=Name.slice(-7,3)
console.log(anotherStr);

//Trim
const newStrOne="    harsh   "
console.log(newStrOne.trim());

//Replace
const url="htt[s://anvesha.com/anvesha%20rastogi"
console.log(url.replace('%20','-'));


//To check whether the substr exists inside a str
console.log(url.includes('anvesha'));


//Splitting str
console.log(Name.split('-'));