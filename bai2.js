function checkCondition(condition) {
    if (condition) {
        console.log("Xin chao");
    }
    else {
        console.log("Tam viet");
    }
}
let isGreeting = true;
checkCondition(isGreeting);
isGreeting = false;
checkCondition(isGreeting);
