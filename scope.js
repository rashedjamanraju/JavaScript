
//var এর ক্ষেত্রে GLOBAL SCOPE এবং FUNCTION SCOPE প্রযোজ্য হবে। 
// PATTERN 01----VAR
/*
    GLOBAL SCOPE
    যখন আমরা var keyword দিয়ে কোনো একটি variable কে Globally declare(ফাংশনের ডিক্লারেশন এর {} এবং শুধুমাত্র {} এই ২জায়গার ভিতরে ছাড়া অন্য যেকোনো জায়গায় ) এবং value assign করি সেই variable কে যেকোনো জায়গা থেকে আমরা access করতে পারব।
*/ 
                var a="strings"; 
                if(true){
                    console.log(a); //a is accessible
                }
                console.log(a); //a is accessible
                function printSome(){
                    console.log(a)  //a is accessible
                }
                printSome();




// PATTERN 02----VAR 
/*
    GLOBAL SCOPE
    যখন আমরা var keyword দিয়ে কোনো একটি variable কোনো block এর মধ্যে declare এবং value assign করি সেই variable কে যেকোনো জায়গা থেকে আমরা access করতে পারব। block বলতে {} বুজায়।
    NOTE:-তবে function declare এর {} অংশটি block হিসেবে গন্য হবে না।
*/
                if(true){
                    var a="strings";
                    console.log(a); //a is accessible
                }
                console.log(a); //a is accessible 
                function printSome(){
                    console.log(a)  //a is accessible
                }
                printSome();




// PATTERN 03----VAR
/*
    FUNCTION SCOPE
    যখন আমরা var keyword দিয়ে কোনো একটি variable কে function declare এর {} এর মধ্যে declare  এবং value assign করি সেই variable কে শুধুমাত্র function এর ভিতরে ছাড়া আর কোথাও access করতে পারব না। 
*/ 
                function printSome(){ 
                    var a="strings";
                    console.log(a)  //a is accessible
                }
                printSome();
                //a is not accessible




//let এর ক্ষেত্রে GLOBAL SCOPE ,BLOCK SCOPE এবং FUNCTION SCOPE ৩ টিই প্রযোজ্য হবে। 
//PATTERN 01----LET
/*
    GLOBAL SCOPE
    যখন আমরা let keyword দিয়ে কোনো একটি variable কে globally declare এবং value assign করি সেই variable কে যেকোনো জায়গা থেকে আমরা access করতে পারব।
*/
                let a="strings";
                if(true){
                    console.log(a)  //a is accessible
                }
                console.log(a); //a is accessible
                function printSome(){
                    console.log(a)  //a is accessible
                }
                printSome();




// PATTERN 02----LET
/*
    BLOCK SCOPE
    যখন আমরা let keyword দিয়ে কোনো একটি variable কে কোনো block এর মধ্যে declare এবং value assign করি সেই variable কে  শুধুমাত্র ঐ block এর ভিতরে access করতে পারব। block বলতে {} বুজায়।
    NOTE:-তবে function declare এর {} অংশটি block হিসেবে গন্য হবে না।
*/
                if(true){
                    let a="strings";
                    console.log(a);//a is accessible
                }
                //a is not accessible




//PATTERN 03----LET
/*
    FUNCTION SCOPE
    যখন আমরা let keyword দিয়ে কোনো একটি variable কে function এর {} এর মধ্যে declare  এবং value assign করি সেই variable কে শুধুমাত্র function এর ভিতরে ছাড়া আর কোথাও access করতে পারব না। 
*/
                function printSome(){
                    let a="strings"
                    console.log(a); //a is accessible
                }
                printSome();
                //a is not accessible



