/*  滑动加载更多
*   @params el: 真实dom
*   @params cb: 滑动到底执行的回调
*/
export function loadMore(el, cb) {
    let timer;
    el.addEventListener('scroll', function() {
        clearInterval(timer);
        // 防抖 -- 减少触发次数，大概就是延时处理
        timer = setTimeout( () => {
            let { offsetHeight, scrollTop, scrollHeight } = el;
            if(offsetHeight + scrollTop + 40 > scrollHeight) {
                cb();
                clearInterval(timer);
            }
        }, 30)
    }, false)
}

/*  下拉刷新
*   @params el: 真实dom
*   @params cb: 执行的回调
*/
export function pullRefresh(el, cb) {
    let distance = el.offsetTop;
    let startY, move;
    // 默认 content 不动时的位置
    let { offsetTop, scrollTop } = el;

    function touchend() {
        // 滑动回原始位置
        if(move < 160) return el.style.top =  distance *2/ 100 + 'rem' ;
        let timer = setInterval( () => {
            move -= 3;
            if(move <= 0) {
                clearInterval(timer);
                // 刷新课程列表
                cb();
            }
            el.style.top = (move + distance)*2 / 100 + 'rem' ;
        }, 8)
        // 抬起时清空事件
        el.removeEventListener('touchmove', touchmove);
        el.removeEventListener('touchend', touchend);
    }

    function touchmove(e) {
        // 判断滑动方向
        move = e.touches[0].pageY - startY;
        if(move > 0) {
            if(move > 160 ) {
                move = 160;
            } 
            // 向下拉
            el.style.top = (move + distance) *2/ 100 + 'rem' ;
        }else {
            el.removeEventListener('touchmove', touchmove);
            el.removeEventListener('touchend', touchend);
        }
    }

    function touchstart(e) {
        // 记录开始的位置
        startY =  e.touches[0].pageY;
        if(scrollTop === 0 && offsetTop === distance) {
            el.addEventListener('touchmove', touchmove, false);
            el.addEventListener('touchend', touchend, false);
        }
    }

    el.addEventListener('touchstart', touchstart, false);
}