window.__require=function e(t,n,i){function r(s,c){if(!n[s]){if(!t[s]){var a=s.split("/");if(a=a[a.length-1],!t[a]){var l="function"==typeof __require&&__require;if(!c&&l)return l(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+s+"'")}}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){return r(t[s][1][e]||e)},u,u.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof __require&&__require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function o(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function c(e){return void 0===e}t.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!o(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,n,i,o,a,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var u=new Error('Uncaught, unspecified "error" event. ('+t+")");throw u.context=t,u}if(c(n=this._events[e]))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(s(n))for(o=Array.prototype.slice.call(arguments,1),i=(l=n.slice()).length,a=0;a<i;a++)l[a].apply(this,o);return!0},i.prototype.addListener=function(e,t){var n;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=c(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){if(!r(t))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},i.prototype.removeListener=function(e,t){var n,i,o,c;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(n=this._events[e]).length,i=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(c=o;c-- >0;)if(n[c]===t||n[c].listener&&n[c].listener===t){i=c;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}},{}],Color:[function(e,t,n){"use strict";cc._RF.push(t,"731caf0n+JPsruShgDfzhQw","Color");var i={0:cc.color(245,245,220,255),2:cc.color(235,224,213,255),4:cc.color(234,219,193,255),8:cc.color(240,167,110,255),16:cc.color(244,138,89,255),32:cc.color(245,112,85,255),64:cc.color(245,83,52,255),128:cc.color(234,200,103,255),256:cc.color(234,197,87,255),512:cc.color(234,192,71,255),1024:cc.color(146,208,80,255),2048:cc.color(0,176,240,255)};t.exports=i,cc._RF.pop()},{}],User:[function(e,t,n){"use strict";cc._RF.push(t,"375f4JtjAZIiZG+30Q1l914","User");var i=cc.Class({properties:{name:String,score:String},__ctor__:function(e,t){this.name=e,this.score=t}});t.exports=i,cc._RF.pop()},{}],bottomMenuhandle:[function(e,t,n){"use strict";cc._RF.push(t,"661688EURRElapz1XNM+fG3","bottomMenuhandle");var i=e("mEmitter");cc.Class({extends:cc.Component,properties:{lblCurrentScore:{default:null,type:cc.Node},lblBestScore:{default:null,type:cc.Node},_updateScore:null},onLoad:function(){this.lblCurrentScore.getComponent(cc.Label).string=0,this._updateScore=this.updateScore.bind(this),this.onBestScore(),i.instance.registerEvent("updateScore",this._updateScore)},start:function(){},onReplay:function(){this.lblCurrentScore.getComponent(cc.Label).string=0,i.instance.emit("rePlayGame")},onExitGame:function(){i.instance.emit("CLOSEGAMEPLAYER"),i.instance.emit("LOBBYLAYER")},updateScore:function(e){var t=this,n=Number(this.lblCurrentScore.getComponent(cc.Label).string),i=[cc.callFunc(function(){n+=1}),cc.delayTime(.01),cc.callFunc(function(){t.lblCurrentScore.getComponent(cc.Label).string=n+""})],r=cc.sequence(cc.scaleTo(.15,1.2),cc.scaleTo(.15,1));this.lblCurrentScore.runAction(cc.spawn(cc.repeat(cc.sequence(i),e),r))},onBestScore:function(){var e=JSON.parse(cc.sys.localStorage.getItem("users"));null!=e&&(e=e.sort(function(e,t){return parseInt(t.score)-parseInt(e.score)}),this.lblBestScore.getComponent(cc.Label).string=e[0].score)}}),cc._RF.pop()},{mEmitter:"mEmitter"}],card:[function(e,t,n){"use strict";cc._RF.push(t,"05519LZvvBPHqmzFb5zhNTc","card");var i=e("mEmitter"),r=e("Color");cc.Class({extends:cc.Component,properties:{contentCard:{default:null,type:cc.Label},backgroundCard:{default:null,type:cc.Node},stringCard:null},onLoad:function(){i.instance.registerEvent("changedValue",this.changedValue.bind(this))},changedValue:function(){""!=this.contentCard.string&&(this.node.opacity=255,this.backgroundCard.color=r[Number(this.contentCard.string)]),""!=this.stringCard&&(this.contentCard.string=this.stringCard,this.node.opacity=255,this.backgroundCard.color=r[Number(this.contentCard.string)])},animCompareEqual:function(){var e=cc.sequence(cc.scaleTo(.005,1.2),cc.delayTime(.01),cc.scaleTo(.035,1));this.node.runAction(e)},start:function(){},update:function(e){}}),cc._RF.pop()},{Color:"Color",mEmitter:"mEmitter"}],gameOverHandle:[function(e,t,n){"use strict";cc._RF.push(t,"0fbe7ZIHU5ARLZ0QeDT5sou","gameOverHandle");var i=e("User"),r=e("mEmitter"),o=JSON.parse(cc.sys.localStorage.getItem("users"));cc.Class({extends:cc.Component,properties:{edbUsername:cc.EditBox,btnSubmit:cc.Button,lblScore:cc.Label,phaoBong:cc.Node,title:cc.Sprite,openGameOver:null,clickSubmit:null,users:[]},onLoad:function(){this.openGameOver=this.onOpenGameOver.bind(this),r.instance.registerEvent("OPEN_GAMEOVER",this.openGameOver)},start:function(){this.checkData(),this.btnSubmit.node.on("click",this.doSubmit,this)},onOpenGameOver:function(e){var t=this;cc.log(e),this.node.active=!0;var n=0,i=[cc.callFunc(function(){n+=1}),cc.delayTime(.01),cc.callFunc(function(){(t.lblScore.string=n,t.lblScore.string==e.toString())&&(t.phaoBong.active=!0,t.doAnimTitle().clone(t.title.node).repeatForever().start())})];this.lblScore.node.runAction(cc.repeat(cc.sequence(i),e))},doAnimTitle:function(){return cc.tween().to(.3,{position:cc.v2(0,218)}).by(.3,{position:cc.v2(0,-3)},{delayTime:.1}).repeat(5).by(.3,{position:cc.v2(0,3)},{delayTime:.1}).repeat(5)},getInfoUserAndPushToArray:function(){var e=new i;e.name=this.edbUsername.string,e.score=this.lblScore.string,this.users.push(e)},doSubmit:function(){""!=this.edbUsername.string&&(this.getInfoUserAndPushToArray(),null!=this.users&&cc.sys.localStorage.setItem("users",JSON.stringify(this.users)),this.edbUsername.string="",r.instance.emit("CLOSE_GAMEOVER",this.node))},checkData:function(){null!=o&&(this.users=o)}}),cc._RF.pop()},{User:"User",mEmitter:"mEmitter"}],gamePlayer:[function(e,t,n){"use strict";cc._RF.push(t,"5eddb0vkKdLmra3mgLDgzc/","gamePlayer");var i=e("mEmitter"),r=e("Color");cc.Class({extends:cc.Component,properties:{_handleMoveDown:null,_handleMoveUp:null,_handleMoveLeft:null,_handleMoveRight:null,_arrBlocks:[],gameBoard:{default:null,type:cc.Node},card:{default:null,type:cc.Prefab},_canPress:!1,_rePlayGame:null,_closeGamePLayer:null,scoreCurrent:{default:null,type:cc.Node},newValue:null,arrAnim:[]},onLoad:function(){this.rePlayGame(),this.registerEvent()},onEnable:function(){this.rePlayGame()},onDisable:function(){i.instance.removeEvent("CLOSEGAMEPLAYER",this._closeGamePLayer),i.instance.removeEvent("rePlayGame",this._rePlayGame)},registerEvent:function(){this._handleMoveDown=this.moveDown.bind(this),this._handleMoveUp=this.moveUp.bind(this),this._handleMoveLeft=this.moveLeft.bind(this),this._handleMoveRight=this.moveRight.bind(this),i.instance.registerEvent("moveUp",this._handleMoveUp),i.instance.registerEvent("moveDown",this._handleMoveDown),i.instance.registerEvent("moveLeft",this._handleMoveLeft),i.instance.registerEvent("moveRight",this._handleMoveRight)},closeGamePlayer:function(){this.node.active=!1},rePlayGame:function(){this.scoreCurrent.getComponent(cc.Label).string=0,this.gameBoard.removeAllChildren(),this._arrBlocks=[],this._rePlayGame=this.rePlayGame.bind(this),this._closeGamePLayer=this.closeGamePlayer.bind(this),i.instance.registerEvent("CLOSEGAMEPLAYER",this._closeGamePLayer),i.instance.registerEvent("rePlayGame",this._rePlayGame),this.createCard(),this.randomCard()},handleClickInput:function(){if(this._canPress)return!0;this._canPress=!0,i.instance.emit("INPUT")},moveUp:function(){if(1!=this.handleClickInput()){for(var e=0;e<4;e++){for(var t=[0,0,0,0],n=0;n<4;n++)t[n]=this._arrBlocks[n][e];this.handleMove(t)}this.runAnimMoveCard()}},moveDown:function(){if(1!=this.handleClickInput()){for(var e=0;e<4;e++){for(var t=[0,0,0,0],n=0;n<4;n++)t[n]=this._arrBlocks[n][e];this.handleMove(t.reverse())}this.runAnimMoveCard()}},moveLeft:function(){if(1!=this.handleClickInput()){for(var e=0;e<4;e++){for(var t=[0,0,0,0],n=0;n<4;n++)t[n]=this._arrBlocks[e][n];this.handleMove(t)}this.runAnimMoveCard()}},moveRight:function(){if(1!=this.handleClickInput()){for(var e=0;e<4;e++){for(var t=[0,0,0,0],n=0;n<4;n++)t[n]=this._arrBlocks[e][n];this.handleMove(t.reverse())}this.runAnimMoveCard()}},runAnimMoveCard:function(){var e=this;if(0==this.arrAnim.length)return this._canPress=!1,void this.randomCard(!0);for(var t=0;t<=this.arrAnim.length;t++){if(t==this.arrAnim.length)return void cc.tween(this.node).call(function(){e.arrAnim=[]}).delay(.105).call(function(){e._canPress=!1,e.randomCard(),e.randomCard(!0)}).start();this.arrAnim[t].start()}},handleMove:function(e){for(var t=[],n=1;n<e.length;n++)if(""!=e[n].getComponent("card").stringCard){for(var i=!1,r={selfCard:null,otherCard:null,callBack:null},o=n-1;o>=0;o--){if(1==i){o=-1;break}i=this.changeValueCards(e,n,o,r,t)}var s=Object.assign(r),c=this.defineAnimMoveCard(s.selfCard,s.otherCard,s.callBack);void 0!=c&&this.arrAnim.push(c)}},defineAnimMoveCard:function(e,t,n){if(null!=e&&null!=t){var r=t.x,o=t.y,s=e.x,c=e.y;return cc.tween(e).to(.055,{position:cc.v2(r,o)},{easing:"sineIn"}).to(0,{position:cc.v2(s,c)}).call(function(){return n(e,t)}).call(function(){i.instance.emit("changedValue")})}},changeValueCards:function(e,t,n,i,r){if(""==e[n].getComponent("card").stringCard){if(0==n)return this.compareNull(e,t,n,i)}else{if(e[n].getComponent("card").stringCard==e[t].getComponent("card").stringCard)return this.compareEqual(e,t,n,i,r);if(e[n].getComponent("card").stringCard!=e[t].getComponent("card").stringCard)return this.compareDifferent(e,t,n,i)}},compareNull:function(e,t,n,i){return i.selfCard=e[t],i.otherCard=e[n],i.callBack=function(e,t){t.getComponent("card").contentCard.string=t.getComponent("card").stringCard,e.getComponent("card").contentCard.string="",e.opacity=0,t.opacity=255},i.otherCard.getComponent("card").stringCard=i.selfCard.getComponent("card").stringCard,i.selfCard.getComponent("card").stringCard="",!0},compareEqual:function(e,t,n,r,o){if(-1!=o.indexOf(n)){var s=n+1;return this.compareNull(e,t,s,r)}o.push(n);return r.selfCard=e[t],r.otherCard=e[n],r.callBack=function(e,t){t.getComponent("card").contentCard.string=t.getComponent("card").stringCard,e.getComponent("card").contentCard.string="",t.getComponent("card").animCompareEqual(),t.opacity=255,e.opacity=0},r.otherCard.getComponent("card").stringCard=2*Number(r.otherCard.getComponent("card").stringCard)+"",r.selfCard.getComponent("card").stringCard="",i.instance.emit("updateScore",Number(r.otherCard.getComponent("card").stringCard)),!0},compareDifferent:function(e,t,n,i){var r=n+1;if(r!=t){i.selfCard=e[t],i.otherCard=e[r],i.callBack=function(e,t){t.getComponent("card").contentCard.string=t.getComponent("card").stringCard,e.getComponent("card").contentCard.string="",t.opacity=255,e.opacity=0},i.otherCard.getComponent("card").stringCard=i.selfCard.getComponent("card").stringCard,i.selfCard.getComponent("card").stringCard=""}return!0},checkGameOver:function(){for(var e=0;e<4;e++)for(var t=0;t<4;t++){if(3!=e)if(this._arrBlocks[e][t].getComponent("card").stringCard==this._arrBlocks[e+1][t].getComponent("card").stringCard)return!0}for(var n=0;n<4;n++)for(var i=0;i<4;i++){if(3!=i)if(this._arrBlocks[n][i].getComponent("card").stringCard==this._arrBlocks[n][i+1].getComponent("card").stringCard)return!0}return!1},createCard:function(){for(var e=0;e<4;e++){for(var t=[],n=0;n<4;n++){var i=150*n-225,r=225-150*e,o=cc.instantiate(this.card);o.parent=this.gameBoard,o.x=i,o.y=r,o.width=140,o.height=140,o.opacity=0,o.getComponent("card").stringCard="",cc.log(o.getComponent("card").contentCard.string),t.push(o)}this._arrBlocks.push(t)}},randomCard:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._arrBlocks.flat(1/0).filter(function(e){return""==e.getComponent("card").stringCard});if(0!=t.length){if(!e){var n=Math.floor(Math.random()*t.length),o=[2,4],s=o[Math.floor(Math.random()*o.length)];t[n].getComponent("card").contentCard.string=s,t[n].getComponent("card").backgroundCard.color=r[Number(s)],t[n].opacity=255,t[n].getComponent("card").stringCard=s+"";var c=cc.scaleTo(.3,1);t[n].runAction(c)}}else 0==this.checkGameOver()&&i.instance.emit("GAMEOVER",Number(this.scoreCurrent.getComponent(cc.Label).string))}}),cc._RF.pop()},{Color:"Color",mEmitter:"mEmitter"}],inputHandler:[function(e,t,n){"use strict";cc._RF.push(t,"bbe71y+tlNHFK4QN71hedOv","inputHandler");var i=e("mEmitter");cc.Class({extends:cc.Component,properties:{_mouseDown:null,gameBoard:cc.Node},onLoad:function(){this._mouseDown={},this.gameBoard.on(cc.Node.EventType.MOUSE_DOWN,this.mouseDown,this),this.gameBoard.on(cc.Node.EventType.MOUSE_UP,this.mouseUp,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.handleKeyDown,this),this.eventTouchHanlder()},mouseUp:function(e){var t=e.getLocationX(),n=e.getLocationY();if(Math.abs(this._mouseDown.x-t)>Math.abs(this._mouseDown.y-n)){if(Math.abs(this._mouseDown.x-t)<50)return;this._mouseDown.x-t<0?i.instance.emit("moveRight"):i.instance.emit("moveLeft")}else{if(Math.abs(this._mouseDown.y-n)<50)return;this._mouseDown.y-n<0?i.instance.emit("moveUp"):i.instance.emit("moveDown")}},mouseDown:function(e){this._mouseDown.x=e.getLocationX(),this._mouseDown.y=e.getLocationY()},eventTouchHanlder:function(){var e=this;this.gameBoard.on("touchstart",function(t){e._startTouch=t.getLocation()}),this.gameBoard.on("touchend",function(t){e._endTouch=t.getLocation(),e.checkTouch()})},checkTouch:function(){var e=this._startTouch,t=this._endTouch.sub(e);t.mag()>50&&(Math.abs(t.x)>Math.abs(t.y)?t.x>0?i.instance.emit("moveRight"):i.instance.emit("moveLeft"):t.y>0?i.instance.emit("moveUp"):i.instance.emit("moveDown"),this.randomNumber())},handleKeyDown:function(e){switch(e.keyCode){case cc.macro.KEY.up:cc.log("upo"),i.instance.emit("moveUp");break;case cc.macro.KEY.down:i.instance.emit("moveDown");break;case cc.macro.KEY.left:i.instance.emit("moveLeft");break;case cc.macro.KEY.right:i.instance.emit("moveRight")}}}),cc._RF.pop()},{mEmitter:"mEmitter"}],leaderBoardHandle:[function(e,t,n){"use strict";cc._RF.push(t,"0986eiPfi1Krap+SGGp5zlq","leaderBoardHandle");e("User");var i=e("mEmitter");cc.Class({extends:cc.Component,properties:{parent:cc.Layout,prefab:cc.Prefab,btnClose:cc.Button,title:cc.Sprite},onLoad:function(){this.open=this.doOpenLeader.bind(this),i.instance.registerEvent("OPEN_LEADER",this.open),this.node.active=!1},start:function(){this._renderAll(),this.doAnimTitle().clone(this.title.node).repeatForever().start(),this.btnClose.node.on("click",this.onClick,this)},onClick:function(){this.doCloseLeader(),i.instance.emit("CLOSE_LEADERBOARD"),cc.log("close leader board")},_renderAll:function(){var e=this,t=JSON.parse(cc.sys.localStorage.getItem("users"));if(null!=t){var n=this.sortData(t);n.forEach(function(t,n){var i=e._createItem(t,n);e.checkTop(i)}),i.instance.emit("BEST_SCORE",n[0].score)}},checkTop:function(e){1==e.getChildByName("rank").getComponent("cc.Label").string&&(e.color=new cc.color("#00000")),2==e.getChildByName("rank").getComponent("cc.Label").string&&(e.color=new cc.color("#5C5757")),3==e.getChildByName("rank").getComponent("cc.Label").string&&(e.color=new cc.color("#D1D1D1"))},sortData:function(e){return e=e.sort(function(e,t){return t.score-e.score})},_createItem:function(e,t){var n=cc.instantiate(this.prefab);return n.parent=this.parent.node,n.getChildByName("rank").getComponent("cc.Label").string=t+1,n.getChildByName("name").getComponent("cc.Label").string=e.name,n.getChildByName("score").getComponent("cc.Label").string=e.score,n},doAnimTitle:function(){return cc.tween().by(1,{position:cc.v2(23,11)},{easing:"sineOut"}).by(.5,{position:cc.v2(-23,-11)},{easing:"sineIn"}).by(1,{position:cc.v2(-23,11)},{easing:"sineOut"}).by(.5,{position:cc.v2(23,-11)},{easing:"sineIn"})},doOpenLeader:function(){var e=this;return cc.tween(this.node).delay(.4).call(function(){e.node.active=!0}).to(.45,{scale:1.5},{easing:"sineIn"}).delay(.1).to(.35,{scale:1}).start()},doCloseLeader:function(){return cc.tween(this.node).to(.7,{scale:1.5},{easing:"bounceIn"}).delay(.1).to(.3,{scale:0}).start()}}),cc._RF.pop()},{User:"User",mEmitter:"mEmitter"}],mEmitter:[function(e,t,n){"use strict";cc._RF.push(t,"c2660nPr11LmKwY1OVi3Qjr","mEmitter");var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=e("events"),s=function(){function e(){r(this,e),this._emiter=new o,this._emiter.setMaxListeners(100)}return i(e,[{key:"emit",value:function(){var e;(e=this._emiter).emit.apply(e,arguments)}},{key:"registerEvent",value:function(e,t,n){this._emiter.on(e,t,n)}},{key:"registerOnce",value:function(e,t){this._emiter.once(e,t)}},{key:"removeEvent",value:function(e,t){this._emiter.removeListener(e,t)}},{key:"destroy",value:function(){this._emiter.removeAllListeners(),this._emiter=null,e.instance=null}}]),e}();s.instance=null,t.exports=s,cc._RF.pop()},{events:1}],mainController:[function(e,t,n){"use strict";cc._RF.push(t,"b07e8pbvotJP5LdCjRwxTaG","mainController");var i=e("mEmitter");cc.Class({extends:cc.Component,properties:{lobbyLayer:cc.Node,gameLayer:cc.Node,game:null,lobby:null,click:null},onLoad:function(){var e=this;i.instance=new i,this.lobby=this.onLobby.bind(this),this.game=this.onGame.bind(this),this.closeLobby=this.doCloseLobby.bind(this),i.instance.registerEvent("LOBBYLAYER",this.lobby),i.instance.registerEvent("GAMELAYER",this.game),i.instance.registerEvent("CLOSE_LOBBY",function(){e.doCloseLobby().start()},this)},start:function(){this.onLobby()},onLobby:function(){cc.log("lobby"),this.doLobby().start()},onGame:function(){cc.log("game"),this.doCloseLobby().start(),this.doOpenGameLayer().start()},doLobby:function(){var e=this;return cc.tween(this.lobbyLayer).call(function(){e.lobbyLayer.active=!0}).delay(.4).to(.9,{position:cc.v2(0,0)},{easing:"backOut"})},doCloseLobby:function(){var e=this;return cc.tween(this.lobbyLayer).delay(.4).to(.9,{position:cc.v2(0,630)},{easing:"backOut"}).call(function(){e.lobbyLayer.active=!1})},doOpenGameLayer:function(){var e=this;return cc.tween(this.gameLayer).delay(.9).call(function(){e.gameLayer.active=!0}).to(.9,{scale:1,rotation:720},{easing:"sineIn"})},doCloseGameLayer:function(){var e=this;return cc.tween(this.gameLayer).to(.9,{scale:0,rotation:720},{easing:"sineIn"}).call(function(){e.gameLayer.active=!1}).delay(.5)}}),cc._RF.pop()},{mEmitter:"mEmitter"}],mainMenuHandle:[function(e,t,n){"use strict";cc._RF.push(t,"16c08yMsttIN5z380Z/wQrP","mainMenuHandle");e("User");var i=e("mEmitter");cc.Class({extends:cc.Component,properties:{btnPlay:cc.Button,btnRank:cc.Button,btnSetting:cc.Button,openStart:null,clickPlay:null},onLoad:function(){},start:function(){this.btnRank.node.on("click",this.onClickRank,this),this.btnPlay.node.on("click",this.onClickPlay,this),this.btnSetting.node.on("click",this.onClickSetting,this)},onClickPlay:function(){i.instance.emit("GAMELAYER",this.node),cc.log("click new game")},onClickRank:function(){i.instance.emit("CLOSE_LOBBY"),i.instance.emit("LEADERBOARD",this.node),cc.log("click rank")},onClickSetting:function(){i.instance.emit("CLOSE_LOBBY"),i.instance.emit("SETTING",this.node),cc.log("click setting")},emitCloseMenu:function(){}}),cc._RF.pop()},{User:"User",mEmitter:"mEmitter"}],popupController:[function(e,t,n){"use strict";cc._RF.push(t,"43645QeGEFClak7bl/feGXN","popupController");var i=e("mEmitter");cc.Class({extends:cc.Component,properties:{leaderBoard:cc.Node,settingLayer:cc.Node,gameOver:cc.Node},onLoad:function(){this.openLeader=this.onOpenLeader.bind(this),this.closeLeader=this.onCloseLeader.bind(this),this.openSetting=this.onOpenSetting.bind(this),this.closeSetting=this.onCloseSetting.bind(this),this.openGameOver=this.onOpenGameOver.bind(this),this.closeGameOver=this.onCloseGameOver.bind(this),i.instance.registerEvent("LEADERBOARD",this.openLeader),i.instance.registerEvent("CLOSE_LEADERBOARD",this.closeLeader),i.instance.registerEvent("SETTING",this.openSetting),i.instance.registerEvent("CLOSE_SETTING",this.closeSetting),i.instance.registerEvent("GAMEOVER",this.openGameOver),i.instance.registerEvent("CLOSE_GAMEOVER",this.closeGameOver)},start:function(){cc.log(this.settingLayer.active)},onOpenGameOver:function(e){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.handleKeyDown,this),cc.log(e),this.gameOver.active=!0,i.instance.emit("OPEN_GAMEOVER",e)},onCloseGameOver:function(){this.gameOver.active=!1,i.instance.emit("rePlayGame")},onOpenSetting:function(){this.doOpenSetting()},onCloseSetting:function(){this.doCloseSetting(),i.instance.emit("LOBBYLAYER")},onOpenLeader:function(){cc.log("open leader"),i.instance.emit("OPEN_LEADER")},onCloseLeader:function(){i.instance.emit("LOBBYLAYER")},doOpenSetting:function(){var e=this;return cc.tween(this.settingLayer).call(function(){e.settingLayer.active=!0}).to(.7,{scale:1,position:cc.v2(0,0)},{easing:"sineIn"}).start()},doCloseSetting:function(){var e=this;return cc.tween(this.settingLayer).to(.7,{scaleX:0,position:cc.v2(0,-620)},{easing:"sineIn"}).call(function(){e.settingLayer.active=!1}).start()}}),cc._RF.pop()},{mEmitter:"mEmitter"}],settingHandle:[function(e,t,n){"use strict";cc._RF.push(t,"9b327aO/cdO7LxzTZV3imhp","settingHandle");var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=e("mEmitter");cc.Class({extends:cc.Component,properties:{btnQuit:cc.Button,btnClose:cc.Button,slideVolume:cc.Slider,cbMute:cc.Toggle},onLoad:function(){},start:function(){this.slideVolume.node.on("slide",this.onChange,this),this.cbMute.node.on("toggle",this.onToggle,this),this.btnClose.node.on("click",this.onClick,this)},onOpen:function(){this.doOpen().clone().start()},onClick:function(){r.instance.emit("CLOSE_SETTING"),cc.log("close setting")},onToggle:function(e){cc.log(e.isChecked),r.instance.emit("MUTE",e.isChecked)},onChange:function(e){cc.log(i(e.progress)),r.instance.emit("VOLUME",e.progress)}}),cc._RF.pop()},{mEmitter:"mEmitter"}],soundController:[function(e,t,n){"use strict";cc._RF.push(t,"7a12fDX3qhMfJxi5mVH2Mtj","soundController");var i=e("mEmitter");cc.Class({extends:cc.Component,properties:{btnStart:cc.Button,btnPlus:cc.Button,btnEnd:cc.Button},start:function(){this.startSound=this.onClickStart.bind(this),this.endSound=this.onClickEnd.bind(this),this.inputSound=this.onClickPlus.bind(this),i.instance.registerEvent("GAMELAYER",this.startSound),i.instance.registerEvent("GAMEOVER",this.endSound),i.instance.registerEvent("INPUT",this.inputSound),this.btnEnd.node.on("click",this.onClick,this)},onClick:function(){i.instance.emit("GAMEOVER",100)},onClickStart:function(){cc.log("play start"),i.instance.emit("PLAYSOUNDSTART")},onClickPlus:function(){cc.log("play input"),i.instance.emit("PLAYSOUNDPLUS")},onClickEnd:function(){cc.log("play end"),i.instance.emit("PLAYSOUNDEND")}}),cc._RF.pop()},{mEmitter:"mEmitter"}],soundHandle:[function(e,t,n){"use strict";cc._RF.push(t,"e9a15uLEpdN96ZXAdDd4oxV","soundHandle");var i=e("mEmitter");cc.Class({extends:cc.Component,properties:{soundPlusScore:{default:null,type:cc.AudioClip},soundStart:{default:null,type:cc.AudioClip},soundEnd:{default:null,type:cc.AudioClip},_volume:.5,_isMute:null,volume:null,mute:null,_effect:null,_bgMusic:null,current:null},onLoad:function(){this.volume=this.setGameVolume.bind(this),this.mute=this.getIsMute.bind(this),this.playStart=this.onPlayStart.bind(this),this.playPlusScore=this.onPlayPlusScore.bind(this),this.playEnd=this.onPlayEnd.bind(this),i.instance.registerEvent("VOLUME",this.volume),i.instance.registerEvent("MUTE",this.mute),i.instance.registerEvent("PLAYSOUNDSTART",this.playStart),i.instance.registerEvent("PLAYSOUNDPLUS",this.playPlusScore),i.instance.registerEvent("PLAYSOUNDEND",this.playEnd)},start:function(){},onPlayPlusScore:function(){0!=this._isMute&&(this.current=cc.audioEngine.playEffect(this.soundPlusScore,!1),cc.log(this.current))},onPlayStart:function(){0!=this._isMute&&(this.current=cc.audioEngine.playEffect(this.soundStart,!1),cc.log(this.current))},onPlayEnd:function(){0!=this._isMute&&(this.current=cc.audioEngine.playEffect(this.soundEnd,!1),cc.log(this.current))},setGameVolume:function(e){cc.audioEngine.setVolume(this.current,e)},getIsMute:function(e){0==e?cc.audioEngine.pauseAll():cc.audioEngine.resumeAll(),this._isMute=e}}),cc._RF.pop()},{mEmitter:"mEmitter"}]},{},["inputHandler","mainController","popupController","soundController","User","card","bottomMenuhandle","gameOverHandle","gamePlayer","leaderBoardHandle","mainMenuHandle","settingHandle","soundHandle","Color","mEmitter"]);