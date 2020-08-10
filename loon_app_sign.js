
console.log("签到脚本开始!");

setTimeout(cf_sign, 500);

setTimeout(feng_sign, 1000);

setTimeout(jd_sign, 2000);

setTimeout(cf_sign2, 2500);

setTimeout(nz_sign, 4500);

$done({});
console.log("执行完成!!!!");

//京东金豆签到
function jd_sign() {
    console.log("京东签到金豆脚本开始!");

    var Cookie = 'pin=717785320_m;wskey=AAJdrSW2AEB_x8gpN4YY67LMwreL46CJS6AsHwT6V1LuvajnGAaq4RYekVh4qeM9GAM7gfMDf-gsKiv5dwHnEdC_N_7X3GVr;whwswswws=hRTtb5W/D/vXUu2Kx9k7LpAVWIvlMgRPu8ZN+EAl3YMJTPQTSNRT/FC82Mb3kw31Gh1maJx/uu9DgU97mUoQkQA==;unionwsws={"jmafinger":"hRTtb5W\/D\/vXUu2Kx9k7LpAVWIvlMgRPu8ZN+EAl3YMJTPQTSNRT\/FC82Mb3kw31Gh1maJx\/uu9DgU97mUoQkQA==","devicefinger":"eidI3A740111RTI2MjAyRTAtNjMxOC00Rg==S383seL61Kq8IRd1wsJ1jmQZxCvjQ5jy5C5qG\/7luhyvqmrkir+bs0zK4OE\/+g56nSlNx7xkOsxELNC0"}';

    var params = {
        url: "https://api.m.jd.com/client.action?functionId=signBeanIndex&appid=ld",
        headers: {
            Cookie: Cookie
        }
    }
    $httpClient.get(params, function (e, r, d) {
        console.log("京东签到***********************************");
        console.log("错误:" + e);
        console.log("返回:" + d);
        console.log("京东签到***********************************");

        var d = d.replace(/"{/g, "{").replace(/}"/g, "}").replace(/\\/g, "");
        var obj = JSON.parse(d);

        if (d.indexOf("签到成功") > -1 || d.indexOf("连签") > -1) {
            //var jdnum = d.substring((d.indexOf("beanCount") + 12), (d.indexOf("beanImgUrl") - 3));
            //$notification.post('京东签到成功!', '京东签到成功', "获得" + jdnum + "个金豆");
            $notification.post('京东签到成功!', '京东签到成功', "获得" + obj.data.dailyAward.beanAward.beanCount + "个金豆");
        }
        else if (d.indexOf("已签到") > -1) {
            //var jdnum = d.substring((d.indexOf("beanCount") + 12), (d.indexOf("beanImgUrl") - 3));
            //$notification.post('京东今天已签到!', '京东今天已签到', "获得" + jdnum + "个金豆");
            $notification.post('京东今天已签到!', '京东今天已签到', "获得" + obj.data.dailyAward.beanAward.beanCount + "个金豆");
        }
        else if (d.indexOf("用户未登录") > -1) {
            $notification.post('京东用户未登录!', 'Cookie过期', d);
        }
        else {
            $notification.post('京东签到失败!', '京东签到失败', d);
        }
    });
}

//掌火签到
var cfnz_token = 'XHv2fZGJ';
function cf_sign() {
    console.log("掌火签到脚本开始!");

    var params = {
        url: "https://mwegame.qq.com/cfip/score_sign/doSign?serverName=%E6%B9%96%E5%8C%97%E7%94%B5%E4%BF%A1%E4%B8%80%E5%8C%BA&appid=1101817502&areaName=%E6%B9%96%E5%8C%97%E7%94%B5%E4%BF%A1&roleName=%E7%B5%95%E5%9C%B0%E9%9D%92%E9%BE%8D&gameName=%E7%A9%BF%E8%B6%8A%E7%81%AB%E7%BA%BF&nickname=%E3%80%80%E3%80%80&isMainRole=1&roleJob=%E5%85%83%E5%B8%85&areaId=85&roleId=717785320&gameId=10011&toUin=717785320&subGameId=10011&serverId=328&cGameId=1001&token=" + cfnz_token + "&uniqueRoleId=1760005752041800&acctype=qq&uin=717785320&roleLevel=100&userId=362446817&gift_id=9036",
        headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 GameHelper_1001/3.3.10814.2103030814"
        }
    }
    $httpClient.get(params, function (e, r, d) {
        d = unescape(d.replace(/\\u/gi, '%u'));

        console.log("掌火签到***********************************");
        console.log("错误:" + e);
        console.log("返回:" + d);
        console.log("掌火签到***********************************");

        var obj = JSON.parse(d);
        if (d.indexOf("签到成功") > -1 || d.indexOf("经验") > -1) {
            $notification.post('掌火签到成功!', obj.data.exp, d);
        }
        else if (d.indexOf("已签到") > -1) {
            $notification.post('掌火已签到!', obj.data.exp, d);
        }
        else {
            $notification.post('掌火签到失败!', '掌火签到失败', d);
        }
    });
}

//逆战签到
function nz_sign() {
    console.log("逆战签到脚本开始!");

    var params = {
        url: "https://mwegame.qq.com/cfip/score_sign/doSign?uin=717785320&areaId=379&roleId=717785320&gameId=10012&serverName=%E7%94%B5%E4%BF%A1%E5%8C%BA&roleLevel=48&toUin=717785320&userId=362446817&token=" + cfnz_token + "&areaName=%E7%94%B5%E4%BF%A1%E5%8C%BA&roleName=%E7%BB%9D%E5%9C%B0%E8%8B%8D%E9%BE%99&isMainRole=1&nickname=%E3%80%80%E3%80%80&uniqueRoleId=183230734&serverId=1&roleJob=%E4%B8%8A%E5%B0%89%E4%B8%89%E7%BA%A7&gift_id=7283",
        headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 GameHelper_1001/3.3.10814.2103030814"
        }
    }
    $httpClient.get(params, function (e, r, d) {
        d = unescape(d.replace(/\\u/gi, '%u'));
        console.log("逆战签到***********************************");
        console.log("错误:" + e);
        console.log("返回:" + d);
        console.log("逆战签到***********************************");
        
        var obj = JSON.parse(d);
        if (d.indexOf('经验') > -1) {
            $notification.post('逆战签到成功!', obj.data.exp, d);
        }
        else {
            $notification.post('逆战签到失败!', '逆战签到失败', d);
        }
    });
}

//威锋签到
function feng_sign() {
    console.log("威锋签到脚本开始!");

    var XRunningEnv = 'M0hhBBSkMGg71/hbUpHuOd4i4/1ZzT9LZbOzF+1dkKswn9Ib0qJkcOAnkXDwTcY4QJx6M5+lDT6y6+tQg6wGZoV/+zUcGczM3wEm0y0uB1mnUWGbKOhFthb5HtptgOxK09HTe8JZjOUb77wY+J5aHV4AleU5+h15236IPgxmrDztBnyEQgFS+1xoUexboErUtVStVvUqCpZo+zE/7VeH3PKiF9aPs5OWQ8aFfRc3o/5RWoLw5QenkX9GZw/vh6ehnsoMfDXTIid/NZPpDFej3Att6G/49r96dwOJgLoemfrXP+HPWa5RsILb+vI6bFNL3Q7C280Wo3LVcmW/WBnbAU6ZuYty8K5tTNF4ZHB2FV9WKy6Ms11qpMx7goJ4OYBTRepQOLokp4LazFssCslGWg==';

    var params = {
        url: "https://api.wfdata.club/v1/attendance/userSignIn",
        headers: {
            "X-Running-Env": XRunningEnv,
            "X-Access-Token": '809ea5fd-7f22-4344-a08b-8479fb3fe35c'
        }
    }
    $httpClient.post(params, function (e, r, d) {
        console.log("威锋签到***********************************");
        console.log("错误:" + e);
        console.log("返回:" + d);
        console.log("威锋签到***********************************");

        var obj = JSON.parse(d);
        if (d.indexOf("success") > -1) {
            $notification.post('威锋签到成功!', "", d);
        }
        else if (d.indexOf("不能重复签到") > -1) {
            $notification.post('威锋已签到!', "不能重复签到", d);
        }
        else {
            $notification.post('威锋签到失败!', '威锋签到失败', d);
        }
    });
}

//cf玩一局游戏领积分
function cf_sign2() {
    console.log("掌火任务积分脚本开始!");

    var params = {
        url: "https://mwegame.qq.com/cfip/growth/ajax/getGameTaskScore",
        headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 GameHelper_1001/3.3.10814.2103030814",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "userId=362446817&openid=&appOpenid=&areaId=85&serverId=328&gameId=10011&cGameId=1001&subGameId=10011&roleId=717785320&uniqueRoleId=1760005752041800&token=" + cfnz_token + "&uin=717785320&toUin=717785320&nickname=%E3%80%80%E3%80%80&roleName=%E7%B5%95%E5%9C%B0%E9%9D%92%E9%BE%8D&areaName=%E6%B9%96%E5%8C%97%E7%94%B5%E4%BF%A1&serverName=%E6%B9%96%E5%8C%97%E7%94%B5%E4%BF%A1%E4%B8%80%E5%8C%BA&page=0&isother=0&env=prod&openId=&type=3"
    }
    $httpClient.post(params, function (e, r, d) {
        console.log("掌火任务积分***********************************");
        console.log("错误:" + e);
        console.log("返回:" + d);
        console.log("掌火任务积分***********************************");

        $notification.post('掌火领取任务积分!', d, d);
        
    });
}
