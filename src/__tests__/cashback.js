import  calculateCashback from "../cashback.js";

test ("cashback at sum:", () => {
    const result = calculateCashback(500);
    expect(result).toBe(0);
});


// const datalist = [
//     ['gold',100000,5000],
//     ['silver',10000,200],
//     ['regular',1000,10],
//     ['no',500,0],
// ];

// const handler = test.each(datalist);

// handler('testing cashback function with %s status and %i amount', (status,amount,expected) => {
//     const result = calculateCashback(amount);
//     expect(result).toBe(expected);
// });

// компактная сборка =>

test.each([
    ['gold',100000,5000],
    ['silver',10000,200],
    ['regular',1000,10],
    ['no',500,0],
])('testing cashback function with %s status and %i amount', (_,amount,expected) => {
    const result = calculateCashback(amount);
    expect(result).toBe(expected);
});