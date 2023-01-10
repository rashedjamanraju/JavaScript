
//Primitive type data এবং reference type data এর মধ্যে পার্থক্য। 

/*PRIMITIVE TYPE DATA:
যখন আমরা একটি variable  এ premitive type data ইনপুট করি এবং অন্য আরেকটি variable এ যদি আমরা ঐ আগের variable টিকে ইনপুট করি 
তাহলে ২য় variable এ ১ম variable এর value টি কপি হবে । যার কারণে  ৩য় statement এ ১ম variable এর মধ্যে নতুন আরেকটি data ইনপুট করলে ২য় variable 
এর value এর মধ্যে কোনো পরিবর্তন আসবে না।তবে ১ম variable এর value এর মধ্যে পরিবর্তন আসবে।*/

//EXAMPLE:
          let a=5;
          let b=a;
          a=7;
          console.log(a,b);
          //OUTPUT: 7 5

/*NOTE: যদি variable এর value copy না হয়ে variable এর memory location / memory adress কপি হত,তাহলে ৩য় statement এ  ১ম variable এ নতুন value assign
করলে বা update করলে সব জায়গায় ঐ পরিবর্তন দেখা যেত --যা বাস্তবে premitive type data এর ক্ষেত্রে প্রযোজ্য হয় না।
এটি প্রযোজ্য হয় তখনই যখন আমরা ইনপুট হিসেবে reference type data ব্যবহার করি তখন।

REFERENCE TYPE DATA:
যখন আমরা একটি variable  এ reference type data ইনপুট করি এবং অন্য আরেকটি variable এ যদি আমরা ঐ আগের variable টিকে ইনপুট করি 
তাহলে ২য় variable এ ১ম variable এর value টি কপি না হয়ে ১ম variable এর মেমোরি অ্যাড্রেসটি কপি হবে । যার কারণে  ৩য় statement এ ১ম variable এর মধ্যে নতুন 
আরেকটি reference type data ইনপুট করলে অথবা আগের variable এর মধ্যে update আনলে ২য় variable এর value এর মধ্যেও পরিবর্তন আসবে ।
এর একমাত্র কারন হচ্ছে ২টি variable এরই memoরy location/memory adress একই হয়ে যাওয়া।*/
//EXAMPLE:
//01. new value assigning
          let a={name:"Rashed",age:21};
          let b=a;
          a={name:"Raju",age:20};
          console.log(a,b);
          
          //OUTPUT:{ name: 'Raju', age: 20 } { name: 'Raju', age: 21 }


//02 pre property value updating
          let a={name:"Rashed",age:21};
          let b=a;
          a.name="raju"
          console.log(a,b);
          //OUTPUT:{ name: 'raju', age: 21 } { name: 'raju', age: 21 }
          
