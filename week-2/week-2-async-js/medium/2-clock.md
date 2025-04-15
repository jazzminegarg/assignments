// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function displayClock() {
    const now = new Date();

    // Format HH:MM:SS
    const hours24 = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time24 = `${hours24}:${minutes}:${seconds}`;

    // Format HH:MM:SS AM/PM
    const hours12 = now.getHours() % 12 || 12;
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const time12 = `${String(hours12).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

setInterval(displayClock, 1000);

//padstart function
// const str = '5';
// console.log(str.padStart(2, '0')); // Output: '05'