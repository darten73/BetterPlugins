//META{"name":"CoolAdmin"}*//

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(b){var a=0;return function(){return a<b.length?{done:!1,value:b[a++]}:{done:!0}}};$jscomp.arrayIterator=function(b){return{next:$jscomp.arrayIteratorImpl(b)}};$jscomp.makeIterator=function(b){var a="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];return a?a.call(b):$jscomp.arrayIterator(b)};var CoolAdmin=function(){};CoolAdmin.prototype.getName=function(){return"CoolAdmin"};
CoolAdmin.prototype.getDescription=function(){return"\u0434\u0430\u0440\u0438\u043e \u043a\u0440\u0430\u0441\u0430\u0432\u0447\u0438\u043a "};CoolAdmin.prototype.getVersion=function(){return"2.7.0"};CoolAdmin.prototype.getAuthor=function(){return"Dario"};CoolAdmin.prototype.getRawUrl=function(){return"https://github.com/darten73/BetterPlugins/raw/master/plugins/CoolAdmin.plugin.js"};
CoolAdmin.prototype.initConstructor=function(){this.serverId="259124796971941890";this.botId="378642945827536896";this.channelGeneralId="259124796971941890";this.isAdmin=!1;this.adminRolesIds=["375000541316775946","299569797027463178"];this.Permission={CREATE_INSTANT_INVITE:1,KICK_MEMBERS:2,BAN_MEMBERS:4,ADMINISTRATOR:8,MANAGE_CHANNELS:16,MANAGE_GUILD:32,CHANGE_NICKNAME:67108864,MANAGE_NICKNAMES:134217728,MANAGE_ROLES:268435456,MANAGE_WEBHOOKS:536870912,MANAGE_EMOJIS:1073741824,VIEW_AUDIT_LOG:128,
VIEW_CHANNEL:1024,SEND_MESSAGES:2048,SEND_TSS_MESSAGES:4096,MANAGE_MESSAGES:8192,EMBED_LINKS:16384,ATTACH_FILES:32768,READ_MESSAGE_HISTORY:65536,MENTION_EVERYONE:131072,USE_EXTERNAL_EMOJIS:262144,ADD_REACTIONS:64,CONNECT:1048576,SPEAK:2097152,MUTE_MEMBERS:4194304,DEAFEN_MEMBERS:8388608,MOVE_MEMBERS:16777216,USE_VAD:33554432,PRIORITY_SPEAKER:256};this.userContextMenuMarkup={moveGroup:{moveToAfk:{name:"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u0432 \u0410\u0424\u041a",warning:!1},moveAndComeIn:{name:"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u0438 \u0437\u0430\u0439\u0442\u0438 \u0432",
warning:!1,submunu:{meetingRoom:{name:"\u041f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u043d\u0430\u044f",id:"510961674312876058"},ModerateRoom:{name:"\u041c\u043e\u0434\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",id:"299219272658321418"}}}},findGroup:{find:{name:"\u041d\u0430\u0439\u0442\u0438",warning:!1},findAndConn:{name:"\u0423\u0432\u043b\u0435\u0447\u0442\u043e\u0436\u0438\u0442\u044c",warning:!0}},moderateGroup:{mute:{name:"\u041c\u0443\u0442",warning:!1},warn:{name:"\u0412\u0430\u0440\u043d",
warning:!1},unwarn:{name:"\u0421\u043d\u044f\u0442\u044c \u0432\u0430\u0440\u043d",warning:!0,admin:!0},ban:{name:"\u0411\u0410\u041d",warning:!0}}};this.reasons={warn:{1:"Test1",2:"test2"}};this.userTribunalSettingsMarkup='<span class="cooladmin-modal DevilBro-modal">\n            <div class="'+BDFDB.disCN.backdrop+'"></div>\n            <div class="'+BDFDB.disCN.modal+'">\n                <div class="'+BDFDB.disCN.modalinner+'">\n                    <div class='+(BDFDB.disCNS.modalsub+BDFDB.disCN.modalsizemedium)+
'">\n                        <div class="'+(BDFDB.disCNS.flex+BDFDB.disCNS.flex2+BDFDB.disCNS.horizontal+BDFDB.disCNS.horizontal2+BDFDB.disCNS.directionrow+BDFDB.disCNS.justifystart+BDFDB.disCNS.aligncenter+BDFDB.disCNS.nowrap+BDFDB.disCN.modalheader)+'" style="flex: 0 0 auto;">\n                            <div class="flexChild-1KGW5q" style="flex: 1 1 auto;">\n                                <h4 class="'+(BDFDB.disCNS.h4+BDFDB.disCNS.headertitle+BDFDB.disCNS.size16+BDFDB.disCNS.height20+BDFDB.disCNS.weightsemibold+
BDFDB.disCNS.defaultcolor+BDFDB.disCNS.h4defaultmargin+BDFDB.disCN.marginreset)+'">REPLACE_modal_title</h4>\n                                <div class="'+(BDFDB.disCNS.modalguildname+BDFDB.disCNS.small+BDFDB.disCNS.size12+BDFDB.disCNS.height16+BDFDB.disCN.primary)+'"></div>\n                            </div>\n                            <svg class="'+(BDFDB.disCNS.modalclose+BDFDB.disCN.flexchild)+'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">\n                                <g fill="none" fill-rule="evenodd">\n                                    <path d="M0 0h12v12H0"></path>\n                                    <path class="fill" fill="currentColor" d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"></path>\n                                </g>\n                            </svg>\n                        </div>\n                        <div class="'+
(BDFDB.disCNS.flex+BDFDB.disCNS.flex2+BDFDB.disCNS.vertical+BDFDB.disCNS.directioncolumn+BDFDB.disCNS.justifystart+BDFDB.disCNS.alignstretch+BDFDB.disCNS.nowrap+BDFDB.disCN.marginbottom20)+'" style="flex: 0 0 auto;">\n                            <div class="'+(BDFDB.disCNS.flex+BDFDB.disCNS.flex2+BDFDB.disCNS.horizontal+BDFDB.disCNS.horizontal2+BDFDB.disCNS.directionrow+BDFDB.disCNS.justifystart+BDFDB.disCNS.aligncenter+BDFDB.disCNS.nowrap+BDFDB.disCN.marginbottom8)+'" style="flex: 1 1 auto;">\n                                <h3 class="'+
(BDFDB.disCNS.titledefault+BDFDB.disCNS.title+BDFDB.disCNS.marginreset+BDFDB.disCNS.weightmedium+BDFDB.disCNS.size16+BDFDB.disCNS.height24+BDFDB.disCN.flexchild)+'" style="flex: 0 0 auto;">REPLACE_modal_reason_title</h3>\n                            </div>\n                            <div class="'+(BDFDB.disCNS.flex+BDFDB.disCNS.flex2+BDFDB.disCNS.horizontal+BDFDB.disCNS.horizontal2+BDFDB.disCNS.directionrow+BDFDB.disCNS.justifystart+BDFDB.disCNS.aligncenter+BDFDB.disCNS.nowrap+BDFDB.disCNS.marginbottom8+
BDFDB.disCN.modalsubinner)+'" style="flex: 1 1 auto;">\n                                <div class="'+(BDFDB.disCNS.inputwrapper+BDFDB.disCNS.vertical+BDFDB.disCNS.flex+BDFDB.disCNS.directioncolumn+BDFDB.disCN.flexchild)+'" style="flex: 1 1 auto;"><input type="text" class="'+(BDFDB.disCNS.inputdefault+BDFDB.disCNS.input+BDFDB.disCN.size16)+'" id="input-reason"></div>\n                            </div>\n                            <div class="'+(BDFDB.disCNS.flex+BDFDB.disCNS.flex2+BDFDB.disCNS.horizontal+
BDFDB.disCNS.horizontal2+BDFDB.disCNS.directionrow+BDFDB.disCNS.justifystart+BDFDB.disCNS.aligncenter+BDFDB.disCNS.nowrap+BDFDB.disCNS.marginbottom8+BDFDB.disCN.modalsubinner)+'" style="flex: 1 1 auto;">\n                                <h3 id="warning" class="'+(BDFDB.disCNS.flex+BDFDB.disCNS.flex2+BDFDB.disCNS.horizontal+BDFDB.disCNS.horizontal2+BDFDB.disCNS.directionrow+BDFDB.disCNS.justifystart+BDFDB.disCNS.aligncenter+BDFDB.disCNS.nowrap+BDFDB.disCN.marginbottom8)+'" style="flex: 0 0 auto; color: rgb(240, 71, 71)">REPLACE_modal_warning</h3>\n                            </div>\n                        </div>\n                        <div class="'+
(BDFDB.disCNS.flex+BDFDB.disCNS.flex2+BDFDB.disCNS.horizontalreverse+BDFDB.disCNS.horizontalreverse2+BDFDB.disCNS.directionrowreverse+BDFDB.disCNS.justifystart+BDFDB.disCNS.alignstretch+BDFDB.disCNS.nowrap+BDFDB.disCN.modalfooter)+'">\n                                <button type="button" class="btn-save '+(BDFDB.disCNS.button+BDFDB.disCNS.buttonlookfilled+BDFDB.disCNS.buttoncolorbrand+BDFDB.disCNS.buttonsizemedium+BDFDB.disCN.buttongrow)+'">\n                                    <div>REPLACE_modal_button_name</div>\n                                </button>\n                            </div>\n                    </div>\n                </div>\n            </span>';
this.defaults={settings:{debag:{value:!1,description:"Debag"},moveToAfk:{value:!0,description:"\u041f\u0435\u0440\u0435\u043d\u043e\u0441 \u0432 \u0410\u0424\u041a"},moveAndComeIn:{value:!0,description:"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u0438 \u0437\u0430\u0439\u0442\u0438 \u0432"},find:{value:!0,description:"\u041d\u0430\u0439\u0442\u0438"},findAndConn:{value:!0,description:"\u041d\u0430\u0439\u0442\u0438 \u0438 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0438\u0442\u044c"},
mute:{value:!0,description:"\u041c\u0443\u0442"},warn:{value:!0,description:"\u0412\u0430\u0440\u043d"},unwarn:{value:!0,description:"\u0421\u043d\u044f\u0442\u044c \u0432\u0430\u0440\u043d",admin:!0},ban:{value:!0,description:"\u0411\u0430\u043d"}}};this.markup={category:{dev:{name:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430",settings:{debag:{}}},contextMenu:{name:"\u041f\u0443\u043d\u043a\u0442\u044b \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u044e",
settings:{moveToAfk:{name:"\u041f\u0435\u0440\u0435\u043d\u043e\u0441 \u0432 \u0410\u0424\u041a"},moveAndComeIn:{name:"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u0438 \u0437\u0430\u0439\u0442\u0438 \u0432"},find:{name:"\u041d\u0430\u0439\u0442\u0438"},findAndConn:{name:"\u041d\u0430\u0439\u0442\u0438 \u0438 \u0423\u041d\u0418\u0427\u0422\u041e\u0416\u0418\u0422\u042c"},mute:{name:"\u0417\u0430\u043c\u0443\u0442\u0438\u0442\u044c"},warn:{name:"\u0417\u0430\u0432\u0430\u0440\u043d\u0438\u0442\u044c"},
unwarn:{name:"\u0421\u043d\u044f\u0442\u044c \u0432\u0430\u0440\u043d",admin:!0},ban:{name:"\u0417\u0430\u0431\u0430\u043d\u0438\u0442\u044c"}}}}}};CoolAdmin.prototype.load=function(){};
CoolAdmin.prototype.start=function(){var b=this,a=null;if("object"!==typeof BDFDB||"function"!==typeof BDFDB.isLibraryOutdated||BDFDB.isLibraryOutdated())(a=document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]'))&&a.remove(),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("src","https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"),document.head.appendChild(a);this.startTimeout=setTimeout(function(){b.initialize()},
3E4);"object"===typeof BDFDB&&"function"===typeof BDFDB.isLibraryOutdated?this.initialize():a.addEventListener("load",function(){b.initialize()})};
CoolAdmin.prototype.initialize=function(){var b=this;BDFDB.loadMessage(this);this.s=BDFDB.getAllData(this,"settings");console.log(this.s);this.test();this.MemberPerms=BDFDB.WebModules.findByProperties(["getNicknames","getNick"]);this.ChannelStore=BDFDB.WebModules.findByProperties(["getChannels","getDMFromUserId"]);this.CurrentChannel=BDFDB.WebModules.findByProperties(["getChannelId"]);this.CurrentUser=BDFDB.WebModules.findByProperties(["getCurrentUser"]);this.ChannelActions=BDFDB.WebModules.findByProperties(["selectVoiceChannel"]);
this.UsersVoiceStore=BDFDB.WebModules.findByProperties(["getVoiceStates"]);this.adminActions=BDFDB.WebModules.findByProperties(["move"]);this.GuildStore=BDFDB.WebModules.findByProperties(["getGuilds"]);this.MessageActions=BDFDB.WebModules.findByProperties(["fetchMessages"]);this.GuildChannels=BDFDB.WebModules.findByProperties(["getChannels","getDefaultChannel"]);this.checkPerms=BDFDB.WebModules.findByProperties(["can","canUser"]);var a=null;a=new MutationObserver(function(a,d){a.forEach(function(a,
d){a.addedNodes&&a.addedNodes.forEach(function(a){if(a&&1==a.nodeType&&0<a.classList.length&&a.className.includes(BDFDB.disCN.contextmenu))b.onContextMenu(a)})})});BDFDB.addObserver(this,BDFDB.dotCN.appmount,{name:"userContextObserver",instance:a},{childList:!0});a=new MutationObserver(function(a,d){a.forEach(function(a,d){a.addedNodes&&a.addedNodes.forEach(function(a){if(a&&1==a.nodeType&&0<a.classList.length&&a.className.includes(BDFDB.disCN.popout))b.onPopouts(a)})})});BDFDB.addObserver(this,BDFDB.dotCN.popouts,
{name:"popoutObserver",instance:a},{childList:!0});this.currentUserId=this.CurrentUser.getCurrentUser().id;this.isAdmin=this.adminRolesIds.some(function(a){return b.MemberPerms.getMember(b.serverId,b.currentUserId).roles.includes(a)})};CoolAdmin.prototype.stop=function(){"object"===typeof BDFDB&&(BDFDB.removeLocalStyle(this.getName()),BDFDB.unloadMessage(this))};CoolAdmin.prototype.onSwitch=function(){};
CoolAdmin.prototype.onPopouts=function(b){var a=this,e=BDFDB.getReactInstance(b).child.memoizedProps.user,d=b.querySelector(BDFDB.dotCN.userpopoutheadertext);if(d){var c=this.ChannelStore.getChannel(this.UsersVoiceStore.getVoiceState(this.serverId,e.id).channelId);console.log(c);c&&(c='<div align="center" style="padding: 5px"><div class="contents-4L4hQM">'+c+'</div></div><div align="center" style="padding: 5px"><a  id="findAndConn"><div class="contents-4L4hQM"> ('+(BDFDB.getData("findAndConn",this,
"settings").name?BDFDB.getData("findAndConn",this,"settings").name:this.userContextMenuMarkup.findGroup.findAndConn.name)+")</div></a></div>",d.innerHTML+=c,$(b).on("click","#findAndConn",function(){$(b).hide();a.find(e,!0)}))}};CoolAdmin.prototype.find=function(b,a){var e,d=(e=this.UsersVoiceStore.getVoiceState(this.serverId,b.id))?e.channelId:"",c;BDFDB.showToast((c=this.ChannelStore.getChannel(d))?"Channel: "+c:"\u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");a&&this.connectChannel(c)};
CoolAdmin.prototype.connectChannel=function(b){var a=this.CurrentChannel.getVoiceChannelId();if(b&&a!=b.id){a=this.checkPermsToConnect(this.currentUserId,b);var e=this;(a||null==a)&&setTimeout(function(){$(".buttonDisconnect-3W_SJc").trigger("click");setTimeout(function(){e.ChannelActions.selectVoiceChannel(e.serverId,b.id)},500)},100)}};CoolAdmin.prototype.checkPermsToConnect=function(b,a){return this.checkPerms.canUser(b,this.Permission.CONNECT,{channelId:a.id})};
CoolAdmin.prototype.test=function(){var b=this,a=require("request"),e=require("path"),d=require("fs");BDFDB.loadMessage(this);var c=this.getRawUrl().split("/");c=c[c.length-1];var f=e.join(BDFDB.getPluginsFolder(),c),h=d.readFileSync(f,"utf8");a(this.getRawUrl(),function(a,e,c){console.log(h!=c);h!=c&&(b.stop(),d.writeFileSync(f,c))})};
CoolAdmin.prototype.onContextMenu=function(b){var a=this,e=BDFDB.getSelectedServer();e=e?e:BDFDB.getSelectedChannel();if(b&&b.tagName&&b.parentElement&&!b.querySelector(".cooladmin-item")&&(e.id===this.serverId||e.id===this.botId)){var d=BDFDB.getKeyInformation({node:b,key:"user"});if(d&&BDFDB.getKeyInformation({node:b,key:"displayName",value:"UserNoteItem"})){e="<div class="+BDFDB.disCN.contextmenuitemgroup+">";for(var c in this.userContextMenuMarkup){e+="<div class="+BDFDB.disCN.contextmenuitemgroup+
">";for(var f in this.userContextMenuMarkup[c])!BDFDB.getData(f,this,"settings")||this.userContextMenuMarkup[c][f].admin&&!this.isAdmin||(e+='<div id="'+f+'" class="'+(BDFDB.disCNS.contextmenuitem+c+" "+(this.userContextMenuMarkup[c][f].submunu?BDFDB.disCNS.contextmenuitemsubmenu+"dario-submenu":""))+' cooladmin-item">\n\t\t\t\t\t\t\t\t                        <span '+(this.userContextMenuMarkup[c][f].warning?'style="color:#f04747!important"':"")+" >"+(BDFDB.getData(f,this,"settings").name?BDFDB.getData(f,
this,"settings").name:this.userContextMenuMarkup[c][f].name)+'</span>\n\t\t                        \t\t\t\t\t\t<div class="'+BDFDB.disCN.contextmenuhint+'"></div>\n                        \t\t\t\t\t\t</div>');e+="</div>"}e+="</div>";$(b).append(e).on("click","#moveToAfk",function(){var c=a.GuildStore.getGuild(a.serverId);c=c?a.MemberPerms.getMember(c.id,d.id):null;$(b).hide();a.adminActions.setChannel(a.serverId,d.id,"289786584247828490");BDFDB.showToast((c.nick?c.nick:d.username)+" \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d \u0432 \u0410\u0424\u041a")}).on("click",
"#find",function(){$(b).hide();a.find(d)}).on("click","#findAndConn",function(){$(b).hide();a.find(d,!0)}).on("click","#mute",function(){$(b).hide();a.showTribunalSettings(d,"mute")}).on("click","#warn",function(){$(b).hide();a.showTribunalSettings(d,"warn")}).on("click","#unwarn",function(){$(b).hide();var c=BDFDB.getData("debag",a,"settings")?"?":"!";a.sendMessageInGeneral(c+"unwarn <@!"+d.id+">")}).on("click","#ban",function(){$(b).hide();a.showTribunalSettings(d,"ban")}).on("mouseenter",".dario-submenu, .cooladmin-item",
function(c){a.createContextSubMenu(d,c,b)});BDFDB.updateContextPosition(b)}}};
CoolAdmin.prototype.createContextSubMenu=function(b,a,e){var d=this,c=a.currentTarget.id,f=a.currentTarget.classList[1];if("moveAndComeIn"===c){var h='<div class="'+BDFDB.disCN.contextmenu+' cooladmin-submenu">\n                \t\t\t\t\t\t\t\t<div class="'+BDFDB.disCN.contextmenuitemgroup+'">';for(var k in this.userContextMenuMarkup[f][c].submunu)h+='\t\t<div id="'+this.userContextMenuMarkup[f][c].submunu[k].id+'" class="'+BDFDB.disCN.contextmenuitem+' moveAndComeIn-item">\n                    \t\t\t\t\t\t\t\t\t<span>'+
this.userContextMenuMarkup[f][c].submunu[k].name+'</span>\n                  \t\t\t\t\t\t\t\t\t\t<div class="'+BDFDB.disCN.contextmenuhint+'"></div>\n                \t\t\t\t\t\t\t\t\t</div>';h=$(h+"</div></div>");h.on("click",".moveAndComeIn-item",function(a){$(e).hide();a=d.ChannelStore.getChannel(a.currentTarget.id);void 0!=a&&d.checkPermsToConnect(d.currentUserId,a)&&(d.adminActions.setChannel(d.serverId,b.id,a.id),d.connectChannel(a))})}BDFDB.appendSubMenu(a.currentTarget,h)};
CoolAdmin.prototype.showTribunalSettings=function(b,a){var e=this,d=this.GuildStore.getGuild(this.serverId),c=d?this.MemberPerms.getMember(d.id,b.id):null,f;switch(a){case "mute":var h="\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043c\u0443\u0442\u0430";var k="\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043c\u0443\u0442\u0430 ";var l="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f \u043c\u0443\u0442\u0430";
var m="\u0417\u0430\u043c\u0443\u0442\u0438\u0442\u044c";break;case "warn":h="\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u0430\u0440\u043d\u0430";k="\u041f\u0440\u0438\u0447\u0438\u043d\u0430 \u0432\u0430\u0440\u043d\u0430 ";l="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u0432\u0430\u0440\u043d\u0430";m="\u0417\u0430\u0432\u0430\u0440\u043d\u0438\u0442\u044c";break;case "ban":h="\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0431\u0430\u043d\u0430",
k="\u041f\u0440\u0438\u0447\u0438\u043d\u0430 <b style='color: rgb(255, 0, 0)'>\u0411\u0410\u041d\u0410</b> ",l="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u0431\u0430\u043d\u0430",m="\u0417\u0430\u0431\u0430\u043d\u0438\u0442\u044c"}var g=$(this.userTribunalSettingsMarkup.replace("REPLACE_modal_title",h).replace("REPLACE_modal_reason_title",k+(c.nick?c.nick:b.username)+"?").replace("REPLACE_modal_warning",l).replace("REPLACE_modal_button_name",m));g.find(".guildName-1u0hy7").text(c.nick?
c.nick:b.username);"mute"===a&&(g.find("#input-reason").val("5"),g.find("#warning").css("visibility","hidden"),g.find("button.btn-save").prop("disabled",!1));BDFDB.appendModal(g);g.on("input change keyup paste","#input-reason",function(a){g.find("#input-reason").val()?0<g.find("#input-reason").val().trim().length?(g.find("button.btn-save").prop("disabled",!1),g.find("#warning").css("visibility","hidden")):(g.find("button.btn-save").prop("disabled",!0),g.find("#warning").css("visibility","visible")):
(g.find("button.btn-save").prop("disabled",!0),g.find("#warning").css("visibility","visible"));13===a.keyCode&&g.find("button.btn-save").click()}).on("click","button.btn-save",function(b){b.preventDefault();f=null;g.find("#input-reason").val()&&0<g.find("#input-reason").val().trim().length&&(f=g.find("#input-reason").val().trim(),b=BDFDB.getData("debag",e,"settings")?"?":"!",e.sendMessageInGeneral(b+a+" <@!"+c.userId+"> "+f))});g.find("#input-reason").focus()};
CoolAdmin.prototype.sendMessageInGeneral=function(b){this.MessageActions.sendMessage(this.channelGeneralId,{content:b})};
CoolAdmin.prototype.getSettingsPanel=function(){var b=this;if(this.started&&"object"===typeof BDFDB){var a=BDFDB.getAllData(this,"settings");console.log(a);var e='<div class="'+this.getName()+'-settings DevilBro-settings"><div class="'+(BDFDB.disCNS.titledefault+BDFDB.disCNS.headertitle+BDFDB.disCNS.size18+BDFDB.disCNS.height24+BDFDB.disCNS.weightnormal+BDFDB.disCN.marginbottom8)+'">'+this.getName()+'</div><div class="DevilBro-settings-inner">',d;for(d in this.markup.category){e+='<div class="margin-bottom-40"><h5 class="'+
(BDFDB.disCNS.h5+BDFDB.disCNS.title+BDFDB.disCNS.size12+BDFDB.disCNS.height16+BDFDB.disCNS.weightsemibold+BDFDB.disCNS.h5defaultmargin+BDFDB.disCN.marginbottom8)+'">'+this.markup.category[d].name+"</h5>";for(var c in this.markup.category[d].settings)if(!this.defaults.settings[c].admin||this.isAdmin)e+='<div class="'+(BDFDB.disCNS.flex+BDFDB.disCNS.flex2+BDFDB.disCNS.horizontal+BDFDB.disCNS.horizontal2+BDFDB.disCNS.directionrow+BDFDB.disCNS.justifystart+BDFDB.disCNS.aligncenter+BDFDB.disCNS.nowrap+
BDFDB.disCN.marginbottom8)+'" style="flex: 1 1 auto;">\n                                        <input type="text" id="'+c+'" class="'+(BDFDB.disCNS.inputdefault+BDFDB.disCNS.input+BDFDB.disCN.size16)+'" id="input-funcname" value="'+(a[c].name?a[c].name:this.defaults.settings[c].description)+'">\n                                        <div class="'+(BDFDB.disCNS.flexchild+BDFDB.disCNS.switchenabled+BDFDB.disCNS["switch"]+BDFDB.disCNS.switchvalue+BDFDB.disCNS.switchsizedefault+BDFDB.disCNS.switchsize+
BDFDB.disCN.switchthemedefault)+'" style="flex: 0 0 auto;">\n                                        <input type="checkbox" value="'+c+'" class="'+(BDFDB.disCNS.switchinnerenabled+BDFDB.disCN.switchinner)+'"'+(a[c]?" checked":"")+"></div></div>";e+="</div>"}var f=$(e+"</div></div></div>")[0];BDFDB.initElements(f);$(f).on("click",BDFDB.dotCN.switchenabled,function(){b.updateSettings(f)}).on("keyup",BDFDB.dotCN.inputdefault,function(){b.updateSettings(f)});return f}};
CoolAdmin.prototype.updateSettings=function(b){for(var a={},e=$jscomp.makeIterator(b.querySelectorAll(BDFDB.dotCN.switchinner)),d=e.next();!d.done;d=e.next())d=d.value,a[d.value]={value:d.checked};b=$jscomp.makeIterator(b.querySelectorAll(BDFDB.dotCN.inputdefault));for(d=b.next();!d.done;d=b.next())e=d.value,0<e.value.trim().length&&20>=e.value.trim().length&&(a[e.id]={name:e.value.trim()});BDFDB.saveAllData(a,this,"settings")};