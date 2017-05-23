{//块级作用域
    let regex = new RegExp('xyz','i');//i修饰符，忽略大小写  es5

    let regex2 = new RegExp(/xyz/i); //es5

    console.log(regex.test('XyZ123'),regex2.test('XYZ333'))

    let regex3 = new RegExp(/xyz/ig,'i');//第二个参数i,会覆盖前面的/ig两个修饰符

    console.log(regex3.flags); //.flags用来获取修饰符，es6新增方法

}

{
    let s = 'bbb_b_bb';
    let a1 = /b+/g;
    let a2 = /b+/y;
    //g,y都是全局匹配，g是从上一次匹配之后再进行匹配，y是上一次匹配后的下一个字符开始匹配，如果下一个不是则false
    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));

    console.log(a1.sticky,a2.sticky);//判断是否带y修饰符
}

{
    //u,unicode修饰符
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));
    //第一个没加u修饰符，第一个当成两个字符，第二个当成一个

    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));//加了u之后才能被识别，上面一个无法识别成a的unicode字符
    
    console.log(`\u{20BB7}`);//大于两个字节
    let s = '𠮷';
    console.log('u',/^.$/.test(s));// .用来匹配任何字符(条件小于两个字节的字符)  es5
    console.log('u-2',/^.$/u.test(s));

    //S修饰符还未实现
}