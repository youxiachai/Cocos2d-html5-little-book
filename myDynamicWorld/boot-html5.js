/**
 * Created by youxiachai on 14-2-7.
 */
(function () {
    var d = document;

    // cocos2d-html5 配置定义
    var c = {
        COCOS2D_DEBUG:2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
        showFPS:true,
        chipmunk:true,
        frameRate:60,
        renderMode: 0,       //Choose of RenderMode: 0(default), 1(Canvas only), 2(WebGL only)
        tag:'gameCanvas', //the dom element to run cocos2d on
        engineDir:'../cocos2d/',
       // SingleEngineFile:'../../Cocos2d-html5-min.js',
        appFiles:[
            'src/DynamicWorldScence.js',
            'src/DynamicHumanLayer.js',
            'src/StandHumanLayer.js',
            'src/resource.js',
            'src/WorldElement.js'
        ]
    };
    window.addEventListener('DOMContentLoaded', function () {
        //添加引擎js 文件
        var s = d.createElement('script');
        s.src = c.engineDir + 'jsloader.js';
        d.body.appendChild(s);
        // 等会在main.js 用到
        document.ccConfig = c;
        s.id = 'cocos2d-html5';
    });
})();
