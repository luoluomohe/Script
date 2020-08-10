
console.log("抖音获取无水印链接脚本开始!");
var url = $request.url;
console.log(url);
if (url.indexOf("aweme/v1/playwm") > -1 || url.indexOf("aweme/v1/play") > -1) {

    url = url.replace("playwm", "play");
    console.log("********************************\n\n\n" + url + "\n\n\n");
    $notification.post('抖音获取无水印链成功!', url, url, url);
}

$done({});
console.log("执行完成!!!!");
