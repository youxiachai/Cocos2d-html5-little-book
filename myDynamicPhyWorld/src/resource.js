/**
 * Created by youxiachai on 14-2-8.
 */


var ImgRes = ImgRes || {},
    g_resources = [];

ImgRes.s_runner_png = "runner.png";
ImgRes.s_running_png = "running.png";
ImgRes.s_running_plist = "running.plist";

//把需要预加载的资源路径添加进来
Object.keys(ImgRes).forEach(function (item){
    g_resources.push({
        src : ImgRes[item]
    })
})
