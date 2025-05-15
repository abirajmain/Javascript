const accountId = 332669
let accountEmail = "abir@yahoo.com"
var accountPassword = "A1234#"
accountCity = "Dhaka"
let accountState;

// accountId = 5     // value can't be changed

accountEmail = "bulldog@yahoo.com"
accountPassword = "Abir999$"
accountCity = "New York"

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
/*
Prefer not to use var
because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


