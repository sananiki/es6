{
    console.log(0b00111111);//二进制  0b
    console.log(0o767);//八进制  0o
}

{
    console.log('15',Number.isFinite(15));//判断是否有尽
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite('true'/0));
    console.log(Number.isNaN(NaN));//判断是否不是数字
}

{
    //判断是否是整数
    console.log(Number.isInteger(25));
    console.log(Number.isInteger(25.0));//也判断位整数
}

{
    console.log(Number.MAX_SAFE_INTEGER);//数值最大上限
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.isSafeInteger(10));//是否是安全数值
}

{
    console.log(4.1,Math.trunc(4.1));//只取整数，不四舍五入
    console.log(Math.sign(-5));//负数   返回-1
    console.log(Math.sign(0));//0    0
    console.log(Math.sign(1));//整数   返回1
    console.log(Math.sign('50'));//字符串可以转换成数字   返回1
    console.log(Math.sign('foo'));//字符串无法转换成数字   返回NaN

}
{
    console.log(Math.cbrt(-1));//立方根
}