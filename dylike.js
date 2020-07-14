
console.log("dylike脚本开始!");
var url = $request.url;
var headers = $request.headers;
var body = $request.body;
var likeNum = 16;
try {
    if (url.indexOf("//webcast3-normal-c-hl.amemv.com/webcast/room/like/?") > -1) {

        if (!!body && body.indexOf("count") > -1 && body.indexOf("room_id") > -1) {

            $notification.post('获取到手动点赞!', '开始执行自动点赞!', body)

            console.log("###########################################");
            console.log("原body:" + body);

            body = "count=" + likeNum + "&" + body.split('&')[1];

            console.log("修改后body:" + body);

            console.log("###########################################");

            var params = {
                url: url,
                headers: headers,
                body: body
            };

            console.log("请求体****************************************");
            console.log("请求体:" + JSON.stringify(params));
            console.log("请求体****************************************");

            var likeCount = 0;
            function forPost() {
                setTimeout(function () {

                    console.log("循环请求执行");

                    $httpClient.post(params, function (error, response, data) {

                        console.log("错误:" + error);
                        console.log("返回数据:" + data);

                        if (data.indexOf('"status_code":0') > -1) {

                            likeCount += likeNum;
                            forPost();
                        }
                        else if (data.indexOf("手速太快了") > -1) {

                            $notification.post('点赞已到上限!', '点赞个数:' + likeCount, data);
                            console.log("点赞已上限,个数:" + likeCount + ";" + data);
                        }
                        else if (data.indexOf("请登录") > -1) {

                            $notification.post('请登录!', '请登录:', data);
                            console.log("请登录;" + data);
                        }

                    });
                }, 1000);
            }

            forPost();
        }

    }
} catch (e) {
    console.log("try错误:" + e);
}

$done({});
console.log("执行完成!!!!");
