// Basic literal string creation
var s1 = `In JavaScript '\n' is a line-feed.`;

// Multiline strings
var s2 = `In JavaScript this is
 not legal.`;

// String interpolation
var name = 'Tim';
var time = 'today';
var s3 = `Hello ${name}, how are you ${time}?`;

// Construct an HTTP request prefix is used to interpret the replacements and construction
// GET`http://foo.org/bar?a=${a}&b=${b}
//     Content-Type: application/json
//     X-Credentials: ${credentials}
//     { 'foo': ${foo},
//       'bar': ${bar}}`(myOnReadyStateChangeHandler);

console.log(s1);
console.log(s2);
console.log(s3);
