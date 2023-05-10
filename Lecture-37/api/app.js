

let jsonData = `[
    {
        "id":1 , 
        "name":"John",
        "occupation":"software developer",
        "address":[]
    },
    {
        "id":2 , 
        "name":"Ajay",
        "occupation":"devops enginner",
        "address":[
            {
                "addressid":1,
                "city": "Delhi",
                "country": "india"
            }
        ]
    }

]`

// this is a string and i cannot use .(dot notation) here.
//i cannot work on string here kyuki kyuki object hi hai hai
// usable js object mie convet krna hoga

// i have a json string and i cannot work on it directly so i eed to parse it first

let obj = JSON.parse(jsonData) //acepts json string

console.log(obj[0].occupation);

let str = JSON.stringify(obj[0].occupation);
console.log(str);



















