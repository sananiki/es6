{
    console.log('a=',`\u0061`)
    console.log('s=',`\u20BB7`);//大于两个字节，没法输出正常字符  0XFFFF  单个字节

    console.log('s',`\u{20BB7}`); //可以正常输出字符使用{}
}

{
    let s = '𠮷';
    console.log('length',s.length);//大于两个字节,所以长度是2、
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('at0',s.charCodeAt(0));//取编码码值 es5
    console.log('at1',s.charCodeAt(1));

    let s1='𠮷a';
    console.log('length',s1.length);
    console.log('code0',s1.codePointAt(0));//十进制
    console.log('code0',s1.codePointAt(0).toString(16));//es6取编码值取十六进制
    console.log('code1',s1.codePointAt(1));//十进制
    console.log('code1',s1.codePointAt(1).toString(16));//十六进制
    console.log('code2',s1.codePointAt(2));//十进制
    console.log('code2',s1.codePointAt(2).toString(16));//十六进制
}
{
    //处理大于0XFFFF的unicode字符
    console.log(String.fromCharCode('0x20bb7'));//es5
    console.log(String.fromCodePoint('0x20bb7'));//es6
}
{
    //字符串遍厉器
    let str='\u{20bb7}abc';
    for(let i=0;i<str.length;i++){//es5
        console.log('es5',str[i]);
    }
    for(let x of str){
        console.log('es6',x);
    }
}

{
    let str = 'string';
    console.log('includes r',str.includes("r"));
    console.log('start',str.startsWith('str'));
    console.log('end',str.endsWith('g'));
}
{
    let str='abc';
    console.log(str.repeat(2));//可以多次重复
}
{
    //模版字符串
    let name='list';
    let info='hello world';
    let m = `i am ${name},${info}`;
    console.log(m)
}
{
    console.log('1'.padStart(2,'0'));//指定长度如果不够用0来填充
    console.log('1'.padEnd(2,'0'));
}
{
    //标签模版
    let user = {
        name:'list',
        info:'hello world'
    };
    console.log(abc`i am ${user.name},${user.info}`);
    function abc(s,v1,v2){
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}

{
    console.log(String.raw`hi\n${1+2}`);//防止\n换行符生效
    console.log(`hi\n${1+2}`);
    console.log(`hi\\n${1+2}`);//  转义
}