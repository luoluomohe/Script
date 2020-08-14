    console.log("威锋签到脚本开始!");

    var XRunningEnv = 'M0hhBBSkMGg71/hbUpHuOd5i5/1ZzT9LZbOzF+1dkKswn9Ib0qJkcOAnkXDwTcY4QJx6M5+lDT6y6+tQg6wGZoV/+zUcGczM3wEm0y0uB1mnUWGbKOhFthb5HtptgOxK09HTe8JZjOUb77wY+J5aHV4AleU5+h15236IPgxmrDztBnyEQgFS+1xoUexboErUtVStVvUqCpZo+zE/7VeH3PKiF9aPs5OWQ8aFfRc3o/5RWoLw5QenkX9GZw/vh6ehnsoMfDXTIid/NZPpDFej3Att6G/49r96dwOJgLoemfrXP+HPWa5RsILb+vI6bFNL3Q7C280Wo3LVcmW/WBnbAU6ZuYty8K5tTNF4ZHB2FV9WKy6Ms11qpMx7goJ4OYBTRepQOLokp4LazFssCslGWg==';

    var params = {
        url: "https://api.wfdata.club/v1/attendance/userSignIn",
        headers: {
            "X-Running-Env": XRunningEnv,
            "X-Access-Token": '809ea5fd-7f22-4322-a08b-8479fb3fe35c'
        }
    }
    $httpClient.post(params, function (e, r, d) {
        
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
