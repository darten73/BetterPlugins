//META{"name":"ShowHiddenChannels"}*//
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,d,f){b!=Array.prototype&&b!=Object.prototype&&(b[d]=f.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var b=0;return function(d){return $jscomp.SYMBOL_PREFIX+(d||"")+b++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var b=$jscomp.global.Symbol.iterator;b||(b=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&$jscomp.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(b){var d=0;return $jscomp.iteratorPrototype(function(){return d<b.length?{done:!1,value:b[d++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(b){$jscomp.initSymbolIterator();b={next:b};b[$jscomp.global.Symbol.iterator]=function(){return this};return b};$jscomp.makeIterator=function(b){$jscomp.initSymbolIterator();var d=b[Symbol.iterator];return d?d.call(b):$jscomp.arrayIterator(b)};
var ShowHiddenChannels=function(){this.delay=6E4;this.updateHiddenCategory=!1;this.categoryMarkup='<div class="container-hidden">\n\t\t\t\t<div class="containerDefault-1bbItS">\n\t\t\t\t\t<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO wrapperDefault-1Dl4SS cursorPointer-3oKATS" style="flex: 1 1 auto;">\n\t\t\t\t\t\t<svg class="iconDefault-xzclSQ iconTransition-VhWJ85" width="12" height="12" viewBox="0 0 24 24">\n\t\t\t\t\t\t\t<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7 10L12 15 17 10"></path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t<div class="nameDefault-Lnjrwm colorTransition-2iZaYd overflowEllipsis-2ynGQq" style="flex: 1 1 auto;">hidden</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';this.channelTextMarkup=
    '<div class="containerDefault-7RImuF">\n\t\t\t\t<div class="wrapperDefaultText-3M3F1R wrapper-fDmxzK">\n\t\t\t\t\t<div class="contentDefaultText-2elG3R content-2mSKOj">\n\t\t\t\t\t\t<div class="marginReset-1YolDJ" style="flex: 0 0 auto;">\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="colorDefaultText-2v6rRX icon-3tVJnl">\n\t\t\t\t\t\t\t\t<path class="background-1BDvMy" fill="currentColor" d="M7.92,4.66666667 L6.50666667,4.66666667 L6.98,2 L5.64666667,2 L5.17333333,4.66666667 L2.50666667,4.66666667 L2.27333333,6 L4.94,6 L4.23333333,10 L1.56666667,10 L1.33333333,11.3333333 L4,11.3333333 L3.52666667,14 L4.86,14 L5.33333333,11.3333333 L9.33333333,11.3333333 L8.86,14 L10.1933333,14 L10.6666667,11.3333333 L13.3333333,11.3333333 L13.5666667,10 L12.2333333,10 L8.74333333,10 L5.56666667,10 L6.27333333,6 L7.92,6 L7.92,4.66666667 Z"></path>\n\t\t\t\t\t\t\t\t<path class="foreground-2GKNZG" fill="currentColor" fill-rule="nonzero" d="M15.1,3.2 L15.1,2 C15.1,0.88 14.05,0 13,0 C11.95,0 10.9,0.88 10.9,2 L10.9,3.2 C10.45,3.2 10,3.68 10,4.16 L10,6.96 C10,7.52 10.45,8 10.9,8 L15.025,8 C15.55,8 16,7.52 16,7.04 L16,4.24 C16,3.68 15.55,3.2 15.1,3.2 Z M14,3 L12,3 L12,1.92857143 C12,1.35714286 12.4666667,1 13,1 C13.5333333,1 14,1.35714286 14,1.92857143 L14,3 Z"></path>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="nameDefaultText-QoumjC name-2SL4ev overflowEllipsis-3Rxxjf" style="flex: 1 1 auto;"></div>\n\t\t\t\t\t\t<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginReset-1YolDJ" style="flex: 0 1 auto;"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';
    this.channelVoiceMarkup='<div id="REPLACE_ID" class="voiceChannel containerDefault-7RImuF">\n\t\t\t\t<div class="wrapperDefaultVoice-2ud9mj wrapper-fDmxzK">\n\t\t\t\t\t<div class="contentDefaultVoice-311dxZ content-2mSKOj">\n\t\t\t\t\t\t<div class="marginReset-1YolDJ" style="flex: 0 0 auto;">\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="colorDefaultVoice-1x4dEl icon-3tVJnl">\n\t\t\t\t\t\t\t\t<path class="background-2nyTH_" fill="currentColor" d="M13.6005009,10 C12.8887426,11.8438372 11.2906136,13.2480521 9.33333333,13.6933333 L9.33333333,12.3133333 C10.5512947,11.950895 11.5614504,11.1062412 12.1398042,10 L13.6005009,10 Z M10.7736513,8.99497564 C10.4978663,9.6613459 9.98676114,10.2040442 9.33333333,10.5133333 L9.33333333,8.99497564 L10.7736513,8.99497564 Z M2,5.84666667 L4.66666667,5.84666667 L8,2.51333333 L8,13.18 L4.66666667,9.84666667 L2,9.84666667 L2,5.84666667 Z"></path>\n\t\t\t\t\t\t\t\t<path class="foreground-2zy1hc" fill="currentColor" fill-rule="nonzero" d="M15.1,3.2 L15.1,2 C15.1,0.88 14.05,0 13,0 C11.95,0 10.9,0.88 10.9,2 L10.9,3.2 C10.45,3.2 10,3.68 10,4.16 L10,6.96 C10,7.52 10.45,8 10.9,8 L15.025,8 C15.55,8 16,7.52 16,7.04 L16,4.24 C16,3.68 15.55,3.2 15.1,3.2 Z M14,3 L12,3 L12,1.92857143 C12,1.35714286 12.4666667,1 13,1 C13.5333333,1 14,1.35714286 14,1.92857143 L14,3 Z"></path>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="nameDefaultVoice-1swZoh name-2SL4ev overflowEllipsis-3Rxxjf" style="flex: 1 1 auto;"></div>\n\t\t\t\t\t\t<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginReset-1YolDJ" style="flex: 0 1 auto;"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="putHere flex-lFgbSz flex-3B1Tl4 vertical-3X17r5 flex-3B1Tl4 directionColumn-2h-LPR justifyStart-2yIZo0 alignStretch-1hwxMa noWrap-v6g9vO listDefault-3i7eWQ" style="flex: 1 1 auto;">\n\n                    </div>\n\t\t\t\t</div>\n\t\t\t</div>';
    this.channelCategoryMarkup='<div class="containerDefault-7RImuF">\n\t\t\t\t<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO cursorPointer-3oKATS wrapperCollapsed-18mf-c content-2mSKOj" style="flex: 1 1 auto;">\n\t\t\t\t\t<svg class="iconTransition-VhWJ85 closed-2Hef-I iconCollapsed-1INdMX" width="12" height="12" viewBox="0 0 24 24">\n\t\t\t\t\t\t<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7 10L12 15 17 10"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<div class="colorTransition-2iZaYd overflowEllipsis-2ynGQq nameCollapsed-3_ChMu" style="flex: 1 1 auto;"></div>\n\t\t\t\t</div>\n\t\t\t</div>';
    this.defaults={settings:{showUsers:{value:!0,description:"Show users hidden in Voicechannels:"},showText:{value:!0,description:"Show hidden Textchannels:"},showVoice:{value:!0,description:"Show hidden Voicechannels:"},showCategory:{value:!1,description:"Show hidden Categories:"},showAllowedRoles:{value:!0,description:"Show allowed Roles on hover:"},showOverWrittenRoles:{value:!0,description:"Include overwritten Roles in allowed Roles:"},showDeniedRoles:{value:!0,description:"Show denied Roles on hover:"},
            showDeniedUsers:{value:!0,description:"Show denied Users on hover:"},showForNormal:{value:!1,description:"Also show Roles/Users for allowed channels:"},showTopic:{value:!1,description:"Show the topic of hidden channels:"}}}};ShowHiddenChannels.prototype.getName=function(){return"ShowHiddenChannels"};ShowHiddenChannels.prototype.getDescription=function(){return"Displays channels that are hidden from you by role restrictions. (Upgraded by Dario)"};ShowHiddenChannels.prototype.getVersion=function(){return"2.2.7"};
ShowHiddenChannels.prototype.getAuthor=function(){return"DevilBro (Upgraded by Dario)"};
ShowHiddenChannels.prototype.getSettingsPanel=function(){var b=this;if(this.started&&"object"===typeof BDfunctionsDario){var d=BDfunctionsDario.getAllData(this,"settings"),f='<div class="'+this.getName()+'-settings Dario-settings"><div class="titleDefault-1CWM9y title-3i-5G_ size18-ZM4Qv- height24-2pMcnc weightNormal-3gw0Lm marginBottom8-1mABJ4">'+this.getName()+'</div><div class="Dario-settings-inner">',a;for(a in d)f+='<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom8-1mABJ4" style="flex: 1 1 auto;"><h3 class="titleDefault-1CWM9y title-3i-5G_ marginReset-3hwONl weightMedium-13x9Y8 size16-3IvaX_ height24-2pMcnc flexChild-1KGW5q" style="flex: 1 1 auto;">'+
    this.defaults.settings[a].description+'</h3><div class="flexChild-1KGW5q switchEnabled-3CPlLV switch-3lyafC value-kmHGfs sizeDefault-rZbSBU size-yI1KRe themeDefault-3M0dJU" style="flex: 0 0 auto;"><input type="checkbox" value="'+a+'" class="checkboxEnabled-4QfryV checkbox-1KYsPm"'+(d[a]?" checked":"")+"></div></div>";var e=$(f+"</div></div>")[0];BDfunctionsDario.initElements(e);$(e).on("click",".checkbox-1KYsPm",function(){b.updateSettings(e)});return e}};ShowHiddenChannels.prototype.load=function(){};
ShowHiddenChannels.prototype.start=function(){var b=this,d=null;if("object"!==typeof BDfunctionsDario||BDfunctionsDario.isLibraryOutdated())"object"===typeof BDfunctionsDario&&(BDfunctionsDario=""),(d=document.querySelector('head script[src="https://raw.githubusercontent.com/darten73/BetterPlugins/master/BDfunctionsDario.js"]'))&&d.remove(),d=document.createElement("script"),d.setAttribute("type","text/javascript"),d.setAttribute("src","https://raw.githubusercontent.com/darten73/BetterPlugins/master/BDfunctionsDario.js"),
    document.head.appendChild(d);this.startTimeout=setTimeout(function(){b.initialize()},3E4);"object"===typeof BDfunctionsDario?this.initialize():d.addEventListener("load",function(){b.initialize()})};
ShowHiddenChannels.prototype.initialize=function(){var b=this;if("object"===typeof BDfunctionsDario){BDfunctionsDario.loadMessage(this);this.UserStore=BDfunctionsDario.WebModules.findByProperties(["getUsers","getUser"]);this.MemberStore=BDfunctionsDario.WebModules.findByProperties(["getMember","getMembers"]);this.ChannelStore=BDfunctionsDario.WebModules.findByProperties(["getChannels","getDMFromUserId"]);this.GuildChannels=BDfunctionsDario.WebModules.findByProperties(["getChannels","getDefaultChannel"]);
    this.Permissions=BDfunctionsDario.WebModules.findByProperties(["Permissions","ActivityTypes"]).Permissions;this.UsersVoiceStore=BDfunctionsDario.WebModules.findByProperties(["getVoiceStates"]);var d=null;d=new MutationObserver(function(a,d){a.forEach(function(a,d){a.addedNodes&&a.addedNodes.forEach(function(a){a&&a.className&&0<a.className.length&&-1<a.className.indexOf("container-")&&-1==a.className.indexOf("hidden")&&b.appendToChannelList(document.querySelector(".container-hidden"))})})});BDfunctionsDario.addObserver(this,
        ".channels-3g2vYe",{name:"channelListObserver",instance:d},{childList:!0,subtree:!0});d=new MutationObserver(function(a,d){a.forEach(function(a,d){a.removedNodes&&a.removedNodes.forEach(function(a){b.updateHiddenCategory&&a&&a.tagName&&"user-settings"==a.getAttribute("layer-id")&&(document.querySelectorAll(".container-hidden").forEach(function(a){a.remove()}),b.displayHiddenChannels(),b.updateHiddenCategory=!1)})})});BDfunctionsDario.addObserver(this,".layers-20RVFW",{name:"settingsWindowObserver",
        instance:d},{childList:!0});this.displayHiddenChannels();this.i=!1;var f=this;this.loop=setInterval(function(){$(".container-hidden").remove();f.displayHiddenChannels();console.log("loop"+new Date)},this.delay)}else console.error(this.getName()+": Fatal Error: Could not load BD functions!")};ShowHiddenChannels.prototype.stop=function(){"object"===typeof BDfunctionsDario&&($(".container-hidden").remove(),clearInterval(this.loop),BDfunctionsDario.unloadMessage(this))};
ShowHiddenChannels.prototype.onSwitch=function(){"object"===typeof BDfunctionsDario&&this.displayHiddenChannels()};ShowHiddenChannels.prototype.updateSettings=function(b){var d={};b=$jscomp.makeIterator(b.querySelectorAll(".checkbox-1KYsPm"));for(var f=b.next();!f.done;f=b.next())f=f.value,d[f.value]=f.checked;BDfunctionsDario.saveAllData(d,this,"settings");this.updateHiddenCategory=!0};
ShowHiddenChannels.prototype.displayHiddenChannels=function(){var b=this,d=BDfunctionsDario.getSelectedServer();if(d){var f=d.id;if(!document.querySelector(".container-hidden.server"+f)){$(".container-hidden").remove();var a={text:0,voice:2,category:4},e=this.ChannelStore.getChannels(),r=this.GuildChannels.getChannels(f),k={};for(g in a)k[a[g]]=[];for(var l in e){var g=e[l];if(g.guild_id==f){var m=!0;if(g.type==a.category)for(var v in a)for(var h=$jscomp.makeIterator(r[a[v]]),n=h.next();!n.done;n=
    h.next()){if(n=n.value,!g.id||n.channel.parent_id==g.id){m=!1;break}}else for(h=$jscomp.makeIterator(r[g.type]),n=h.next();!n.done;n=h.next())if(n.value.channel.id==g.id){m=!1;break}m&&k[g.type].push(g)}}e=BDfunctionsDario.getAllData(this,"settings");r=0;for(var c in a){if(!e.showText&&"text"==c||!e.showVoice&&"voice"==c||!e.showCategory&&"category"==c)k[a[c]]=[];BDfunctionsDario.sortArrayByKey(k[a[c]],"name");r+=k[a[c]].length}k.count=r;if(0<r){var q=$(this.categoryMarkup)[0],t=q.querySelector(".cursorPointer-3oKATS"),
    p=q.querySelector(".iconTransition-VhWJ85"),u=q.querySelector(".colorTransition-2iZaYd");$(q).addClass("server"+f).on("click",".containerDefault-1bbItS > .flex-lFgbSz",function(){t.classList.toggle("wrapperHovered-1KDCyZ");t.classList.toggle("wrapperHoveredCollapsed-25KVVp");p.classList.toggle("iconHovered-3PRzOR");p.classList.toggle("iconHoveredCollapsed-jNYgOD");p.classList.toggle("closed-2Hef-I");u.classList.toggle("nameHoveredCollapsed-2c-EHI");u.classList.toggle("nameHovered-1YFSWq");$(q).find(".containerDefault-7RImuF").toggle(!p.classList.contains("closed-2Hef-I"));
    BDfunctionsDario.saveData(f,!p.classList.contains("closed-2Hef-I"),b,"categorystatus")}).on("mouseenter mouseleave",".containerDefault-1bbItS > .flex-lFgbSz",function(){q.querySelector(".closed-2Hef-I")?(t.classList.toggle("wrapperCollapsed-18mf-c"),t.classList.toggle("wrapperHoveredCollapsed-25KVVp"),p.classList.toggle("iconCollapsed-1INdMX"),p.classList.toggle("iconHoveredCollapsed-jNYgOD"),u.classList.toggle("nameCollapsed-3_ChMu"),u.classList.toggle("nameHoveredCollapsed-2c-EHI")):(t.classList.toggle("wrapperDefault-1Dl4SS"),
    t.classList.toggle("wrapperHovered-1KDCyZ"),p.classList.toggle("iconDefault-xzclSQ"),p.classList.toggle("iconHovered-3PRzOR"),u.classList.toggle("nameDefault-Lnjrwm"),u.classList.toggle("nameHovered-1YFSWq"))});c={};e=$jscomp.makeIterator(k[0]);for(a=e.next();!a.done;c={channelwrapper:c.channelwrapper,channelicon:c.channelicon,channelsvg:c.channelsvg,channelname:c.channelname,hiddenChannel:c.hiddenChannel},a=e.next())c.hiddenChannel=a.value,a=$(this.channelTextMarkup)[0],c.channelwrapper=a.querySelector(".wrapper-fDmxzK"),
    c.channelicon=a.querySelector(".content-2mSKOj"),c.channelsvg=a.querySelector(".icon-3tVJnl"),c.channelname=a.querySelector(".name-2SL4ev"),c.channelname.innerText=c.hiddenChannel.name,$(a).on("mouseenter mouseleave",".wrapper-fDmxzK",function(a){return function(c){a.channelwrapper.classList.toggle("wrapperDefaultText-3M3F1R");a.channelwrapper.classList.toggle("wrapperHoveredText-1PA_Uk");a.channelicon.classList.toggle("contentDefaultText-2elG3R");a.channelicon.classList.toggle("contentHoveredText-2HYGIY");
    a.channelsvg.classList.toggle("colorDefaultText-2v6rRX");a.channelsvg.classList.toggle("colorHoveredText-1CsxK1");a.channelname.classList.toggle("nameDefaultText-QoumjC");a.channelname.classList.toggle("nameHoveredText-2FFqiz");b.showAccessRoles(d,a.hiddenChannel,c,!1)}}(c)).on("click",function(a){return function(){BDfunctionsDario.showToast("You can not enter the hidden channel "+a.hiddenChannel.name+".",{type:"error"})}}(c)).appendTo(q);c={};e=$jscomp.makeIterator(k[2]);for(a=e.next();!a.done;c=
    {channel$15:c.channel$15,channelwrapper$16:c.channelwrapper$16,channelicon$17:c.channelicon$17,channelsvg$18:c.channelsvg$18,channelname$19:c.channelname$19,hiddenChannel$14:c.hiddenChannel$14},a=e.next())c.hiddenChannel$14=a.value,c.channel$15=$(this.channelVoiceMarkup.replace("REPLACE_ID","cid"+c.hiddenChannel$14.id))[0],c.channelwrapper$16=c.channel$15.querySelector(".wrapper-fDmxzK"),c.channelicon$17=c.channel$15.querySelector(".content-2mSKOj"),c.channelsvg$18=c.channel$15.querySelector(".icon-3tVJnl"),
    c.channelname$19=c.channel$15.querySelector(".name-2SL4ev"),this.UsersVoiceStore.getVoiceStatesForChannel(f,c.hiddenChannel$14.id).forEach(function(a){return function(d){var c=b.UserStore.getUser(d.userId);d=document.createRange().createContextualFragment('\n                            <div class="userDefault-2_cnT0" style="padding-bottom: 0px;padding-left: 28px;">\n                                <div class="avatarContainer-303pFz margin-reset" style="flex: 0 0 auto;">\n                                    <div class="avatarDefault-3jtQoc" style="background-image: url(&quot;https://cdn.discordapp.com/avatars/'+
    d.userId+"/"+c.avatar+'.webp?size=128&quot;);"></div>\n                                </div>\n                                <div class="nameDefault-1I0lx8 margin-reset" style="flex: 1 1 auto;">'+c.username+"</div>\n                                </div>");a.channel$15.insertBefore(d,a.channel$15.lastChild)}}(c)),c.channelname$19.innerText=c.hiddenChannel$14.name,$(c.channel$15).on("mouseenter mouseleave",".wrapper-fDmxzK",function(a){return function(c){a.channelwrapper$16.classList.toggle("wrapperDefaultVoice-2ud9mj");
    a.channelwrapper$16.classList.toggle("wrapperHoveredVoice-3tbfNN");a.channelicon$17.classList.toggle("contentDefaultVoice-311dxZ");a.channelicon$17.classList.toggle("contentHoveredVoice-3qGNKh");a.channelsvg$18.classList.toggle("colorDefaultVoice-1x4dEl");a.channelsvg$18.classList.toggle("colorHoveredVoice-1P3kui");a.channelname$19.classList.toggle("nameDefaultVoice-1swZoh");a.channelname$19.classList.toggle("nameHoveredVoice-TIoHRJ");b.showAccessRoles(d,a.hiddenChannel$14,c,!1)}}(c)).on("click",
    function(a){return function(){BDfunctionsDario.showToast("You can not enter the hidden channel "+a.hiddenChannel$14.name+".",{type:"error"})}}(c)).appendTo(q);c={};k=$jscomp.makeIterator(k[4]);for(a=k.next();!a.done;c={channelwrapper$22:c.channelwrapper$22,channelsvg$23:c.channelsvg$23,channelname$24:c.channelname$24,hiddenChannel$20:c.hiddenChannel$20},a=k.next())c.hiddenChannel$20=a.value,a=$(this.channelCategoryMarkup)[0],c.channelwrapper$22=a.querySelector(".wrapperCollapsed-18mf-c"),c.channelsvg$23=
    a.querySelector(".iconCollapsed-1INdMX"),c.channelname$24=a.querySelector(".nameCollapsed-3_ChMu"),c.channelname$24.innerText=c.hiddenChannel$20.name,$(a).on("mouseenter mouseleave",".flex-lFgbSz",function(a){return function(c){a.channelwrapper$22.classList.toggle("wrapperCollapsed-18mf-c");a.channelwrapper$22.classList.toggle("wrapperHoveredCollapsed-25KVVp");a.channelsvg$23.classList.toggle("iconCollapsed-1INdMX");a.channelsvg$23.classList.toggle("iconHoveredCollapsed-jNYgOD");a.channelname$24.classList.toggle("nameCollapsed-3_ChMu");
    a.channelname$24.classList.toggle("nameHoveredCollapsed-2c-EHI");b.showAccessRoles(d,a.hiddenChannel$20,c,!1)}}(c)).on("click",function(a){return function(){BDfunctionsDario.showToast("You can not enter the hidden channel "+a.hiddenChannel$20.name+".",{type:"error"})}}(c)).appendTo(q);k=BDfunctionsDario.loadData(f,this,"categorystatus");null===k||k||(t.classList.toggle("wrapperDefault-1Dl4SS"),t.classList.toggle("wrapperCollapsed-18mf-c"),p.classList.toggle("iconDefault-xzclSQ"),p.classList.toggle("iconCollapsed-1INdMX"),
    p.classList.toggle("closed-2Hef-I"),u.classList.toggle("nameDefault-Lnjrwm"),u.classList.toggle("nameCollapsed-3_ChMu"),$(q).find(".containerDefault-7RImuF").hide());this.appendToChannelList(q)}}}};
ShowHiddenChannels.prototype.showAccessRoles=function(b,d,f,a){if("mouseenter"==f.type){var e=BDfunctionsDario.getAllData(this,"settings");if(e.showAllowedRoles||e.showDeniedRoles){var r=this.MemberStore.getMember(b.id,BDfunctionsDario.myData.id),k=[],l=[],g=[],m=[],v=!1,h;for(h in d.permissionOverwrites)if(e.showAllowedRoles&&"role"==d.permissionOverwrites[h].type&&"@everyone"!=b.roles[h].name&&(d.permissionOverwrites[h].allow|this.Permissions.VIEW_CHANNEL)==d.permissionOverwrites[h].allow&&(r.roles.includes(h)&&
    !a?e.showOverWrittenRoles&&l.push(b.roles[h]):k.push(b.roles[h])),e.showDeniedRoles&&"role"==d.permissionOverwrites[h].type&&(d.permissionOverwrites[h].deny|this.Permissions.VIEW_CHANNEL)==d.permissionOverwrites[h].deny)g.push(b.roles[h]),"@everyone"==b.roles[h].name&&(v=!0);else if(e.showDeniedUsers&&"member"==d.permissionOverwrites[h].type&&(d.permissionOverwrites[h].deny|this.Permissions.VIEW_CHANNEL)==d.permissionOverwrites[h].deny){var n=this.UserStore.getUser(h),c=this.MemberStore.getMember(b.id,
    h);n&&c&&m.push(Object.assign({name:n.username},c))}e.showAllowedRoles&&a&&!v&&k.push({name:"@everyone"});b="";e.showTopic&&!a&&d.topic&&(b+='<div class="marginBottom4-_yArcI">Topic:</div><div class="flex-3B1Tl4 wrap-1da0e3"><div class="role-3rahR_ flex-3B1Tl4 alignCenter-3VxkQP size12-1IGJl9 weightMedium-13x9Y8 SHC-topic" style="border-color: rgba(255, 255, 255, 0.6); height: unset !important; padding-top: 5px; padding-bottom: 5px; max-width: '+window.outerWidth/3+'px">'+d.topic+"</div></div>");
    if(0<k.length||0<l.length){b+='<div class="marginBottom4-_yArcI">Allowed Roles:</div><div class="flex-3B1Tl4 wrap-1da0e3">';d=$jscomp.makeIterator(k);for(a=d.next();!a.done;a=d.next())a=a.value,e=a.colorString?BDfunctionsDario.color2COMP(a.colorString):[255,255,255],b+='<div class="role-3rahR_ flex-3B1Tl4 alignCenter-3VxkQP size12-1IGJl9 weightMedium-13x9Y8 SHC-allowedrole" style="border-color: rgba('+e[0]+", "+e[1]+", "+e[2]+', 0.6);"><div class="roleCircle-3-vPZq" style="background-color: rgb('+
        e[0]+", "+e[1]+", "+e[2]+');"></div><div class="roleName-DUQZ9m">'+BDfunctionsDario.encodeToHTML(a.name)+"</div></div>";l=$jscomp.makeIterator(l);for(a=l.next();!a.done;a=l.next())d=a.value,a=d.colorString?BDfunctionsDario.color2COMP(d.colorString):[255,255,255],b+='<div class="role-3rahR_ flex-3B1Tl4 alignCenter-3VxkQP size12-1IGJl9 weightMedium-13x9Y8 SHC-overwrittenrole" style="border-color: rgba('+a[0]+", "+a[1]+", "+a[2]+', 0.6);"><div class="roleCircle-3-vPZq" style="background-color: rgb('+
        a[0]+", "+a[1]+", "+a[2]+');"></div><div class="roleName-DUQZ9m" style="text-decoration: line-through !important;">'+BDfunctionsDario.encodeToHTML(d.name)+"</div></div>";b+="</div>"}if(0<g.length){b+='<div class="marginBottom4-_yArcI">Denied Roles:</div><div class="flex-3B1Tl4 wrap-1da0e3">';g=$jscomp.makeIterator(g);for(a=g.next();!a.done;a=g.next())l=a.value,d=l.colorString?BDfunctionsDario.color2COMP(l.colorString):[255,255,255],b+='<div class="role-3rahR_ flex-3B1Tl4 alignCenter-3VxkQP size12-1IGJl9 weightMedium-13x9Y8 SHC-deniedrole" style="border-color: rgba('+
        d[0]+", "+d[1]+", "+d[2]+', 0.6);"><div class="roleCircle-3-vPZq" style="background-color: rgb('+d[0]+", "+d[1]+", "+d[2]+');"></div><div class="roleName-DUQZ9m">'+BDfunctionsDario.encodeToHTML(l.name)+"</div></div>";b+="</div>"}if(0<m.length){b+='<div class="marginBottom4-_yArcI">Denied Users:</div><div class="flex-3B1Tl4 wrap-1da0e3">';m=$jscomp.makeIterator(m);for(g=m.next();!g.done;g=m.next())g=g.value,l=g.colorString?BDfunctionsDario.color2COMP(g.colorString):[255,255,255],b+='<div class="role-3rahR_ flex-3B1Tl4 alignCenter-3VxkQP size12-1IGJl9 weightMedium-13x9Y8 SHC-denieduser" style="border-color: rgba('+
        l[0]+", "+l[1]+", "+l[2]+', 0.6);"><div class="roleCircle-3-vPZq" style="background-color: rgb('+l[0]+", "+l[1]+", "+l[2]+');"></div><div class="roleName-DUQZ9m">'+BDfunctionsDario.encodeToHTML(g.nick?g.nick:g.name)+"</div></div>";b+="</div>"}b&&(m=BDfunctionsDario.createTooltip(b,f.currentTarget,{type:"right",selector:"showhiddenchannels-tooltip",html:!0,css:"\n\t\t\t\t.showhiddenchannels-tooltip {\n\t\t\t\t\tmax-width: "+window.outerWidth/2+"px !important;\n\t\t\t\t}"}),m.style.top=m.style.top.replace("px",
        "")-$(f.currentTarget).css("padding-bottom").replace("px","")/2+$(f.currentTarget).css("padding-top").replace("px","")/2+"px")}}};
ShowHiddenChannels.prototype.appendToChannelList=function(b){var d=this,f=document.querySelector(".channels-3g2vYe .scroller-fzNley.scroller-NXV0-d");if(f&&($(f).off("mouseenter."+this.getName()),b&&f.insertBefore(b,f.lastChild),BDfunctionsDario.getData("showForNormal",this,"settings"))){var a=BDfunctionsDario.getSelectedServer();if(a)$(f).on("mouseenter."+this.getName(),".containerDefault-7RImuF, .containerDefault-1bbItS",function(b){var e=BDfunctionsDario.getKeyInformation({node:b.currentTarget,
    key:"channel"});e&&d.showAccessRoles(a,e,b,!0);console.log(e)})}};