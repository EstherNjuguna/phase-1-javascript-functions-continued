// code your solution here
function saturdayFun(fun='roller-skate' ,hobby='I want to bath my dog'){
    if (fun){
        return (`This Saturday, I want to ${fun}!`);
    }
        else(`This Saturday, I want to ${hobby}!`)

    }

    const mondayWork = function(work = 'go to the office' , home = 'work from home') {
        if (work) {
            return (`This Monday, I will ${work}.`);
        }
        else if (home)
            return (`This Monday, I will ${home}.`);
    }

    function wrapAdjective(wrap = '*') 
       // wrapAdjective("*")("a dedicated programmer")  
        //function wrapAdjective(wrap = '*' , special) 
        
            {
                return function (day='special') {
                    return `You are ${wrap}${day}${wrap}!`
                }
            }
        