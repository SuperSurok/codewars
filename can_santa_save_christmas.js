// 7KYU

// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS.
// Each duration represents the time taken by Santa to deliver a present.
// Determine whether he can do it in 24 hours or not.
// In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

// const strictEqual = require('chai').assert.strictEqual;

// function doTest (times, expected) {
//  const actual = determineTime(times.slice());
//  strictEqual(actual, expected, 
//    `for [${times.join(', ')}] expected ${expected} but got ${actual}`
//  );
// }

// it("sample tests", () => {
// 	doTest(["00:30:00", "02:30:00", "00:15:00"], true);
// 	doTest([], true);
// 	doTest(["04:30:00", "02:00:00", "01:30:00", "16:00:00"], true);
// 	doTest(["12:00:00", "12:00:00"], true);
// 	doTest(["12:00:00", "12:00:01"], false);
// 	doTest(["06:00:00","12:00:00","06:30:00"], false);
// });

function determineTime(duration) {
  let totalSeconds = 0;

  for (let t of duration) {
    const time = t.split(':');

    const h = parseInt(time[0]);
    const m = parseInt(time[1]);
    const s = parseInt(time[2]);

    totalSeconds += h * 3600 + m * 60 + s;
  }

  if (totalSeconds < 24 * 3600) {
    return true;
  } else {
    return false;
  }
}
