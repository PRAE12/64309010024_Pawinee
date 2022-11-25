let obj = {
    "firstName": "Jonh",
    "lastName": "Smith",
    "isAlive": true,
    "age": 25,
    "address": {
        "streetAddress": "21 2nd Stress",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
    },
    "phoneNumbers": [{
        "type": "home",
        "number": "211 555-1234"
    }, {
        "type": "office",
        "number": "646 555-4567"
    }, {
        "type": "mobile",
        "number": "1234 456-789"
    }],
    "childern": [],
    "spouse": null
};
console.log(obj.phoneNumbers[1])