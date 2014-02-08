/**
 * Created by youxiachai on 14-2-7.
 */
var BasicLayer = cc.Layer.extend({
    init :function()
    {
        this._super();
        // 获取当前屏幕信息
//        var s = cc.Director.getInstance().getWinSize();

        // 游戏背景层
        var layer1 = cc.LayerColor.create(new cc.Color4B(0, 0, 0, 255), 480, 320);

        layer1.setAnchorPoint(new cc.Point(0.5,0.5));


        // 返回我们的HelloLayer
        return this;
    }

});

var DynamicWorldScence = cc.Scene.extend({
    newtonSpace : null,
    //定义我们的牛顿大神
    callNewton : function () {
       this.newtonSpace = new cp.Space();
       //引力
       this.newtonSpace.gravity = cp.v(0, 0);
       // 设置地面
        var wallBottom = new cp.SegmentShape(this.newtonSpace.staticBody,
        cp.v(0, 0),
        cp.v(4294967295, 0),
        0);

        this.newtonSpace.addStaticShape(wallBottom);

    },
    onEnter:function(){
        this._super();
        //把牛顿加进来
        this.callNewton();

        // 把我们的定义好的图层添加到场景里面


        this.addChild(new BasicLayer().init());
        this.addChild(new StandHumanLayer());
        this.addChild(new HumanLayer(this.newtonSpace, 'running.png', 'running.plist'))



        // 起来
        this.scheduleUpdate();
    },
    update : function (dt) {
        // 不断变化的世界
        this.newtonSpace.step(dt);
    }
})