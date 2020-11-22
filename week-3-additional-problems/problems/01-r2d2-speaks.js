/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms

    There are no mocha tests for this code.
    Run the following two lines beneath the function
    to see if your code demonstrates the expected behavior.

*/

function r2d2Speaks(code) {
    if(code.length === 0) return;
    let num = code.shift();
    if(num === 0) {
        setTimeout(() => {
            console.log('beep');
            r2d2Speaks(code)
        },400)
    } else {
        setTimeout(() => {
            console.log('boop')
            r2d2Speaks(code)
        }, 800)
    }

}

let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
