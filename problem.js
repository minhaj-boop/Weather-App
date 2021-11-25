function processData(input) {
    // const convert = input+'';
        function startsWithZero(input) {
            if(input[0] === '0')
                return true;
            else return false;
        }
        
        function areSame(input) {
            const arr = String(input).split('');
            return arr.every(function (element) { 
                return element === arr[0]; 
            });
        }
        
        function areConsecutiveDescending(input) {
            
            let converter = num => Number(num);
            const Arr = Array.from(String(input), converter);
        
            const arr = [...Arr];
            if(arr[0] === '0' && arr[1]=== '9')
                return true;
            // const diffArr = arr.slice(1).map(function(num, i) { 
            //     return num - arr[i]; 
            // })
            // return diffArr.every(value => value == 1)
            for(let i = 0; i < arr.length; i++) {
                if(input[i] < input[i+1])
                    return false;
            }
            return true;
        }    
        function areConsecutiveAscending(input) {
            
            let converter = num => Number(num);
            const Arr = Array.from(String(input), converter);
        
            const arr = [...Arr];
            if(arr[0] === '0' && arr[1]=== '9')
                return true;
            // const diffArr = arr.slice(1).map(function(num, i) { 
            //     return num - arr[i]; 
            // })
            // return diffArr.every(value => value == 1)
            for(let i = 0; i < arr.length; i++) {
                if(input[i] > input[i+1])
                    return false;
            }
            return true;
        }    

        function isPalindrome(input) {  
        
            const len = input.length;  
            for (let i = 0, j = len-1; i < len; i++, j--) {
                if(input[i]!==input[j])
                    return false;    
            }  
            return true;  
        } 

        function isReapeatedTwice(input) {
            
            let converter = num => Number(num);
            const Arr = Array.from(String(input), converter);
        
            const arr = [...Arr];
            let c = 0;
            let flag = true;
            for (let i = 0; i < arr.length; i++)
            {
                c=0;
                for(let j = i + 1; j < arr.length; j++)
                {
                    if(arr[i] === arr[j])
                    {
                        c++;
                    }
                }
                if(c===2)
                    return true;
            }
            return false;
        }

        if(input.length < 3) {
            console.log("No");
        }
        else if(startsWithZero(input)) {
            console.log('Yes1');
        }
        else if(areSame(input)) {
            console.log('Yes1');
        } else if(areConsecutiveAscending(input) || areConsecutiveDescending(input)) {
            console.log('Yes2');
        } else if(isPalindrome(input)) {
            console.log('Yes3');
        } else if(isReapeatedTwice(input)) {
            console.log('Yes4');
        } else  {
            console.log("No");
        }
} 
processData('0000');
