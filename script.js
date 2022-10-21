//>>>>>>>>>>>>>>>>>>>>>>>>>> Problem:1 radianToDegree <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function radianToDegree(radian) {
    // check input parameter
    if (typeof radian !== "number") {
        return "Please Enter a Number";
    } else {
        const pi = Math.PI;
        const radians = radian * (180 / pi); // convert radian to degree
        return parseFloat(radians.toFixed(2)); // convert string to number and remove extra number
    }
}
//>>>>>>>>>>>>>>>>>>>>>>> Problem:2 isJavaScriptFile <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function isJavaScriptFile(filename) {
    // check input parameter
    if (typeof filename !== "string") {
        return "Please Enter a String";
    } else {
        // convert toLowerCase and find last 3 index in file name
        const text = filename.toLowerCase().substring(filename.length - 3) === '.js';
        return text;
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>> Problem 3: oilPrice <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function oilPrice(diesel, petrol, octan) {
    // check input parameter and check negative value
    if ((typeof diesel !== "number" || Math.sign(diesel) === -1) || (typeof petrol !== "number" || Math.sign(petrol) === -1) || (typeof octan !== "number" || Math.sign(octan) === -1)) {
        return "Please Enter Correct Args";
    } else {
        // input parameter multiple price
        const dieselCount = 114 * diesel;
        const petrolCount = 130 * petrol;
        const octanCount = 135 * octan;
        // total price
        const totalExpense = dieselCount + petrolCount + octanCount;
        return totalExpense;
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Problem 4: publicBusFare <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function publicBusFare(public) {
    // check input parameter and check negative value
    if (typeof public !== 'number' || Math.sign(public) === -1) {
        return "Please Enter Correct Args";
    } else {
        // bus and microbus capacity
        let busCapacity = 50;
        let microbusCapacity = 11;
        // bus condition apply
        if (busCapacity >= 50 && busCapacity <= 50) {
            let extra = public % busCapacity; // calculate bus people
            // microbus condition apply
            if (microbusCapacity >= 11 && microbusCapacity <= 11) {
                let extraPs = extra % microbusCapacity; // calculate microbus people
                let expense = extraPs * 250; // total public bus ticket price
                return expense;
            }
        }
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Problem 5: isBestFriend <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function isBestFriend(obj1, obj2) {
    // check input parameter
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return "Please Enter a Object";
    } else {
        // best friend condition apply
        if (obj1.name == obj2.friend && obj2.name == obj1.friend) {
            return true;
        } else {
            return false;
        }
    }
}