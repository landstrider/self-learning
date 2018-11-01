//var arr_promises = [
//  Promise.resolve(setTimeout(function p1(){
//	console.log("p1 fullfilled")  
//  },300)),
//  Promise.resolve(setTimeout(function p2(){
//	console.log("p2 fullfilled")  
//  },300)),
//  Promise.resolve(setTimeout(function p3(){
//	console.log("p3 fullfilled")  
//  },2500)),
//];
//
//function Promise_all(){
//  Promise.all(arr_promises).then(console.log("All Promises resolved"))
//}
//
//Promise_all();

function Promise_all(promises) {
    return new Promise((resolve, reject) => {
	      let results = [];
	      let pending = promises.length;
	      for (let i = 0; i < promises.length; i++) {
			      promises[i].then(result => {
					        results[i] = result;
					        pending--;
					        if (pending == 0) resolve(results);
					      }).catch(reject);
			    }
	      if (promises.length == 0) resolve(results);
	    });
}

Promise_all([]).then(array => {
    console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(resolve => {
	      setTimeout(() => resolve(val), Math.random() * 500);
	    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
    console.log("We should not get here");
}).catch(error => {
    if (error != "X") {
	      console.log("Unexpected failure:", error);
	    }
});
