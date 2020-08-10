
console.log("掌火积分兑换脚本开始!");
var url = $request.url;
var headers = $request.headers;
try {
    if (url.indexOf("/ams/send/handle") > -1) {

        $notification.post('获取到手动兑换!', '开始执行自动兑换!', "开始执行自动兑换")

        var params = {
            url: url,
            headers: headers
        };

        console.log("请求体****************************************");
        console.log("请求体:" + JSON.stringify(params));
        console.log("请求体****************************************");

        function forPost() {
            setTimeout(function () {

                console.log("循环请求执行");

                $httpClient.get(params, function (error, response, data) {
                    data = unescape(data.replace(/\\u/gi, '%u'));
                    console.log("*********************************************************");
                    console.log("错误:" + error);
                    console.log("返回数据:" + data);
                    console.log("*********************************************************");

                    if (data.indexOf('"status":1,') > -1) {
                        $notification.post('兑换成功!', '兑换成功!', data);
                    }
                    else if (data.indexOf('"status":-4444,') > -1) {
                        $notification.post('已抢完!', '已抢完!', data);
                    }
                    else {
                        forPost();
                    }

                });
            }, 1000);
        }

        forPost();

    }
} catch (e) {
    console.log("try错误:" + e);
}

$done({});
console.log("执行完成!!!!");
