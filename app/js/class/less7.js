{
    (function test(s,y="world"){
        console.log(s,y);
    })("hello","sananiki")
}

{
    let x = 'test';
    function test2(x,y=x){
        console.log('作用域',x,y)
    }
    test2('kill');
    //块级作用域的概念
    function test3(c,y=x){
        console.log('作用域',c,y);
    }
    test3('kill');
}

{
    function test3(...arg){
       for(let v of arg){
          console.log('rest',v);
       }
    }
    test3(1,3,5);
}

{
    //扩展运算符
    console.log(...[1,2,4]);//把数组拆成离散的值  输出 1 2 4
}

{
    let arrow = x=>x*3;
    console.log(arrow(3));
}

{
    //伪调用的好处？？？提升性能
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x);
    }
}