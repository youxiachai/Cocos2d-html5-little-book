/**
 * Created by youxiachai on 14-2-8.
 */


var StandHumanLayer = cc.Layer.extend({

    ctor: function (path,origin, originlist) {
        this._super();


        // 1  静态
        var humanSprite = cc.Sprite.create(path);
        humanSprite.setPosition(cc.p(80, 57));

        this.addChild(humanSprite);


        //2  移动
        var humanSprite2 = cc.Sprite.create(path);
        humanSprite2.setPosition(cc.p(80, 200));
        var actionTo = cc.MoveTo.create(2, cc.p(300, 200));
        humanSprite2.runAction(cc.Sequence.create(actionTo));
        this.addChild(humanSprite2);

        //3 会动的人

        this.anime(origin, originlist)

    },
    anime : function (origin, originlist) {
        // 1 读取我们预加载的精灵表
        cc.SpriteFrameCache.getInstance().addSpriteFrames(originlist);
        // 1.1 使用 SpriteBatchNode 获得更好的性能
        var spriteSheet = cc.SpriteBatchNode.create(origin);
        this.addChild(spriteSheet);

        // 2 把精灵表里的每帧动作加载到数组里面
        var animFrames = [];
        for (var i = 0; i < 8; i++) {
            var str = "runner" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        // 3 使用我们上头定义好的数组,创建动画, 第二参数,为每帧间隔时间
        var animation = cc.Animation.create(animFrames, 0.1);
        var runningAction = cc.RepeatForever.create(cc.Animate.create(animation));

        // 4 从我们精灵表里头取第一帧作为精灵
        var sprite = cc.Sprite.createWithSpriteFrameName("runner0.png");
            sprite.setPosition(cc.p(80, 280));
            sprite.runAction(runningAction);

        // 4.1 最后把我们的第一帧精灵加入到精灵表里.
       spriteSheet.addChild(sprite);
    }

})