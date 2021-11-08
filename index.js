function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(mondayActivity = "go to the office") {
    return `This Monday, I will ${mondayActivity}.`
};

// function wrapAdjective(emphasis) {
//     const innerFunction = function(adj = "a hard worker"){
//         return `You are ${emphasis}${adj}${emphasis}!"
//     }
//     return innerFunction;
// };

function wrapAdjective(emphasis = "*") {
    const innerFunction = function(adj = "a hard worker"){
        return `You are ${emphasis}${adj}${emphasis}!`;
    }
    return innerFunction;
};

