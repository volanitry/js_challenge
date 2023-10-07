/* this chllenge file was created, so that I could write the code off my heart without looking
*/
// thing i do in sunday saturday and monday
let today = "saturday"

if (today == "saturday") {
    console.log ("Come to the coding school")

}else if (today == "sunday") {
    console.log ("sleep")
}else if (today == "monday") {
    console.log ("go to school")
}else {
    console.log ("do whatever you want")
}

switch (today) {
    case"saturday":
    console.log("Coding time...")
    break;
    case"sunday":
    console.log("Sleeping time...")
    break;
    case"monday":
    console.log("School time...")
    break;
    
    default:
        console.log("free time")
        break;
}