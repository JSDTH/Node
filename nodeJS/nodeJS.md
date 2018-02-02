# nodeJS

标签（空格分隔）： nodeJS

---

##环境
    

###CommonJS
    1.nodeJS自带的模块管理系统，模块规范；
    2.每个文件是一个模块，有自己的作用域，一个文件不予许定义两个模块； 
    3.模块内部的module变量代表模块本身；
    4.module.exports属性代表模块对外接口；
###global
    nodeJS里的顶级对象是global，nodeJS里没有window，不存在BOM/DOM；
###process
    当前执行的进程，挂载在global下的；

##require
###require规则
    1. / 表示绝对路径， ./表示相对于当前文件的路径；
    2.支持js、json、node拓展名，不写的话依次尝试；
    3.不写路径则认为是build-in模块或是各级modules内的第三方模块；
    
###require特性
    1.module加载的时候会被执行，加载完后会被缓存；
    2.一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出；
    
##exports与module.exports
    //exports等于是module.exports的快捷方式；
    const exports = module.exports;
    (
        function (exports,require,module,__filename,__dirname) {
        //你所写的代码；
        }
    )
    
###exports可以输出，但是不可以更改exports的指向
    例如：
        //可以输出：
        exports.text = 100;
        //不可以输出,因为更改了指向
        exports = {
            a:1，
            b:2,
            test: ture
        }
        
        //输出对象需要使用module.exports
        module.exports = {
            a:1，
            b:2,
            test: ture
        }
    
##global
###global自带的属性
    
####Commonjs
    定义的变量不会暴露到全局，要想暴露到全局需要在global.变量名；
####Buffer、process、console
    Buffer: 二进制字符串；
    process：进程；
#####参数：
         agrv： 
                启动process时的所有参数，返回的是个数组；
                启动的命令  node；
                启动文件的路径；
                *还可以自带其他参数： node 文件名.js --test a=1 b=2...
         argv0：
                启动的命令  node;
         execArgv： 
                调用node所传入的特殊参数，例如 --inspect；
                *写在文件名之前的参数是不进入argv统计的；
         execPath：
                调用文件脚本的路径；
                
#####环境参数
        env：
            调出所有环境参数；
        cwd():
            打印出当前执行文件的路径；
    
####timer
    setImmediate():
        类似定时器，只有一个函数参数；
        把当前插入的函数放在了下次执行队列的队首，必须等待nextTick执行完成；
        
    setTimeout():
        延时定时器；
        把当前插入的函数放在了上下两个方法之间，前提是时间不能太长；
        
    process.nextTick():
        也是接收一个函数参数；
        把当前插入的函数放在了执行队列的最后一个，无论这个有多少，setImmediate都要等待他执行完成；
*除非是刻意需要在异步I/O执行前执行，否则一般情况下用setImmediate；
        
##基础API
###Path 和路径有关的一切
    

    