
console.log("京东签到金豆脚本开始!");

try {

    var Cookie = 'pin=717785320_m;wskey=AAJdrSW2AEB_x8gpN4YY67LMwreL46CJS6AsHwT6V1LuvajnGAaq4RYekVh4qeM9GAM7gfMDf-gsKiv5dwHnEdC_N_7X3GVr;whwswswws=hRTtb5W/D/vXUu2Kx9k7LpAVWIvlMgRPu8ZN+EAl3YMJTPQTSNRT/FC82Mb3kw31Gh1maJx/uu9DgU97mUoQkQA==;unionwsws={"jmafinger":"hRTtb5W\/D\/vXUu2Kx9k7LpAVWIvlMgRPu8ZN+EAl3YMJTPQTSNRT\/FC82Mb3kw31Gh1maJx\/uu9DgU97mUoQkQA==","devicefinger":"eidI3A740111RTI2MjAyRTAtNjMxOC00Rg==S383seL61Kq8IRd1wsJ1jmQZxCvjQ5jy5C5qG\/7luhyvqmrkir+bs0zK4OE\/+g56nSlNx7xkOsxELNC0"}';

    var params = {
        url: "https://api.m.jd.com/client.action?functionId=signBeanIndex&appid=ld",
        headers: {
            Cookie: Cookie
        }
    }
    $httpClient.get(params, function (e, r, d) {
        console.log("错误:" + e);
        console.log("返回:" + d);
        var data = JSON.parse(d);
        if (data.data.dailyAward.title.indexOf("签到成功") > -1) {
            $notification.post('京东签到成功!', '京东签到成功', "获得" + data.data.dailyAward.beanAward.beanCount + "个金豆");
        }
        else if (data.data.dailyAward.title.indexOf("已签到") > -1) {
            $notification.post('京东今天已签到!', '京东今天已签到', "获得" + data.data.dailyAward.beanAward.beanCount + "个金豆");
        }
        else {
            $notification.post('京东签到失败!', '京东签到失败', data.data.dailyAward.title);
        }
    });

} catch (e) {
    console.log("catch:" + e);
}
$done({});
console.log("执行完成!!!!");
