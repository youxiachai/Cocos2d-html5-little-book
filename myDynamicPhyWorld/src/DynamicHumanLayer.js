/**
 * Created by youxiachai on 14-2-8.
 */

var HumanLayer = cc.Layer.extend({
    newtonSpace : null,
    spriteSheet : null,
    mine : null,
    body : null,
    runningAction : null,
    ctor: function (newton, stand, animPlist) {
        this._super();
        this.newtonSpace = newton;

        this.buildHuman(stand, animPlist);

        this.showDebug();
    },

    buildHuman : function (stand, animPlist){
        this._super();

        cc.SpriteFrameCache.getInstance().addSpriteFrames(animPlist);
        this.spriteSheet = cc.SpriteBatchNode.create(stand);
        this.addChild(this.spriteSheet);

        var animFrames = [];
        for (var i = 0; i < 8; i++) {
            var str = "runner" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.1);
        this.runningAction = cc.RepeatForever.create(cc.Animate.create(animation));

        this.mine = cc.PhysicsSprite.createWithSpriteFrameName("runner0.png");

        var mineSize = this.mine.getContentSize();


        this.body = new cp.Body(1, cp.momentForBox(1, mineSize.width, mineSize.height))
        this.body.p = cc.p(50, WorldElement.groundHeight + mineSize.height / 2);
//        this.body.p = cc.p(0,1000);
        this.body.applyImpulse(cp.v(150, 0), cp.v(0, 0));//
        // run speed
        this.newtonSpace.addBody(this.body);

        //init shape
        this.bodyShape = new cp.BoxShape(this.body, mineSize.width - 14, mineSize.height);
        this.newtonSpace.addShape(this.bodyShape);

        this.mine.setBody(this.body);
        this.mine.runAction(this.runningAction);

        this.spriteSheet.addChild(this.mine);

    },

    showDebug : function (){
        this._debugNode = cc.PhysicsDebugNode.create(this.newtonSpace);
        this._debugNode.setVisible(true);
        // Parallax ratio and offset
        this.addChild(this._debugNode, 10);
    }


})