/**
 * Created by youxiachai on 14-2-7.
 */
var BackgroundLayer = cc.Layer.extend({
     ctor : function () {
         this._super();
         // 定义一个白色背景
         this.addChild(cc.
             LayerColor.
             create(new cc.Color4B(255, 255, 255, 255), WorldElement.width, WorldElement.height));
     }
});

var DynamicWorldScence = cc.Scene.extend({
    newtonSpace : null,
    //定义我们的牛顿大神
    initNewtonSpace : function () {
       this.newtonSpace = new cp.Space();

       //  设置世界的地平面
        var wallBottom = new cp.SegmentShape(this.newtonSpace.staticBody,
        cp.v(0, WorldElement.groundHeight),
        cp.v(WorldElement.groundWidth,  WorldElement.groundHeight),
        0);

        // 设置世界的尽头
        var wallRight = new cp.SegmentShape(this.newtonSpace.staticBody, cp.v(WorldElement.width - 5, WorldElement.groundHeight), cp.v(WorldElement.width - 5,200), 0)

        this.newtonSpace.addStaticShape(wallBottom);
        this.newtonSpace.addStaticShape(wallRight);

    },
    onEnter:function(){
        this._super();
        // 初始化牛顿的物理世界
        this.initNewtonSpace();

        // 把我们的定义好的图层添加到场景里面

        this.addChild(new BackgroundLayer());
        this.addChild(new StandHumanLayer(ImgRes.s_runner_png));
        this.addChild(new HumanLayer(this.newtonSpace, ImgRes.s_running_png, ImgRes.s_running_plist))



        // 让世界动起来
        this.scheduleUpdate();
    },
    update : function (dt) {
        // 不断变化的世界
        this.newtonSpace.step(dt);
    }
})