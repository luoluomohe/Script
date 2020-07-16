
console.log("京东签到金豆脚本开始!");

try {

    var Cookie = '';

    var params = {
        url: "https://api.m.jd.com/client.action?functionId=signBeanIndex&appid=ld",
        headers: {
            Cookie: Cookie
        }
    }
    $httpClient.get(params, function (e, r, d) {
        console.log("错误:" + e);
        console.log("返回:" + d);

        if (d.indexOf("签到成功") > -1) {
            var jdnum = d.substring((d.indexOf("beanCount") + 12), (d.indexOf("beanImgUrl") - 3));
            $notification.post('京东签到成功!', '京东签到成功', "获得" + jdnum + "个金豆");
        }
        else if (d.indexOf("已签到") > -1) {
            var jdnum = d.substring((d.indexOf("beanCount") + 12), (d.indexOf("beanImgUrl") - 3));
            $notification.post('京东今天已签到!', '京东今天已签到', "获得" + jdnum + "个金豆");
        }
        else {
            $notification.post('京东签到失败!', '京东签到失败', d);
        }
    });

} catch (e) {
    console.log("catch:" + e);
}
$done({});
console.log("执行完成!!!!");
