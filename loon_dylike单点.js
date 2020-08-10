
console.log("dylike单点脚本开始!");
var url = $request.url;
var headers = $request.headers;
var body = $request.body;
var likeNum = 2999;

if (url.indexOf("//webcast3-normal-c-hl.amemv.com/webcast/room/like/?") > -1) {

    if (!!body && body.indexOf("count") > -1 && body.indexOf("room_id") > -1) {

        $notification.post('获取到手动点赞!', '开始执行自动点赞!', body)

        console.log("###########################################");
        console.log("原body:" + body);

        body = "count=" + likeNum + "&" + body.split('&')[1];

        console.log("修改后body:" + body);

        console.log("###########################################");

    }

}

$done({body});
console.log("执行完成!!!!");
