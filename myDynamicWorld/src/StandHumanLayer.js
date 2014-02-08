/**
 * Created by youxiachai on 14-2-8.
 */


var StandHumanLayer = cc.Layer.extend({

    ctor: function (path) {
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

    }

})