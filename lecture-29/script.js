let p = new Promise((res,rej)=>{
    const a=2;
    const b=3;
    if(a+b==5){
        res('done');
    }
    else{
        rej('failed');
    }
})
// console.log(p);