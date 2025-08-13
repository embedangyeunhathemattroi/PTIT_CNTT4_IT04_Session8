function checkCondition <T extends Boolean>(condition:T):void {
    if (condition) {
        console.log("Xin chao");
        
    } else {
        console.log("Tam viet");
        
    }
    
}
let isGreeting:Boolean=true;
checkCondition(isGreeting);
isGreeting=false;
checkCondition(isGreeting)