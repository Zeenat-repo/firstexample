// var x = [{a:"abc",b:"xyz",c:"asd",d.xyz:{xyz:"asd"},a:"abc",b:"xyz",c:"asd",d:{xyz:"qwe"}}]
// console.log (x.d.xyz);

// var str1 = "ABC";
// var str2 = "BC";

// var test1 = conditions.some(el => str1.includes(e1));//A
// var test2 = conditions.some(el => str2.includes(e1));//null
// str1.indexOf(str2);
// console.log(str1,'===>',test1);
// console.log(str2,'===>',test2);*/


<img [src]="x.avatar" />
<div class="details">
  <p>{{ x.email }}</p>
  <p>{{ x.first_name }}</p>
  <p>{{ x.last_name }}</p>

/*  separeted by comma.---------------------------------------------*/
/*var str1 = "apple orange zeenat";
var res = str1.split(" ");
console.log(res);//o/p ['apple','orange','zeenat']

//--------------------------------------------------------------------------------
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var filtered = array.filter(function(value, index, arr){ 
        return value > 5;
    });
    //filtered => [6, 7, 8, 9]
    //array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


/*  Splice method.---------------------------------------------*/
    /*var list = ["bar", "baz", "foo", "qux"];
    
    list.splice(0, 2); 
    // Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].

    /*  removing first element---------------------------------------------*/
    /*var ar = ['zero', 'one', 'two', 'three'];
    
    ar.shift(); // returns "zero"
    
    console.log( ar ); // ["one", "two", "three"]
    */