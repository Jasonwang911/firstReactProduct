## babel-plugin-transform-decorators-legacy babel的装饰器包

## 装饰器  装饰类  不能装饰函数，函数会预解析
```
class A {
    say() {
        console.log('hello');
    }
}
A.say = 'hello';

@say
class B {

}
function say(target) {   // target 代表类
    target.say = 'hello';
}
console.log(B.say)


@connect(fn1, fn2)
@withRouter
class C {

}

connect()()

```


## 动画 react-transition-group   npm install react-transiton-group --save


## react-swipe   npm install swipe-js-iso react-swipe --save

## redux 刷新清空

