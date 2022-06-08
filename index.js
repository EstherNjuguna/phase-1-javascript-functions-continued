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

    function wrapAdjective(wrap = '*' , special="special") 
       // wrapAdjective("*")("a dedicated programmer")  
        //function wrapAdjective(wrap = '*' , special) 
        {
            if (special) {
                return (special => `You are *a hard worker*!` );
            }
            else 
                return (wrap =>`You are ||a dedicated programmer||!`)
        }
        