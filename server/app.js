var express = require('express');
var axios = require('axios');

var app = express();

//  allow custom header and CORS ie不兼容 发请求体的都有options请求
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /*让options请求快速返回*/
    }else {
        next();
    }
});

// 使用axios进行接口转发
app.get('/sliders', function(req, res){
    axios.get('http://html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1535446864288').then( r => {
        res.json(r.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list)
    })
})

// 获取课程接口  需要添加分页 
// offet 数据偏移量   limit 每次取多少条     type 课程类型   
app.get('/lessons/:offset/:limit/:type', function(req, res) {
    let lessons = require('./lessons');
    let { 
            offset, 
            limit,
            type
        }  = req.params;
    let lists = lessons.filter( (item, index) => {
        if(type === 'all') {
            return true;
        }else{
            return item.type === type;
        }
    })
    offset = parseInt(offset);
    limit = parseInt(limit);
    let newLists = lists.slice( offset, offset + limit);
    let hasMore = offset + limit > lists.length ? false : true;
    res.json({
        hasMore,
        lists: newLists
    })
})

/*  详情页接口 
*
*/
app.get('/lesson/:id', function(req, res) {
    let {id} = req.params;
    let lessons = require('./lessons');
    let lesson = lessons.filter( (item, index) => {
        return parseInt(item.id) == parseInt(id) ;
    })
    res.json({...lesson[0]})
})

app.get('/', function(req, res) {
    res.json({code: 0});
})

app.listen(3009, function() {
    console.log('server is running at 3009')
});