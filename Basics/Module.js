// function add(a,b)
// {
//     return a+b;
// }
// function sub(a,b)
// {
//     return a-b;
// }

//Approach 1
//module.exports = add;
//module.exprots = sub; // this will lead to override that is only subtract function implemented using math module

//Approach 2
// to get over this drawback 
// module.exports = {
//     addFn: add,
//     subFn: sub
// }

//Approach 3
//we can also export as
exports.add = (a,b) => (a+b);
exports.sub = (a,b) => (a-b);