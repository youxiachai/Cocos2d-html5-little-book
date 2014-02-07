/**
 * Created by youxiachai on 14-2-7.
 */
var HelloLayer = cc.Layer.extend({
    init :function()
    {
        this._super();
        // 获取当前屏幕信息
        var s = cc.Director.getInstance().getWinSize();

        // 游戏背景层
        var layer1 = cc.LayerColor.create(new cc.Color4B(0, 0, 0, 255), 1280, 720);
        layer1.setAnchorPoint(new cc.Point(0.5,0.5));


        // 文字精灵
        var helloLabel = cc.LabelTTF.create("Hello world", "Arial", 60);
        helloLabel.setPosition(new cc.Point(s.width/2,s.height/2));
        helloLabel.setColor(new cc.Color3B(0,255,0));

        //把精灵添加到背景层
        layer1.addChild(helloLabel);

        // 把合成好的层添加进来
        this.addChild(layer1);

        // 返回我们的HelloLayer
        return this;
    }

});

var HelloScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        // 把我们的定义好的图层添加到场景里面
        this.addChild(new HelloLayer().init());
    }
})