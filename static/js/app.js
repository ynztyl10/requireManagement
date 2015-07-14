angular.module("getrequires.services", ["ngResource"]).
    factory('Require', function ($resource) {
        var Require = $resource('/api/v1/requires/:requireId', {requireId: '@id'},{
                update:{method:'POST',params:{requireId:'@id'}}
            }
        );
        Require.prototype.isNew = function(){
            return (typeof(this.id) === 'undefined');
        }
        return Require;
    })
    .
    factory('Data',function(){
        var data = {}
        data.belongs = [
        {
            "name" : "31省SDC",
            "value" : "31省SDC"
        },
        {
            "name" : "商城门户",
            "value" : "商城门户"
        },
        {
            "name" : "WAP/APP",
            "value" : "WAP/APP"
        },
        {
            "name" : "营销活动",
            "value" : "营销活动"
        },
        {
            "name" : "其他",
            "value" : "其他"
        },
        
    ];
    //移动商城
    data.mallDatas = [
        {
            "name" : "访客",
            "value" : "访客"
        },
        {
            "name" : "新旧访客比例",
            "value" : "新旧访客比例"
        },
        {
            "name" : "访客排名",
            "value" : "访客排名"
        },
        {
            "name" : "访次",
            "value" : "访次"
        },
        {
            "name" : "访客访问次数排行",
            "value" : "访客访问次数排行"
        },
        {
            "name" : "浏览量",
            "value" : "浏览量"
        },
        {
            "name" : "依浏览的网页数统计访次",
            "value" : "依浏览的网页数统计访次"
        },
        {
            "name" : "各时段人气指数",
            "value" : "各时段人气指数"
        },
        {
            "name" : "各时段点击指数",
            "value" : "各时段点击指数"
        },
        {
            "name" : "周访次指数",
            "value" : "周访次指数"
        },
        {
            "name" : "周点击指数",
            "value" : "周点击指数"
        },
        {
            "name" : "各访问时长的访问次数",
            "value" : "各访问时长的访问次数"
        },
        {
            "name" : "各访问时长的网页浏览数",
            "value" : "各访问时长的网页浏览数"
        },
        {
            "name" : "访前链接",
            "value" : "访前链接"
        },
        {
            "name" : "访前搜索关键字",
            "value" : "访前搜索关键字"
        },
        {
            "name" : "访前搜索关键字搜索引擎",
            "value" : "访前搜索关键字搜索引擎"
        },
        {
            "name" : "各页面前一网页访问数",
            "value" : "各页面前一网页访问数"
        },
        {
            "name" : "各页面下一网页访问数",
            "value" : "各页面下一网页访问数"
        },
        {
            "name" : "登陆用户手机号",
            "value" : "登陆用户手机号"
        },
        {
            "name" : "登陆用户地区",
            "value" : "登陆用户地区"
        },
        {
            "name" : "登陆用户注册账号",
            "value" : "登陆用户注册账号"
        },
        {
            "name" : "营销活动访次",
            "value" : "营销活动访次"
        },
        {
            "name" : "营销活动跳出量",
            "value" : "营销活动跳出量"
        },
        {
            "name" : "进站页面",
            "value" : "进站页面"
        },
        {
            "name" : "离站页面",
            "value" : "离站页面"
        },
        {
            "name" : "跳出页面",
            "value" : "跳出页面"
        },
        {
            "name" : "浏览器使用情况",
            "value" : "浏览器使用情况"
        },
        {
            "name" : "浏览器及其版本使用情况",
            "value" : "浏览器及其版本使用情况"
        },
        {
            "name" : "操作系统使用情况",
            "value" : "操作系统使用情况"
        },
        {
            "name" : "移动终端设备使用情况",
            "value" : "移动终端设备使用情况"
        },
        {
            "name" : "移动终端设备及浏览器使用情况",
            "value" : "移动终端设备及浏览器使用情况"
        },
        {
            "name" : "页面内各坐标点击量",
            "value" : "页面内各坐标点击量"
        },
        {
            "name" : "首页左侧导航栏各按钮点击量",
            "value" : "首页左侧导航栏各按钮点击量"
        },
        {
            "name" : "首页右侧充值按钮点击量",
            "value" : "首页右侧充值按钮点击量"
        },
        {
            "name" : "首页右侧充值金额选择情况点击量",
            "value" : "首页右侧充值金额选择情况点击量"
        },
        {
        "name": "首屏幕广告点击量",
        "value": "首屏幕广告点击量"
    },
    {
        "name": "1F各手机产品点击量",
        "value": "1F各手机产品点击量"
    },
    {
        "name": "2F各套餐产品点击量",
        "value": "2F各套餐产品点击量"
    },
    {
        "name": "3F各业务产品点击量",
        "value": "3F各业务产品点击量"
    },
    {
        "name": "4F各配件产品点击量",
        "value": "4F各配件产品点击量"
    },
    {
        "name": "终端产品选择页-各品牌选择点击量",
        "value": "终端产品选择页-各品牌选择点击量"
    },
    {
        "name": "终端产品选择页-各网络制式选择点击量",
        "value": "终端产品选择页-各网络制式选择点击量"
    },
    {
        "name": "终端产品选择页-各手机特色选择点击量",
        "value": "终端产品选择页-各手机特色选择点击量"
    },
    {
        "name": "终端产品选择页-筛选点击率",
        "value": "终端产品选择页-筛选点击率"
    },
    {
        "name": "终端产品选择页-筛选购买量",
        "value": "终端产品选择页-筛选购买量"
    },
    {
        "name": "终端产品选择页-筛选购买转化率",
        "value": "终端产品选择页-筛选购买转化率"
    },
    {
        "name": "终端产品浏览量",
        "value": "终端产品浏览量"
    },
    {
        "name": "终端产品立即购买点击量",
        "value": "终端产品立即购买点击量"
    },
    {
        "name": "终端产品收藏点击量",
        "value": "终端产品收藏点击量"
    },
    {
        "name": "终端产品订单填写量",
        "value": "终端产品订单填写量"
    },
    {
        "name": "终端产品订单提交量",
        "value": "终端产品订单提交量"
    },
    {
        "name": "终端产品订单各支付平台选择量",
        "value": "终端产品订单各支付平台选择量"
    },
    {
        "name": "终端产品确认支付提交量",
        "value": "终端产品确认支付提交量"
    },
    {
        "name": "套餐选择页精品推荐点击量",
        "value": "套餐选择页精品推荐点击量"
    },
    {
        "name": "套餐选择页左侧热销商品点击量",
        "value": "套餐选择页左侧热销商品点击量"
    },
    {
        "name": "套餐各品牌选择点击量",
        "value": "套餐各品牌选择点击量"
    },
    {
        "name": "套餐产品浏览量",
        "value": "套餐产品浏览量"
    },
    {
        "name": "套餐立即办理点击量",
        "value": "套餐立即办理点击量"
    },
    {
        "name": "套餐收藏点击量",
        "value": "套餐收藏点击量"
    },
    {
        "name": "套餐确认订购量",
        "value": "套餐确认订购量"
    },
    {
        "name": "套餐订购成功量",
        "value": "套餐订购成功量"
    },
    {
        "name": "套餐订购失败量",
        "value": "套餐订购失败量"
    },
    {
        "name": "业务选择页精品推荐点击量",
        "value": "业务选择页精品推荐点击量"
    },
    {
        "name": "业务选择页左侧热销商品点击量",
        "value": "业务选择页左侧热销商品点击量"
    },
    {
        "name": "业务各品牌选择点击量",
        "value": "业务各品牌选择点击量"
    },
    {
        "name": "业务各使用习惯选择点击量",
        "value": "业务各使用习惯选择点击量"
    },
    {
        "name": "业务各业务类型选择点击量",
        "value": "业务各业务类型选择点击量"
    },
    {
        "name": "业务产品浏览量",
        "value": "业务产品浏览量"
    },
    {
        "name": "业务立即办理点击量",
        "value": "业务立即办理点击量"
    },
    {
        "name": "业务收藏点击量",
        "value": "业务收藏点击量"
    },
    {
        "name": "业务确认订购量",
        "value": "业务确认订购量"
    },
    {
        "name": "业务订购成功量",
        "value": "业务订购成功量"
    },
    {
        "name": "业务订购失败量",
        "value": "业务订购失败量"
    },
    {
        "name": "整体访客",
        "value": "整体访客"
    },
    {
        "name": "新旧访客比例",
        "value": "新旧访客比例"
    }
    ];

    data.primeDoors = [
        {
        "name": "访客排名",
        "value": "访客排名"
    },
    {
        "name": "访次",
        "value": "访次"
    },
    {
        "name": "访客访问次数排行",
        "value": "访客访问次数排行"
    },
    {
        "name": "浏览量",
        "value": "浏览量"
    },
    {
        "name": "依浏览的网页数统计访次",
        "value": "依浏览的网页数统计访次"
    },
    {
        "name": "各时段人气指数",
        "value": "各时段人气指数"
    },
    {
        "name": "各时段点击指数",
        "value": "各时段点击指数"
    },
    {
        "name": "周访次指数",
        "value": "周访次指数"
    },
    {
        "name": "周点击指数",
        "value": "周点击指数"
    },
    {
        "name": "各访问时长的访问次数",
        "value": "各访问时长的访问次数"
    },
    {
        "name": "各访问时长的网页浏览数",
        "value": "各访问时长的网页浏览数"
    },
    {
        "name": "访前链接",
        "value": "访前链接"
    },
    {
        "name": "访前搜索关键字",
        "value": "访前搜索关键字"
    },
    {
        "name": "访前搜索关键字搜索引擎",
        "value": "访前搜索关键字搜索引擎"
    },
    {
        "name": "各页面前一网页访问数",
        "value": "各页面前一网页访问数"
    },
    {
        "name": "各页面下一网页访问数",
        "value": "各页面下一网页访问数"
    },
    {
        "name": "访问用户省市分布",
        "value": "访问用户省市分布"
    },
    {
        "name": "营销活动访次",
        "value": "营销活动访次"
    },
    {
        "name": "营销活动跳出量",
        "value": "营销活动跳出量"
    },
    {
        "name": "进站页面",
        "value": "进站页面"
    },
    {
        "name": "离站页面",
        "value": "离站页面"
    },
    {
        "name": "跳出页面",
        "value": "跳出页面"
    },
    {
        "name": "浏览器使用情况",
        "value": "浏览器使用情况"
    },
    {
        "name": "浏览器及其版本使用情况",
        "value": "浏览器及其版本使用情况"
    },
    {
        "name": "操作系统使用情况",
        "value": "操作系统使用情况"
    },
    {
        "name": "移动终端设备使用情况",
        "value": "移动终端设备使用情况"
    },
    {
        "name": "移动终端设备及浏览器使用情况",
        "value": "移动终端设备及浏览器使用情况"
    },
    {
        "name": "各页面广告点击量",
        "value": "各页面广告点击量"
    }

    ];

    data.primeWaps = [
        {
        "name": "访客排名",
        "value": "访客排名"
    },
    {
        "name": "访次",
        "value": "访次"
    },
    {
        "name": "访客访问次数排行",
        "value": "访客访问次数排行"
    },
    {
        "name": "浏览量",
        "value": "浏览量"
    },
    {
        "name": "依浏览的网页数统计访次",
        "value": "依浏览的网页数统计访次"
    },
    {
        "name": "各时段人气指数",
        "value": "各时段人气指数"
    },
    {
        "name": "各时段点击指数",
        "value": "各时段点击指数"
    },
    {
        "name": "周访次指数",
        "value": "周访次指数"
    },
    {
        "name": "周点击指数",
        "value": "周点击指数"
    },
    {
        "name": "各访问时长的访问次数",
        "value": "各访问时长的访问次数"
    },
    {
        "name": "各访问时长的网页浏览数",
        "value": "各访问时长的网页浏览数"
    },
    {
        "name": "访前链接",
        "value": "访前链接"
    },
    {
        "name": "访前搜索关键字",
        "value": "访前搜索关键字"
    },
    {
        "name": "访前搜索关键字搜索引擎",
        "value": "访前搜索关键字搜索引擎"
    },
    {
        "name": "各页面前一网页访问数",
        "value": "各页面前一网页访问数"
    },
    {
        "name": "各页面下一网页访问数",
        "value": "各页面下一网页访问数"
    },
    {
        "name": "访问用户省市分布",
        "value": "访问用户省市分布"
    },
    {
        "name": "营销活动访次",
        "value": "营销活动访次"
    },
    {
        "name": "营销活动跳出量",
        "value": "营销活动跳出量"
    },
    {
        "name": "进站页面",
        "value": "进站页面"
    },
    {
        "name": "离站页面",
        "value": "离站页面"
    },
    {
        "name": "跳出页面",
        "value": "跳出页面"
    },
    {
        "name": "浏览器使用情况",
        "value": "浏览器使用情况"
    },
    {
        "name": "浏览器及其版本使用情况",
        "value": "浏览器及其版本使用情况"
    },
    {
        "name": "操作系统使用情况",
        "value": "操作系统使用情况"
    },
    {
        "name": "移动终端设备使用情况",
        "value": "移动终端设备使用情况"
    },
    {
        "name": "移动终端设备及浏览器使用情况",
        "value": "移动终端设备及浏览器使用情况"
    },
    {
        "name": "整体访客",
        "value": "整体访客"
    },
    {
        "name": "新旧访客比例",
        "value": "新旧访客比例"
    }


    ];

    data.searchs = [
        {
        "name": "访次",
        "value": "访次"
    },
    {
        "name": "访客访问次数排行",
        "value": "访客访问次数排行"
    },
    {
        "name": "浏览量",
        "value": "浏览量"
    },
    {
        "name": "依浏览的网页数统计访次",
        "value": "依浏览的网页数统计访次"
    },
    {
        "name": "各时段人气指数",
        "value": "各时段人气指数"
    },
    {
        "name": "各时段点击指数",
        "value": "各时段点击指数"
    },
    {
        "name": "周访次指数",
        "value": "周访次指数"
    },
    {
        "name": "周点击指数",
        "value": "周点击指数"
    },
    {
        "name": "各访问时长的访问次数",
        "value": "各访问时长的访问次数"
    },
    {
        "name": "各访问时长的网页浏览数",
        "value": "各访问时长的网页浏览数"
    },
    {
        "name": "访前链接",
        "value": "访前链接"
    },
    {
        "name": "访前搜索关键字",
        "value": "访前搜索关键字"
    },
    {
        "name": "访前搜索关键字搜索引擎",
        "value": "访前搜索关键字搜索引擎"
    },
    {
        "name": "各页面前一网页访问数",
        "value": "各页面前一网页访问数"
    },
    {
        "name": "各页面下一网页访问数",
        "value": "各页面下一网页访问数"
    },
    {
        "name": "访问用户省市分布",
        "value": "访问用户省市分布"
    },
    {
        "name": "营销活动访次",
        "value": "营销活动访次"
    },
    {
        "name": "营销活动跳出量",
        "value": "营销活动跳出量"
    },
    {
        "name": "进站页面",
        "value": "进站页面"
    },
    {
        "name": "离站页面",
        "value": "离站页面"
    },
    {
        "name": "跳出页面",
        "value": "跳出页面"
    },
    {
        "name": "浏览器使用情况",
        "value": "浏览器使用情况"
    },
    {
        "name": "浏览器及其版本使用情况",
        "value": "浏览器及其版本使用情况"
    },
    {
        "name": "操作系统使用情况",
        "value": "操作系统使用情况"
    },
    {
        "name": "移动终端设备使用情况",
        "value": "移动终端设备使用情况"
    },
    {
        "name": "移动终端设备及浏览器使用情况",
        "value": "移动终端设备及浏览器使用情况"
    },
    {
        "name": "站内搜索关键词",
        "value": "站内搜索关键词"
    },
    {
        "name": "整体访客",
        "value": "整体访客"
    },
    {
        "name": "新旧访客比例",
        "value": "新旧访客比例"
    },
    {
        "name": "访客排名",
        "value": "访客排名"
    }


    ];

    data.uniteDoors = [
        {
        "name": "各省公司25项业务连续性",
        "value": "各省公司25项业务连续性"
    },
    {
        "name": "各省公司25项业务浏览量",
        "value": "各省公司25项业务浏览量"
    },
    {
        "name": "各省公司25项业务办理量",
        "value": "各省公司25项业务办理量"
    },
    {
        "name": "各省公司25项业务成功量",
        "value": "各省公司25项业务成功量"
    },
    {
        "name": "各省公司25项业务失败量",
        "value": "各省公司25项业务失败量"
    },
    {
        "name": "各省公司25项业务成功率",
        "value": "各省公司25项业务成功率"
    },
    {
        "name": "各省公司25项业务失败率",
        "value": "各省公司25项业务失败率"
    }
    ];

    data.scoreMalls = [
        {
        "name": "新旧访客比例",
        "value": "新旧访客比例"
    },
    {
        "name": "访客排名",
        "value": "访客排名"
    },
    {
        "name": "访次",
        "value": "访次"
    },
    {
        "name": "访客访问次数排行",
        "value": "访客访问次数排行"
    },
    {
        "name": "浏览量",
        "value": "浏览量"
    },
    {
        "name": "依浏览的网页数统计访次",
        "value": "依浏览的网页数统计访次"
    },
    {
        "name": "各时段人气指数",
        "value": "各时段人气指数"
    },
    {
        "name": "各时段点击指数",
        "value": "各时段点击指数"
    },
    {
        "name": "周访次指数",
        "value": "周访次指数"
    },
    {
        "name": "周点击指数",
        "value": "周点击指数"
    },
    {
        "name": "各访问时长的访问次数",
        "value": "各访问时长的访问次数"
    },
    {
        "name": "各访问时长的网页浏览数",
        "value": "各访问时长的网页浏览数"
    },
    {
        "name": "访前链接",
        "value": "访前链接"
    },
    {
        "name": "访前搜索关键字",
        "value": "访前搜索关键字"
    },
    {
        "name": "访前搜索关键字搜索引擎",
        "value": "访前搜索关键字搜索引擎"
    },
    {
        "name": "各页面前一网页访问数",
        "value": "各页面前一网页访问数"
    },
    {
        "name": "各页面下一网页访问数",
        "value": "各页面下一网页访问数"
    },
    {
        "name": "访问用户省市分布",
        "value": "访问用户省市分布"
    },
    {
        "name": "营销活动访次",
        "value": "营销活动访次"
    },
    {
        "name": "营销活动跳出量",
        "value": "营销活动跳出量"
    },
    {
        "name": "进站页面",
        "value": "进站页面"
    },
    {
        "name": "离站页面",
        "value": "离站页面"
    },
    {
        "name": "跳出页面",
        "value": "跳出页面"
    },
    {
        "name": "浏览器使用情况",
        "value": "浏览器使用情况"
    },
    {
        "name": "浏览器及其版本使用情况",
        "value": "浏览器及其版本使用情况"
    },
    {
        "name": "操作系统使用情况",
        "value": "操作系统使用情况"
    },
    {
        "name": "移动终端设备使用情况",
        "value": "移动终端设备使用情况"
    },
    {
        "name": "移动终端设备及浏览器使用情况",
        "value": "移动终端设备及浏览器使用情况"
    },
    {
        "name": "整体访客",
        "value": "整体访客"
    }
    ];

    data.marketings = [
        {
        "name": "访客排名",
        "value": "访客排名"
    },
    {
        "name": "访次",
        "value": "访次"
    },
    {
        "name": "访客访问次数排行",
        "value": "访客访问次数排行"
    },
    {
        "name": "浏览量",
        "value": "浏览量"
    },
    {
        "name": "依浏览的网页数统计访次",
        "value": "依浏览的网页数统计访次"
    },
    {
        "name": "各时段人气指数",
        "value": "各时段人气指数"
    },
    {
        "name": "各时段点击指数",
        "value": "各时段点击指数"
    },
    {
        "name": "周访次指数",
        "value": "周访次指数"
    },
    {
        "name": "周点击指数",
        "value": "周点击指数"
    },
    {
        "name": "各访问时长的访问次数",
        "value": "各访问时长的访问次数"
    },
    {
        "name": "各访问时长的网页浏览数",
        "value": "各访问时长的网页浏览数"
    },
    {
        "name": "访前链接",
        "value": "访前链接"
    },
    {
        "name": "访前搜索关键字",
        "value": "访前搜索关键字"
    },
    {
        "name": "访前搜索关键字搜索引擎",
        "value": "访前搜索关键字搜索引擎"
    },
    {
        "name": "各页面前一网页访问数",
        "value": "各页面前一网页访问数"
    },
    {
        "name": "各页面下一网页访问数",
        "value": "各页面下一网页访问数"
    },
    {
        "name": "访问用户省市分布",
        "value": "访问用户省市分布"
    },
    {
        "name": "营销活动访次",
        "value": "营销活动访次"
    },
    {
        "name": "营销活动跳出量",
        "value": "营销活动跳出量"
    },
    {
        "name": "进站页面",
        "value": "进站页面"
    },
    {
        "name": "离站页面",
        "value": "离站页面"
    },
    {
        "name": "跳出页面",
        "value": "跳出页面"
    },
    {
        "name": "浏览器使用情况",
        "value": "浏览器使用情况"
    },
    {
        "name": "浏览器及其版本使用情况",
        "value": "浏览器及其版本使用情况"
    },
    {
        "name": "操作系统使用情况",
        "value": "操作系统使用情况"
    },
    {
        "name": "移动终端设备使用情况",
        "value": "移动终端设备使用情况"
    },
    {
        "name": "移动终端设备及浏览器使用情况",
        "value": "移动终端设备及浏览器使用情况"
    },
    {
        "name": "营销活动页面区域点击量",
        "value": "营销活动页面区域点击量"
    },
    {
        "name": "付费媒体推广点击量",
        "value": "付费媒体推广点击量"
    },
    {
        "name": "付费媒体进站访问量",
        "value": "付费媒体进站访问量"
    },
    {
        "name": "付费媒体进站业务办理量",
        "value": "付费媒体进站业务办理量"
    },
    {
        "name": "付费媒体进站终端购买量",
        "value": "付费媒体进站终端购买量"
    },
    {
        "name": "整体访客情况",
        "value": "整体访客情况"
    },
    {
        "name": "新旧访客比例",
        "value": "新旧访客比例"
    }
    ];
    //需求类型
    data.types = [
        "新增插码","插码变更","需求提取"

    ];
    //展示类型
    data.showTypes = [
        {
            "name":"报表",
            "value":"报表"
        },
        {
            "name":"数据图",
            "value" : "数据图"
        },
        {    
            "name":"其他",
            "value":"其他"
        }

    ];

    data.inserts = [
        {
            "name":"基本码",
            "value":"基本码"
        },
        {
            "name":"扩展码",
            "value" : "扩展码"
        },
        {    
            "name":"业务码",
            "value":"业务码"
        },
        {
            "name":"用户信息码",
            "value":"用户信息码"
        },
        {
            "name":"事件追踪码",
            "value" : "事件追踪码"
        },
        {    
            "name":"营销码",
            "value":"营销码"
        },

    ];
    //AngularJS ui-date options
    data.dateOptions = {
        changeYear: true,
        changeMonth: true,
        yearRange: '2010:2020',
        gotoCurrent : true,
        showButtonPanel : true,
        showAnim : 'show'
    };

    //JQuery Datepicker Today button fix
    var _gotoToday = jQuery.datepicker._gotoToday;
    jQuery.datepicker._gotoToday = function(a){
        var target = jQuery(a);
        var inst = this._getInst(target[0]);
        _gotoToday.call(this, a);
        var date = new Date();
        jQuery.datepicker._selectDate(a, jQuery.datepicker._formatDate(inst,date.getDate(), date.getMonth(), date.getFullYear()));
        //jQuery.datepicker._selectDate(a, jQuery.datepicker._formatDate(inst,inst.selectedDay, inst.selectedMonth, inst.selectedYear));
    };

    //AngularJS ui-date support to zh-CN
    $((function($){
    $.datepicker.regional['zh-CN'] = {
        clearText: '清除',
        clearStatus: '清除已选日期',
        closeText: '关闭',
        closeStatus: '不改变当前选择',
        prevText: '<上月',
        prevStatus: '显示上月',
        prevBigText: '<<',
        prevBigStatus: '显示上一年',
        nextText: '下月>',
        nextStatus: '显示下月',
        nextBigText: '>>',
        nextBigStatus: '显示下一年',
        currentText: '今天',
        currentStatus: '显示本月',
        monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'],
        monthNamesShort: ['1','2','3','4','5','6', '7','8','9','10','11','12'],
        monthStatus: '选择月份',
        yearStatus: '选择年份',
        weekHeader: '周',
        weekStatus: '年内周次',
        dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
        dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
        dayNamesMin: ['日','一','二','三','四','五','六'],
        dayStatus: '设置 DD 为一周起始',
        dateStatus: '选择 m月 d日, DD',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        initStatus: '请选择日期',
        isRTL: false};
        $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
    })(jQuery));
    return data;
    });

angular.module("getrequires", ["getrequires.services","ngRoute","ui.date","ui.bootstrap"])
    .factory('modalWindowFactory', function ($modal) {

    var modalWindowController = _modalWindowController;

    return {

        // Show a modal window with the specified title and msg
        show: function (title, msg, confirmCallback, cancelCallback) {
            // Show window
            var modalInstance = $modal.open({
                animation : true,
                templateUrl: '/static/views/requires/modal-view.html',
                controller: modalWindowController,
                size: 'sm',
                resolve: {
                    title: function () {
                        return title;
                    },
                    body: function () {
                        return msg;
                    }
                }
            });
            // Register confirm and cancel callbacks
            modalInstance.result.then(
                // if any, execute confirm callback
                function() {
                    if (confirmCallback != undefined) {
                        confirmCallback();
                    }
                },
                // if any, execute cancel callback
                function () {
                    if (cancelCallback != undefined) {
                        cancelCallback();
                    }
                });
        }
    };

    function _modalWindowController ($scope, $modalInstance, title, body){
        $scope.title = "";
        $scope.body = "";

        // If specified, fill window title and message with parameters
        if (title) {
            $scope.title = title;
        }
        if (body) {
            $scope.body = body;
        }

        $scope.confirm = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    };


    })
    .controller("RequireListController",function ($scope, $location,modalWindowFactory,Require) {
    $scope.requires = Require.query();
    
    $scope.deleteItemWithConfirmation = function(item) {

        var serverDelete = function () {
            return item.$delete(
                { requireId: item._id.$oid }, 
                function () {
                    toastr.success("成功删除");
                    // Remove from scope
                    var index = $scope.requires.indexOf(item);
                    $scope.requires.splice(index, 1);
                },
                // error callback
                function (error) {
                    if (error.data === undefined) {
                        error.data = '';
                    }
                    toastr.error("Error. " + error.data);
                });
        };

        var title = "删除 '" + item.code + "'";
        var msg = "确认删除该需求？";
        modalWindowFactory.show(title, msg, serverDelete);

    };
    
    
})
    .controller("RequireCreateController",function ($scope, $routeParams, $location, Require, Data) {

    $scope.collapseSeven = true;
    $scope.collapseSix = true;
    $scope.collapseFour = true;
    $scope.collapseFive = true;
    $scope.collapseThree = true;
    $scope.collapseTwo = true;
    $scope.data = Data
    //业务所属范围
    $scope.dateOptions = Data.dateOptions;
    $scope.require = new Require();
    //$scope.require.belongs = [];
    $scope.toggle = function(item){
        item.checked = !item.checked;
    };
    $scope.require.belongs = $scope.data.belongs;
    $scope.require.mallDatas = $scope.data.mallDatas;
    $scope.require.primeDoors = $scope.data.primeDoors;
    $scope.require.primeWaps = $scope.data.primeWaps;
    $scope.require.searchs = $scope.data.searchs;
    $scope.require.uniteDoors = $scope.data.uniteDoors;
    $scope.require.scoreMalls = $scope.data.scoreMalls;
    $scope.require.marketings = $scope.data.marketings;
    $scope.require.showTypes = $scope.data.showTypes;
    $scope.require.inserts = $scope.data.inserts;
    //after form commit
    $scope.save = function () {
        $scope.require.$save(function (require, headers) {
            toastr.success("新增需求");
            $location.path('/');
        });
    };
})  
    .controller("RequireDetailController",function ($scope, $routeParams, $location, Require,Data) {
        $scope.collapseSeven = true;
    $scope.collapseSix = true;
    $scope.collapseFour = true;
    $scope.collapseFive = true;
    $scope.collapseThree = true;
    $scope.collapseTwo = true;
    $scope.data = Data;
    var requireId = $routeParams.requireId;
    $scope.require = Require.get({requireId: requireId},function(){
        $scope.data.belongs = $scope.require.belongs;
        $scope.data.mallDatas = $scope.require.mallDatas;
        $scope.data.primeDoors = $scope.require.primeDoors;
        $scope.data.primeWaps = $scope.require.primeWaps;
        $scope.data.searchs = $scope.require.searchs;
        $scope.data.uniteDoors = $scope.require.uniteDoors;
        $scope.data.scoreMalls = $scope.require.scoreMalls;
        $scope.data.marketings = $scope.require.marketings;
        $scope.data.showTypes = $scope.require.showTypes;
        $scope.data.inserts = $scope.require.inserts;
    });
    $scope.toggle = function(item){
        item.checked = !item.checked;
    };
    $scope.dateOptions = Data.dateOptions;
    $scope.save = function(){
        $scope.require.$update({requireId:requireId},function(require, headers){
            toastr.success("修改需求");
            $location.path('/');
        });
    };

})
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: '/static/views/requires/list.html', controller: "RequireListController"})
            .when('/requires/new', {templateUrl: '/static/views/requires/create.html', controller: "RequireCreateController"})
            .when('/requires/:requireId', {templateUrl: '/static/views/requires/detail.html', controller: "RequireDetailController"});
    });











