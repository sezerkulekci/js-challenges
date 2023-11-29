let nums = [3,2,4]
let target = 6;

for(let i =0; i < nums.length; i++){
    for(let j= i+1; j < nums.length; j++){
        if(target == nums [i] + nums[j]){
            console.log(i,j);
        }
    }
}

