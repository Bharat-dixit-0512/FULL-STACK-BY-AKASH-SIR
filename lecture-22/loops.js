// for(let i=1;i<=10;i++){
//     if(i&1){
//         console.log(i);
//     }
// }
//
//
// let student={
//     name: "Bharat",
//     age:20,
//     section:'O',
//     Course:"Btech(CSE)"
// }
// for(let key in student){
//     console.log(key,':', student[key]);
// }


for(let num =0;num<=10;num++){
    for(let count=0;count<=10;count++){
        console.log(`num:${num},count:${count}`);
        if(num==5 && count==5){
            break  ;
        }
    }
}


for(let i=0;i<=10;i++){
    console.log(`<h${i}></h${i}>`);
}