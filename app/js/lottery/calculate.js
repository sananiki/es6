class Calculate{
    //计算注数  active当前选中的号码  play_name当前的玩法标示
    computeCount(active,play_name){
        let count = 0;
        const exist = this.play_list.has(play_name);
        const arr = new Array(active).fill('0');
        if(exist && play_name.at(0)==='r'){//at通过垫片库方法可以查询字符串的第一个字符
            count = Calculate.combine(arr,play_name.split('')[1]).length;//分割成数组，取第2个,静态方法
        }
        return count;
    }
    //计算金额,奖金范围预测
    computeBonus(active,play_name){
        const play = play_name.split('');
        const self = this;
        let arr = new Array(play[1]*1).fill(0);
        let min,max;
        if (play[0]==='r'){
            let min_active = 5-(11-active);//最小命中数
            if(min_active>0){
                if(min_active-play[1]>=0){
                    arr = new Array(min_active).fill(0);
                    min = Calculate.combine(arr,play[1].length);
                }else{
                    if(play[1]-5>0 && active -play[1]>=0){
                        arr = new Array(active-5).fill(0);
                        min = Calculate.combine(arr,play[1]-5).length;
                    }else{
                        min = active-play[1]>-1?1:0
                    }
                }
            }else{
                min = active -play[1]>-1?1:0;
            }
            let max_active = Math.min(active,5);
            if(play[1]-5>0){
                if(active-play[1]>=0){
                    arr = new Array(active-5).fill(0);
                    max = Calculate.combine(arr,play[1]-5).length;
                }else{
                    max = 0;
                }
            }else if(play[1]-5<0){
                arr = new Array(Math.min(active,5)).fill(0);
                max = Calculate.combine(arr,play[1]).length;

            }else{
                max = 1;
            }
        }
        return [min,max].map(item=>item*self.play_list.get(play_name).bonus)
    }
    //静态方法直接使用类名进行调用  组合运算
    static combine(arr,size) {
        //使用递归
        let allResult = [];
        (function f(arr, size, result) {
            let arrLen = arr.length;
            if(size>arrLen){
                return;
            }
            if(size===arrLen){
                allResult.push([].concat(result,arr))
            }else{
                for(let i = 0;i<arrLen;i++){
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if(size ===1){
                        allResult.push(newResult)
                    }else{
                        let newArr =[].concat(arr);
                        newArr.splice(0,i+1);
                        f(newArr,size-1,newResult)
                    }
                }
            }
        })(arr, size, [])
        return allResult;
    }

}

export default  Calculate