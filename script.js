const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans = [];
	let temp = [];
	let sum = 0;
	for(let x of arr){
	    if(sum + x <= n){
	        temp.push(x);
	        sum += x;
	    }else{
	        ans.push(temp);
	        sum = 0;
	        temp = new Array();
	    }
	}

	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
