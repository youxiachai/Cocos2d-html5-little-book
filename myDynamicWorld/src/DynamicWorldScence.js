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

    onEnter:function(){
        this._super();

        // 把我们的定义好的图层添加到场景里面

        this.addChild(new BackgroundLayer());
        this.addChild(new StandHumanLayer(ImgRes.s_runner_png,ImgRes.s_running_png, ImgRes.s_running_plist));

    }
})