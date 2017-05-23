{
    //简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o:o,
        k:k
    }
    let es6 = {
        o,
        k
    }
    console.log(es5,es6);

    let es5_methond = {
        hello:function(){
            console.log('hello')
        }
    }
    let es6_methond = {
        hello(){
            console.log('hello')
        }
    }
}

{
    //属性表达式
    let a = 'b';
    let es5_obj = {
        a:'c'
    };
    let es6_obj = {
        [a]:'c'  //类似于上面es5中声明b:'c',因为es6中【a】是表达式，[a]='b'
    }
}

{
    //新增 API
    console.log('字符串',Object.is('abc','abc'));//判断是否相等
    console.log(Object.is([],[]));//数组是引用类型

    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));//浅拷贝，不拷贝继承，不可枚举

    let test = {k:123,0:456};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }
}

{
    //扩展运算符 babel暂时不支持
    let {a,b,...c} = {
        a:'test',
        b:'kill',
        c:'ddd',
        d:'ccc'
    }
    console.log(c);
}