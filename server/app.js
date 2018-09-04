var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var session = require('express-session');

var app = express();
app.use(bodyParser.json());
app.use(session({
    resave: true,
    secret: 'jsonlovereact',
    saveUninitialized: true
}))

//  allow custom header and CORS ie不兼容 发请求体的都有options请求
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:7999');
    res.header('Access-Control-Allow-Credentials', true);
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


/*  注册接口 
*   {username: '', password: ''}
*   {user: '登录后的用户名/null', msg: '状态信息', success: '成功后的提示', err: 0 }
*/
let userList = [
    { username: 'jason', password: '4QrcOUm6Wau+VuBX8g+IPg==' }
];
app.post('/regist', function(req, res) {
    let {
        username,
        password
    } = req.body;
    let user = userList.find(item => {
        return item.username == username;
    })
    if(user) {
        res.json({
            user: null,
            msg: '用户已注册',
            success: '注册失败',
            error: 1
        })
    }else {
        password = crypto.createHash('md5').update(password).digest('base64');
        userList.push({
            username,
            password
        });
        res.json({
            user: username,
            msg: '注册成功',
            success: '恭喜你跳进react的大坑',
            error: 0
        })
    }
})


/*  登录接口 
*   {username: '', password: ''}
*   {user: '登录后的用户名/null', msg: '状态信息', success: '成功后的提示', err: 0 }
*/
app.post('/login', function(req, res) {
    let {
        username,
        password
    } = req.body;
    password = crypto.createHash('md5').update(password).digest('base64');
    let user = userList.find(item => {
        return (item.username === username) && (item.password === password)
    })
    if(user) {
        req.session.user = username;
        res.json({
            user: username,
            msg: '登录成功',
            success: '登录成功',
            error: 0
        })
    }else {
        res.json({
            user: null,
            msg: '登录失败',
            success: '账号或密码错误',
            error: 1
        })
    }
})

// 通过sessio获取用户信息，用于校验用户是否登录
app.get('/validate', function(req, res) {
    res.json({
        user: req.session.user,
        msg: '',
        success: ''
    })
})


app.get('/', function(req, res) {
    res.json({code: 0});
})

app.listen(3009, function() {
    console.log('server is running at 3009')
});