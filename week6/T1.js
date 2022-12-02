let emp = [{
    "ID": 20001,
    "name": "นางสาวจันทรรัตน์ ปรีดาศิริกุล",
    "department": "แผนกฝ่ายบุคคล",
    "position": "HR",
    "salary": 27000,
    "bonus": "A"
}, {
    "ID": 20002,
    "name": "นายภูมิพัฒน์ วัชรจิระกุล",
    "department": "แผนกไอที",
    "position": "System Engineer",
    "salary": 24000,
    "bonus": "S"
}, {
    "ID": 20003,
    "name": "นางอนันตญา แสนวงศ์",
    "department": "แผนกการเงิน",
    "position": "Account",
    "salary": 38000,
    "bonus": "B"
}, {
    "ID": 20004,
    "name": "นางสาวกันสิตา มิ่งมาลา",
    "department": "แผนกฝ่ายบุคคล",
    "position": "HR",
    "salary": 23000,
    "bonus": "A"
}, {
    "ID": 20005,
    "name": "นายสุชาติ วัฒนศักดิ์มนตรี",
    "department": "แผนกฝ่ายบุคคล",
    "position": "HR",
    "salary": 76000,
    "bonus": "C"
}, {
    "ID": 20006,
    "name": "นายกรณ์ อุดมทรัพย์",
    "department": "แผนกการเงิน",
    "position": "Account",
    "salary": 51000,
    "bonus": "S"
}, {
    "ID": 20007,
    "name": "นายจักริน ภูงาม",
    "department": "ฝ่ายบุคคล",
    "position": "HR",
    "salary": 19000,
    "bonus": "A"
}, {
    "ID": 20008,
    "name": "นางอรัญญา เหล่าสกุล",
    "department": "แผนกการเงิน",
    "position": "Account",
    "salary": 33000,
    "bonus": "C"
}, {
    "ID": 20009,
    "name": "นางสาวสราวลี ธาราวงศ์",
    "department": "แผนกไอที",
    "position": "System Engineer",
    "salary": 13000,
    "bonus": "B"
}]
let p1 = 0
let p4 = 0
let p5 = 0
let p6 = 0
for (empsum = 0; empsum < emp.length; empsum++) {
    if (emp[empsum].bonus == "S") {
        p3 = emp[empsum].salary * 1.6;
        p5 += p3;
    } else if (emp[empsum].bonus == "A") {
        p3 = emp[empsum].salary * 1.3;
        p5 += p3;
    } else if (emp[empsum].bonus == "B") {
        p3 = emp[empsum].salary * 1.0;
        p5 += p3;
    } else if (emp[empsum].bonus == "C") {
        p3 = emp[empsum].salary * 0.8;
        p5 += p3;
    }
    p1 = emp[empsum].salary * 12;
    p7 = p1 + p3
    p6 += p7;
    if (p1 < 300000) {
        p2 = p1 * 0;
        p4 += p2;

    } else if (p1 >= 300000 && p1 <= 600000) {
        p2 = p1 * 0.10;
        p4 += p2;
    } else if (p1 >= 600000 && p1 <= 10000000) {
        p2 = p1 * 0.25;
        p4 += p2;
    } else if (p1 > 1000000) {
        p2 = p1 * 0.35;
        p4 += p2;
    }
    console.log(emp[empsum].name, "มีรายได้สุทธิต่อปี =", p7, "บาท", "ต้องจ่ายภาษี", p2, "บาท", "โบนัสที่ได้", p3);
}

console.log("*****************************")
console.log("พนักงานแผนกการเงิน")
for (i = 0; i < emp.length; i++) {
    if (emp[i].position == "Account") {
        itsum = emp[i].salary * 12;
        console.log(emp[i].name, "ตำแหน่ง", emp[i].position, "เงินเดือน", emp[i].salary, "รายได้ต่อปี", itsum);
    }
}

console.log("*****************************")
console.log("ผลประเมิน A")
for (i = 0; i < emp.length; i++) {
    if (emp[i].bonus == "A") {
        console.log(emp[i].name, "ผลประเมิน", emp[i].bonus);
    }
}


console.log("*****************************")
console.log("บริษัทต้องจ่ายภาษีทั้งหมด :", p4)
console.log("โบนัสที่พนักงานต้องได้ :", p5)
console.log("รายจ่ายต่อปีของบริษัท :", p6)