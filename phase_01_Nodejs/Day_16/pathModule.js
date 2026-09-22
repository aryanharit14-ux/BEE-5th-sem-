// macos => \Program Files\Common Files\System\Students.txt

// const filePath = require('path');
const path = require('path');

const filePath = path.join('Program Files', 'Common Files', 'Students.txt');

console.log(filePath); // Output: Program Files\Common Files\Students.txt

console.log(path.basename(filePath)); // Output: Students.txt

console.log(path.dirname(filePath)); // Output: Program Files\Common Files 