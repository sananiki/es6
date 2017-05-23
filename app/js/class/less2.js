{//块级作用域
    let a,b,c;
    [a,b,c]=[1,2,3]
    console.log(a,b,c)
}
{
    let a,b,res;
    [a,b,...res] =[1,2,3,4,5,6]
    console.log(res)
}
{
    let a,b;
    ({a,b}={a:1,b:2})
    console.log(a,b)
}