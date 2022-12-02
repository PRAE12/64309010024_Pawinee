let myJSON = '{"fristName": "Jonh","lastName": "Smith", "age": 25}';
let myObj = {
        fristName: "Jonh",
        lastName: "Smith",
        age: 25
    }
    //console.log(typeof(myJSON));
    //console.log(myObj.fristName);
    //funtion parse
let obj2 = JSON.parse(myJSON);
console.log(obj2, typeof(obj2));

//funtion strigify
let Json = JSON2.stringify(myObj);
console.log(JSON2, typeof(JSON2));