{
    let arr = Array.of(3,4,5,6,7);//声明数组
    console.log(arr);
    let a = [];
    let b = Array.of();
    console.log(a);
}
 
{
    let p = document.querySelectorAll('p');
    console.log(p);
    let pArr = Array.from(p);//把集合转换成数组
    pArr.forEach(function(item){
        console.log(item.textContent);
    })

    console.log(Array.from([1,3,5]));
    console.log(Array.from([1,3,5],function(item){
        return item*2;
    }))
}

{
    console.log('fill-3',[1,'a',undefined].fill(3));//fill 用三来填充
    console.log('fill',[1,'a',undefined].fill(3,1,3));//后两个参数，1起始位置3结束位置

}

{
    for(let index of [1,3,5].keys()){//keys返回下标
        console.log('keys',index)
    }
    for(let values of [1,3,5].values()){//keys返回下标
        console.log('keys',values)
    }
    for(let [index,value] of [1,3,5].entries()){//
        console.log('keys',index,value)
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4));//替换位置0，从3开始读取，到4读取结束（下标第三位到第四位的数值从下标0开始替换）
}

{
    //查找
    console.log([1,2,3,4,5,6].find(function(item){//第一个满足条件的元素
        return item > 3;
    }))
     console.log([1,2,3,4,5,6].findIndex(function(item){//第一个满足条件的元素的下标
        return item > 3;
    }))
}

{
    console.log('number',[1,2,3,NaN].includes(1));//数组中是否包括1
    console.log('number',[1,2,3,NaN].includes(NaN));//es6新增
}