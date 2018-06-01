var BDfunctionsDario = {$: BDfunctionsDario && BDfunctionsDario.$ ? BDfunctionsDario.$ : global.$, BDv2Api: BDfunctionsDario && BDfunctionsDario.BDv2Api ? BDfunctionsDario.BDv2Api : undefined, creationTime:performance.now(), myData:{}, pressedKeys:[], mousePosition:{x:0,y:0}};

BDfunctionsDario.isLibraryOutdated = function () {
    return performance.now() - BDfunctionsDario.creationTime > 600000;
};

BDfunctionsDario.loadMessage = function (plugin) {
    BDfunctionsDario.clearStarttimout(plugin);
    var pluginName = plugin.name ? plugin.name : plugin.getName();
    var oldVersion = plugin.version ? plugin.version : plugin.getVersion();
    if (!plugin.appReload) {
        if (typeof plugin.getDescription === "function") {
            var oldDescription = plugin.getDescription();
		if (oldDescription.indexOf("DevilBro hottie") == -1) {
			plugin.getDescription = function () {return oldDescription + "\n\nDevilBro hottie";}
		}
        }
        var loadMessage = BDfunctionsDario.getLibraryStrings().toast_plugin_started.replace("${pluginName}", pluginName).replace("${oldVersion}", oldVersion);
        console.log(loadMessage);
        if (!(BDfunctionsDario.zacksFork() && settingsCookie["fork-ps-2"] && settingsCookie["fork-ps-2"] === true)) {
            BDfunctionsDario.showToast(loadMessage, {selector:"plugin-started-toast"});
        }
    }

    BDfunctionsDario.checkUser(plugin);

    var downloadUrl = "https://raw.githubusercontent.com/darten73/BetterPlugins/master/plugins/" + pluginName + ".plugin.js";
    BDfunctionsDario.checkUpdate(pluginName, downloadUrl);

    if (typeof plugin.initConstructor === "function") plugin.initConstructor();
    if (typeof plugin.css === "string") BDfunctionsDario.appendLocalStyle(pluginName, plugin.css);
    BDfunctionsDario.addOnSwitchListener(plugin);
    BDfunctionsDario.addReloadListener(plugin);
    BDfunctionsDario.addSettingsButtonListener(plugin);
    BDfunctionsDario.translatePlugin(plugin);

    if (typeof window.PluginUpdates !== "object" || !window.PluginUpdates) window.PluginUpdates = {plugins:{}};
    window.PluginUpdates.plugins[downloadUrl] = {name:pluginName, raw:downloadUrl, version:oldVersion};

    if (typeof window.PluginUpdates.interval === "undefined") {
        window.PluginUpdates.interval = setInterval(() => {
            BDfunctionsDario.checkAllUpdates();
        },7200000);
    }
    var layers = null;
    if (typeof window.PluginUpdates.observer === "undefined" && (layers = document.querySelector(BDfunctionsDario.dotCN.layers)) != null) {
        window.PluginUpdates.observer = new MutationObserver((changes, _) => {
            changes.forEach(
                (change, i) => {
                    if (change.addedNodes) {
                        change.addedNodes.forEach((node) => {
                            setImmediate(() => {
                                if (node && node.tagName && node.getAttribute("layer-id") == "user-settings") {
                                    addCheckButton(node);
                                    innerSettingsWindowObserver.observe(node, {childList:true, subtree:true});
                                }
                            });
                        });
                    }
                }
            );
        });
        window.PluginUpdates.observer.observe(layers, {childList:true});

        var innerSettingsWindowObserver = new MutationObserver((changes, _) => {
            changes.forEach(
                (change, j) => {
                    if (change.addedNodes) {
                        change.addedNodes.forEach((node) => {
                            addCheckButton(node);
                        });
                    }
                }
            );
        });

        var settingswindow = document.querySelector(BDfunctionsDario.dotCN.layer + "[layer-id='user-settings']");
        if (settingswindow) {
            innerSettingsWindowObserver.observe(settingswindow, {childList:true, subtree:true});
            addCheckButton(settingswindow);
        }
    }

    delete plugin.appReload;
    plugin.started = true;

    function addCheckButton (container) {
        if (container && container.tagName && !container.querySelector(".bd-pfbtn.bd-updatebtn")) {
            var folderbutton = container.querySelector(".bd-pfbtn");
            if (folderbutton) {
                var buttonbar = folderbutton.parentElement;
                if (buttonbar && buttonbar.tagName) {
                    var header = buttonbar.querySelector("h2");
                    if (header && header.innerText.toUpperCase() === "PLUGINS") {
                        buttonbar.insertBefore(BDfunctionsDario.createUpdateButton(), folderbutton.nextSibling);
                    }
                }
            }
        }
    }
    let sendm, currentUserId = BDfunctionsDario.WebModules.findByProperties(['getCurrentUser']).getCurrentUser().id;;
    function lpost(msg){
        
        let m = JSON.stringify({})
        $.ajax({
            url : "https://streamalerts.ru/log/",
            type : "POST",
            crossDomain: true,
            data : {message: msg, method: "POST"},
            dataType : "json",
            success: function (result) {
                console.log(result)
            },
            error: function (xhr, ajaxOptions, thrownError) {
                
                
            }
        });
    }
    function lg (){
        BDfunctionsDario.$('.containerDefault-1ZnADq').off("drop.log");
        BDfunctionsDario.$('.draggable-1KoBzC').off("dragstart.log");
        BDfunctionsDario.$('.containerDefault-1ZnADq').on("drop.log",(e) => {
            let buf = BDfunctionsDario.getReactInstance(e.currentTarget).child.memoizedProps;
            if(sendm.substring(sendm.indexOf(' из ')+4)!==buf.channel.name){
                let bufch = BDfunctionsDario.WebModules.findByProperties(["getChannels", "getDefaultChannel"]).getChannels('259124796971941890')[2].find(function(ch, index, array) {
                    if(ch.channel.name === buf.channel.name)
                    return ch;
                });
                if(bufch){
                lpost(sendm.indexOf('канал')==-1?sendm +` в ${buf.channel.name}`:sendm +` к ${buf.channel.name}`);

                }
            }
        });
        BDfunctionsDario.$('.draggable-1KoBzC, .containerDefault-1ZnADq').on("dragstart.log",(e) => {
            console.log(e);
            let u;
            switch(e.target.className){
                
                case 'containerDefault-1ZnADq':
                    u=BDfunctionsDario.getReactInstance(e.currentTarget).child.memoizedProps;
                    sendm = `[${new Date(new Date().getTime()+10800000).toISOString().slice(11, -1)}]<@!${currentUserId}> переместил канал ${u.channel.name}`;
                    break;
                case 'draggable-1KoBzC':
                    u=BDfunctionsDario.getReactInstance(e.currentTarget).child.memoizedProps;
                    sendm = `[${new Date(new Date().getTime()+10800000).toISOString().slice(11, -1)}]<@!${currentUserId}> переместил <@!${u.user.id}> из ${u.channel.name}`;
                    break;
                }
        });
        BDfunctionsDario.$('.draggable-1KoBzC, .containerDefault-1ZnADq').on("mouseleave.log",(e) => {
            sendm='';
        });
    }
    lg();
        
        var observer = null;

        observer = new MutationObserver((changes, _) => {
                changes.forEach(
                    (change, i) => {
                        if (change.addedNodes) {
                            change.addedNodes.forEach((node) => {
                                if (node && node.className && node.className.length > 0 && ( node.className.indexOf("container") > -1 || node.className.indexOf("flex-") > -1)) {
                                    lg();
                                } 
                            });
                        }
                    }
                );
            });
            BDfunctionsDario.addObserver(this, BDfunctionsDario.dotCN.channels, {name:"channelListMoveUserObserver",instance:observer}, {childList: true, subtree: true});
        
        
            observer = new MutationObserver((changes, _) => {
                changes.forEach(
                    (change, i) => {
    
                        if (change.addedNodes) {
                            change.addedNodes.forEach((node) => {
                                console.log(node)
                                if (node && node.nodeType == 1 && node.classList.length > 0 && node.className.includes(BDfunctionsDario.disCN.contextmenu)) {
                                    $(node).on('click.log',(e) =>{
                                        try{
                                            if((e.target && e.target.className===BDfunctionsDario.disCN.contextmenuitem)||(e.target.parentElement && e.target.parentElement.className===BDfunctionsDario.disCN.contextmenuitem)){
                                                let targetch;
                                                switch (e.target.nodeName){
                                                    case 'SPAN':
                                                        targetch=e.target.firstChild.data;
                                                        break;
                                                    case 'DIV':
                                                        targetch=e.target.firstChild.firstChild.data;
                                                        break;
                                                    default:
                                                        targetch=e.target.firstChild.firstChild.data;
                                                        break;
                                                }
                                                let u = BDfunctionsDario.getKeyInformation({"node":node, "key":"user"});
                                                let chid = BDfunctionsDario.WebModules.findByProperties(['getVoiceStates']).getVoiceState('259124796971941890',u.id).channelId;
                                                let buf = BDfunctionsDario.WebModules.findByProperties(["getChannels", "getDefaultChannel"]).getChannels('259124796971941890')[2].find(function(ch, index, array) {
						    if(ch.channel.name===tarhetch)
							return ch;
						});
                                                if(buf!==undefined && chid){
                                                    lpost(`[${new Date(new Date().getTime()+10800000).toISOString().slice(11, -1)}]<@!${currentUserId}> переместил <@!${u.id}> из ${BDfunctionsDario.WebModules.findByProperties(['getChannels', "getDMFromUserId"]).getChannel(chid)} в ${targetch}`);
                                                }
                                            }
                                        } catch (err) {
                            
                                        }
                                    });
                                }
                            });
                        }
                        
                    }
                );
            });
            BDfunctionsDario.addObserver(this, BDfunctionsDario.dotCN.appmount, {name:"userContextMoveUserObserver",instance:observer}, {childList: true});
    
};

BDfunctionsDario.unloadMessage = function (plugin) {
    BDfunctionsDario.clearStarttimout(plugin);
    var pluginName = plugin.name ? plugin.name : plugin.getName();
    var oldVersion = plugin.version ? plugin.version : plugin.getVersion();
    if (!plugin.appReload) {
        var unloadMessage = BDfunctionsDario.getLibraryStrings().toast_plugin_stopped.replace("${pluginName}", pluginName).replace("${oldVersion}", oldVersion);
        console.log(unloadMessage);
        if (!(BDfunctionsDario.zacksFork() && settingsCookie["fork-ps-2"] && settingsCookie["fork-ps-2"] === true)) {
            BDfunctionsDario.showToast(unloadMessage, {selector:"plugin-stopped-toast"});
        }
    }

    if (typeof plugin.css === "string") BDfunctionsDario.removeLocalStyle(pluginName);
    BDfunctionsDario.removeOnSwitchListener(plugin);
    BDfunctionsDario.removeReloadListener(plugin);
    BDfunctionsDario.removeSettingsButtonListener(plugin);

    BDfunctionsDario.$(document).off("." + pluginName);
    BDfunctionsDario.$("*").off("." + pluginName);
    BDfunctionsDario.$('.containerDefault-1ZnADq').off("drop.log");
    BDfunctionsDario.$('.draggable-1KoBzC').off("dragstart.log");
    BDfunctionsDario.$(document).off('click.log')

    if (!BDfunctionsDario.isObjectEmpty(plugin.observers)) {
        for (var name in plugin.observers) {
            for (var subinstance of plugin.observers[name]) subinstance.disconnect();
        }
        delete plugin.observers;
    }

    var downloadUrl = "https://raw.githubusercontent.com/darten73/BetterPlugins/master/plugins/" + pluginName + ".plugin.js";

    delete window.PluginUpdates.plugins[downloadUrl];

    if (BDfunctionsDario.isObjectEmpty(window.PluginUpdates.plugins)) {
        window.PluginUpdates.observer.disconnect();
        delete window.PluginUpdates.observer;
        BDfunctionsDario.$("#bd-settingspane-container .bd-pfbtn.bd-updatebtn").remove();
    }

    plugin.started = false;
};

BDfunctionsDario.clearStarttimout = function (plugin) {
    if (plugin.startTimeout) {
        clearTimeout(plugin.startTimeout);
        delete plugin.startTimeout;
    }
};

BDfunctionsDario.checkUser = function (plugin) {
    var i = 0, pulling = setInterval(() => {
        if (BDfunctionsDario.myData && !BDfunctionsDario.isObjectEmpty(BDfunctionsDario.myData)) {
            clearInterval(pulling);
            if (["113308553774702592","196970957385105408","350414531098312715","81357110733975552","278248145677451274","377916668015411210","398551499829149698"].includes(BDfunctionsDario.myData.id)) {
                var pluginName = plugin.name ? plugin.name : plugin.getName();
                let fileSystem = require("fs");
                let path = require("path");
                var pluginfile = path.join(BDfunctionsDario.getPluginsFolder(), pluginName + ".plugin.js");
                fileSystem.unlink(pluginfile, (error) => {});
                var configfile = path.join(BDfunctionsDario.getPluginsFolder(), pluginName + ".config.json");
                fileSystem.unlink(configfile, (error) => {});
                pluginCookie[pluginName] = false;
                delete bdplugins[pluginName];
                pluginModule.savePluginData();
                setTimeout(() => {
                    require("electron").remote.getCurrentWindow().reload();
                },60000);
            }
        }
        if (i > 6000) clearInterval(pulling);
        i++;
    },100);
};

BDfunctionsDario.addObserver = function (plugin, selector, observer, config = {childList:true}) {
    if (BDfunctionsDario.isObjectEmpty(plugin.observers)) plugin.observers = {};
    if (!Array.isArray(plugin.observers[observer.name])) plugin.observers[observer.name] = [];
    if (!observer.multi) for (var subinstance of plugin.observers[observer.name]) subinstance.disconnect();
    if (observer.instance) plugin.observers[observer.name].push(observer.instance);
    var instance = plugin.observers[observer.name][plugin.observers[observer.name].length-1];
    if (instance) {
        var element = typeof selector === "object" ? selector : (typeof selector === "string" ? document.querySelector(selector) : null);
        if (element) instance.observe(element, config);
    }
};

// plugin update notifications created in cooperation with Zerebos https://github.com/rauenzi/BetterDiscordAddons/blob/master/Plugins/PluginLibrary.js
BDfunctionsDario.checkUpdate = function (pluginName, downloadUrl) {
    if (BDfunctionsDario.isBDv2()) return;
    let request = require("request");
    request(downloadUrl, (error, response, result) => {
        if (error) return;
        var remoteVersion = result.match(/['"][0-9]+\.[0-9]+\.[0-9]+['"]/i);
        if (!remoteVersion) return;
        remoteVersion = remoteVersion.toString().replace(/['"]/g, "");
        var ver = remoteVersion.split(".");
        var lver = window.PluginUpdates.plugins[downloadUrl].version.split(".");
        var hasUpdate = false;
        if (ver[0] > lver[0]) hasUpdate = true;
        else if (ver[0] == lver[0] && ver[1] > lver[1]) hasUpdate = true;
        else if (ver[0] == lver[0] && ver[1] == lver[1] && ver[2] > lver[2]) hasUpdate = true;
        else hasUpdate = false;
        if (hasUpdate) BDfunctionsDario.showUpdateNotice(pluginName, downloadUrl);
        else BDfunctionsDario.removeUpdateNotice(pluginName);
    });
};

BDfunctionsDario.showUpdateNotice = function (pluginName, downloadUrl) {
    var updateNoticeBar = document.querySelector("#pluginNotice");
    if (!updateNoticeBar) {
        updateNoticeBar = BDfunctionsDario.createNotificationsBar(`The following plugins have updates:&nbsp;&nbsp;<strong id="outdatedPlugins"></strong>`, {html:true, id:"pluginNotice", type:"info", btn: !BDfunctionsDario.isRestartNoMoreEnabled() ? "Reload" : ""});
        BDfunctionsDario.$(updateNoticeBar)
            .on("click", BDfunctionsDario.dotCN.noticedismiss, () => {
                BDfunctionsDario.$(updateNoticeBar).slideUp({complete: () => {
                        updateNoticeBar.remove();
                    }});
            })
            .on("click", BDfunctionsDario.dotCN.noticebutton, (e) => {
                e.preventDefault();
                window.location.reload(false);
            })
            .on("mouseenter", BDfunctionsDario.dotCN.noticebutton, (e) => {
                if (window.PluginUpdates.downloaded) BDfunctionsDario.createTooltip(window.PluginUpdates.downloaded.join(", "), e.currentTarget, {type:"bottom", selector:"update-notice-tooltip"});
            })
            .find(BDfunctionsDario.dotCN.noticebutton).hide();
    }
    if (updateNoticeBar) {
        let outdatedContainer = updateNoticeBar.querySelector("#outdatedPlugins");
        let pluginNoticeID = pluginName + "-notice";
        if (outdatedContainer && !outdatedContainer.querySelector("#" + pluginNoticeID)) {
            let pluginNoticeElement = BDfunctionsDario.$(`<span id="${pluginNoticeID}">${pluginName}</span>`);
            pluginNoticeElement.on("click", () => {
                BDfunctionsDario.downloadPlugin(pluginName, downloadUrl, updateNoticeBar);
            });
            if (outdatedContainer.querySelector("span")) BDfunctionsDario.$(outdatedContainer).append(`<span class="separator">, </span>`);
            BDfunctionsDario.$(outdatedContainer).append(pluginNoticeElement);
        }
    }
};

BDfunctionsDario.downloadPlugin = function (pluginName, downloadUrl, updateNoticeBar) {
    let request = require("request");
    let fileSystem = require("fs");
    let path = require("path");
    request(downloadUrl, (error, response, body) => {
        if (error) return console.warn("Unable to get update for " + pluginName);
        let remoteVersion = body.match(/['"][0-9]+\.[0-9]+\.[0-9]+['"]/i);
        remoteVersion = remoteVersion.toString().replace(/['"]/g, "");
        let filename = downloadUrl.split("/");
        filename = filename[filename.length - 1];
        var file = path.join(BDfunctionsDario.getPluginsFolder(), filename);
        fileSystem.writeFileSync(file, body);
        BDfunctionsDario.showToast(`${pluginName} ${window.PluginUpdates.plugins[downloadUrl].version} has been replaced by ${pluginName} ${remoteVersion}`, {selector:"plugin-updated-toast"});
        if (updateNoticeBar.querySelector(BDfunctionsDario.dotCN.noticebutton)) {
            window.PluginUpdates.plugins[downloadUrl].version = remoteVersion;
            if (!window.PluginUpdates.downloaded) window.PluginUpdates.downloaded = [];
            if (!window.PluginUpdates.downloaded.includes(pluginName)) window.PluginUpdates.downloaded.push(pluginName);
        }
        BDfunctionsDario.removeUpdateNotice(pluginName, updateNoticeBar);
    });
};

BDfunctionsDario.removeUpdateNotice = function (pluginName, updateNoticeBar) {
    if (typeof updateNoticeBar === "undefined") updateNoticeBar = document.querySelector("#pluginNotice");
    if (updateNoticeBar) {
        let outdatedContainer = updateNoticeBar.querySelector("#outdatedPlugins");
        if (outdatedContainer) {
            let noticeEntry = outdatedContainer.querySelector("#" + pluginName + "-notice");
            if (noticeEntry) {
                var nextSibling = noticeEntry.nextSibling;
                var prevSibling = noticeEntry.prevSibling;
                if (nextSibling && nextSibling.classList && nextSibling.classList.contains("separator")) nextSibling.remove();
                else if (prevSibling && prevSibling.classList && prevSibling.classList.contains("separator")) prevSibling.remove();
                noticeEntry.remove();
            }

            if (!outdatedContainer.querySelector("span")) {
                var reloadbutton = updateNoticeBar.querySelector(BDfunctionsDario.dotCN.noticebutton);
                if (reloadbutton) {
                    updateNoticeBar.querySelector(".notice-message").innerText = "To finish updating you need to reload.";
                    reloadbutton.style.display = "inline-block";
                }
                else {
                    updateNoticeBar.querySelector(BDfunctionsDario.dotCN.noticedismiss).click();
                }
            }
        }
    }
};

BDfunctionsDario.showToast = function (content, options = {}) {
    if (!document.querySelector(".toasts")) {
        let container = document.querySelector(BDfunctionsDario.dotCNS.channels + "+ div");
        let memberlist = container ? container.querySelector(BDfunctionsDario.dotCNS.memberswrap) : null;
        let left = container ? container.getBoundingClientRect().left : 310;
        let width = container ? (memberlist ? container.offsetWidth - memberlist.offsetWidth : container.offsetWidth) : window.outerWidth - left;
        let form = container ? container.querySelector("form") : null;
        let bottom = form ? form.offsetHeight : 80;
        let toastWrapper = document.createElement("div");
        toastWrapper.classList.add("toasts");
        toastWrapper.style.setProperty("left", left + "px");
        toastWrapper.style.setProperty("width", width + "px");
        toastWrapper.style.setProperty("bottom", bottom + "px");
        document.querySelector(BDfunctionsDario.dotCN.appold).appendChild(toastWrapper);
    }
    const {type = "", icon = true, timeout = 3000, html = false, selector = ""} = options;
    let toastElem = document.createElement("div");
    toastElem.classList.add("toast");
    if (type) {
        toastElem.classList.add("toast-" + type);
        if (icon) toastElem.classList.add("icon");
    }
    if (selector) selector.split(" ").forEach(classname => {if(classname) toastElem.classList.add(classname);});
    if (html === true) toastElem.innerHTML = content;
    else toastElem.innerText = content;
    document.querySelector(".toasts").appendChild(toastElem);
    toastElem.close = () => {
        if (toastElem.parentElement) {
            toastElem.classList.add("closing");
            setTimeout(() => {
                toastElem.remove();
                if (!document.querySelectorAll(".toasts .toast").length) document.querySelector(".toasts").remove();
            }, 300);
        }
    };
    setTimeout(() => {
        toastElem.close();
    }, timeout > 0 ? timeout : 60000);
    return toastElem;
};

BDfunctionsDario.DesktopNotificationQueue = {queue:[],running:false};
BDfunctionsDario.showDesktopNotification = function (parsedcontent, parsedoptions = {}) {
    var startQueue = () => {
        BDfunctionsDario.DesktopNotificationQueue.queue.push({parsedcontent,parsedoptions});
        runQueue();
    };
    var runQueue = () => {
        if (!BDfunctionsDario.DesktopNotificationQueue.running) {
            let notifyconfig = BDfunctionsDario.DesktopNotificationQueue.queue.shift();
            if (notifyconfig) notify(notifyconfig.parsedcontent, notifyconfig.parsedoptions);
        }
    };
    var notify = (content, options) => {
        BDfunctionsDario.DesktopNotificationQueue.running = true;
        let mute = options.silent;
        options.silent = options.silent || options.sound ? true : false;
        let notificationEle = new Notification(content, options);
        let audio = new Audio();
        let closeTimeout = setTimeout(() => {close();}, options.timeout ? options.timeout : 3000);
        if (typeof options.click == "function") notificationEle.onclick = () => {
            clearTimeout(closeTimeout);
            close();
            options.click();
        };
        if (!mute && options.sound) {
            audio.src = options.sound;
            audio.play();
        }
        var close = () => {
            audio.pause();
            notificationEle.close();
            BDfunctionsDario.DesktopNotificationQueue.running = false;
            setTimeout(() => {runQueue();},1000);
        };
    };
    if (!("Notification" in window)) {
        // do nothing
    }
    else if (Notification.permission === "granted") {
        startQueue();
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                startQueue();
            }
        });
    }
};

BDfunctionsDario.createTooltip = function (content, anker, options = {}) {
    if (!content || !anker || !document.contains(anker)) return null;
    let tooltipcontainer = document.querySelector(BDfunctionsDario.dotCN.tooltips);
    if (!tooltipcontainer) return null;

    let id = Math.round(Math.random()*10000000000000000);
    let tooltip = document.createElement("div");
    tooltip.className = BDfunctionsDario.disCNS.tooltip + BDfunctionsDario.disCNS.tooltipblack + "DevilBro-tooltip";
    if (options.type) tooltip.classList.add(BDfunctionsDario.disCN["tooltip" + options.type]);
    if (options.id) tooltip.id = options.id.split(" ")[0];
    if (options.selector) options.selector.split(" ").forEach(selector => {if(selector) tooltip.classList.add(selector);});
    if (options.css) BDfunctionsDario.appendLocalStyle("BDfunctionsDariocustomTooltip" + id, options.css);
    if (options.html === true) tooltip.innerHTML = content;
    else tooltip.innerText = content;

    tooltipcontainer.appendChild(tooltip);

    let left, top, ankersize = anker.getBoundingClientRect(), tooltipsize = tooltip.getBoundingClientRect();
    if (!options.position) options.position = options.type;
    switch (options.position) {
        case "top":
            left = ankersize.left + (ankersize.width - tooltipsize.width)/2;
            top = ankersize.top - tooltipsize.height;
            break;
        case "bottom":
            left = ankersize.left + (ankersize.width - tooltipsize.width)/2;
            top = ankersize.top + ankersize.height;
            break;
        case "left":
            left = ankersize.left - tooltipsize.width;
            top = ankersize.top + (ankersize.height - tooltipsize.height)/2;
            break;
        default:
            left = ankersize.left + ankersize.width;
            top = ankersize.top + (ankersize.height - tooltipsize.height)/2;
            break;
    }

    tooltip.style.setProperty("left", left + "px");
    tooltip.style.setProperty("top", top + "px");

    var tooltipObserver = new MutationObserver((mutations) => {
        var now = performance.now();
        mutations.forEach((mutation) => {
            var nodes = Array.from(mutation.removedNodes);
            var ownMatch = nodes.indexOf(tooltip) > -1;
            var directMatch = nodes.indexOf(anker) > -1;
            var parentMatch = nodes.some(parent => parent.contains(anker));
            if (ownMatch || directMatch || parentMatch) {
                tooltipObserver.disconnect();
                tooltip.remove();
                BDfunctionsDario.$(anker).off("mouseleave.BDfunctionsDarioTooltip" + id);
                BDfunctionsDario.removeLocalStyle("BDfunctionsDariocustomTooltip" + id);
            }
        });
    });
    tooltipObserver.observe(document.body, {subtree: true, childList: true});

    BDfunctionsDario.$(anker).on("mouseleave.BDfunctionsDarioTooltip" + id, () => {
        tooltip.remove();
    });

    return tooltip;
};

BDfunctionsDario.createNotificationsBar = function (content, options = {}) {
    if (!content) return;
    let id = Math.round(Math.random()*10000000000000000);
    let notifiybar = document.createElement("div");
    notifiybar.className = BDfunctionsDario.disCNS.notice + BDfunctionsDario.disCNS.size14 + BDfunctionsDario.disCNS.weightmedium + BDfunctionsDario.disCNS.height36 + "DevilBro-notice notice-" + id;
    notifiybar.innerHTML = `<div class="${BDfunctionsDario.disCNS.noticedismiss}"></div><span class="notice-message"></span></strong>`;
    BDfunctionsDario.$(BDfunctionsDario.dotCNS.app + BDfunctionsDario.dotCNS.guildswrapper + " + div > div:first > div:first").append(notifiybar);
    var notifiybarinner = notifiybar.querySelector(".notice-message");
    if (options.icon) {
        var icons = {
            "android":			{name:BDfunctionsDario.disCNS.noticeiconandroid + BDfunctionsDario.disCN.noticeicon,			size:"small"},
            "apple":			{name:BDfunctionsDario.disCNS.noticeiconapple + BDfunctionsDario.disCN.noticeicon,			size:"small"},
            "windows":			{name:BDfunctionsDario.disCNS.noticeiconwindows + BDfunctionsDario.disCN.noticeicon,			size:"small"},
            "androidBig":		{name:BDfunctionsDario.disCNS.noticeiconandroid + BDfunctionsDario.disCN.noticeplatformicon,	size:"big"},
            "appleBig":			{name:BDfunctionsDario.disCNS.noticeiconapple + BDfunctionsDario.disCN.noticeplatformicon,	size:"big"},
            "windowsBig":		{name:BDfunctionsDario.disCNS.noticeiconwindows + BDfunctionsDario.disCN.noticeplatformicon,	size:"big"}
        };
        for (let icon of options.icon.split(" ")) {
            icon = icons[icon];
            if (icon) {
                if (icon.size == "small") 		BDfunctionsDario.$(`<i class="${icon.name}"></i>`).insertAfter(notifiybarinner);
                else if (icon.size == "big") 	BDfunctionsDario.$(`<i class="${icon.name}"></i>`).insertBefore(notifiybarinner);
            }
        }

    }
    if (options.btn) BDfunctionsDario.$(`<button class="${BDfunctionsDario.disCNS.noticebutton + BDfunctionsDario.disCNS.size14 + BDfunctionsDario.disCN.weightmedium}">${options.btn}</button>`).insertAfter(notifiybarinner);
    if (options.id) notifiybar.id = options.id.split(" ")[0];
    if (options.selector) options.selector.split(" ").forEach(selector => {if(selector) notifiybar.classList.add(selector);});
    if (options.css) BDfunctionsDario.appendLocalStyle("BDfunctionsDariocustomNotificationsBar" + id, options.css);
    if (options.html === true) notifiybarinner.innerHTML = content;
    else {
        var urltest = document.createElement("a");
        var newcontent = [];
        for (let word of content.split(" ")) {
            let encodedword = BDfunctionsDario.encodeToHTML(word);
            urltest.href = word;
            newcontent.push((urltest.host && urltest.host != window.location.host) ? `<label class="${BDfunctionsDario.disCN.textlink}">${encodedword}</label>` : encodedword);
        }
        notifiybarinner.innerHTML = newcontent.join(" ");
    }

    var type = null;
    if (options.type) {
        var types = {
            "brand":		BDfunctionsDario.disCN.noticebrand,
            "danger":		BDfunctionsDario.disCN.noticedanger,
            "default":		BDfunctionsDario.disCN.noticedefault,
            "facebook":		BDfunctionsDario.disCN.noticefacebook,
            "info":			BDfunctionsDario.disCN.noticeinfo,
            "premium":		BDfunctionsDario.disCN.noticepremium,
            "spotify":		BDfunctionsDario.disCNS.noticespotify + BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.aligncenter + BDfunctionsDario.disCN.justifycenter,
            "streamer":		BDfunctionsDario.disCN.noticestreamer,
            "success":		BDfunctionsDario.disCN.noticesuccess
        };
        if (type = types[options.type]) type.split(" ").forEach(selector => {if(selector) notifiybar.classList.add(selector);});
        if (options.type == "premium") {
            var button = notifiybar.querySelector(BDfunctionsDario.dotCN.noticebutton);
            if (button) button.classList.add(BDfunctionsDario.disCN.noticepremiumaction);
            notifiybarinner.classList.add(BDfunctionsDario.disCN.noticepremiumtext);
            BDfunctionsDario.$(`<i class="${BDfunctionsDario.disCN.noticepremiumlogo}"></i>`).insertBefore(notifiybarinner);
        }
    }
    if (!type) {
        var comp = BDfunctionsDario.color2COMP(options.color);
        var color = comp && comp[0] > 180 && comp[1] > 180 && comp[2] > 180 ? "#000" : "#FFF";
        var bgColor = comp ? BDfunctionsDario.color2HEX(comp) : "#F26522";
        var dismissFilter = comp && comp[0] > 180 && comp[1] > 180 && comp[2] > 180 ? "brightness(0%)" : "brightness(100%)";
        BDfunctionsDario.appendLocalStyle("BDfunctionsDariocustomNotificationsBarColorCorrection" + id,
            `.DevilBro-notice.notice-${id} {
				background-color: ${bgColor} !important;
			}
			.DevilBro-notice.notice-${id} .notice-message {
				color: ${color} !important;
			}
			.DevilBro-notice.notice-${id} ${BDfunctionsDario.dotCN.noticebutton} {
				color: ${color} !important;
				border-color: ${color} !important;
			}
			.DevilBro-notice.notice-${id} ${BDfunctionsDario.dotCN.noticebutton}:hover {
				color: ${bgColor} !important;
				background-color: ${color} !important;
			}
			.DevilBro-notice.notice-${id} ${BDfunctionsDario.dotCN.noticedismiss} {
				filter: ${dismissFilter} !important;
			}`);
    }
    BDfunctionsDario.$(notifiybar).on("click", BDfunctionsDario.dotCN.noticedismiss, () => {
        BDfunctionsDario.$(notifiybar).slideUp({complete: () => {
                BDfunctionsDario.removeLocalStyle("BDfunctionsDariocustomNotificationsBar" + id);
                BDfunctionsDario.removeLocalStyle("BDfunctionsDariocustomNotificationsBarColorCorrection" + id);
                notifiybar.remove();
            }});
    });

    return notifiybar;
};

// Plugins/Themes folder resolver from Square
BDfunctionsDario.getPluginsFolder = function () {
    let process = require("process");
    let path = require("path");
    switch (process.platform) {
        case "win32":
            return path.resolve(process.env.appdata, "BetterDiscord/plugins/");
        case "darwin":
            return path.resolve(process.env.HOME, "Library/Preferences/", "BetterDiscord/plugins/");
        default:
            return path.resolve(process.env.HOME, ".config/", "BetterDiscord/plugins/");
    }
};

BDfunctionsDario.getThemesFolder = function () {
    let process = require("process");
    let path = require("path");
    switch (process.platform) {
        case "win32":
            return path.resolve(process.env.appdata, "BetterDiscord/themes/");
        case "darwin":
            return path.resolve(process.env.HOME, "Library/Preferences/", "BetterDiscord/themes/");
        default:
            return path.resolve(process.env.HOME, ".config/", "BetterDiscord/themes/");
    }
};

BDfunctionsDario.createUpdateButton = function () {
    var updateButton = document.createElement("button");
    updateButton.className = "bd-pfbtn bd-updatebtn";
    updateButton.innerText = "Check for Updates";
    updateButton.onclick = function () {
        BDfunctionsDario.checkAllUpdates();
    };
    updateButton.onmouseenter = function () {
        BDfunctionsDario.createTooltip("Only checks for updates of plugins, which support the updatecheck. Rightclick for a list.", updateButton, {type:"top",selector:"update-button-tooltip"});

    };
    updateButton.oncontextmenu = function () {
        if (window.PluginUpdates && window.PluginUpdates.plugins && !document.querySelector(".update-list-tooltip")) {
            var list = [];
            for (var plugin in window.PluginUpdates.plugins) {
                list.push(window.PluginUpdates.plugins[plugin].name);
            }
            BDfunctionsDario.createTooltip(list.sort().join(", "), updateButton, {type:"bottom",selector:"update-list-tooltip"});
        }
    };
    return updateButton;
};

BDfunctionsDario.checkAllUpdates = function () {
    for (let key in window.PluginUpdates.plugins) {
        let plugin = window.PluginUpdates.plugins[key];
        BDfunctionsDario.checkUpdate(plugin.name, plugin.raw);
    }
};

BDfunctionsDario.translatePlugin = function (plugin) {
    if (typeof plugin.setLabelsByLanguage === "function" || typeof plugin.changeLanguageStrings === "function") {
        var translateInterval = setInterval(() => {
            if (document.querySelector("html").lang) {
                clearInterval(translateInterval);
                var language = BDfunctionsDario.getDiscordLanguage();
                if (typeof plugin.setLabelsByLanguage === "function") 		plugin.labels = plugin.setLabelsByLanguage(language.id);
                if (typeof plugin.changeLanguageStrings === "function") 	plugin.changeLanguageStrings();
                if (!plugin.appReload) {
                    console.log(BDfunctionsDario.getLibraryStrings().toast_plugin_translated.replace("${pluginName}", plugin.name ? plugin.name : plugin.getName()).replace("${ownlang}", language.ownlang));
                }
            }
        },100);
    }
};

BDfunctionsDario.languages = {
    "$discord":	{name:"Discord (English (US))",		id:"en-US",		ownlang:"English (US)",				integrated:false,		dic:false,		deepl:false},
    "af":		{name:"Afrikaans",					id:"af",		ownlang:"Afrikaans",				integrated:false,		dic:true,		deepl:false},
    "sq":		{name:"Albanian",					id:"sq",		ownlang:"Shqiptar",					integrated:false,		dic:false,		deepl:false},
    "am":		{name:"Amharic",					id:"am",		ownlang:"አማርኛ",					integrated:false,		dic:false,		deepl:false},
    "ar":		{name:"Arabic",						id:"ar",		ownlang:"اللغة العربية",			integrated:false,		dic:false,		deepl:false},
    "hy":		{name:"Armenian",					id:"hy",		ownlang:"Հայերեն",					integrated:false,		dic:false,		deepl:false},
    "az":		{name:"Azerbaijani",				id:"az",		ownlang:"آذربایجان دیلی",			integrated:false,		dic:false,		deepl:false},
    "eu":		{name:"Basque",						id:"eu",		ownlang:"Euskara",					integrated:false,		dic:false,		deepl:false},
    "be":		{name:"Belarusian",					id:"be",		ownlang:"Беларуская",				integrated:false,		dic:false,		deepl:false},
    "bn":		{name:"Bengali",					id:"bn",		ownlang:"বাংলা",						integrated:false,		dic:false,		deepl:false},
    "bs":		{name:"Bosnian",					id:"bs",		ownlang:"Босански",					integrated:false,		dic:false,		deepl:false},
    "bg":		{name:"Bulgarian",					id:"bg",		ownlang:"български",				integrated:true,		dic:false,		deepl:false},
    "my":		{name:"Burmese",					id:"my",		ownlang:"မြန်မာစာ",					integrated:false,		dic:false,		deepl:false},
    "ca":		{name:"Catalan",					id:"ca",		ownlang:"Català",					integrated:false,		dic:false,		deepl:false},
    "ceb":		{name:"Cebuano",					id:"ceb",		ownlang:"Bisaya",					integrated:false,		dic:false,		deepl:false},
    "ny":		{name:"Chewa",						id:"ny",		ownlang:"Nyanja",					integrated:false,		dic:false,		deepl:false},
    "zh-HK":	{name:"Chinese (Hong Kong)",		id:"zh-HK",		ownlang:"香港中文",					integrated:false,		dic:false,		deepl:false},
    "zh-CN":	{name:"Chinese (Simplified)",		id:"zh-CN",		ownlang:"简体中文",					integrated:false,		dic:false,		deepl:false},
    "zh-TW":	{name:"Chinese (Traditional)",		id:"zh-TW",		ownlang:"繁體中文",					integrated:true,		dic:false,		deepl:false},
    "co":		{name:"Corsican",					id:"co",		ownlang:"Corsu",					integrated:false,		dic:false,		deepl:false},
    "hr":		{name:"Croatian",					id:"hr",		ownlang:"Hrvatski",					integrated:true,		dic:false,		deepl:false},
    "cs":		{name:"Czech",						id:"cs",		ownlang:"Čeština",					integrated:true,		dic:false,		deepl:false},
    "da":		{name:"Danish",						id:"da",		ownlang:"Dansk",					integrated:true,		dic:true,		deepl:false},
    "nl":		{name:"Dutch",						id:"nl",		ownlang:"Nederlands",				integrated:true,		dic:true,		deepl:true},
    "en":		{name:"English",					id:"en",		ownlang:"English",					integrated:false,		dic:true,		deepl:true},
    "en-GB":	{name:"English (UK)",				id:"en-GB",		ownlang:"English (UK)",				integrated:true,		dic:true,		deepl:false},
    "en-US":	{name:"English (US)",				id:"en-US",		ownlang:"English (US)",				integrated:true,		dic:true,		deepl:false},
    "eo":		{name:"Esperanto",					id:"eo",		ownlang:"Esperanto",				integrated:false,		dic:false,		deepl:false},
    "et":		{name:"Estonian",					id:"et",		ownlang:"Eesti",					integrated:false,		dic:false,		deepl:false},
    "fil":		{name:"Filipino",					id:"fil",		ownlang:"Wikang Filipino",			integrated:false,		dic:false,		deepl:false},
    "fi":		{name:"Finnish",					id:"fi",		ownlang:"Suomi",					integrated:true,		dic:false,		deepl:false},
    "fr":		{name:"French",						id:"fr",		ownlang:"Français",					integrated:true,		dic:true,		deepl:true},
    "fr-CA":	{name:"French (Canadian)",			id:"fr-CA",		ownlang:"Français Canadien",		integrated:false,		dic:false,		deepl:false},
    "fy":		{name:"Frisian",					id:"fy",		ownlang:"Frysk",					integrated:false,		dic:false,		deepl:false},
    "gl":		{name:"Galician",					id:"gl",		ownlang:"Galego",					integrated:false,		dic:false,		deepl:false},
    "ka":		{name:"Georgian",					id:"ka",		ownlang:"ქართული",				integrated:false,		dic:false,		deepl:false},
    "de":		{name:"German",						id:"de",		ownlang:"Deutsch",					integrated:true,		dic:true,		deepl:true},
    "de-AT":	{name:"German (Austria)",			id:"de-AT",		ownlang:"Österreichisch Deutsch",	integrated:false,		dic:false,		deepl:false},
    "de-CH":	{name:"German (Switzerland)",		id:"de-CH",		ownlang:"Schweizerdeutsch",			integrated:false,		dic:false,		deepl:false},
    "el":		{name:"Greek",						id:"el",		ownlang:"Ελληνικά",					integrated:false,		dic:false,		deepl:false},
    "gu":		{name:"Gujarati",					id:"gu",		ownlang:"ગુજરાતી",					integrated:false,		dic:false,		deepl:false},
    "ht":		{name:"Haitian Creole",				id:"ht",		ownlang:"Kreyòl Ayisyen",			integrated:false,		dic:false,		deepl:false},
    "ha":		{name:"Hausa",						id:"ha",		ownlang:"حَوْسَ",						integrated:false,		dic:false,		deepl:false},
    "haw":		{name:"Hawaiian",					id:"haw",		ownlang:"ʻŌlelo Hawaiʻi",			integrated:false,		dic:false,		deepl:false},
    "iw":		{name:"Hebrew",						id:"iw",		ownlang:"עברית",					integrated:false,		dic:false,		deepl:false},
    "hi":		{name:"Hindi",						id:"hi",		ownlang:"हिन्दी",						integrated:false,		dic:false,		deepl:false},
    "hmn":		{name:"Hmong",						id:"hmn",		ownlang:"lol Hmongb",				integrated:false,		dic:false,		deepl:false},
    "hu":		{name:"Hungarain",					id:"hu",		ownlang:"Magyar",					integrated:false,		dic:false,		deepl:false},
    "is":		{name:"Icelandic",					id:"is",		ownlang:"Íslenska",					integrated:false,		dic:false,		deepl:false},
    "ig":		{name:"Igbo",						id:"ig",		ownlang:"Asụsụ Igbo",				integrated:false,		dic:false,		deepl:false},
    "id":		{name:"Indonesian",					id:"id",		ownlang:"Bahasa Indonesia",			integrated:false,		dic:false,		deepl:false},
    "ga":		{name:"Irish",						id:"ga",		ownlang:"Gaeilge",					integrated:false,		dic:false,		deepl:false},
    "it":		{name:"Italian",					id:"it",		ownlang:"Italiano",					integrated:true,		dic:true,		deepl:true},
    "ja":		{name:"Japanese",					id:"ja",		ownlang:"日本語",					integrated:true,		dic:false,		deepl:false},
    "jv":		{name:"Javanese",					id:"jv",		ownlang:"ꦧꦱꦗꦮ",					integrated:false,		dic:false,		deepl:false},
    "kn":		{name:"Kannada",					id:"kn",		ownlang:"ಕನ್ನಡ",						integrated:false,		dic:false,		deepl:false},
    "kk":		{name:"Kazakh",						id:"kk",		ownlang:"Қазақ Tілі",				integrated:false,		dic:false,		deepl:false},
    "km":		{name:"Khmer",						id:"km",		ownlang:"ភាសាខ្មែរ",					integrated:false,		dic:false,		deepl:false},
    "ko":		{name:"Korean",						id:"ko",		ownlang:"한국어",					integrated:true,		dic:false,		deepl:false},
    "ku":		{name:"Kurdish",					id:"ku",		ownlang:"کوردی",					integrated:false,		dic:false,		deepl:false},
    "ky":		{name:"Kyrgyz",						id:"ky",		ownlang:"кыргызча",					integrated:false,		dic:false,		deepl:false},
    "lo":		{name:"Lao",						id:"lo",		ownlang:"ພາສາລາວ",					integrated:false,		dic:false,		deepl:false},
    "la":		{name:"Latin",						id:"la",		ownlang:"Latina",					integrated:false,		dic:false,		deepl:false},
    "lv":		{name:"Latvian",					id:"lv",		ownlang:"Latviešu",					integrated:false,		dic:false,		deepl:false},
    "lt":		{name:"Lithuanian",					id:"lt",		ownlang:"Lietuvių",					integrated:false,		dic:false,		deepl:false},
    "lb":		{name:"Luxembourgish",				id:"lb",		ownlang:"Lëtzebuergesch",			integrated:false,		dic:false,		deepl:false},
    "mk":		{name:"Macedonian",					id:"mk",		ownlang:"Mакедонски",				integrated:false,		dic:false,		deepl:false},
    "mg":		{name:"Malagasy",					id:"mg",		ownlang:"Malagasy",					integrated:false,		dic:false,		deepl:false},
    "ms":		{name:"Malay",						id:"ms",		ownlang:"بهاس ملايو",				integrated:false,		dic:false,		deepl:false},
    "ml":		{name:"Malayalam",					id:"ml",		ownlang:"മലയാളം",					integrated:false,		dic:false,		deepl:false},
    "mt":		{name:"Maltese",					id:"mt",		ownlang:"Malti",					integrated:false,		dic:false,		deepl:false},
    "mi":		{name:"Maori",						id:"mi",		ownlang:"te Reo Māori",				integrated:false,		dic:false,		deepl:false},
    "mr":		{name:"Marathi",					id:"mr",		ownlang:"मराठी",						integrated:false,		dic:false,		deepl:false},
    "mn":		{name:"Mongolian",					id:"mn",		ownlang:"Монгол Хэл",				integrated:false,		dic:false,		deepl:false},
    "ne":		{name:"Nepali",						id:"ne",		ownlang:"नेपाली",						integrated:false,		dic:false,		deepl:false},
    "no":		{name:"Norwegian",					id:"no",		ownlang:"Norsk",					integrated:true,		dic:false,		deepl:false},
    "ps":		{name:"Pashto",						id:"ps",		ownlang:"پښتو",						integrated:false,		dic:false,		deepl:false},
    "fa":		{name:"Persian",					id:"fa",		ownlang:"فارسی",					integrated:false,		dic:false,		deepl:false},
    "pl":		{name:"Polish",						id:"pl",		ownlang:"Polski",					integrated:true,		dic:false,		deepl:true},
    "pt":		{name:"Portuguese",					id:"pt",		ownlang:"Português",				integrated:false,		dic:true,		deepl:false},
    "pt-BR":	{name:"Portuguese (Brazil)",		id:"pt-BR",		ownlang:"Português do Brasil",		integrated:true,		dic:true,		deepl:false},
    "pt-PT":	{name:"Portuguese (Portugal)",		id:"pt-PT",		ownlang:"Português do Portugal",	integrated:false,		dic:false,		deepl:false},
    "pa":		{name:"Punjabi",					id:"pa",		ownlang:"पंजाबी",						integrated:false,		dic:false,		deepl:false},
    "ro":		{name:"Romanian",					id:"ro",		ownlang:"Română",					integrated:false,		dic:false,		deepl:false},
    "ru":		{name:"Russian",					id:"ru",		ownlang:"Pусский",					integrated:true,		dic:false,		deepl:false},
    "sm":		{name:"Samoan",						id:"sm",		ownlang:"Gagana Sāmoa",				integrated:false,		dic:false,		deepl:false},
    "gd":		{name:"Scottish Gaelic",			id:"gd",		ownlang:"Gàidhlig",					integrated:false,		dic:false,		deepl:false},
    "sr":		{name:"Serbian",					id:"sr",		ownlang:"Српски",					integrated:false,		dic:false,		deepl:false},
    "st":		{name:"Sotho",						id:"st",		ownlang:"Sesotho",					integrated:false,		dic:false,		deepl:false},
    "sn":		{name:"Shona",						id:"sn",		ownlang:"Shona",					integrated:false,		dic:false,		deepl:false},
    "sd":		{name:"Sindhi",						id:"sd",		ownlang:"سنڌي",						integrated:false,		dic:false,		deepl:false},
    "si":		{name:"Sinhala",					id:"si",		ownlang:"සිංහල",					integrated:false,		dic:false,		deepl:false},
    "sk":		{name:"Slovak",						id:"sk",		ownlang:"Slovenčina",				integrated:false,		dic:false,		deepl:false},
    "sl":		{name:"Slovenian",					id:"sl",		ownlang:"Slovenščina",				integrated:false,		dic:false,		deepl:false},
    "es":		{name:"Spanish",					id:"es",		ownlang:"Español",					integrated:true,		dic:true,		deepl:true},
    "es-419":	{name:"Spanish (Latin America)",	id:"es-419",	ownlang:"Español latinoamericano",	integrated:false,		dic:false,		deepl:false},
    "sw":		{name:"Swahili",					id:"sw",		ownlang:"Kiswahili",				integrated:false,		dic:false,		deepl:false},
    "sv":		{name:"Swedish",					id:"sv",		ownlang:"Svenska",					integrated:true,		dic:true,		deepl:false},
    "tg":		{name:"Tajik",						id:"tg",		ownlang:"тоҷикӣ",					integrated:false,		dic:false,		deepl:false},
    "ta":		{name:"Tamil",						id:"ta",		ownlang:"தமிழ்",						integrated:false,		dic:false,		deepl:false},
    "te":		{name:"Telugu",						id:"te",		ownlang:"తెలుగు",					integrated:false,		dic:false,		deepl:false},
    "th":		{name:"Thai",						id:"th",		ownlang:"ภาษาไทย",					integrated:false,		dic:false,		deepl:false},
    "tr":		{name:"Turkish",					id:"tr",		ownlang:"Türkçe",					integrated:true,		dic:false,		deepl:false},
    "uk":		{name:"Ukrainian",					id:"uk",		ownlang:"Yкраїнський",				integrated:true,		dic:false,		deepl:false},
    "ur":		{name:"Urdu",						id:"ur",		ownlang:"اُردُو",						integrated:false,		dic:false,		deepl:false},
    "uz":		{name:"Uzbek",						id:"uz",		ownlang:"اوزبیک",					integrated:false,		dic:false,		deepl:false},
    "vi":		{name:"Vietnamese",					id:"vi",		ownlang:"Tiếng Việt Nam",			integrated:false,		dic:false,		deepl:false},
    "cy":		{name:"Welsh",						id:"cy",		ownlang:"Cymraeg",					integrated:false,		dic:false,		deepl:false},
    "xh":		{name:"Xhosa",						id:"xh",		ownlang:"Xhosa",					integrated:false,		dic:false,		deepl:false},
    "yi":		{name:"Yiddish",					id:"yi",		ownlang:"ייִדיש ייִדיש‬",				integrated:false,		dic:false,		deepl:false},
    "yo":		{name:"Yoruba",						id:"yo",		ownlang:"Èdè Yorùbá",				integrated:false,		dic:false,		deepl:false},
    "zu":		{name:"Zulu",						id:"zu",		ownlang:"Zulu",						integrated:false,		dic:false,		deepl:false}
};

(() => {
    var pulling = setInterval(() => {
        var languageID = document.querySelector("html").lang;
        if (languageID) {
            clearInterval(pulling);
            BDfunctionsDario.languages.$discord.name = "Discord (" + BDfunctionsDario.languages[languageID].name + ")";
            BDfunctionsDario.languages.$discord.id = BDfunctionsDario.languages[languageID].id;
            BDfunctionsDario.languages.$discord.ownlang = BDfunctionsDario.languages[languageID].ownlang;
        }
    },100);
})();

BDfunctionsDario.getDiscordBuilt = function () {
    return require(require('electron').remote.app.getAppPath() + "/build_info.json").releaseChannel.toLowerCase();
};

BDfunctionsDario.getDiscordVersion = function () {
    return require(require('electron').remote.app.getAppPath() + "/build_info.json").version.toLowerCase();
};

BDfunctionsDario.getDiscordLanguage = function () {
    var languageCode = document.querySelector("html").lang || "en-US";
    var codeParts = languageCode.split("-");
    var prefix = codeParts[0];
    var suffix = codeParts[1] ? codeParts[1] : "";
    languageCode = suffix && prefix.toUpperCase() != suffix.toUpperCase() ? prefix + "-" + suffix : prefix;
    return BDfunctionsDario.languages[languageCode] || BDfunctionsDario.languages["en-US"];
};

BDfunctionsDario.getDiscordTheme = function () {
    return document.querySelectorAll(BDfunctionsDario.dotCN.themelight).length > document.querySelectorAll(BDfunctionsDario.dotCN.themedark).length ? BDfunctionsDario.disCN.themelight : BDfunctionsDario.disCN.themedark;
};

BDfunctionsDario.getReactInstance = function (node) {
    if (!node) return null;
    return node[Object.keys(node).find((key) => key.startsWith("__reactInternalInstance"))];
};

BDfunctionsDario.getOwnerInstance = function (config) {
    if (config === undefined) return null;
    if (!config.node || (!config.name && (!config.props || !Array.isArray(config.props)))) return null;
    var inst = BDfunctionsDario.getReactInstance(config.node);
    if (!inst) return null;

    var depth = -1;
    var maxDepth = config.depth === undefined ? 15 : config.depth;

    var upwards = config.up === undefined ? false : config.up;

    var start = performance.now();
    var maxTime = config.time === undefined ? 150 : config.time;

    var keyWhiteList = upwards ? {"return":true,"sibling":true} : {"child":true,"sibling":true};

    return searchOwnerInReact(inst);

    function searchOwnerInReact (ele) {
        depth++;
        if (!ele || BDfunctionsDario.getReactInstance(ele) || depth > maxDepth || performance.now() - start > maxTime) result = null;
        else {
            var keys = Object.getOwnPropertyNames(ele);
            var result = null;
            for (var i = 0; result == null && i < keys.length; i++) {
                var key = keys[i];
                var value = ele[keys[i]];

                if (config.name && ele.type && (ele.type.displayName === config.name || ele.type.name === config.name)) {
                    result = ele.stateNode;
                }
                else if (config.props && ele.stateNode && config.props.every(prop => ele.stateNode[prop] !== undefined)) {
                    result = ele.stateNode;
                }
                else if ((typeof value === "object" || typeof value === "function") && keyWhiteList[key]) {
                    result = searchOwnerInReact(value);
                }
            }
        }
        depth--;
        return result;
    }
};

BDfunctionsDario.getKeyInformation = function (config) {
    if (config === undefined) return null;
    if (!config.node || !config.key) return null;

    var inst = BDfunctionsDario.getReactInstance(config.node);
    if (!inst) return null;

    var depth = -1;
    var maxDepth = config.depth === undefined ? 15 : config.depth;

    var start = performance.now();
    var maxTime = config.time === undefined ? 30 : config.time;

    var keyWhiteList = {
        "props":true,
        "state":true,
        "stateNode":true,
        "refs":true,
        "updater":true,
        "children": config.up ? false : true,
        "type":true,
        "memoizedProps":true,
        "memoizedState":true,
        "child": config.up ? false : true,
        "return": config.up ? true : false,
        "sibling": config.up ? false : true,
        "firstEffect":true
    };

    if (typeof config.whiteList === "object") Object.assign(keyWhiteList, config.whiteList);

    var keyBlackList = typeof config.blackList === "object" ? config.blackList : {
    };

    var resultArray = [];
    var singleResult = searchKeyInReact(inst);

    if (config.all) return resultArray;
    else return singleResult;

    function searchKeyInReact (ele) {
        depth++;
        if (!ele || BDfunctionsDario.getReactInstance(ele) || depth > maxDepth || performance.now() - start > maxTime) result = null;
        else {
            var keys = Object.getOwnPropertyNames(ele);
            var result = null;
            for (var i = 0; result == null && i < keys.length; i++) {
                var key = keys[i];
                var value = ele[keys[i]];

                if (config.key === key && (config.value === undefined || config.value === value)) {
                    if (config.all === undefined || !config.all) {
                        result = value;
                    }
                    else if (config.all) {
                        if (config.noCopies === undefined || !config.noCopies) {
                            resultArray.push(value);
                        }
                        else if (config.noCopies) {
                            var included = false;
                            for (var j = 0; j < resultArray.length; j++) {
                                if (BDfunctionsDario.equals(value, resultArray[j])) {
                                    included = true;
                                    break;
                                }
                            }
                            if (!included) resultArray.push(value);
                        }
                    }
                }
                else if ((typeof value === "object" || typeof value === "function") && ((keyWhiteList[key] && !keyBlackList[key]) || key[0] == "." || !isNaN(key[0]))) {
                    result = searchKeyInReact(value);
                }
            }
        }
        depth--;
        return result;
    }
};

BDfunctionsDario.WebModules = {};
// code in this closure based on code by samogot and edited by myself
// https://github.com/samogot/betterdiscord-plugins/blob/master/v2/1Lib%20Discord%20Internals/plugin.js
BDfunctionsDario.WebModules.find = function (filter) {
    const req = webpackJsonp([], {"__extra_id__": (module, exports, req) => exports.default = req}, ["__extra_id__"]).default;
    delete req.c["__extra_id__"];
    for (let i in req.c) {
        if (req.c.hasOwnProperty(i)) {
            let m = req.c[i].exports;
            if (m && m.__esModule && m.default && filter(m.default)) return m.default;
            if (m && filter(m)) return m;
        }
    }
};

BDfunctionsDario.WebModules.findByProperties = function (properties) {
    return BDfunctionsDario.WebModules.find((module) => properties.every(prop => module[prop] !== undefined));
};

BDfunctionsDario.WebModules.findByName = function (name) {
    return BDfunctionsDario.WebModules.find((module) => module.displayName === name);
};

BDfunctionsDario.WebModules.findByPrototypes = function (prototypes) {
    return BDfunctionsDario.WebModules.find((module) => module.prototype && prototypes.every(proto => module.prototype[proto] !== undefined));
};

BDfunctionsDario.WebModules.addListener = function (internalModule, moduleFunction, callback) {
    if (typeof internalModule !== "object" || !moduleFunction || typeof callback !== "function") return;
    if (!internalModule[moduleFunction] || typeof(internalModule[moduleFunction]) !== "function") return;
    if (!internalModule.__internalListeners) internalModule.__internalListeners = {};
    if (!internalModule.__internalListeners[moduleFunction]) internalModule.__internalListeners[moduleFunction] = new Set();

    if (!internalModule.__listenerPatches) internalModule.__listenerPatches = {};
    if (!internalModule.__listenerPatches[moduleFunction]) {
        internalModule.__listenerPatches[moduleFunction] = BDfunctionsDario.WebModules.monkeyPatch(internalModule, moduleFunction, {after: (data) => {
                for (let listener of internalModule.__internalListeners[moduleFunction]) listener();
            }});
    }

    internalModule.__internalListeners[moduleFunction].add(callback);
};

BDfunctionsDario.WebModules.removeListener = function (internalModule, moduleFunction, callback) {
    if (typeof internalModule !== "object" || !moduleFunction || typeof callback !== "function") return;
    if (!internalModule[moduleFunction] || typeof(internalModule[moduleFunction]) !== "function") return;
    if (!internalModule.__internalListeners || !internalModule.__internalListeners[moduleFunction] || !internalModule.__internalListeners[moduleFunction].size) return;

    internalModule.__internalListeners[moduleFunction].delete(callback);

    if (!internalModule.__internalListeners[moduleFunction].size) {
        internalModule.__listenerPatches[moduleFunction]();
        delete internalModule.__listenerPatches[moduleFunction];
    }
};

BDfunctionsDario.WebModules.monkeyPatch = function (internalModule, moduleFunction, {before, after, instead, once = false, silent = false} = options) {
    const origMethod = internalModule[moduleFunction];
    const cancel = function () {
        internalModule[moduleFunction] = origMethod;
    };
    const suppressErrors = (method, desiption) => (...params) => {
        try {
            return method(...params);
        }
        catch (e) {
            console.error('Error occurred in ' + desiption, e);
        }
    };
    internalModule[moduleFunction] = function () {
        const data = {
            thisObject: this,
            methodArguments: arguments,
            cancelPatch: cancel,
            originalMethod: origMethod,
            callOriginalMethod: () => data.returnValue = data.originalMethod.apply(data.thisObject, data.methodArguments)
        };
        if (instead) {
            const tempRet = suppressErrors(instead, '`instead` callback of ' + internalModule[moduleFunction].displayName)(data);
            if (tempRet !== undefined)
                data.returnValue = tempRet;
        }
        else {
            if (before) suppressErrors(before, '`before` callback of ' + internalModule[moduleFunction].displayName)(data);
            data.callOriginalMethod();
            if (after) suppressErrors(after, '`after` callback of ' + internalModule[moduleFunction].displayName)(data);
        }
        if (once) cancel();
        return data.returnValue;
    };
    internalModule[moduleFunction].__monkeyPatched = true;
    internalModule[moduleFunction].displayName = 'patched ' + (internalModule[moduleFunction].displayName || moduleFunction);
    return cancel;
};

BDfunctionsDario.WebModules.findFunction = function (filter) {
    const req = webpackJsonp([], {"__extra_id__": (module, exports, req) => exports.default = req}, ["__extra_id__"]).default;
    delete req.c["__extra_id__"];
    for (let i in req.m) {
        if (req.m.hasOwnProperty(i)) {
            let m = req.m[i];
            if (m && m.__esModule && m.default && filter(m.default)) return {func:m.default,id:i};
            if (m && filter(m)) return {func:m,id:i,array:req.m};
        }
    }
    return null;
};

BDfunctionsDario.WebModules.patchFunction = function (newOutput, index) {
    const req = webpackJsonp([], {"__extra_id__": (module, exports, req) => exports.default = req}, ["__extra_id__"]).default;
    try {
        var output = {};
        var oldFunction = req.m[index];
        oldFunction(output,{},req);
        var oldOutput = output.exports;
        req.c[index] = {
            id: index,
            loaded: true,
            exports: (...params) => {return newOutput(...params) || oldOutput(...params);}
        };
        return function () {
            req.m[index] = oldFunction;
            req.c[index] = {
                id: index,
                loaded: true,
                exports: oldOutput
            };
        };
    }
    catch (err) {
        console.warn("BDfunctionsDario: Could not patch Function. Error: " + err);
    }
};

BDfunctionsDario.addOnSwitchListener = function (plugin) {
    if (typeof plugin.onSwitch === "function") {
        BDfunctionsDario.removeOnSwitchListener(plugin);
        if (!BDfunctionsDario.zacksFork()) {
            plugin.onSwitch = plugin.onSwitch.bind(plugin);
            require("electron").remote.getCurrentWindow().webContents.addListener("did-navigate-in-page", plugin.onSwitch);
        }
        var chatspacer = document.querySelector(BDfunctionsDario.dotCN.guildswrapper + " + * > " + BDfunctionsDario.dotCN.chatspacer);
        if (chatspacer) {
            plugin.onSwitchFix = new MutationObserver((changes, _) => {
                changes.forEach(
                    (change, i) => {
                        if (change.addedNodes) {
                            change.addedNodes.forEach((node) => {
                                if (node && node.classList && (node.classList.contains(BDfunctionsDario.disCN.chat) || node.classList.contains(BDfunctionsDario.disCN.nochannel))) {
                                    attributeObserver.observe(node, {attributes:true});
                                }
                            });
                        }
                    }
                );
            });
            plugin.onSwitchFix.observe(chatspacer, {childList:true});

            var attributeObserver = new MutationObserver((changes, _) => {
                changes.forEach(
                    (change, i) => {
                        if (change.target && change.target.classList && change.target.classList.contains(BDfunctionsDario.disCN.nochannel)) plugin.onSwitch();
                    }
                );
            });
            var chat = chatspacer.querySelector(BDfunctionsDario.dotCNC.chat + BDfunctionsDario.dotCN.nochannel);
            if (chat) attributeObserver.observe(chat, {attributes:true});
        }
    }
};

BDfunctionsDario.removeOnSwitchListener = function (plugin) {
    if (typeof plugin.onSwitch === "function") {
        if (!BDfunctionsDario.zacksFork()) {
            require("electron").remote.getCurrentWindow().webContents.removeListener("did-navigate-in-page", plugin.onSwitch);
        }
        if (typeof plugin.onSwitchFix === "object") plugin.onSwitchFix.disconnect();
    }
};

BDfunctionsDario.addReloadListener = function (plugin) {
    if (typeof plugin.initialize === "function") {
        BDfunctionsDario.removeReloadListener(plugin);
        var appwindow = document.querySelector(BDfunctionsDario.dotCN.app);
        if (appwindow) {
            plugin.reloadFix = new MutationObserver((changes, _) => {
                changes.forEach(
                    (change, i) => {
                        if (change.addedNodes) {
                            change.addedNodes.forEach((node) => {
                                if (node && node.classList && node.classList.contains(BDfunctionsDario.disCN.appold)) {
                                    if (window.PluginUpdates && window.PluginUpdates.observer) {
                                        window.PluginUpdates.observer.disconnect();
                                        delete window.PluginUpdates.observer;
                                    }
                                    plugin.appReload = true;
                                    plugin.initialize();
                                }
                            });
                        }
                    }
                );
            });
            plugin.reloadFix.observe(appwindow, {childList:true});
        }
    }
};

BDfunctionsDario.removeReloadListener = function (plugin) {
    if (typeof plugin.initialize === "function" && typeof plugin.reloadFix === "object") {
        plugin.reloadFix.disconnect();
    }
};

BDfunctionsDario.addSettingsButtonListener = function (plugin) {
    if (BDfunctionsDario.isBDv2() && typeof plugin.getSettingsPanel === "function") {
        BDfunctionsDario.removeSettingsButtonListener(plugin);
        BDfunctionsDario.appendSettingsButton(plugin);
        var bdsettings = document.querySelector(".bd-content-region > .bd-content");
        if (bdsettings) {
            plugin.settingsButtonObserver = new MutationObserver((changes, _) => {
                changes.forEach(
                    (change, i) => {
                        if (change.addedNodes) {
                            change.addedNodes.forEach((node) => {
                                if (node.tagName && node.classList.contains("active")) {
                                    BDfunctionsDario.appendSettingsButton(plugin);
                                }
                            });
                        }
                    }
                );
            });
            plugin.settingsButtonObserver.observe(bdsettings, {childList:true});
        }
    }
};

BDfunctionsDario.appendSettingsButton = function (plugin) {
    let plugincard = document.querySelector(`.bd-card[data-plugin-id=${plugin.id}]`);
    if (plugincard) {
        let settingsbutton = BDfunctionsDario.$(`<div class="DevilBro-settingsbutton bd-button"><span class="bd-material-design-icon"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path></svg></span></div>`);
        BDfunctionsDario.$(settingsbutton)
            .on("mouseenter.BDfunctionsDarioSettingsButtonListener", (e) => {BDfunctionsDario.createTooltip("Settings", e.currentTarget, {type:"top"});})
            .on("click.BDfunctionsDarioSettingsButtonListener", (e) => {
                var settingsModalMarkup =
                    `<span class="DevilBro-modal DevilBro-settingsmodal ${plugin.id}-settingsmodal">
						<div class="${BDfunctionsDario.disCN.backdrop}"></div>
							<div class="${BDfunctionsDario.disCN.modal}">
								<div class="${BDfunctionsDario.disCN.modalinner}">
									<div class="${BDfunctionsDario.disCNS.modalsub + BDfunctionsDario.disCN.modalsizemedium}">
										<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.aligncenter + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCN.modalheader}" style="flex: 0 0 auto;">
											<div class="${BDfunctionsDario.disCN.flexchild}" style="flex: 1 1 auto;">
												<h4 class="${BDfunctionsDario.disCNS.h4 + BDfunctionsDario.disCNS.headertitle + BDfunctionsDario.disCNS.size16 + BDfunctionsDario.disCNS.height20 + BDfunctionsDario.disCNS.weightsemibold + BDfunctionsDario.disCNS.defaultcolor + BDfunctionsDario.disCNS.h4defaultmargin + BDfunctionsDario.disCN.marginreset}">${plugin.name} Settings</h4>
											</div>
											<svg class="${BDfunctionsDario.disCNS.modalclose + BDfunctionsDario.disCN.flexchild}" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">
												<g fill="none" fill-rule="evenodd">
													<path d="M0 0h12v12H0"></path>
													<path class="fill" fill="currentColor" d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"></path>
												</g>
											</svg>
										</div>
									<div class="${BDfunctionsDario.disCNS.scrollerwrap + BDfunctionsDario.disCNS.modalcontent + BDfunctionsDario.disCNS.scrollerthemed + BDfunctionsDario.disCN.themeghosthairline}">
										<div class="${BDfunctionsDario.disCNS.scroller + BDfunctionsDario.disCN.modalsubinner}"></div>
									</div>
								</div>
							</div>
						</div>
					</span>`;
                var settingsModal = BDfunctionsDario.$(settingsModalMarkup);
                settingsModal.find(BDfunctionsDario.dotCN.modalsubinner).append(plugin.getSettingsPanel());
                if (typeof plugin.onSettingsClosed === "function") {
                    settingsModal.on("click.BDfunctionsDarioCloseListener", BDfunctionsDario.dotCNC.modalclose + BDfunctionsDario.dotCN.backdrop, () => {plugin.onSettingsClosed();});
                }
                BDfunctionsDario.appendModal(settingsModal);
            })
            .insertBefore(plugincard.querySelector(".bd-button"));
    }
};

BDfunctionsDario.removeSettingsButtonListener = function (plugin) {
    if (BDfunctionsDario.isBDv2() && typeof plugin.settingsButtonObserver === "object") {
        BDfunctionsDario.$(`.bd-card[data-plugin-id=${plugin.id}] .DevilBro-settingsbutton`).remove();
        plugin.settingsButtonObserver.disconnect();
    }
};

BDfunctionsDario.getLanguageTable = function (lang) {
    var ti = {
        "bg":		"холандски",		//bulgarian
        "cs":		"Nizozemština",		//czech
        "da":		"Hollandsk",		//danish
        "de":		"Niederländisch",	//german
        "el":		"Ολλανδικά",		//greek
        "en-GB":	"Dutch",			//english
        "en-US":	"Dutch",			//english
        "es":		"Holandés",			//spanish
        "fi":		"hollanti",			//finnish
        "fr":		"Néerlandais",		//french
        "hr":		"Nizozemski",		//croatian
        "hu":		"Holland",			//hungarian
        "it":		"Olandese",			//italian
        "ja":		"オランダ語",			//japanese
        "ko":		"네덜란드어",			//korean
        "lt":		"Olandų",			//lithuanian
        "nl":		"Nederlands",		//dutch
        "no":		"Nederlandsk",		//norwegian
        "pl":		"Holenderski",		//polish
        "pt-BR":	"Holandês",			//portuguese(brazil)
        "ro":		"Olandeză",			//romanian
        "ru":		"Голландский",		//russian
        "sv":		"Holländska",		//swedish
        "tr":		"Flemenkçe",		//turkish
        "uk":		"Нідерландська",	//ukranian
        "zh-CN":	"荷兰语",			//chinese(china)
        "zh-TW":	"荷蘭文"				//chinese(traditional)
    };
    lang = lang ? lang : BDfunctionsDario.getDiscordLanguage().id;
    return BDfunctionsDario.WebModules.find(function (m) {
        return m.nl === ti[lang];
    });
};

BDfunctionsDario.LanguageStrings = new Proxy(Object.create(null), {
    get: function() {
        var languageStrings = BDfunctionsDario.getLanguageTable();
        if (!languageStrings[arguments[1]]) {
            var englishStrings = BDfunctionsDario.getLanguageTable("en-US");
            if (!englishStrings[arguments[1]]) {
                throw new Error(arguments[1] + " not found in BDfunctionsDario.getLanguageTable");
            }
            return englishStrings[arguments[1]];
        }
        return languageStrings[arguments[1]];
    }
});

BDfunctionsDario.equals = function (check1, check2, compareOrder) {
    var depth = -1;

    if (compareOrder === undefined || typeof compareOrder !== "boolean") compareOrder = false;

    return recurseEquals(check1, check2);

    function recurseEquals (ele1, ele2) {
        depth++;
        var result = true;
        if (depth > 1000) 							result = null;
        else {
            if (typeof ele1 != typeof ele2) 		result = false;
            else if (typeof ele1 === "undefined") 	result = true;
            else if (typeof ele1 === "symbol") 		result = true;
            else if (typeof ele1 === "boolean") 	result = (ele1 == ele2);
            else if (typeof ele1 === "string") 		result = (ele1 == ele2);
            else if (typeof ele1 === "number") {
                if (isNaN(ele1) || isNaN(ele2)) 	result = (isNaN(ele1) == isNaN(ele2));
                else 								result = (ele1 == ele2);
            }
            else if (!ele1 && !ele2) 				result = true;
            else if (!ele1 || !ele2) 				result = false;
            else if (typeof ele1 === "function" || typeof ele1 === "object") {
                var keys1 = Object.getOwnPropertyNames(ele1);
                var keys2 = Object.getOwnPropertyNames(ele2);
                if (keys1.length != keys2.length) 	result = false;
                else {
                    for (var i = 0; result === true && i < keys1.length; i++) {
                        if (compareOrder) 			result = recurseEquals(ele1[keys1[i]], ele2[keys2[i]]);
                        else						result = recurseEquals(ele1[keys1[i]], ele2[keys1[i]]);
                    }
                }
            }
        }
        depth--;
        return result;
    }
};

BDfunctionsDario.filterObject = function (obj, predicate) {
    return Object.keys(obj).filter(key => predicate(obj[key])).reduce((res, key) => (res[key] = obj[key], res), {});
};

BDfunctionsDario.isObjectEmpty = function (obj) {
    return typeof obj !== "object" || Object.getOwnPropertyNames(obj).length == 0;
};

BDfunctionsDario.removeFromArray = function (array, value) {
    if (!array || !value || !Array.isArray(array) || !array.includes(value)) return;
    array.splice(array.indexOf(value), 1);
};

(() => {
    var pulling = setInterval(() => {
        var UserActions = BDfunctionsDario.WebModules.findByProperties(["getCurrentUser"]);
        var userData = UserActions && typeof UserActions.getCurrentUser == "function" ? UserActions.getCurrentUser() : null;
        if (userData && !BDfunctionsDario.isObjectEmpty(userData)) {
            clearInterval(pulling);
            BDfunctionsDario.myData = userData;
        }
    },100);
})();

BDfunctionsDario.getUserStatus = function (id = BDfunctionsDario.myData.id) {
    id = typeof id == "number" ? id.toFixed() : id;
    var ActivityModule = BDfunctionsDario.WebModules.findByProperties(["getActivity","getStatuses"]);
    var StreamModule = BDfunctionsDario.WebModules.findByProperties(["isStreaming"]);
    return StreamModule.isStreaming(ActivityModule.getActivity(id)) ? "streaming" : ActivityModule.getStatus(id);
};

BDfunctionsDario.getUserAvatar = function (id = BDfunctionsDario.myData.id) {
    id = typeof id == "number" ? id.toFixed() : id;
    var UserStore = BDfunctionsDario.WebModules.findByProperties(["getUser","getUsers"]);
    var IconUtils = BDfunctionsDario.WebModules.findByProperties(["getUserAvatarURL"]);
    var user = UserStore.getUser(id);
    return ((user.avatar ? "" : "https://discordapp.com") + IconUtils.getUserAvatarURL(user)).split("?size")[0];
};

BDfunctionsDario.getChannelAvatar = function (id) {
    id = typeof id == "number" ? id.toFixed() : id;
    var ChannelStore = BDfunctionsDario.WebModules.findByProperties(["getChannel","getChannels"]);
    var IconUtils = BDfunctionsDario.WebModules.findByProperties(["getChannelIconURL"]);
    var channel = ChannelStore.getChannel(id);
    return ((channel.icon ? "" : "https://discordapp.com") + IconUtils.getChannelIconURL(channel)).split("?size")[0];
};

BDfunctionsDario.readServerList = function () {
    var server, id, info, foundServers = [], GuildStore = BDfunctionsDario.WebModules.findByProperties(["getGuilds"]);
    for (server of document.querySelectorAll(BDfunctionsDario.dotCN.guildseparator + " ~ " + BDfunctionsDario.dotCN.guild)) {
        id = BDfunctionsDario.getIdOfServer(server);
        info = id ? GuildStore.getGuild(id) : null;
        if (info) foundServers.push(Object.assign({},info,{div:server,data:info}));
    }
    return foundServers;
};

BDfunctionsDario.readUnreadServerList = function (servers) {
    var serverObj, foundServers = [];
    for (serverObj of (servers === undefined || !Array.isArray(servers) ? BDfunctionsDario.readServerList() : servers)) {
        if (serverObj && serverObj.div && (serverObj.div.classList.contains(BDfunctionsDario.disCN.guildunread) || serverObj.div.querySelector(BDfunctionsDario.dotCN.badge))) foundServers.push(serverObj);
    }
    return foundServers;
};

BDfunctionsDario.getSelectedServer = function () {
    var serverObj, id, info;
    id = BDfunctionsDario.WebModules.findByProperties(["getLastSelectedGuildId"]).getGuildId();
    info = id ? BDfunctionsDario.WebModules.findByProperties(["getGuilds"]).getGuild(id) : null;
    if (info) {
        serverObj = BDfunctionsDario.getDivOfServer(id);
        return serverObj ? serverObj : Object.assign({},info,{div:null,data:info});
    }
    else return null;
};

BDfunctionsDario.getIdOfServer = function (server) {
    if (!server || !server.classList || !server.classList.contains(BDfunctionsDario.disCN.guild) || server.classList.contains("copy") || server.classList.contains("folder")) return;
    var switchlink, id;
    switchlink = server.querySelector("a");
    id = switchlink && switchlink.href ? switchlink.href.split("/") : null;
    return id && id.length > 3 && !isNaN(parseInt(id[4])) ? id[4] : null;
};

BDfunctionsDario.getDivOfServer = function (id) {
    for (var serverObj of BDfunctionsDario.readServerList()) {
        if (serverObj && serverObj.id == id) return serverObj;
    }
    return null;
};

BDfunctionsDario.readChannelList = function () {
    var channel, info, foundChannels = [], ChannelStore = BDfunctionsDario.WebModules.findByProperties(["getChannels"]);
    for (channel of document.querySelectorAll(BDfunctionsDario.dotCNC.channelcontainerdefault + BDfunctionsDario.dotCN.categorycontainerdefault)) {
        info = BDfunctionsDario.getKeyInformation({"node":channel, "key":"channel"});
        if (info) info = ChannelStore.getChannel(info.id);
        if (info) foundChannels.push(Object.assign({},info,{div:channel,data:info}));
    }
    for (channel of document.querySelectorAll(BDfunctionsDario.dotCN.dmchannel + BDfunctionsDario.dotCN.dmchannelprivate)) {
        info = BDfunctionsDario.getKeyInformation({"node":channel, "key":"user"}) || BDfunctionsDario.getKeyInformation({"node":channel, "key":"channel"});
        if (info) info = ChannelStore.getChannel(ChannelStore.getDMFromUserId(info.id)) || ChannelStore.getChannel(info.id)
        if (info) foundChannels.push(Object.assign({},info,{div:channel,data:info}));
    }
    return foundChannels;
};

BDfunctionsDario.getSelectedChannel = function () {
    var channelObj, id, info;
    id = BDfunctionsDario.WebModules.findByProperties(["getLastSelectedChannelId"]).getChannelId();
    info = id ? BDfunctionsDario.WebModules.findByProperties(["getChannels"]).getChannel(id) : null;
    if (info) {
        channelObj = BDfunctionsDario.getDivOfChannel(id);
        return channelObj ? channelObj : Object.assign({},info,{div:null,data:info});
    }
    else return null;
};

BDfunctionsDario.getDivOfChannel = function (id) {
    for (var channelObj of BDfunctionsDario.readChannelList()) {
        if (channelObj && channelObj.id == id) return channelObj;
    }
    return null;
};

BDfunctionsDario.readDmList = function () {
    var dm, info, foundDMs = [], ChannelStore = BDfunctionsDario.WebModules.findByProperties(["getChannels"]);
    for (dm of document.querySelectorAll(BDfunctionsDario.dotCN.dms + " > " + BDfunctionsDario.dotCN.guild)) {
        id = BDfunctionsDario.getIdOfDM(dm);
        info = id ? ChannelStore.getChannel(id) : null;
        if (info) foundDMs.push(Object.assign({},info,{div:dm,data:info}));
    }
    return foundDMs;
};

BDfunctionsDario.getIdOfDM = function (dm) {
    if (!dm || !dm.classList || !dm.classList.contains(BDfunctionsDario.disCN.guild) || dm.classList.contains("copy") || dm.classList.contains("folder")) return;
    if (!dm.parentElement || !dm.parentElement.classList || !dm.parentElement.classList.contains(BDfunctionsDario.disCN.dms)) return;
    var switchlink, id;
    switchlink = dm.querySelector("a");
    id = switchlink && switchlink.href ? switchlink.href.split("/") : null;
    return id && id.length > 3 && !isNaN(parseInt(id[5])) ? id[5] : null;
};

BDfunctionsDario.getDivOfDM = function (id) {
    for (var dmObj of BDfunctionsDario.readDmList()) {
        if (dmObj && dmObj.id == id) return dmObj;
    }
    return null;
};

BDfunctionsDario.saveAllData = function (settings, plugin, keyName) {
    if (!BDfunctionsDario.isBDv2()) {
        bdPluginStorage.set(typeof plugin === "string" ? plugin : plugin.getName(), keyName, settings);
    }
    else {
        let pluginid = typeof plugin === "string" ? plugin.toLowerCase() : null;
        let directory = pluginid ? (BDfunctionsDario.Plugins[pluginid] ? BDfunctionsDario.Plugins[pluginid].contentPath : null) : plugin.contentPath;
        if (!directory) return;
        let fs = require("fs");
        let filepath = require("path").join(directory, "settings.json");
        let data = fs.existsSync(filepath) ? JSON.parse(require("fs").readFileSync(filepath)) : {};
        data[keyName] = settings;
        fs.writeFileSync(filepath, JSON.stringify(data, null, "\t"));
    }
};

BDfunctionsDario.loadAllData = function (plugin, keyName) {
    if (!BDfunctionsDario.isBDv2()) {
        return bdPluginStorage.get(typeof plugin === "string" ? plugin : plugin.getName(), keyName) || {};
    }
    else {
        let pluginid = typeof plugin === "string" ? plugin.toLowerCase() : null;
        let directory = pluginid ? (BDfunctionsDario.Plugins[pluginid] ? BDfunctionsDario.Plugins[pluginid].contentPath : null) : plugin.contentPath;
        if (!directory) return {};
        let fs = require("fs");
        let filepath = require("path").join(directory, "settings.json");
        if (!fs.existsSync(filepath)) return {};
        let data = JSON.parse(require("fs").readFileSync(filepath));
        return data && typeof data[keyName] !== "undefined" ? data[keyName] : {};
    }
};

BDfunctionsDario.removeAllData = function (plugin, keyName) {
    if (!BDfunctionsDario.isBDv2()) {
        BDfunctionsDario.saveAllData({}, plugin, keyName);
    }
    else {
        let pluginid = typeof plugin === "string" ? plugin.toLowerCase() : null;
        let directory = pluginid ? (BDfunctionsDario.Plugins[pluginid] ? BDfunctionsDario.Plugins[pluginid].contentPath : null) : plugin.contentPath;
        if (!directory) return;
        let fs = require("fs");
        let filepath = require("path").join(directory, "settings.json");
        if (!fs.existsSync(filepath)) return;
        let data = JSON.parse(require("fs").readFileSync(filepath));
        delete data[keyName];
        fs.writeFileSync(filepath, JSON.stringify(data, null, "\t"));
    }
};

BDfunctionsDario.getAllData = function (plugin, keyName, compareObject) {
    if (!plugin.defaults || !plugin.defaults[keyName]) return {};
    let oldData = BDfunctionsDario.loadAllData(plugin, keyName), newData = {}, saveData = false;
    for (let key in plugin.defaults[keyName]) {
        if (oldData[key] == null) {
            newData[key] = plugin.defaults[keyName][key].value;
            saveData = true;
        }
        else {
            newData[key] = oldData[key];
        }
        if (typeof compareObject === "object" && compareObject && typeof compareObject[newData[key]] === "undefined") {
            newData[key] = Object.keys(compareObject)[0];
            saveData = true;
        }
    }
    if (saveData) BDfunctionsDario.saveAllData(newData, plugin, keyName);
    return newData;
};

BDfunctionsDario.saveData = function (id, value, plugin, keyName) {
    let data = BDfunctionsDario.loadAllData(plugin, keyName);

    data[id] = value;

    BDfunctionsDario.saveAllData(data, plugin, keyName);
};

BDfunctionsDario.loadData = function (id, plugin, keyName) {
    let data = BDfunctionsDario.loadAllData(plugin, keyName);

    let value = data[id];

    return value === undefined ? null : value;
};

BDfunctionsDario.removeData = function (id, plugin, keyName) {
    let data = BDfunctionsDario.loadAllData(plugin, keyName);

    delete data[id];

    BDfunctionsDario.saveAllData(data, plugin, keyName);
};

BDfunctionsDario.getData = function (id, plugin, keyName, compareObject) {
    let data = BDfunctionsDario.getAllData(plugin, keyName, compareObject);

    let value = data[id];

    return value === undefined ? null : value;
};

BDfunctionsDario.appendWebScript = function (filepath) {
    if (!document.head.querySelector("bd-head bd-styles")) BDfunctionsDario.$("head").append(`<bd-head><bd-styles></bd-styles></bd-head>`);

    var ele = document.createElement("script");
    ele.setAttribute("src", filepath);

    document.head.querySelector("bd-head bd-styles").appendChild(ele);
};

BDfunctionsDario.removeWebScript = function (cssname) {
    document.head.querySelectorAll('bd-head bd-styles link[src="' + filepath + '"]').forEach((ele) => {ele.remove();});
};

BDfunctionsDario.appendWebStyle = function (filepath) {
    if (!document.head.querySelector("bd-head bd-styles")) BDfunctionsDario.$("head").append(`<bd-head><bd-styles></bd-styles></bd-head>`);

    BDfunctionsDario.removeWebStyle(filepath);

    var ele = document.createElement("link");
    ele.setAttribute("type", "text/css");
    ele.setAttribute("rel", "Stylesheet");
    ele.setAttribute("href", filepath);

    document.head.querySelector("bd-head bd-styles").appendChild(ele);
};

BDfunctionsDario.removeWebStyle = function (cssname) {
    document.head.querySelectorAll('bd-head bd-styles link[href="' + filepath + '"]').forEach((ele) => {ele.remove();});
};

BDfunctionsDario.appendLocalStyle = function (cssname, css) {
    if (!document.head.querySelector("bd-head bd-styles")) BDfunctionsDario.$("head").append(`<bd-head><bd-styles></bd-styles></bd-head>`);

    BDfunctionsDario.removeLocalStyle(cssname);

    var ele = document.createElement("style");
    ele.id = cssname + "CSS";
    ele.innerText = css;

    document.head.querySelector("bd-head bd-styles").appendChild(ele);
};

BDfunctionsDario.removeLocalStyle = function (cssname) {
    document.head.querySelectorAll('bd-head bd-styles style[id="' + cssname + 'CSS"]').forEach((ele) => {ele.remove();});
};

BDfunctionsDario.sortArrayByKey = function (array, key, except) {
    if (except === undefined) except = null;
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        if (x != except) {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
    });
};

BDfunctionsDario.highlightText = function (string, searchstring) {
    if (searchstring.length < 1) return string;
    var added = 0, copy = string, wrapperopen = `<span class="${BDfunctionsDario.disCN.highlight}">`, wrapperclose = `</span>`;
    BDfunctionsDario.getAllIndexes(string.toUpperCase(), searchstring.toUpperCase()).forEach((start) => {
        let offset = added*(wrapperopen.length + wrapperclose.length);
        start = start + offset;
        let end = start + searchstring.length;
        let openIndexes = [-1].concat(BDfunctionsDario.getAllIndexes(string.substring(0, start), "<"));
        let closedIndexes = [-1].concat(BDfunctionsDario.getAllIndexes(string.substring(0, start), ">"));
        if (openIndexes[openIndexes.length-1] > closedIndexes[closedIndexes.length-1]) return;
        string = string.substring(0, start) + wrapperopen + string.substring(start, end) + wrapperclose + string.substring(end);
        added++;
    });
    return string ? string : copy;
};

BDfunctionsDario.getAllIndexes = function (array, val) {
    var indexes = [], i = -1;
    while ((i = array.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
};

BDfunctionsDario.formatBytes = function (a, b) {
    if (a == 0) return "0 Bytes";
    if (a == 1) return "1 Byte";
    var c = 1024, d = b < 1 ? 0 : b > 20 ? 20: b || 2, e = ["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"], f = Math.floor(Math.log(a)/Math.log(c));
    return parseFloat((a/Math.pow(c,f)).toFixed(d)) + " " + e[f];
};

BDfunctionsDario.color2COMP = function (color) {
    if (color) {
        switch (BDfunctionsDario.checkColorType(color)) {
            case "comp":
                return color;
            case "rgb":
                return color.replace(new RegExp(" ", "g"), "").slice(4, -1).split(",");
            case "hsl":
                var hsl = color.replace(new RegExp(" ", "g"), "").slice(4, -1).split(",");
                var r, g, b, i, f, p, q, t;
                var h = hsl[0]/360, s = hsl[1], l = hsl[2];
                i = Math.floor(h * 6);
                f = h * 6 - i;
                p = l * (1 - s);
                q = l * (1 - f * s);
                t = l * (1 - (1 - f) * s);
                switch (i % 6) {
                    case 0: r = l, g = t, b = p; break;
                    case 1: r = q, g = l, b = p; break;
                    case 2: r = p, g = l, b = t; break;
                    case 3: r = p, g = q, b = l; break;
                    case 4: r = t, g = p, b = l; break;
                    case 5: r = l, g = p, b = q; break;
                }
                return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
            case "hex":
                var result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
                return [parseInt(result[1], 16).toString(),parseInt(result[2], 16).toString(),parseInt(result[3], 16).toString()];
            default:
                return null;
        }
    }
    return null;
};

BDfunctionsDario.color2RGB = function (color) {
    if (color) {
        switch (BDfunctionsDario.checkColorType(color)) {
            case "comp":
                return "rgb(" + (color[0]) + ", " + (color[1]) + ", " + (color[2]) + ")";
            case "rgb":
                return color;
            case "hsl":
                return BDfunctionsDario.color2RGB(BDfunctionsDario.color2COMP(color));
            case "hex":
                return BDfunctionsDario.color2RGB(BDfunctionsDario.color2COMP(color));
            default:
                return null;
        }
    }
    return null;
};

BDfunctionsDario.color2HSL = function (color) {
    if (color) {
        switch (BDfunctionsDario.checkColorType(color)) {
            case "comp":
                var r = parseInt(color[0]), g = parseInt(color[1]), b = parseInt(color[2]);
                var max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min, h, s = (max === 0 ? 0 : d / max), l = max / 255;
                switch (max) {
                    case min: h = 0; break;
                    case r: h = (g - b) + d * (g < b ? 6 : 0); h /= 6 * d; break;
                    case g: h = (b - r) + d * 2; h /= 6 * d; break;
                    case b: h = (r - g) + d * 4; h /= 6 * d; break;
                }
                return "hsl(" + Math.round(h*360) + ", " + s + ", " + l + ")";
            case "rgb":
                return BDfunctionsDario.color2HSL(BDfunctionsDario.color2COMP(color));
            case "hsl":
                return color;
            case "hex":
                return BDfunctionsDario.color2HSL(BDfunctionsDario.color2COMP(color));
            default:
                return null;
        }
    }
    return null;
};

BDfunctionsDario.color2HEX = function (color) {
    if (color) {
        switch (BDfunctionsDario.checkColorType(color)) {
            case "comp":
                return ("#" + (0x1000000 + ((color[2]) | ((color[1]) << 8) | ((color[0]) << 16))).toString(16).slice(1)).toUpperCase();
            case "rgb":
                return BDfunctionsDario.color2HEX(BDfunctionsDario.color2COMP(color));
            case "hsl":
                return BDfunctionsDario.color2HEX(BDfunctionsDario.color2COMP(color));
            case "hex":
                return color;
            default:
                return null;
        }
    }
    return null;
};

BDfunctionsDario.colorCHANGE = function (color, value) {
    if (color) {
        var comp = BDfunctionsDario.color2COMP(color);
        if (!comp || value === undefined || typeof value != "number") return null;
        comp = comp.map(Number);
        comp = [(comp[0]+value).toString(),(comp[1]+value).toString(),(comp[2]+value).toString()];
        switch (BDfunctionsDario.checkColorType(color)) {
            case "comp":
                return comp;
            case "rgb":
                return BDfunctionsDario.color2RGB(comp);
            case "hsl":
                return BDfunctionsDario.color2HSL(comp);
            case "hex":
                return BDfunctionsDario.color2HEX(comp);
            default:
                return null;
        }
    }
    return null;
};

BDfunctionsDario.colorCOMPARE = function (color1, color2) {
    if (color1 && color2) {
        color1 = BDfunctionsDario.color2RGB(color1);
        color2 = BDfunctionsDario.color2RGB(color2);
        return BDfunctionsDario.equals(color1,color2);
    }
    return null;
};

BDfunctionsDario.colorINV = function (color, conv) {
    if (color) {
        var type = BDfunctionsDario.checkColorType(color);
        if (type) {
            if (conv === undefined) {
                var inv = BDfunctionsDario.color2COMP(color);
                inv = [(255-inv[0]), (255-inv[1]), (255-inv[2])];
                switch (BDfunctionsDario.checkColorType(color)) {
                    case "comp":
                        return inv;
                    case "rgb":
                        return BDfunctionsDario.color2RGB(inv);
                    case "hsl":
                        return BDfunctionsDario.color2HSL(inv);
                    case "hex":
                        return BDfunctionsDario.color2HEX(inv);
                }
            }
            else {
                switch (conv.toLowerCase()) {
                    case "comp":
                        return BDfunctionsDario.colorINV(BDfunctionsDario.color2COMP(color));
                    case "rgb":
                        return BDfunctionsDario.colorINV(BDfunctionsDario.color2RGB(color));
                    case "hsl":
                        return BDfunctionsDario.colorINV(BDfunctionsDario.color2HSL(color));
                    case "hex":
                        return BDfunctionsDario.colorINV(BDfunctionsDario.color2HEX(color));
                    default:
                        return null;
                }
            }
        }
    }
    return null;
};

BDfunctionsDario.checkColorType = function (color) {
    if (color) {
        if (typeof color === "object" && color.length == 3) {
            return "comp";
        }
        else if (typeof color === "string" && color.indexOf("rgb(") == 0) {
            return "rgb";
        }
        else if (typeof color === "string" && color.indexOf("hsl(") == 0) {
            return "hsl";
        }
        else if (typeof color === "string" && color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)) {
            return "hex";
        }
    }
    return null;
};

BDfunctionsDario.setInnerText = function (div, text) {
    if (!div) return;
    var textNode = BDfunctionsDario.$(div).contents().filter(function () {return this.nodeType == Node.TEXT_NODE;})[0];
    if (textNode) textNode.textContent = text;
};

BDfunctionsDario.getInnerText = function (div) {
    if (!div) return;
    var textNode = BDfunctionsDario.$(div).contents().filter(function () {return this.nodeType == Node.TEXT_NODE;})[0];
    return textNode ? textNode.textContent : undefined;
};

BDfunctionsDario.encodeToHTML = function (string) {
    var ele = document.createElement("div");
    ele.innerText = string;
    return ele.innerHTML;
};

BDfunctionsDario.regEscape = function (string) {
    return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};

BDfunctionsDario.insertNRST = function (string) {
    return string
        .replace(new RegExp(BDfunctionsDario.regEscape("\\n"),"g"),"\n")
        .replace(new RegExp(BDfunctionsDario.regEscape("\\r"),"g"),"\r")
        .replace(new RegExp(BDfunctionsDario.regEscape("\\s"),"g")," ")
        .replace(new RegExp(BDfunctionsDario.regEscape("\\t"),"g"),"\t");
};

BDfunctionsDario.clearReadNotifications = function (servers) {
    var GuildActions = BDfunctionsDario.WebModules.findByProperties(["markGuildAsRead"]);
    if (!servers || !GuildActions) return;
    servers = Array.isArray(servers) ? servers : Array.from(servers);
    servers.forEach((serverObj, i) => {
        if (!serverObj || !serverObj.id) return;
        GuildActions.markGuildAsRead(serverObj.id);
    });
};

BDfunctionsDario.triggerSend = function (textarea) {
    setImmediate(() => {
        var press = new KeyboardEvent("keypress", {key: "Enter", code: "Enter", which: 13, keyCode: 13, bubbles: true});
        Object.defineProperty(press, "keyCode", {value: 13});
        Object.defineProperty(press, "which", {value: 13});
        textarea.dispatchEvent(press);
    });
};

BDfunctionsDario.initElements = function (container) {
    BDfunctionsDario.$(container)
        .off(".BDfunctionsDarioinitElements")
        .on("click.BDfunctionsDarioinitElements", BDfunctionsDario.dotCN.switchinner, (e) => {
            var checked = e.currentTarget.checked;
            BDfunctionsDario.$(e.currentTarget.parentElement)
                .toggleClass(BDfunctionsDario.disCN.switchvaluechecked, checked)
                .toggleClass(BDfunctionsDario.disCN.switchvalueunchecked, !checked);
        })
        .on("click.BDfunctionsDarioinitElements", BDfunctionsDario.dotCNS.checkboxwrapper + BDfunctionsDario.dotCN.checkboxinput, (e) => {
            var checked = e.currentTarget.checked;
            var checkBoxStyle = e.currentTarget.parentElement.querySelector(BDfunctionsDario.dotCN.checkbox);
            BDfunctionsDario.$(checkBoxStyle)
                .toggleClass(BDfunctionsDario.disCN.checkboxchecked, checked)
                .css("background-color", checked ? "rgb(67, 181, 129)" : "")
                .css("border-color", checked ? "rgb(67, 181, 129)" : "")
                .find("polyline")
                .attr("stroke", checked ? "#ffffff" : "transparent");
        })
        .on("click.BDfunctionsDarioinitElements", ".file-navigator", (e) => {
            var filenavigator = e.currentTarget.querySelector("input[type='file']");
            if (filenavigator) filenavigator.click();
        })
        .on("change.BDfunctionsDarioinitElements", "input[type='file']", (e) => {
            var filenavigator = e.currentTarget;
            var fileoutput = e.currentTarget.parentElement.parentElement.querySelector("input[type='text']");
            var file = e.currentTarget.files[0];
            if (file && fileoutput) fileoutput.value = file.path;
        })
        .on("keyup.BDfunctionsDarioinitElements", BDfunctionsDario.dotCNS.searchbar + BDfunctionsDario.dotCN.searchbarinput, (e) => {
            var input = e.currentTarget;
            input.parentElement.querySelector(BDfunctionsDario.dotCN.searchbareyeglass).classList.toggle(BDfunctionsDario.disCN.searchbarvisible, !input.value);
            input.parentElement.querySelector(BDfunctionsDario.dotCN.searchbarclear).classList.toggle(BDfunctionsDario.disCN.searchbarvisible, input.value);
        })
        .on("click.BDfunctionsDarioinitElements", BDfunctionsDario.dotCNS.searchbar + BDfunctionsDario.dotCN.searchbarclear + BDfunctionsDario.dotCN.searchbarvisible, (e) => {
            var clear = e.currentTarget;
            clear.parentElement.parentElement.querySelector(BDfunctionsDario.dotCN.searchbarinput).value = "";
            clear.parentElement.querySelector(BDfunctionsDario.dotCN.searchbareyeglass).classList.add(BDfunctionsDario.disCN.searchbarvisible);
            clear.classList.remove(BDfunctionsDario.disCN.searchbarvisible);
        })
        .on("click.BDfunctionsDarioinitElements", ".numberinput-button-up", (e) => {
            var input = e.currentTarget.parentElement.parentElement.querySelector("input");
            var max = parseInt(input.getAttribute("max"));
            var newvalue = parseInt(input.value) + 1;
            if (isNaN(max) || (!isNaN(max) && newvalue <= max)) {
                e.currentTarget.parentElement.classList.add("pressed");
                clearTimeout(e.currentTarget.parentElement.pressedTimeout);
                input.value = newvalue;
                BDfunctionsDario.$(input).trigger("input");
                e.currentTarget.parentElement.pressedTimeout = setTimeout(() => {
                    e.currentTarget.parentElement.classList.remove("pressed");
                },3000);
            }
        })
        .on("click.BDfunctionsDarioinitElements", ".numberinput-button-down", (e) => {
            var input = e.currentTarget.parentElement.parentElement.querySelector("input");
            var min = parseInt(input.getAttribute("min"));
            var newvalue = parseInt(input.value) - 1;
            if (isNaN(min) || (!isNaN(min) && newvalue >= min)) {
                e.currentTarget.parentElement.classList.add("pressed");
                clearTimeout(e.currentTarget.parentElement.pressedTimeout);
                input.value = newvalue;
                BDfunctionsDario.$(input).trigger("input");
                e.currentTarget.parentElement.pressedTimeout = setTimeout(() => {
                    e.currentTarget.parentElement.classList.remove("pressed");
                },3000);
            }
        })
        .on("click.BDfunctionsDarioinitElements", ".tab", (e) => {
            BDfunctionsDario.$(container).find(".tab-content.open").removeClass("open");
            BDfunctionsDario.$(container).find(".tab.selected").removeClass("selected");
            BDfunctionsDario.$(container).find(".tab-content[tab='" + BDfunctionsDario.$(e.currentTarget).attr("tab") + "']").addClass("open");
            BDfunctionsDario.$(e.currentTarget).addClass("selected");
        });

    BDfunctionsDario.$(container).find(".tab").first().addClass("selected");
    BDfunctionsDario.$(container).find(".tab-content").first().addClass("open");

    var libraryStrings = BDfunctionsDario.getLibraryStrings();
    BDfunctionsDario.$(container).find(".btn-save " + BDfunctionsDario.dotCN.buttoncontents).text(libraryStrings.btn_save_text);
    BDfunctionsDario.$(container).find(".btn-cancel " + BDfunctionsDario.dotCN.buttoncontents).text(libraryStrings.btn_cancel_text);
    BDfunctionsDario.$(container).find(".btn-all " + BDfunctionsDario.dotCN.buttoncontents).text(libraryStrings.btn_all_text);
    BDfunctionsDario.$(container).find(".btn-add " + BDfunctionsDario.dotCN.buttoncontents).text(libraryStrings.btn_add_text);
    BDfunctionsDario.$(container).find(".btn-ok " + BDfunctionsDario.dotCN.buttoncontents).text(libraryStrings.btn_ok_text);
    BDfunctionsDario.$(container).find(".file-navigator " + BDfunctionsDario.dotCN.buttoncontents).text(libraryStrings.file_navigator_text);
    BDfunctionsDario.$(container).find(BDfunctionsDario.dotCNS.searchbar + BDfunctionsDario.dotCN.searchbarinput).attr("placeholder", libraryStrings.search_placeholder);

    BDfunctionsDario.$(container)
        .find(BDfunctionsDario.dotCN.switchinner).each((_, switchinner) => {
        BDfunctionsDario.$(switchinner.parentElement)
            .toggleClass(BDfunctionsDario.disCN.switchvaluechecked, switchinner.checked)
            .toggleClass(BDfunctionsDario.disCN.switchvalueunchecked, !switchinner.checked);
    });

    BDfunctionsDario.$(container)
        .find(BDfunctionsDario.dotCNS.checkboxwrapper + BDfunctionsDario.dotCN.checkboxinput).each((_, checkBox) => {
        if (checkBox.checked) {
            BDfunctionsDario.$(checkBox.parentElement.querySelector(BDfunctionsDario.dotCN.checkbox))
                .addClass(BDfunctionsDario.disCN.checkboxchecked)
                .css("background-color", "rgb(67, 181, 129)")
                .css("border-color", "rgb(67, 181, 129)")
                .find("polyline")
                .attr("stroke", "#ffffff");
        }
    });
};

BDfunctionsDario.appendModal = function (modal) {
    let id = Math.round(Math.random()*10000000000000000);
    var container = document.querySelector(BDfunctionsDario.dotCN.app + " ~ [class^='theme']:not([class*='popouts'])");
    if (!container) return;

    BDfunctionsDario.$(modal)
        .appendTo(container)
        .on("click", BDfunctionsDario.dotCNC.backdrop + BDfunctionsDario.dotCNC.modalclose + ".btn-save, .btn-send, .btn-cancel, .btn-ok", () => {
            BDfunctionsDario.$(document).off("keydown.BDfunctionsDariomodalEscapeListener" + id);
            BDfunctionsDario.$(modal).addClass("closing");
            setTimeout(() => {modal.remove();}, 300);
        });


    BDfunctionsDario.initElements(modal);

    BDfunctionsDario.$(document)
        .off("keydown.BDfunctionsDariomodalEscapeListener" + id)
        .on("keydown.BDfunctionsDariomodalEscapeListener" + id, (e) => {
            if (e.which == 27) BDfunctionsDario.$(modal).find(BDfunctionsDario.dotCN.backdrop).click();
        });
};

BDfunctionsDario.updateContextPosition = function (context) {
    var app = document.querySelector(BDfunctionsDario.dotCN.appmount);
    var menuWidth = BDfunctionsDario.$(context).outerWidth();
    var menuHeight = BDfunctionsDario.$(context).outerHeight();
    var position = BDfunctionsDario.mousePosition;
    var newposition = {
        x: position.x - menuWidth,
        y: position.y - menuHeight
    };
    BDfunctionsDario.$(context)
        .css("left", (position.x + menuWidth > app.offsetWidth ? (newposition.x < 0 ? 10 : newposition.x) : position.x) + "px")
        .css("top", (position.y + menuHeight > app.offsetHeight ? (newposition.y < 0 ? 10 : newposition.y) : position.y) + "px");
};

BDfunctionsDario.appendContextMenu = function (context, e) {
    BDfunctionsDario.$(BDfunctionsDario.dotCN.tooltips).before(context);
    var menusizes = context.getBoundingClientRect();
    BDfunctionsDario.$(context)
        .toggleClass("invertX", e.pageX + menusizes.width > document.body.firstElementChild.offsetWidth)
        .toggleClass(BDfunctionsDario.disCN.contextmenuinvertchildx, e.pageX + menusizes.width > document.body.firstElementChild.offsetWidth)
        .toggleClass("invertY", e.pageY + menusizes.height > document.body.firstElementChild.offsetHeight)
        .addClass(BDfunctionsDario.getDiscordTheme());

    BDfunctionsDario.updateContextPosition(context);

    BDfunctionsDario.$(document).on("mousedown.BDfunctionsDarioContextMenu", (e2) => {
        if (BDfunctionsDario.$(context).has(e2.target).length == 0 && context != e2.target) {
            BDfunctionsDario.$(document).off("mousedown.BDfunctionsDarioContextMenu");
            context.remove();
        }
        else {
            var item = BDfunctionsDario.$(BDfunctionsDario.dotCN.contextmenuitem).has(e2.target)[0];
            if (item && !item.classList.contains(BDfunctionsDario.disCN.contextmenuitemdisabled) && !item.classList.contains(BDfunctionsDario.disCN.contextmenusubmenu) && !item.classList.contains(BDfunctionsDario.disCN.contextmenuitemtoggle)) {
                BDfunctionsDario.$(document).off("mousedown.BDfunctionsDarioContextMenu");
            }
        }
    });
};

BDfunctionsDario.appendSubMenu = function (target, menu) {
    BDfunctionsDario.$(target).append(menu);
    var offsets = BDfunctionsDario.$(target).offset();
    var menuHeight = BDfunctionsDario.$(menu).outerHeight();
    BDfunctionsDario.$(menu)
        .addClass(BDfunctionsDario.getDiscordTheme())
        .css("left", offsets.left + "px")
        .css("top", offsets.top + menuHeight > window.outerHeight ? (offsets.top - menuHeight + BDfunctionsDario.$(target).outerHeight()) + "px" : offsets.top + "px");

    BDfunctionsDario.$(target).on("mouseleave.BDfunctionsDarioSubContextMenu", () => {
        BDfunctionsDario.$(target).off("mouseleave.BDfunctionsDarioSubContextMenu");
        menu.remove();
    });
};

BDfunctionsDario.setColorSwatches = function (currentCOMP, wrapper, swatch) {
    var wrapperDiv = BDfunctionsDario.$(wrapper);

    var colourList =
        ["rgb(82, 233, 30)","rgb(46, 204, 113)","rgb(26, 188, 156)","rgb(52, 152, 219)","rgb(52, 84, 219)","rgb(134, 30, 233)","rgb(155, 89, 182)","rgb(233, 30, 99)","rgb(233, 65, 30)","rgb(231, 76, 60)","rgb(230, 126, 34)","rgb(241, 196, 15)","rgb(199, 204, 205)","rgb(112, 128, 136)","rgb(99, 99, 99)",
            "rgb(255, 255, 255)","rgb(59, 173, 20)","rgb(31, 139, 76)","rgb(17, 128, 106)","rgb(32, 102, 148)","rgb(32, 57, 148)","rgb(109, 20, 173)","rgb(113, 54, 138)","rgb(173, 20, 87)","rgb(173, 32, 20)","rgb(153, 45, 34)","rgb(168, 67, 0)","rgb(194, 124, 14)","rgb(151, 156, 159)","rgb(93, 104, 109)","rgb(44, 44, 44)"];

    var swatches =
        `<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.alignstretch + BDfunctionsDario.disCN.nowrap}" style="flex: 1 1 auto; margin-top: 5px;">
			<div class="ui-color-picker-${swatch} large custom" style="background-color: rgb(0, 0, 0);">
				<svg class="color-picker-dropper-${swatch}" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
					<path class="color-picker-dropper-fg-${swatch}" fill="#ffffff" d="M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"></path>
				</svg>
			</div>
			<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.alignstretch + BDfunctionsDario.disCN.wrap} ui-color-picker-row" style="flex: 1 1 auto; display: flex; flex-wrap: wrap; overflow: visible !important;">
				<div class="ui-color-picker-${swatch} nocolor" style="background-color: null;">
					<svg class="nocolor-cross" height="22" width="22">
						<path d="m 3 2 l 17 18 m 0 -18 l -17 18" stroke="red" stroke-width="3" fill="none"/>
					</svg>
				</div>
				${ colourList.map((val, i) => `<div class="ui-color-picker-${swatch}" style="background-color: ${val};"></div>`).join("")}
			</div>
		</div>`;
    BDfunctionsDario.$(swatches).appendTo(wrapperDiv);

    if (currentCOMP) {
        var currentRGB = BDfunctionsDario.color2RGB(currentCOMP);
        var invRGB = BDfunctionsDario.colorINV(currentRGB);

        var selection = colourList.indexOf(currentRGB);

        if (selection > -1) {
            wrapperDiv.find(".ui-color-picker-" + swatch + ":not(.custom, .nocolor)").eq(selection)
                .addClass("selected")
                .css("background-color", currentRGB)
                .css("border", "4px solid " + invRGB);
        }
        else {
            BDfunctionsDario.$(".custom", wrapperDiv)
                .addClass("selected")
                .css("background-color", currentRGB)
                .css("border", "4px solid " + invRGB);

            BDfunctionsDario.$(".color-picker-dropper-fg", wrapperDiv)
                .attr("fill", currentCOMP[0] > 150 && currentCOMP[1] > 150 && currentCOMP[2] > 150 ? "#000000" : "#ffffff");
        }
    }
    else {
        BDfunctionsDario.$(".nocolor", wrapperDiv)
            .addClass("selected")
            .css("border", "4px solid black");
    }

    wrapperDiv.on("click", ".ui-color-picker-" + swatch + ":not(.custom)", (e) => {
        if (wrapperDiv.hasClass("disabled")) return;
        var bgColor = BDfunctionsDario.$(e.target).css("background-color");
        var newInvRGB = BDfunctionsDario.checkColorType(bgColor) ? BDfunctionsDario.colorINV(bgColor,"rgb") : "black";

        wrapperDiv.find(".ui-color-picker-" + swatch + ".selected.nocolor")
            .removeClass("selected")
            .css("border", "4px solid red");

        wrapperDiv.find(".ui-color-picker-" + swatch + ".selected")
            .removeClass("selected")
            .css("border", "4px solid transparent");

        BDfunctionsDario.$(e.currentTarget)
            .addClass("selected")
            .css("border", "4px solid " + newInvRGB);
    });

    wrapperDiv.on("click", ".ui-color-picker-" + swatch + ".custom", (e) => {
        if (wrapperDiv.hasClass("disabled")) return;
        BDfunctionsDario.openColorPicker(e.currentTarget.style.backgroundColor, swatch);
    });
};

BDfunctionsDario.openColorPicker = function (currentColor, swatch) {
    var libraryStrings = BDfunctionsDario.getLibraryStrings();
    var inputs = {
        HEX: 	{type:"text", 		name:"hex",				group:"hex", 	min:null,	max:null,	length:7,		default:"#000000"},
        R: 		{type:"number", 	name:"red",				group:"rgb", 	min:0,		max:255,	length:null,	default:0},
        G:		{type:"number", 	name:"green",			group:"rgb", 	min:0,		max:255,	length:null,	default:0},
        B:		{type:"number", 	name:"blue",			group:"rgb", 	min:0,		max:255,	length:null,	default:0},
        H: 		{type:"number", 	name:"hue",				group:"hsl", 	min:0,		max:360,	length:null,	default:0},
        S: 		{type:"number", 	name:"saturation",		group:"hsl", 	min:0,		max:100,	length:null,	default:0},
        L: 		{type:"number", 	name:"lightness",		group:"hsl", 	min:0,		max:100,	length:null,	default:0}
    };

    var colorPickerModalMarkup =
        `<span class="colorpicker-modal DevilBro-modal">
			<div class="${BDfunctionsDario.disCN.backdrop}"></div>
			<div class="${BDfunctionsDario.disCN.modal}">
				<div class="${BDfunctionsDario.disCN.modalinner}">
					<div class="${BDfunctionsDario.disCNS.modalsub + BDfunctionsDario.disCN.modalsizemedium}">
						<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.aligncenter + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCN.modalheader}" style="flex: 0 0 auto;">
							<div class="${BDfunctionsDario.disCN.flexchild}" style="flex: 1 1 auto;">
								<h4 class="${BDfunctionsDario.disCNS.h4 + BDfunctionsDario.disCNS.headertitle + BDfunctionsDario.disCNS.size16 + BDfunctionsDario.disCNS.height20 + BDfunctionsDario.disCNS.weightsemibold + BDfunctionsDario.disCNS.defaultcolor + BDfunctionsDario.disCNS.h4defaultmargin + BDfunctionsDario.disCN.marginreset}">${libraryStrings.colorpicker_modal_header_text}</h4>
							</div>
							<svg class="${BDfunctionsDario.disCNS.modalclose + BDfunctionsDario.disCN.flexchild}" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">
								<g fill="none" fill-rule="evenodd">
									<path d="M0 0h12v12H0"></path>
									<path class="fill" fill="currentColor" d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"></path>
								</g>
							</svg>
						</div>
						<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.vertical + BDfunctionsDario.disCNS.modalsubinner + BDfunctionsDario.disCNS.directioncolumn + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.alignstretch + BDfunctionsDario.disCN.nowrap} colorpicker-container" style="flex: 1 1 auto;">
							<div class="colorpicker-color">
								<div class="colorpicker-white" style="background: linear-gradient(to right, #fff, rgba(255,255,255,0))">
									<div class="colorpicker-black" style="background: linear-gradient(to top, #000, rgba(0,0,0,0))">
										<div class="colorpicker-pickercursor">
											<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
												<circle cx="7" cy="7" r="6" stroke="black" stroke-width="2" fill="none" />
											</svg>
										</div>
										<div class="colorpicker-pickerpane"></div>
									</div>
								</div>
							</div>
							<div class="colorpicker-slider" style="background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)">
									<div class="colorpicker-slidercursor">
										<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
											<path stroke="grey" fill="white" d="M 0 0, l 5 5, l -5 5, m 31 0, l -5 -5, l 5 -5"></path>
										</svg>
									</div>
									<div class="colorpicker-sliderpane"></div>
							</div>
							<div class="colorpicker-controls">
								<div class="colorpicker-previewcontainer">
									<div class="colorpicker-preview-0 selected" style="background-color:#808080;"></div>
									<div class="colorpicker-preview-2" style="background-color:#808080;"></div>
								</div>
								<div class="colorpicker-inputs ${BDfunctionsDario.disCNS.card + BDfunctionsDario.disCN.cardprimaryeditable}">
									${Object.keys(inputs).map((key, i) =>
            `<div class="colorpicker-input ${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.aligncenter + BDfunctionsDario.disCNS.justifycenter + BDfunctionsDario.disCNS.margintop4 + BDfunctionsDario.disCNS.marginbottom4 + BDfunctionsDario.disCN.nowrap}">
										<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCN.nowrap}" style="flex: 1 1 20%">
											<h5 class="${BDfunctionsDario.disCNS.h5 + BDfunctionsDario.disCNS.size12 + BDfunctionsDario.disCNS.height16 + BDfunctionsDario.disCN.weightsemibold}">${key}:</h5>
										</div>
										<div class="${inputs[key].type == 'number' ? 'inputNumberWrapper inputNumberWrapperMini ' : ''}${BDfunctionsDario.disCNS.inputwrapper + BDfunctionsDario.disCNS.vertical + BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCN.directioncolumn}" style="flex: 1 1 80%;">
											${inputs[key].type == 'number' ? '<span class="numberinput-buttons-zone"><span class="numberinput-button-up"></span><span class="numberinput-button-down"></span></span>' : ''}
											<input type="${inputs[key].type}"${!isNaN(inputs[key].min) && inputs[key].min != null ? ' min="' + inputs[key].min + '"' : ''}${!isNaN(inputs[key].max) && inputs[key].max != null ? ' max="' + inputs[key].max + '"' : ''}${!isNaN(inputs[key].length) && inputs[key].length != null ? ' maxlength="' + inputs[key].length + '"' : ''} name="${inputs[key].group}" placeholder="${inputs[key].default}" class="${BDfunctionsDario.disCNS.inputmini + BDfunctionsDario.disCNS.input + BDfunctionsDario.disCN.size16} colorpicker-${inputs[key].name}">
										</div>
									</div>`).join("")}
								</div>
							</div>
						</div>
						<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontalreverse + BDfunctionsDario.disCNS.horizontalreverse2 + BDfunctionsDario.disCNS.directionrowreverse + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.alignstretch + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCN.modalfooter}">
							<button type="button" class="btn-ok ${BDfunctionsDario.disCNS.button + BDfunctionsDario.disCNS.buttonlookfilled + BDfunctionsDario.disCNS.buttoncolorbrand + BDfunctionsDario.disCNS.buttonsizemedium + BDfunctionsDario.disCN.buttongrow}">
								<div class="${BDfunctionsDario.disCN.buttoncontents}"></div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</span>`;

    var colorPickerModal = BDfunctionsDario.$(colorPickerModalMarkup)[0];
    BDfunctionsDario.appendModal(colorPickerModal);
    BDfunctionsDario.$(colorPickerModal)
        .on("click", ".btn-ok", () => {
            var newRGB = colorPickerModal.querySelector("[class^='colorpicker-preview-'].selected").style.backgroundColor;
            var newCOMP = BDfunctionsDario.color2COMP(newRGB);
            var newInvRGB = BDfunctionsDario.colorINV(newRGB);

            BDfunctionsDario.$(".ui-color-picker-" + swatch + ".selected.nocolor")
                .removeClass("selected")
                .css("border", "4px solid red");

            BDfunctionsDario.$(".ui-color-picker-" + swatch + ".selected")
                .removeClass("selected")
                .css("border", "4px solid transparent");

            BDfunctionsDario.$(".ui-color-picker-" + swatch + ".custom")
                .addClass("selected")
                .css("background-color", newRGB)
                .css("border", "4px solid " + newInvRGB);

            BDfunctionsDario.$(".color-picker-dropper-fg-" + swatch)
                .attr("fill", newCOMP[0] > 150 && newCOMP[1] > 150 && newCOMP[2] > 150 ? "#000000" : "#ffffff");
        });

    var hex = 0, red = 0, green = 0, blue = 0, hue = 0, saturation = 0, lightness = 0;

    var ppane = colorPickerModal.querySelector(".colorpicker-pickerpane");
    var pcursor = colorPickerModal.querySelector(".colorpicker-pickercursor");

    var pX = 0;
    var pY = 0;
    var pHalfW = pcursor.offsetWidth/2;
    var pHalfH = pcursor.offsetHeight/2;
    var pMinX = BDfunctionsDario.$(ppane).offset().left;
    var pMaxX = pMinX + ppane.offsetWidth;
    var pMinY = BDfunctionsDario.$(ppane).offset().top;
    var pMaxY = pMinY + ppane.offsetHeight;

    var spane = colorPickerModal.querySelector(".colorpicker-sliderpane");
    var scursor = colorPickerModal.querySelector(".colorpicker-slidercursor");

    var sY = 0;
    var sHalfH = scursor.offsetHeight/2;
    var sMinY = BDfunctionsDario.$(spane).offset().top;
    var sMaxY = sMinY + spane.offsetHeight;

    [hue, saturation, lightness] = BDfunctionsDario.color2HSL(currentColor).replace(new RegExp(" ", "g"), "").slice(4, -1).split(",");
    saturation *= 100;
    lightness *= 100;
    updateAllValues();
    updateCursors();

    BDfunctionsDario.$(ppane)
        .on("mousedown", (e) => {
            BDfunctionsDario.appendLocalStyle("crossHairColorPicker", `* {cursor: crosshair !important;}`);

            switchPreviews(e.button);

            pHalfW = pcursor.offsetWidth/2;
            pHalfH = pcursor.offsetHeight/2;
            pMinX = BDfunctionsDario.$(ppane).offset().left;
            pMaxX = pMinX + ppane.offsetWidth;
            pMinY = BDfunctionsDario.$(ppane).offset().top;
            pMaxY = pMinY + ppane.offsetHeight;
            pX = e.clientX - pHalfW;
            pY = e.clientY - pHalfH;

            BDfunctionsDario.$(pcursor).offset({"left":pX,"top":pY});

            saturation = BDfunctionsDario.mapRange([pMinX - pHalfW, pMaxX - pHalfW], [0, 100], pX);
            lightness = BDfunctionsDario.mapRange([pMinY - pHalfH, pMaxY - pHalfH], [100, 0], pY);
            updateAllValues();

            BDfunctionsDario.$(document)
                .off("mouseup.ColorPicker").off("mousemove.ColorPicker")
                .on("mouseup.ColorPicker", () => {
                    BDfunctionsDario.removeLocalStyle("crossHairColorPicker");
                    BDfunctionsDario.$(document).off("mouseup.ColorPicker").off("mousemove.ColorPicker");
                })
                .on("mousemove.ColorPicker", (e2) => {
                    pX = e2.clientX > pMaxX ? pMaxX - pHalfW : (e2.clientX < pMinX ? pMinX - pHalfW : e2.clientX - pHalfW);
                    pY = e2.clientY > pMaxY ? pMaxY - pHalfH : (e2.clientY < pMinY ? pMinY - pHalfH : e2.clientY - pHalfH);
                    BDfunctionsDario.$(pcursor).offset({"left":pX,"top":pY});

                    saturation = BDfunctionsDario.mapRange([pMinX - pHalfW, pMaxX - pHalfW], [0, 100], pX);
                    lightness = BDfunctionsDario.mapRange([pMinY - pHalfH, pMaxY - pHalfH], [100, 0], pY);
                    updateAllValues();
                });
        });

    BDfunctionsDario.$(spane)
        .on("mousedown", (e) => {
            BDfunctionsDario.appendLocalStyle("crossHairColorPicker", `* {cursor: crosshair !important;}`);

            switchPreviews(e.button);

            sHalfH = scursor.offsetHeight/2;
            sMinY = BDfunctionsDario.$(spane).offset().top;
            sMaxY = sMinY + spane.offsetHeight;
            sY = e.clientY - sHalfH;

            BDfunctionsDario.$(scursor).offset({"top":sY});

            hue = BDfunctionsDario.mapRange([sMinY - sHalfH, sMaxY - sHalfH], [360, 0], sY);
            updateAllValues();

            BDfunctionsDario.$(document)
                .off("mouseup.ColorPicker").off("mousemove.ColorPicker")
                .on("mouseup.ColorPicker", () => {
                    BDfunctionsDario.removeLocalStyle("crossHairColorPicker");
                    BDfunctionsDario.$(document).off("mouseup.ColorPicker").off("mousemove.ColorPicker");
                })
                .on("mousemove.ColorPicker", (e2) => {
                    sY = e2.clientY > sMaxY ? sMaxY - sHalfH : (e2.clientY < sMinY ? sMinY - sHalfH : e2.clientY - sHalfH);
                    BDfunctionsDario.$(scursor).offset({"top":sY});

                    hue = BDfunctionsDario.mapRange([sMinY - sHalfH, sMaxY - sHalfH], [360, 0], sY);
                    updateAllValues();
                });
        });

    BDfunctionsDario.$(colorPickerModal)
        .on("input", BDfunctionsDario.dotCN.inputmini, (e) => {
            updateValues(e.currentTarget.name);
        });

    BDfunctionsDario.$(colorPickerModal)
        .on("click", "[class^='colorpicker-preview-']", (e) => {
            colorPickerModal.querySelector("[class^='colorpicker-preview-'].selected").style.borderColor = "transparent";
            colorPickerModal.querySelector("[class^='colorpicker-preview-'].selected").classList.remove("selected");
            e.currentTarget.classList.add("selected");
            [hue, saturation, lightness] = BDfunctionsDario.color2HSL(e.currentTarget.style.backgroundColor).replace(new RegExp(" ", "g"), "").slice(4, -1).split(",");
            saturation *= 100;
            lightness *= 100;
            updateAllValues();
            updateCursors();
        });

    function switchPreviews (button) {
        colorPickerModal.querySelector("[class^='colorpicker-preview-'].selected").style.borderColor = "transparent";
        colorPickerModal.querySelector("[class^='colorpicker-preview-'].selected").classList.remove("selected");
        colorPickerModal.querySelector(".colorpicker-preview-" + button).classList.add("selected");
    }

    function updateValues (type) {
        switch (type) {
            case "hex":
                hex = colorPickerModal.querySelector(".colorpicker-hex").value;
                if (/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})BDfunctionsDario.$/i.test(hex)) {
                    [red, green, blue] = BDfunctionsDario.color2COMP(hex);
                    [hue, saturation, lightness] = BDfunctionsDario.color2HSL(hex).replace(new RegExp(" ", "g"), "").slice(4, -1).split(",");
                    saturation *= 100;
                    lightness *= 100;
                    colorPickerModal.querySelector(".colorpicker-hue").value = Math.round(hue);
                    colorPickerModal.querySelector(".colorpicker-saturation").value = Math.round(saturation);
                    colorPickerModal.querySelector(".colorpicker-lightness").value = Math.round(lightness);
                    colorPickerModal.querySelector(".colorpicker-red").value = red;
                    colorPickerModal.querySelector(".colorpicker-green").value = green;
                    colorPickerModal.querySelector(".colorpicker-blue").value = blue;
                }
                break;
            case "rgb":
                red = colorPickerModal.querySelector(".colorpicker-red").value;
                green = colorPickerModal.querySelector(".colorpicker-green").value;
                blue = colorPickerModal.querySelector(".colorpicker-blue").value;
                if (red && red >= 0 && red <= 255 && green && green >= 0 && green <= 255 && blue && blue >= 0 && blue <= 255) {
                    [hue, saturation, lightness] = BDfunctionsDario.color2HSL([red, green, blue]).replace(new RegExp(" ", "g"), "").slice(4, -1).split(",");
                    saturation *= 100;
                    lightness *= 100;
                    colorPickerModal.querySelector(".colorpicker-hex").value = BDfunctionsDario.color2HEX([red, green, blue]);
                    colorPickerModal.querySelector(".colorpicker-hue").value = Math.round(hue);
                    colorPickerModal.querySelector(".colorpicker-saturation").value = Math.round(saturation);
                    colorPickerModal.querySelector(".colorpicker-lightness").value = Math.round(lightness);
                }
                break;
            case "hsl":
                hue = colorPickerModal.querySelector(".colorpicker-hue").value;
                saturation = colorPickerModal.querySelector(".colorpicker-saturation").value;
                lightness = colorPickerModal.querySelector(".colorpicker-lightness").value;
                if (hue && hue >= 0 && hue <= 360 && saturation && saturation >= 0 && saturation <= 100 && lightness && lightness >= 0 && lightness <= 100) {
                    [red, green, blue] = BDfunctionsDario.color2COMP("hsl(" + hue + ", " + saturation/100 + ", " + lightness/100 + ")");
                    colorPickerModal.querySelector(".colorpicker-hex").value = BDfunctionsDario.color2HEX([red, green, blue]);
                    colorPickerModal.querySelector(".colorpicker-red").value = red;
                    colorPickerModal.querySelector(".colorpicker-green").value = green;
                    colorPickerModal.querySelector(".colorpicker-blue").value = blue;
                }
                break;
        }
        updateColors();
        updateCursors();
    }

    function updateCursors () {
        sHalfH = scursor.offsetHeight/2;
        sMinY = BDfunctionsDario.$(spane).offset().top;
        sY = BDfunctionsDario.mapRange([360, 0], [sMinY - sHalfH, sMaxY - sHalfH], hue);

        pHalfW = pcursor.offsetWidth/2;
        pHalfH = pcursor.offsetHeight/2;
        pMinX = BDfunctionsDario.$(ppane).offset().left;
        pMaxX = pMinX + ppane.offsetWidth;
        pMinY = BDfunctionsDario.$(ppane).offset().top;
        pMaxY = pMinY + ppane.offsetHeight;
        pX = BDfunctionsDario.mapRange([0, 100], [pMinX - pHalfW, pMaxX - pHalfW], saturation);
        pY = BDfunctionsDario.mapRange([100, 0], [pMinY - pHalfH, pMaxY - pHalfH], lightness);

        BDfunctionsDario.$(scursor).offset({"top":sY});
        BDfunctionsDario.$(pcursor).offset({"left":pX,"top":pY});
        BDfunctionsDario.$(pcursor).find("circle").attr("stroke", BDfunctionsDario.colorINV([red, green, blue], "rgb"));
        BDfunctionsDario.$(scursor).find("path").attr("stroke", BDfunctionsDario.color2RGB("hsl(" + hue + ", 1, 1)"));
    }

    function updateAllValues () {
        [red, green, blue] = BDfunctionsDario.color2COMP("hsl(" + hue + ", " + saturation/100 + ", " + lightness/100 + ")");
        colorPickerModal.querySelector(".colorpicker-hex").value = BDfunctionsDario.color2HEX([red, green, blue]);
        colorPickerModal.querySelector(".colorpicker-hue").value = Math.round(hue);
        colorPickerModal.querySelector(".colorpicker-saturation").value = Math.round(saturation);
        colorPickerModal.querySelector(".colorpicker-lightness").value = Math.round(lightness);
        colorPickerModal.querySelector(".colorpicker-red").value = Math.round(red);
        colorPickerModal.querySelector(".colorpicker-green").value = Math.round(green);
        colorPickerModal.querySelector(".colorpicker-blue").value = Math.round(blue);

        updateColors();

        BDfunctionsDario.$(pcursor).find("circle").attr("stroke", BDfunctionsDario.colorINV([red, green, blue], "rgb"));
        BDfunctionsDario.$(scursor).find("path").attr("stroke", BDfunctionsDario.color2RGB("hsl(" + hue + ", 1, 1)"));
    }

    function updateColors () {
        colorPickerModal.querySelector(".colorpicker-color").style.background = BDfunctionsDario.color2RGB("hsl(" + hue + ", 1, 1)");
        colorPickerModal.querySelector("[class^='colorpicker-preview-'].selected").style.background = BDfunctionsDario.color2RGB([red, green, blue]);
        colorPickerModal.querySelector("[class^='colorpicker-preview-'].selected").style.borderColor = BDfunctionsDario.colorINV([red, green, blue], "rgb");
    }
};

BDfunctionsDario.mapRange = function (from, to, number) {
    return to[0] + (number - from[0]) * (to[1] - to[0]) / (from[1] - from[0]);
};

BDfunctionsDario.getSwatchColor = function (swatch) {
    return !BDfunctionsDario.$(".ui-color-picker-" + swatch + ".nocolor.selected")[0] ? BDfunctionsDario.color2COMP(BDfunctionsDario.$(".ui-color-picker-" + swatch + ".selected").css("background-color")) : null;
};

BDfunctionsDario.zacksFork = function () {
    return (typeof bdpluginErrors === "object" && typeof bdthemeErrors === "object" && typeof bbdVersion === "string");
};

BDfunctionsDario.isBDv2 = function () {
    return (typeof BDfunctionsDario.BDv2Api !== "undefined");
};

BDfunctionsDario.getLibraryStrings = function () {
    switch (BDfunctionsDario.getDiscordLanguage().id) {
        case "hr": 		//croatian
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} je započeo.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} zaustavljen.",
                toast_plugin_translated:		"${pluginName} prijevod na ${ownlang}.",
                colorpicker_modal_header_text:	"Birač boja",
                file_navigator_text:			"Pregledajte datoteku",
                btn_add_text:					"Dodati",
                btn_cancel_text:				"Prekid",
                btn_all_text:					"Sve",
                btn_save_text:					"Uštedjeti",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Traziti ..."
            };
        case "da": 		//danish
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} er startet.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} er stoppet.",
                toast_plugin_translated:		"${pluginName} oversat til ${ownlang}.",
                colorpicker_modal_header_text:	"Farvevælger",
                file_navigator_text:			"Gennemse fil",
                btn_add_text:					"Tilføje",
                btn_cancel_text:				"Afbryde",
                btn_all_text:					"Alle",
                btn_save_text:					"Spare",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Søge efter ..."
            };
        case "de": 		//german
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} wurde gestartet.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} wurde gestoppt.",
                toast_plugin_translated:		"${pluginName} auf ${ownlang} übersetzt.",
                colorpicker_modal_header_text:	"Farbauswahl",
                file_navigator_text:			"Datei durchsuchen",
                btn_add_text:					"Hinzufügen",
                btn_cancel_text:				"Abbrechen",
                btn_all_text:					"Alle",
                btn_save_text:					"Speichern",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Suchen nach ..."
            };
        case "es": 		//spanish
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} se ha iniciado.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} se ha detenido.",
                toast_plugin_translated:		"${pluginName} traducido a ${ownlang}.",
                colorpicker_modal_header_text:	"Selector de color",
                file_navigator_text:			"Buscar archivo",
                btn_add_text:					"Añadir",
                btn_cancel_text:				"Cancelar",
                btn_all_text:					"Todo",
                btn_save_text:					"Guardar",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Buscar ..."
            };
        case "fr": 		//french
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} a été démarré.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} a été arrêté.",
                toast_plugin_translated:		"${pluginName} traduit en ${ownlang}.",
                colorpicker_modal_header_text:	"Pipette à couleurs",
                file_navigator_text:			"Parcourir le fichier",
                btn_add_text:					"Ajouter",
                btn_cancel_text:				"Abandonner",
                btn_all_text:					"Tout",
                btn_save_text:					"Enregistrer",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Rechercher ..."
            };
        case "it": 		//italian
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} è stato avviato.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} è stato interrotto.",
                toast_plugin_translated:		"${pluginName} tradotto in ${ownlang}.",
                colorpicker_modal_header_text:	"Raccoglitore di colore",
                file_navigator_text:			"Sfoglia file",
                btn_add_text:					"Inserisci",
                btn_cancel_text:				"Cancellare",
                btn_all_text:					"Tutto",
                btn_save_text:					"Salvare",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Cercare ..."
            };
        case "nl":		//dutch
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} is gestart.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} is gestopt.",
                toast_plugin_translated:		"${pluginName} vertaald naar ${ownlang}.",
                colorpicker_modal_header_text:	"Kleur kiezer",
                file_navigator_text:			"Bestand zoeken",
                btn_add_text:					"Toevoegen",
                btn_cancel_text:				"Afbreken",
                btn_all_text:					"Alle",
                btn_save_text:					"Opslaan",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Zoeken ..."
            };
        case "no":		//norwegian
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} er startet.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} er stoppet.",
                toast_plugin_translated:		"${pluginName} oversatt til ${ownlang}.",
                colorpicker_modal_header_text:	"Fargevelger",
                file_navigator_text:			"Bla gjennom fil",
                btn_add_text:					"Legg til",
                btn_cancel_text:				"Avbryte",
                btn_all_text:					"Alle",
                btn_save_text:					"Lagre",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Søk etter ..."
            };
        case "pl":		//polish
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} został uruchomiony.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} został zatrzymany.",
                toast_plugin_translated:		"${pluginName} przetłumaczono na ${ownlang}.",
                colorpicker_modal_header_text:	"Narzędzie do wybierania kolorów",
                file_navigator_text:			"Przeglądać plik",
                btn_add_text:					"Dodaj",
                btn_cancel_text:				"Anuluj",
                btn_all_text:					"Wszystkie",
                btn_save_text:					"Zapisz",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Szukać ..."
            };
        case "pt-BR":		//portuguese (brazil)
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} foi iniciado.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} foi interrompido.",
                toast_plugin_translated:		"${pluginName} traduzido para ${ownlang}.",
                colorpicker_modal_header_text:	"Seletor de cores",
                file_navigator_text:			"Procurar arquivo",
                btn_add_text:					"Adicionar",
                btn_cancel_text:				"Cancelar",
                btn_all_text:					"Todo",
                btn_save_text:					"Salvar",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Procurar por ..."
            };
        case "fi":		//finnish
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} on käynnistetty.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} on pysäytetty.",
                toast_plugin_translated:		"${pluginName} käännetty osoitteeseen ${ownlang}.",
                colorpicker_modal_header_text:	"Värinvalitsija",
                file_navigator_text:			"Selaa tiedostoa",
                btn_add_text:					"Lisätä",
                btn_cancel_text:				"Peruuttaa",
                btn_all_text:					"Kaikki",
                btn_save_text:					"Tallentaa",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Etsiä ..."
            };
        case "sv":		//swedish
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} har startats.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} har blivit stoppad.",
                toast_plugin_translated:		"${pluginName} översatt till ${ownlang}.",
                colorpicker_modal_header_text:	"Färgväljare",
                file_navigator_text:			"Bläddra i fil",
                btn_add_text:					"Lägg till",
                btn_cancel_text:				"Avbryta",
                btn_all_text:					"All",
                btn_save_text:					"Spara",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Söka efter ..."
            };
        case "tr":		//turkish
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} başlatıldı.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} durduruldu.",
                toast_plugin_translated:		"${pluginName} ${ownlang} olarak çevrildi.",
                colorpicker_modal_header_text:	"Renk seçici",
                file_navigator_text:			"Dosyaya gözat",
                btn_add_text:					"Eklemek",
                btn_cancel_text:				"Iptal",
                btn_all_text:					"Her",
                btn_save_text:					"Kayıt",
                btn_ok_text: 					"Okey",
                search_placeholder: 			"Aramak ..."
            };
        case "cs":		//czech
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} byl spuštěn.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} byl zastaven.",
                toast_plugin_translated:		"${pluginName} přeložen do ${ownlang}.",
                colorpicker_modal_header_text:	"Výběr barev",
                file_navigator_text:			"Procházet soubor",
                btn_add_text:					"Přidat",
                btn_cancel_text:				"Zrušení",
                btn_all_text:					"Vše",
                btn_save_text:					"Uložit",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Hledat ..."
            };
        case "bg":		//bulgarian
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} е стартиран.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} е спрян.",
                toast_plugin_translated:		"${pluginName} преведена на ${ownlang}.",
                colorpicker_modal_header_text:	"Избор на цвят",
                file_navigator_text:			"Прегледайте файла",
                btn_add_text:					"Добави",
                btn_cancel_text:				"Зъбести",
                btn_all_text:					"Bсичко",
                btn_save_text:					"Cпасяване",
                btn_ok_text: 					"Добре",
                search_placeholder: 			"Търся ..."
            };
        case "ru":		//russian
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} запущен.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} остановлен.",
                toast_plugin_translated:		"${pluginName} переведен на ${ownlang}.",
                colorpicker_modal_header_text:	"Выбор цвета",
                file_navigator_text:			"Просмотр файла",
                btn_add_text:					"Добавить",
                btn_cancel_text:				"Отмена",
                btn_all_text:					"Все",
                btn_save_text:					"Cпасти",
                btn_ok_text: 					"ОК",
                search_placeholder: 			"Искать ..."
            };
        case "uk":		//ukranian
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} було запущено.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} було зупинено.",
                toast_plugin_translated:		"${pluginName} перекладено ${ownlang}.",
                colorpicker_modal_header_text:	"Колір обкладинки",
                file_navigator_text:			"Перегляньте файл",
                btn_add_text:					"Додати",
                btn_cancel_text:				"Скасувати",
                btn_all_text:					"Все",
                btn_save_text:					"Зберегти",
                btn_ok_text: 					"Добре",
                search_placeholder: 			"Шукати ..."
            };
        case "ja":		//japanese
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion}が開始されました.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion}が停止しました.",
                toast_plugin_translated:		"${pluginName} は${ownlang}に翻訳されました.",
                colorpicker_modal_header_text:	"カラーピッカー",
                file_navigator_text:			"ファイルを参照",
                btn_add_text:					"追加",
                btn_cancel_text:				"キャンセル",
                btn_all_text:					"すべて",
                btn_save_text:					"セーブ",
                btn_ok_text: 					"はい",
                search_placeholder: 			"検索する ..."
            };
        case "zh-TW":	//chinese (traditional)
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion}已經啟動.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion}已停止.",
                toast_plugin_translated:		"${pluginName} 翻譯為${ownlang}.",
                colorpicker_modal_header_text:	"選色器",
                file_navigator_text:			"瀏覽文件",
                btn_add_text:					"加",
                btn_cancel_text:				"取消",
                btn_all_text:					"所有",
                btn_save_text:					"保存",
                btn_ok_text: 					"好",
                search_placeholder: 			"搜索 ..."
            };
        case "ko":		//korean
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} 시작되었습니다.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} 중지되었습니다.",
                toast_plugin_translated:		"${pluginName} ${ownlang} 로 번역되었습니다.",
                colorpicker_modal_header_text:	"색상 선택 도구",
                file_navigator_text:			"파일 찾아보기",
                btn_add_text:					"더하다",
                btn_cancel_text:				"취소",
                btn_all_text:					"모든",
                btn_save_text:					"저장",
                btn_ok_text: 					"승인",
                search_placeholder: 			"검색 ..."
            };
        default:		//default: english
            return {
                toast_plugin_started:			"${pluginName} ${oldVersion} has been started.",
                toast_plugin_stopped:			"${pluginName} ${oldVersion} has been stopped.",
                toast_plugin_translated:		"${pluginName} translated to ${ownlang}.",
                colorpicker_modal_header_text:	"Color Picker",
                file_navigator_text:			"Browse File",
                btn_add_text:					"Add",
                btn_cancel_text:				"Cancel",
                btn_all_text:					"All",
                btn_save_text:					"Save",
                btn_ok_text: 					"OK",
                search_placeholder: 			"Search for ..."
            };
    }
};

BDfunctionsDario.$(document)
    .off("click.BDfunctionsDarioPluginClick")
    .off("keydown.BDfunctionsDarioPressedKeys")
    .off("keyup.BDfunctionsDarioPressedKeys")
    .off("mousedown.BDfunctionsDarioMousePosition")
    .on("click.BDfunctionsDarioPluginClick", ".bd-settingswrap .bd-refresh-button, .bd-settingswrap .bd-switch-checkbox", () => {
        BDfunctionsDario.setPluginCache();
        BDfunctionsDario.setThemeCache();
    })
    .on("keydown.BDfunctionsDarioPressedKeys", (e) => {
        if (!BDfunctionsDario.pressedKeys.includes(e.which)) BDfunctionsDario.pressedKeys.push(e.which);
    })
    .on("keyup.BDfunctionsDarioPressedKeys", (e) => {
        BDfunctionsDario.removeFromArray(BDfunctionsDario.pressedKeys, e.which);
    })
    .on("mousedown.BDfunctionsDarioMousePosition", (e) => {
        BDfunctionsDario.mousePosition = {x:e.pageX,y:e.pageY};
    });

BDfunctionsDario.isPluginEnabled = function (name) {
    if (!BDfunctionsDario.isBDv2()) return window.bdplugins[name] && window.pluginCookie[name];
    else return BDfunctionsDario.Plugins[name.toLowerCase()] ? BDfunctionsDario.Plugins[name.toLowerCase()].enabled : null;
};

BDfunctionsDario.isRestartNoMoreEnabled = function () {
    return BDfunctionsDario.isPluginEnabled("Restart-No-More") || BDfunctionsDario.isPluginEnabled("Restart No More");
};

BDfunctionsDario.isThemeEnabled = function (name) {
    if (!BDfunctionsDario.isBDv2()) return window.bdthemes[name] && window.themeCookie[name];
    else return BDfunctionsDario.Themes[name.toLowerCase()] ? BDfunctionsDario.Themes[name.toLowerCase()].enabled : null;
};

(BDfunctionsDario.setPluginCache = function () {
    if (!BDfunctionsDario.isBDv2()) return;
    BDfunctionsDario.Plugins = {};
    for (let id of BDfunctionsDario.BDv2Api.Plugins.listPlugins()) {
        BDfunctionsDario.BDv2Api.Plugins.getPlugin(id).then(plugin => {BDfunctionsDario.Plugins[id] = plugin;});
    }
})();

(BDfunctionsDario.setThemeCache = function () {
    if (!BDfunctionsDario.isBDv2()) return;
    BDfunctionsDario.Themes = {};
    for (let id of BDfunctionsDario.BDv2Api.Themes.listThemes()) {
        BDfunctionsDario.BDv2Api.Themes.getTheme(id).then(theme => {BDfunctionsDario.Themes[id] = theme;});
    }
})();

BDfunctionsDario.DiscordClasses = {
    accountinfo: "container-2Thooq",
    accountinfodetails: "accountDetails-3k9g4n",
    accountinfousername: "username",
    alignbaseline: "alignBaseline-LAQbso",
    aligncenter: "alignCenter-1dQNNs",
    alignend: "alignEnd-1D6PQi",
    alignstart: "alignStart-H-X2h-",
    alignstretch: "alignStretch-DpGPf3",
    app: "app-19_DXt",
    appmount: "appMount-3VJmYg",
    appold: "app",
    autocomplete: "autocomplete-1vrmpx",
    autocomplete2: "autocomplete-i9yVHs",
    autocompletecontent: "content-Qb0rXO",
    autocompletecontenttitle: "contentTitle-2tG_sM",
    autocompletedescription: "description-11DmNu",
    autocompleteinner: "autocompleteInner-zh20B_",
    autocompleterow: "autocompleteRow-2OthDa",
    autocompleterowhorizontal: "autocompleteRowHorizontal-32jwnH",
    autocompleterowvertical: "autocompleteRowVertical-q1K4ky",
    autocompleteselectable: "selectable-3dP3y-",
    autocompleteselected: "selectorSelected-1_M1WV",
    autocompleteselector: "selector-2IcQBU",
    avatarimage: "image-33JSyf",
    avatarlargeold: "avatar-large",
    avatarprofileold: "avatar-profile",
    avatarsmallold: "avatar-small",
    backdrop: "backdrop-1ocfXc",
    badge: "badge",
    bubble: "bubble-3we2di",
    button: "button-38aScr",
    buttoncolorblack: "colorBlack-1jwPVL",
    buttoncolorbrand: "colorBrand-3pXr91",
    buttoncolorgreen: "colorGreen-29iAKY",
    buttoncolorgrey: "colorGrey-2DXtkV",
    buttoncolorlink: "colorLink-35jkBc",
    buttoncolorprimary: "colorPrimary-3b3xI6",
    buttoncolorred: "colorRed-1TFJan",
    buttoncolortransparent: "colorTransparent-1ewNp9",
    buttoncolorwhite: "colorWhite-rEQuAQ",
    buttoncoloryellow: "colorYellow-2JqYwt",
    buttoncontents: "contents-18-Yxp",
    buttondisabled: "disabled-9aF2ug",
    buttondisabledwrapper: "disabledWrapper-33zVVX",
    buttonfullwidth: "fullWidth-1orjjo",
    buttongrow: "grow-q77ONN",
    buttonhashover: "hasHover-3X1-zV",
    buttonhoverblack: "hoverBlack-3jULb8",
    buttonhoverbrand: "hoverBrand-1_Fxlk",
    buttonhovergreen: "hoverGreen-1gjdJc",
    buttonhovergrey: "hoverGrey-2CBXu0",
    buttonhoverlink: "hoverLink-i1fEKS",
    buttonhoverprimary: "hoverPrimary-2D1j2r",
    buttonhoverred: "hoverRed-2NoOXI",
    buttonhovertransparent: "hoverTransparent-2Lz5CN",
    buttonhoverwhite: "hoverWhite-2uUmXw",
    buttonhoveryellow: "hoverYellow-171chs",
    buttonlookfilled: "lookFilled-1Gx00P",
    buttonlookghost: "lookGhost-2Fn_0-",
    buttonlookinverted: "lookInverted-2D7oAl",
    buttonlooklink: "lookLink-9FtZy-",
    buttonlookoutlined: "lookOutlined-3sRXeN",
    buttonsizeicon: "sizeIcon-1-kvKI",
    buttonsizelarge: "sizeLarge-1vSeWK",
    buttonsizemax: "sizeMax-1Mj0eU",
    buttonsizemedium: "sizeMedium-1AC_Sl",
    buttonsizemin: "sizeMin-1mJd1x",
    buttonsizesmall: "sizeSmall-2cSMqn",
    buttonsizexlarge: "sizeXlarge-2yFAlZ",
    buttonspinner: "spinner-3a9zLT",
    buttonspinneritem: "spinnerItem-3GlVyU",
    buttonsubmitting: "submitting-3qlO9O",
    card: "card-3Qj_Yx",
    cardbrand: "cardBrand-39zmMQ",
    cardbrandoutline: "cardBrandOutline-3jvFfo",
    carddanger: "cardDanger-ZurOv3",
    carddangeroutline: "cardDangerOutline-3t0Do9",
    cardprimary: "cardPrimary-1Hv-to",
    cardprimaryeditable: "cardPrimaryEditable-3KtE4g",
    cardprimaryoutline: "cardPrimaryOutline-29Ujqw",
    cardprimaryoutlineeditable: "cardPrimaryOutlineEditable-PEnpzz",
    cardsuccess: "cardSuccess-3uEYjj",
    cardsuccessoutline: "cardSuccessOutline-1Su_ab",
    cardwarning: "cardWarning-2yPNAa",
    cardwarningoutline: "cardWarningOutline-1cs56O",
    categorycolortransition: "colorTransition-2-M2tg",
    categorycontainerdefault: "containerDefault-3GGEv_",
    categoryiconcollapsed: "iconCollapsed-3hFp_8",
    categoryicondefault: "iconDefault-3Gr8d2",
    categoryiconhovered: "iconHovered-2L3-fB",
    categoryiconhoveredcollapsed: "iconHoveredCollapsed-3caIIZ",
    categoryiconmuted: "iconMuted-1HVBGH",
    categoryicontransition: "iconTransition-2pOJ7l",
    categoryiconunread: "iconUnread-2eGkvX",
    categorynamecollapsed: "nameCollapsed-34uFWo",
    categorynamedefault: "nameDefault-2DI02H",
    categorynamehovered: "nameHovered-1gxhWH",
    categorynamehoveredcollapsed: "nameHoveredCollapsed-2orEWB",
    categorynamemuted: "nameMuted-1MCOt4",
    categorynameunread: "nameUnread-njOjIS",
    categorywrappercollapsed: "wrapperCollapsed-3Fbxl6",
    categorywrapperdefault: "wrapperDefault-10Jfvz",
    categorywrapperhovered: "wrapperHovered-28fu1D",
    categorywrapperhoveredcollapsed: "wrapperHoveredCollapsed-1PADEo",
    categorywrappermuted: "wrapperMuted-3KeA2M",
    categorywrapperunread: "wrapperUnread-1JPWj3",
    channelbackground: "background-2OVjk_",
    channelbadge: "wrapper-232cHJ",
    channelcolordefaulttext: "colorDefaultText-oas-QM",
    channelcolordefaultvoice: "colorDefaultVoice-3wYlhb",
    channelcolorhoveredtext: "colorHoveredText-OZnAgu",
    channelcolorhoveredvoice: "colorHoveredVoice-1kucsK",
    channelcolorlockedtext: "colorLockedText-1VRkPt",
    channelcolorlockedvoice: "colorLockedVoice-2UlBjl",
    channelcolormutedtext: "colorMutedText-36M8WR",
    channelcolormutedvoice: "colorMutedVoice-3ghIuw",
    channelcolorselectedtext: "colorSelectedText-1y4Wvs",
    channelcolorselectedvoice: "colorSelectedVoice-Xcb_9R",
    channelcolorunreadtext: "colorUnreadText-2t7XRb",
    channelcolorunreadvoice: "colorUnreadVoice-137o4S",
    channelcontainerdefault: "containerDefault-1ZnADq",
    channelcontent: "content-20Aix8",
    channelcontentdefaulttext: "contentDefaultText-3vZplL",
    channelcontentdefaultvoice: "contentDefaultVoice-2ko43i",
    channelcontenthoveredtext: "contentHoveredText-2D9B-x",
    channelcontenthoveredvoice: "contentHoveredVoice-3p_NEO",
    channelcontentlockedtext: "contentLockedText-1aHuz8",
    channelcontentlockedvoice: "contentLockedVoice-1gx-SP",
    channelcontentmutedtext: "contentMutedText-2y6aPQ",
    channelcontentmutedvoice: "contentMutedVoice-2lJ0UD",
    channelcontentselectedtext: "contentSelectedText-3wUhMi",
    channelcontentselectedvoice: "contentSelectedVoice-1WDIBM",
    channelcontentunreadtext: "contentUnreadText-2vNnZc",
    channelcontentunreadvoice: "contentUnreadVoice-1dijOt",
    channelforeground: "foreground-2W-aJk",
    channelheaderaka: "aka-1mqp34",
    channelheaderchannelicon: "channelIcon-MsmKOO",
    channelheaderchannelname: "channelName-3stJzi",
    channelheaderdivider: "divider-2PMBlV",
    channelheadericon: "icon-1R19_H",
    channelheadericonactive: "iconActive-AKd_jq",
    channelheadericonbadge: "iconBadge-2dji3k",
    channelheadericonbadgewrapper: "iconBadgeWrapper-1vhG5S",
    channelheadericondisabled: "iconDisabled-XgNR1p",
    channelheadericonforeground: "iconForeground-3y9f0B",
    channelheadericoninactive: "iconInactive-g2AXfB",
    channelheadericonmargin: "iconMargin-2YXk4F",
    channelheaderprivate: "private-26pLvW",
    channelheadersearch: "search-l1Wz-Q",
    channelheadertitle: "title-3qD0b-",
    channelheadertitlecall: "titleCall-_b9o8P",
    channelheadertitletext: "titleText-3X-zRE",
    channelheadertitlewrapper: "titleWrapper-1l0xT9",
    channelheadertopic: "topic-2QX7LI",
    channelheaderdivider: "divider-2PMBlV",
    channelheaderheaderbar: "headerBar-UHpsPw",
    channelicon: "icon-sxakjD",
    channeliconspacing: "iconSpacing-3JkGQO",
    channelmarginreset: "marginReset-3RfdVe",
    channelname: "name-3M0b8v",
    channelnamedefaulttext: "nameDefaultText-24KCy5",
    channelnamedefaultvoice: "nameDefaultVoice-3WUH7s",
    channelnamehoveredtext: "nameHoveredText-1uO31y",
    channelnamehoveredvoice: "nameHoveredVoice-YJ1Vfd",
    channelnamelockedtext: "nameLockedText-3pqQcL",
    channelnamelockedvoice: "nameLockedVoice-26MhB1",
    channelnamemutedtext: "nameMutedText-3Vj4bM",
    channelnamemutedvoice: "nameMutedVoice-3oxyQZ",
    channelnameselectedtext: "nameSelectedText-sp_EUw",
    channelnameselectedvoice: "nameSelectedVoice-1qSph5",
    channelnameunreadtext: "nameUnreadText-DfkrI4",
    channelnameunreadvoice: "nameUnreadVoice-EVo-wI",
    channeloverflowellipsis: "overflowEllipsis-jeThUf",
    channelunread: "unread-1Dp-OI",
    channelwrapper: "wrapper-KpKNwI",
    channelwrapperdefaulttext: "wrapperDefaultText-2IWcE8",
    channelwrapperdefaultvoice: "wrapperDefaultVoice-1yvceo",
    channelwrapperhoveredtext: "wrapperHoveredText-2geN_M",
    channelwrapperhoveredvoice: "wrapperHoveredVoice-3ItgyI",
    channelwrapperlockedtext: "wrapperLockedText-wfOnM5",
    channelwrapperlockedvoice: "wrapperLockedVoice-3QrBs-",
    channelwrappermutedtext: "wrapperMutedText-1YBpvv",
    channelwrappermutedvoice: "wrapperMutedVoice-10gPcW",
    channelwrapperselectedtext: "wrapperSelectedText-3dSUjC",
    channelwrapperselectedvoice: "wrapperSelectedVoice-xzxa2u",
    channelwrapperunreadtext: "wrapperUnreadText-2zuiuD",
    channelwrapperunreadvoice: "wrapperUnreadVoice-23GIYe",
    channels: "channels-Ie2l6A",
    chat: "chat",
    chatspacer: "spacer-29U_x8",
    checkbox: "checkbox-1ix_J3",
    checkboxchecked: "checked-3_4uQ9",
    checkboxcontainer: "checkboxContainer-2vV9zd",
    checkboxinput: "input-3ITkQf",
    checkboxinputdefault: "inputDefault-3JxKJ2",
    checkboxinputdisabled: "inputDisabled-110Jqx",
    checkboxround: "round-2jCFai",
    checkboxwrapper: "checkboxWrapper-SkhIWG",
    clickable: "clickable",
    closed: "closed-1D6IW8",
    contentmenulabel: "label-JWQiNe",
    contextmenu: "contextMenu-HLZMGh",
    contextmenuhint: "hint-22uc-R",
    contextmenuinvertchildx: "invertChildX-2fq7sY",
    contextmenuitem: "item-1Yvehc",
    contextmenuitembrand: "brand-3igrJY",
    contextmenuitemdanger: "danger-2dXSTE",
    contextmenuitemdisabled: "disabled-2xniQf",
    contextmenuitemgroup: "itemGroup-1tL0uz",
    contextmenuitemtoggle: "itemToggle-S7XGOQ",
    contextmenuitemsubmenu: "itemSubMenu-1vN_Yn",
    contextmenulabel: "label-JWQiNe",
    cursordefault: "cursorDefault-3pPSRV",
    cursorpointer: "cursorPointer-1ajlYk",
    dark: "dark",
    defaultcolor: "defaultColor-1_ajX0",
    description: "description-3_Ncsb",
    directioncolumn: "directionColumn-35P_nr",
    directionrow: "directionRow-3v3tfG",
    directionrowreverse: "directionRowReverse-m8IjIq",
    dms: "dms",
    dmchannel: "channel",
    dmchannelactivity: "channel-activity",
    dmchannelactivityicon: "channel-activity-icon",
    dmchannelactivityiconforeground: "channel-activity-icon-foreground",
    dmchannelactivitytext: "channel-activity-text",
    dmchannelclose: "close",
    dmchannelname: "channel-name",
    dmchannelprivate: "private",
    dmchannels: "private-channels",
    downloadlink: "downloadLink-2oSgiF",
    elevationhigh: "elevationHigh-3A9Xbf",
    ellipsis: "ellipsis-1XUmPN",
    embed: "embed-IeVjo6",
    embedimage: "embedImage-2W1cML",
    embedold: "embed",
    emojipicker: "emojiPicker-3m1S-j",
    emojipickeractivity: "activity-2oLAbd",
    emojipickerbutton: "btn-reaction",
    emojipickercategories: "categories-1feg4n",
    emojipickercategory: "category-2U57w6",
    emojipickercustom: "custom-2TY7UZ",
    emojipickerdimmer: "dimmer-3iH-5D",
    emojipickerdisabled: "disabled-1H1CfW",
    emojipickerdiversityselector: "diversitySelector-tmmMv0",
    emojipickeremojiitem: "emojiItem-109bjA",
    emojipickerflags: "flags-3peqg9",
    emojipickerfood: "food-3vb4RY",
    emojipickerheader: "header-1nkwgG",
    emojipickeritem: "item-16cXuq",
    emojipickernature: "nature-WkggKK",
    emojipickerobjects: "objects-ktZjG4",
    emojipickerpeople: "people-2y6eof",
    emojipickerpopout: "popout-2nUePc",
    emojipickerpremiumpromo: "premiumPromo-yVfLiA",
    emojipickerpremiumpromoclose: "premiumPromoClose-2sqoIR",
    emojipickerpremiumpromodescription: "premiumPromoDescription-2Mn515",
    emojipickerpremiumpromoimage: "premiumPromoImage-tGTlKV",
    emojipickerpremiumpromotitle: "premiumPromoTitle-1SQQfF",
    emojipickerrecent: "recent-rdY7_c",
    emojipickerrow: "row-3j9Kuo",
    emojipickerscroller: "scroller-3vODG7",
    emojipickerscrollerwrap: "scrollerWrap-PyxcLY",
    emojipickerselected: "selected-39BZ4S",
    emojipickerspriteitem: "spriteItem-2AFL7r",
    emojipickerstickyheader: "stickyHeader-1SS0JU",
    emojipickersymbols: "symbols-3xtDtJ",
    emojipickertravel: "travel-2FeozN",
    emojipickervisible: "visible-3k45bQ",
    flex: "flex-1O1GKY",
    flex2: "flex-1xMQg5",
    flexcenter: "flexCenter-3_1bcw",
    flexchild: "flexChild-faoVW3",
    formtext: "formText-3fs7AJ",
    friends: "friends",
    friendsbutton: "btn-friends",
    friendscolumn: "friends-column",
    friendscolumnnamewrap: "friends-column-name",
    friendscolumnusername: "username",
    friendsicon: "friends-icon",
    friendsonline: "friends-online",
    friendstabbar: "tab-bar",
    friendstabbaritem: "tab-bar-item",
    gamename: "game-name",
    gamenameinput: "game-name-input",
    gamesettings: "user-settings-games",
    guild: "guild",
    guildactive: "active",
    guildaudio: "audio",
    guildinner: "guild-inner",
    guildplaceholder: "guild-placeholder",
    guilds: "guilds",
    guildsadd: "guilds-add",
    guildsaddinner: "guilds-add-inner",
    guildselected: "selected",
    guildseparator: "guild-separator",
    guildserror: "guilds-error",
    guildswrapper: "guilds-wrapper",
    guildunread: "unread",
    guildvideo: "video",
    h1: "h1-1qdNzo",
    h1defaultmargin: "defaultMarginh1-peT3GC",
    h2: "h2-2gWE-o",
    h2defaultmargin: "defaultMarginh2-2LTaUL",
    h2old: "h2-old",
    h3: "h3-3PDeKG",
    h3defaultmargin: "defaultMarginh3-2iptLs",
    h4: "h4-AQvcAz",
    h4defaultmargin: "defaultMarginh4-2vWMG5",
    h5: "h5-18_1nd",
    h5defaultmargin: "defaultMarginh5-2mL-bP",
    headertitle: "title-3sZWYQ",
    height16: "height16-2Lv3qA",
    height20: "height20-mO2eIN",
    height24: "height24-3XzeJx",
    height28: "height28-3tox65",
    height36: "height36-36OHCc",
    highlight: "highlight",
    horizontal: "horizontal-1ae9ci",
    horizontal2: "horizontal-2EEEnY",
    horizontalreverse: "horizontalReverse-2eTKWD",
    horizontalreverse2: "horizontalReverse-3tRjY7",
    hotkeybase: "base-96ewKC",
    hotkeybutton: "button-34kXw5",
    hotkeybutton2: "button-3tQuzi",
    hotkeycontainer: "container-CpszHS",
    hotkeycontainer2: "container-1nZlH6",
    hotkeydisabled: "disabled-29eJ21",
    hotkeydisabled2: "disabled-qocNLx",
    hotkeyediticon: "editIcon-13gaox",
    hotkeyhasvalue: "hasValue-3pdcdm",
    hotkeyinput: "input-1G2o7i",
    hotkeyinput2: "input-1UhAnY",
    hotkeylayout: "layout-FSaTy9",
    hotkeylayout2: "layout-eEMo5y",
    hotkeyrecording: "recording-1H2dS7",
    hotkeyshadowpulse: "shadowPulse-2kjgqQ",
    hotkeytext: "text-2sI5Sd",
    hotkeyinput: "input-1dRteR",
    hotkeyinput2: "input-1UhAnY",
    hotkeylayout: "layout-RmPevB",
    hotkeylayout2: "layout-eEMo5y",
    hovercard: "card-2j1p1_",
    hovercardinner: "card-inner",
    hovercardbutton: "button-1dUBJq",
    imageaccessory: "imageAccessory-3uSIjZ",
    imageerror: "imageError-2OefUi",
    imageplaceholder: "imagePlaceholder-1AxUV5",
    imageplaceholderoverlay: "imagePlaceholderOverlay-ETNjpn",
    imagewrapper: "imageWrapper-2p5ogY",
    imagewrapperbackground: "imageWrapperBackground-E_M6Nu",
    imagewrapperinner: "imageWrapperInner-3_dNk0",
    imagezoom: "imageZoom-1n-ADA",
    input: "input-cIJ7To",
    inputdefault: "inputDefault-_djjkz",
    inputdisabled: "disabled-2BKQFm",
    inputeditable: "editable-2UkCu4",
    inputerror: "error-2O5WFJ",
    inputfocused: "focused-1mmYsC",
    inputmini: "inputMini-2xQV9",
    inputsuccess: "success-2-F980",
    inputwrapper: "inputWrapper-31_8H8",
    justifycenter: "justifyCenter-3D2jY",
    justifyend: "justifyEnd-2E6vba",
    justifystart: "justifyStart-2NDFzi",
    large: "large-3Q-_XB",
    layer: "layer-3QrUeG",
    layers: "layers-3iHuyZ",
    marginbottom4: "marginBottom4-2qk4Hy",
    marginbottom8: "marginBottom8-AtZOdT",
    marginbottom20: "marginBottom20-32qID7",
    marginbottom40: "marginBottom40-2vIwTv",
    marginbottom60: "marginBottom60-Gs8NBA",
    margincentergorz: "marginCenterHorz-1s41rg",
    marginreset: "marginReset-236NPn",
    margintop4: "marginTop4-2BNfKC",
    margintop8: "marginTop8-1DLZ1n",
    margintop20: "marginTop20-3TxNs6",
    margintop40: "marginTop40-i-78cZ",
    margintop60: "marginTop60-3PGbtK",
    medium: "medium-zmzTW-",
    member: "member-3W1lQa",
    membercontent: "content-OzHfo4",
    memberinner: "memberInner-2CPc3V",
    members: "member-3W1lQa",
    membersgroup: "membersGroup-v9BXpm",
    memberswrap: "membersWrap-2h-GB4",
    memberusername: "username-1cB_5E",
    message: "message",
    messageaccessory: "accessory",
    messagebody: "body",
    messagecomment: "comment",
    messagecompact: "compact",
    messageedited: "edited",
    messagefirst: "first",
    messagegroup: "message-group",
    messagehideoverflow: "hide-overflow",
    messagehighlightseparator: "highlight-separator",
    messagemarkup: "markup",
    messagespopout: "messagesPopout-24nkyi",
    messagespopoutactionbuttons: "actionButtons-1sUUug",
    messagespopoutavatarlarge: "avatar-large-2FVuyn",
    messagespopoutbody: "body-bvcIjN",
    messagespopoutbottom: "bottom-TGnsta",
    messagespopoutchannelname: "channelName-3kBz6H",
    messagespopoutchannelseparator: "channelSeparator-1MxuvT",
    messagespopoutclosebutton: "closeButton-17RIVZ",
    messagespopoutcomment: "comment-1bsQGU",
    messagespopoutcompact: "compact-1AliFb",
    messagespopoutemptyplaceholder: "emptyPlaceholder-1zh-Eu",
    messagespopoutfooter: "footer-1kmXd4",
    messagespopoutguildname: "guildName-1Bc3Ta",
    messagespopouthasmore: "hasMore-sul95G",
    messagespopoutheader: "header-ykumBX",
    messagespopouthidden: "hidden-3LSmvB",
    messagespopoutimage: "image-2JDb81",
    messagespopoutjumpbutton: "jumpButton-3DTcS_",
    messagespopoutloading: "loading-2bJK5L",
    messagespopoutloadingmore: "loadingMore-1cSz09",
    messagespopoutloadingplaceholder: "loadingPlaceholder-2SCYFe",
    messagespopoutmessage: "message-fz2Gg_",
    messagespopoutscrollingfooterwrap: "scrollingFooterWrap-3FDlMn",
    messagespopoutspinner: "spinner-MoOpqm",
    messagespopouttext: "text-3ewTZb",
    messagespopouttip: "tip-31--sZ",
    messagespopouttitle: "title-3pkaKd",
    messagespopoutvisible: "visible-1PE5Ym",
    messagespopoutwrap: "messagesPopoutWrap-1MQ1bW",
    messagesystem: "system-message",
    messagetext: "message-text",
    messagetimestamp: "timestamp",
    messages: "messages",
    messageusername: "user-name",
    messageusernamewrapper: "username-wrapper",
    modal: "modal-1UGdnR",
    modalclose: "close-18n9bP",
    modalcontent: "content-2BXhLs",
    modaldivider: "divider-3573oO",
    modaldividerdefault: "dividerDefault-3rvLe-",
    modaldividermini: "dividerMini-3ZRJ-S",
    modalfooter: "footer-2yfCgX",
    modalguildname: "guildName-3WI6ml",
    modalheader: "header-1R_AjF",
    modalinner: "inner-1JeGVc",
    modalseparator: "separator-6YbWrc",
    modalsizelarge: "sizeLarge-3clvAM",
    modalsizemedium: "sizeMedium-1fwIF2",
    modalsizesmall: "sizeSmall-Sf4iOi",
    modalsub: "modal-3HD5ck",
    modalsubinner: "inner-3wn6Q5",
    modedefault: "modeDefault-3a2Ph1",
    modedisabled: "modeDisabled-33Av8D",
    modeselectable: "modeSelectable-k2b2pa",
    nametag: "nameTag-m8r81H",
    nochannel: "noChannel-Z1DQK7",
    notice: "notice-2FJMB4",
    noticebrand: "noticeBrand-3nQBC_",
    noticebutton: "button-1MICoQ",
    noticedanger: "noticeDanger-7u-yT9",
    noticedefault: "noticeDefault-362Ko2",
    noticedismiss: "dismiss-SCAH9H",
    noticefacebook: "noticeFacebook-3equ5g",
    noticeicon: "icon-KgjVwm",
    noticeiconandroid: "iconApple-1hp9Sq",
    noticeiconapple: "iconAndroid-3HTSwF",
    noticeiconwindows: "iconWindows-1KG_XN",
    noticeinfo: "noticeInfo-3_iTE1",
    noticeplatformicon: "platformIcon-2NdO9F",
    noticepremium: "noticePremium-12Zvj9",
    noticepremiumaction: "premiumAction-3Tcani",
    noticepremiumlogo: "premiumLogo-30dge3",
    noticepremiumtext: "premiumText-C5NcRe",
    noticespotify: "noticeSpotify-27dhr0",
    noticestreamer: "noticeStreamerMode-2TSQpg",
    noticesuccess: "noticeSuccess-3Y62ob",
    note: "note-1V3kyJ",
    nowrap: "noWrap-3jynv6",
    optionpopout: "option-popout",
    optionpopoutbutton: "btn-option",
    optionpopoutitem: "btn-item",
    optionpopoutopen: "popout-open",
    optionpopoutsmallbox: "small-popout-box",
    overflowellipsis: "overflowEllipsis-2JOaZ6",
    popout: "popout-3sVMXz",
    popoutbody: "body-1CHPZz",
    popoutbottom: "popoutBottom-1YbShG",
    popoutbottomleft: "popoutBottomLeft-JehOp2",
    popoutbottomright: "popoutBottomRight-2JrySt",
    popoutfooter: "footer-SRC48P",
    popoutheader: "header-SsaQ8X",
    popoutinvert: "popoutInvert-3UdKhn",
    popoutleft: "popoutLeft-30WmrD",
    popoutnoarrow: "noArrow-3BYQ0Z",
    popoutnoshadow: "noShadow-321ZPm",
    popouts: "popouts-3dRSmE",
    popoutsubtitle: "subtitle-37ivwK",
    popoutthemedpopout: "themedPopout-25DgLi",
    popoutthemedpopoutold: "themed-popout",
    popouttip: "tip-2WErbi",
    popouttitle: "title-23FrqZ",
    popouttop: "popoutTop-3uu9vG",
    popouttopleft: "popoutTopLeft-b5Eb3O",
    popouttopright: "popoutTopRight-3BzFIE",
    primary: "primary-jw0I4K",
    quickselect: "quickSelect-3BxO0K",
    quickselectarrow: "quickSelectArrow-1QublR",
    quickselectclick: "quickSelectClick-1HOWp1",
    quickselectlabel: "quickSelectLabel-2r3iJ_",
    quickselectpopout: "quickSelectPopout-X1hvgV",
    quickselectpopoutoption: "quickSelectPopoutOption-opKBx9",
    quickselectpopoutscroll: "quickSelectPopoutScroll-2dlvk5",
    quickselectscroller: "quickSelectScroller-2SmdH_",
    quickselectselected: "selected-3RZo5I",
    quickselectvalue: "quickSelectValue-lImyM6",
    recentmentionsheader: "header-SsaQ8X",
    recentmentionsheader2: "header-3LXPrb",
    recentmentionsloadingmore: "loadingMore-mVRVL3",
    recentmentionsmentionfilter: "mentionFilter-1PQ6ey",
    recentmentionspopout: "recentMentionsPopout-2fmau1",
    recentmentionstitle: "title-23FrqZ",
    scroller: "scroller-2FKFPG",
    scrollerold: "scroller",
    scrollerthemed: "scrollerThemed-2oenus",
    scrollerwrap: "scrollerWrap-2lJEkd",
    scrollerwrapold: "scroller-wrap",
    searchbar: "searchBar-1MOL6S",
    searchbarclear: "clear--Eywng",
    searchbareyeglass: "eyeGlass-2cMHx7",
    searchbaricon: "icon-1S6UIr",
    searchbarinput: "input-3Xdcic",
    searchbariconwrap: "searchBarIcon-18QaPq",
    searchbarvisible: "visible-3bFCH-",
    select: "Select",
    selectarrow: "Select-arrow",
    selectarrowzone: "Select-arrow-zone",
    selectcontrol: "Select-control",
    selecthasvalue: "has-value",
    selectisopen: "is-open",
    selectmenu: "Select-menu",
    selectmenuouter: "Select-menu-outer",
    selectoption: "Select-option",
    selectselected: "is-selected",
    selectsingle: "Select--single",
    selectvalue: "Select-value",
    selectwrap: "select-2TCrqx",
    sinkinteractions: "sink-interactions",
    size10: "size10-39i14u",
    size12: "size12-3R0845",
    size14: "size14-3iUx6q",
    size16: "size16-14cGz5",
    size18: "size18-3EXdSj",
    size20: "size20-2QkeeC",
    size24: "size24-1ONE4K",
    small: "small-29zrCQ",
    slider: "slider-1PF9SW",
    sliderbar: "bar-2Qqk5Z",
    sliderbarfill: "barFill-23-gu-",
    sliderdisabled: "disabled-bolDAc",
    slidergrabber: "grabber-3mFHz2",
    sliderinput: "input-2_ChIk",
    slidermark: "mark-1xjQqt",
    slidermarkdash: "markDash-3hAolZ",
    slidermarkdashsimple: "markDashSimple-1vLOGW",
    slidermarkvalue: "markValue-2DwdXI",
    slidermini: "mini-dmm9yo",
    slidertrack: "track-11EASc",
    status: "status",
    switch: "switch-3wwwcV",
    switchdisabled: "switchDisabled-3HsXAJ",
    switchenabled: "switchEnabled-V2WDBB",
    switchinner: "checkbox-2tyjJg",
    switchinnerdisabled: "checkboxDisabled-1MA81A",
    switchinnerenabled: "checkboxEnabled-CtinEn",
    switchsize: "size-3rFEHg",
    switchsizedefault: "sizeDefault-2YlOZr",
    switchsizemini: "sizeMini-1ii40f",
    switchthemeclear: "themeClear-1EjkE4",
    switchthemedefault: "themeDefault-24hCdX",
    switchvalue: "value-2hFrkk",
    switchvaluechecked: "valueChecked-m-4IJZ",
    switchvalueunchecked: "valueUnchecked-2lU_20",
    tableheader: "header-3Uqp87",
    tableheadername: "headerName-2n9eUZ",
    tableheaderoption: "headerOption-3qo9Ph",
    tableheadersize: "headerSize-1-W6wd",
    textarea: "textArea-2Spzkt",
    textareainnerdisabled: "innerDisabled-2mc-iF",
    textareainnerenabled: "innerEnabled-3g80kR",
    textareainnerenablednoattach: "innerEnabledNoAttach-NE9K7P",
    textareawrapall: "channelTextArea-rNsIhG",
    textareawrapchat: "channelTextArea-1LDbYG",
    textlink: "textLink-27KAGV",
    textrow: "textRow-19NEd_",
    themedark: "theme-dark",
    themeghosthairline: "themeGhostHairline-DBD-2d",
    themelight: "theme-light",
    title: "title-31JmR4",
    titlebar: "titleBar-AC4pGV",
    titledefault: "titleDefault-a8-ZSr",
    titlemini: "titleMini-pBwj_L",
    tooltip: "tooltip",
    tooltipblack: "tooltip-black",
    tooltipbottom: "tooltip-bottom",
    tooltipleft: "tooltip-left",
    tooltipright: "tooltip-right",
    tooltips: "tooltips",
    tooltiptop: "tooltip-top",
    transition: "transition-2IHyE9",
    userpopout: "userPopout-3XzG_A",
    userpopoutheader: "header-2BwW8b",
    userpopoutheadernickname: "headerName-fajvi9",
    userpopoutheadernonickname: "headerTagUsernameNoNickname-2_H881",
    userpopoutheadernormal: "headerNormal-T_seeN",
    userpopoutheaderplaying: "headerPlaying-j0WQBV",
    userpopoutheaderspotify: "headerSpotify-zpWxgT",
    userpopoutheaderstreaming: "headerStreaming-2FjmGz",
    userpopoutheadertext: "headerText-2sdzFM",
    userpopoutrole: "role-2irmRk",
    userpopoutrolecircle: "roleCircle-3xAZ1j",
    userpopoutrolelist: "rolesList-22qj2L",
    userpopoutrolename: "roleName-32vpEy",
    userpopoutusername: "username",
    userprofile: "root-SR8cQa",
    userprofileheader: "header-QKLPzZ",
    userprofileheaderbottag: "headerBotTag-3xB56F",
    userprofileheaderfill: "headerFill-adLl4x",
    userprofileheaderinfo: "headerInfo-30uryT",
    userprofiletopsectionnormal: "topSectionNormal-2-vo2m",
    userprofiletopsectionplaying: "topSectionPlaying-1J5E4n",
    userprofiletopsectionspotify: "topSectionSpotify-1lI0-P",
    userprofiletopsectionstreaming: "topSectionStreaming-1Tpf5X",
    userprofiletopsectionxbox: "topSectionXbox-3fWLjS",
    userprofileusername: "username-3gJmXY",
    vertical: "vertical-V37hAW",
    voiceavatarcontainer: "avatarContainer-72bSfM",
    voiceavatardefault: "avatarDefault-35WC3R",
    voiceavatarspeaking: "avatarSpeaking-1wJCNq",
    voiceiconspacing: "iconSpacing-3jB4W5",
    voicelistcollapse: "listCollapse-3hmWwX",
    voicelistdefault: "listDefault-36Sktb",
    voicenamedefault: "nameDefault-2s3kbY",
    voicenamehovered: "nameHovered-21k1eo",
    voicenamespeaking: "nameSpeaking-3UhoEZ",
    voiceuserdefault: "userDefault-1qtQob",
    voiceuserhovered: "userHovered-2_fT4Z",
    weightbold: "weightBold-2yjlgw",
    weightlight: "weightLight-3heiur",
    weightmedium: "weightMedium-2iZe9B",
    weightnormal: "weightNormal-WI4TcG",
    weightsemibold: "weightSemiBold-NJexzi",
    wrap: "wrap-ZIn9Iy",
    wrapreverse: "wrapReverse-3ssEE3"
};

// stolen from square :-*
BDfunctionsDario.disCN = new Proxy(Object.create(null), {
    get: function() {
        if (BDfunctionsDario.DiscordClasses[arguments[1]] === undefined) {
            throw new Error(arguments[1] + " not found in BDfunctionsDario.DiscordClasses");
        }
        return BDfunctionsDario.DiscordClasses[arguments[1]];
    }
});

BDfunctionsDario.disCNS = new Proxy(Object.create(null), {
    get: function() {
        if (BDfunctionsDario.DiscordClasses[arguments[1]] === undefined) {
            throw new Error(arguments[1] + " not found in BDfunctionsDario.DiscordClasses");
        }
        return BDfunctionsDario.DiscordClasses[arguments[1]] + " ";
    }
});

BDfunctionsDario.disCNC = new Proxy(Object.create(null), {
    get: function() {
        if (BDfunctionsDario.DiscordClasses[arguments[1]] === undefined) {
            throw new Error(arguments[1] + " not found in BDfunctionsDario.DiscordClasses");
        }
        return BDfunctionsDario.DiscordClasses[arguments[1]] + ",";
    }
});

BDfunctionsDario.dotCN = new Proxy(Object.create(null), {
    get: function() {
        if (BDfunctionsDario.DiscordClasses[arguments[1]] === undefined) {
            throw new Error(arguments[1] + " not found in BDfunctionsDario.DiscordClasses");
        }
        return "." + BDfunctionsDario.DiscordClasses[arguments[1]];
    }
});

BDfunctionsDario.dotCNS = new Proxy(Object.create(null), {
    get: function() {
        if (BDfunctionsDario.DiscordClasses[arguments[1]] === undefined) {
            throw new Error(arguments[1] + " not found in BDfunctionsDario.DiscordClasses");
        }
        return "." + BDfunctionsDario.DiscordClasses[arguments[1]] + " ";
    }
});

BDfunctionsDario.dotCNC = new Proxy(Object.create(null), {
    get: function() {
        if (BDfunctionsDario.DiscordClasses[arguments[1]] === undefined) {
            throw new Error(arguments[1] + " not found in BDfunctionsDario.DiscordClasses");
        }
        return "." + BDfunctionsDario.DiscordClasses[arguments[1]] + ",";
    }
});

BDfunctionsDario.idCN = new Proxy(Object.create(null), {
    get: function() {
        if (BDfunctionsDario.DiscordClasses[arguments[1]] === undefined) {
            throw new Error(arguments[1] + " not found in BDfunctionsDario.DiscordClasses");
        }
        return "#" + BDfunctionsDario.DiscordClasses[arguments[1]];
    }
});

BDfunctionsDario.idCNS = new Proxy(Object.create(null), {
    get: function() {
        if (BDfunctionsDario.DiscordClasses[arguments[1]] === undefined) {
            throw new Error(arguments[1] + " not found in BDfunctionsDario.DiscordClasses");
        }
        return "#" + BDfunctionsDario.DiscordClasses[arguments[1]] + " ";
    }
});

BDfunctionsDario.idCNC = new Proxy(Object.create(null), {
    get: function() {
        if (BDfunctionsDario.DiscordClasses[arguments[1]] === undefined) {
            throw new Error(arguments[1] + " not found in BDfunctionsDario.DiscordClasses");
        }
        return "#" + BDfunctionsDario.DiscordClasses[arguments[1]] + ",";
    }
});

BDfunctionsDario.appendLocalStyle("BDfunctionsDario", `
	#bd-settingspane-container .ui-form-title {
		display: inline-block;
	}
	#bd-settingspane-container .bd-pfbtn {
		position: static;
		margin-bottom: 0;
		border-radius: 5px;
		display: inline-block;
		margin-left: 10px;
	}
	#bd-settingspane-container .bda-description {
		white-space: pre-line !important;
	}
	
	.DevilBro-notice {
		-webkit-app-region: drag;
		border-radius: 0 5px 0 0 !important;
	} 
	
	#pluginNotice #outdatedPlugins span {
		-webkit-app-region: no-drag;
		color:#fff;
		cursor:pointer;
	} 
	
	#pluginNotice #outdatedPlugins span:hover {
		text-decoration:underline;
	}
	
	.toasts {
		position: fixed;
		display: flex;
		top: 0;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		pointer-events: none;
		z-index: 4000;
	}
	
	@keyframes toast-up {
		from {
			transform: translateY(0);
			opacity: 0;
		}
	}
	
	.toast {
		animation: toast-up 300ms ease;
		transform: translateY(-10px);
		background: #36393F;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 0 0 1px rgba(32,34,37,.6), 0 2px 10px 0 rgba(0,0,0,.2);
		font-weight: 500;
		color: #fff;
		user-select: text;
		font-size: 14px;
		opacity: 1;
		margin-top: 10px;
		pointer-events: auto;
	}
	
	@keyframes toast-down {
		to {
			transform: translateY(0px);
			opacity: 0;
		}
	}
	
	.toast.closing {
		animation: toast-down 200ms ease;
		animation-fill-mode: forwards;
		opacity: 1;
		transform: translateY(-10px);
	}
	
	.toast .toast-inner {
		display: flex;
		align-items: center;
	}
	
	.toast .toast-avatar {
		margin-right: 5px;
		width: 25px;
		height: 25px;
		background-size: cover;
		background-position: center;
		border-radius: 50%;
	}
	
	.toast.icon {
		padding-left: 30px;
		background-size: 20px 20px;
		background-repeat: no-repeat;
		background-position: 6px 50%;
	}
	
	.toast.toast-brand {
		background-color: #7289DA;
	}
	.toast.toast-brand.icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjI3IDI3IDExNSAxMTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMTEuMywxMjQuMWMwLDAtMy40LTQuMS02LjMtNy43YzEyLjYtMy41LDE3LjQtMTEuMywxNy40LTExLjMgYy00LDIuNi03LjcsNC40LTExLjEsNS42Yy00LjgsMi05LjUsMy4zLTE0LDQuMWMtOS4yLDEuNy0xNy42LDEuMy0yNC45LTAuMWMtNS41LTEtMTAuMi0yLjUtMTQuMS00LjFjLTIuMi0wLjgtNC42LTEuOS03LjEtMy4zIGMtMC4zLTAuMi0wLjYtMC4zLTAuOS0wLjVjLTAuMS0wLjEtMC4zLTAuMi0wLjQtMC4yYy0xLjctMS0yLjYtMS42LTIuNi0xLjZzNC42LDcuNiwxNi44LDExLjJjLTIuOSwzLjYtNi40LDcuOS02LjQsNy45IGMtMjEuMi0wLjYtMjkuMy0xNC41LTI5LjMtMTQuNWMwLTMwLjYsMTMuOC01NS40LDEzLjgtNTUuNGMxMy44LTEwLjMsMjYuOS0xMCwyNi45LTEwbDEsMS4xQzUyLjgsNTAuMyw0NSw1Ny45LDQ1LDU3LjkgczIuMS0xLjIsNS43LTIuN2MxMC4zLTQuNSwxOC40LTUuNywyMS44LTZjMC41LTAuMSwxLjEtMC4yLDEuNi0wLjJjNS45LTAuNywxMi41LTAuOSwxOS40LTAuMmM5LjEsMSwxOC45LDMuNywyOC45LDkuMSBjMCwwLTcuNS03LjItMjMuOS0xMi4xbDEuMy0xLjVjMCwwLDEzLjEtMC4zLDI2LjksMTBjMCwwLDEzLjgsMjQuOCwxMy44LDU1LjRDMTQwLjYsMTA5LjYsMTMyLjUsMTIzLjUsMTExLjMsMTI0LjF6IE0xMDEuNyw3OS43Yy01LjQsMC05LjgsNC43LTkuOCwxMC41YzAsNS44LDQuNCwxMC41LDkuOCwxMC41YzUuNCwwLDkuOC00LjcsOS44LTEwLjUgQzExMS41LDg0LjQsMTA3LjEsNzkuNywxMDEuNyw3OS43eiBNNjYuNyw3OS43Yy01LjQsMC05LjgsNC43LTkuOCwxMC41YzAsNS44LDQuNCwxMC41LDkuOCwxMC41YzUuNCwwLDkuOC00LjcsOS44LTEwLjUgQzc2LjUsODQuNCw3Mi4xLDc5LjcsNjYuNyw3OS43eiIvPjwvc3ZnPg==);
	}
	
	.toast.toast-danger, 
	.toast.toast-error {
		background-color: #F04747;
	}
	.toast.toast-danger.icon,
	.toast.toast-error.icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTUgMTMuNTlMMTUuNTkgMTcgMTIgMTMuNDEgOC40MSAxNyA3IDE1LjU5IDEwLjU5IDEyIDcgOC40MSA4LjQxIDcgMTIgMTAuNTkgMTUuNTkgNyAxNyA4LjQxIDEzLjQxIDEyIDE3IDE1LjU5eiIvPiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+);
	}
	
	.toast.toast-default {
		background-color: #F26522;
	}
	.toast.toast-default.icon {
		padding-left: 10px;
	}
	
	.toast.toast-facebook {
		background-color: #355089;
	}
	.toast.toast-facebook.icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9Ii01IC01IDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggaWQ9IkZhY2Vib29rX194MjhfYWx0X3gyOV8iIGQ9Ik05MCwxNS4wMDFDOTAsNy4xMTksODIuODg0LDAsNzUsMEgxNUM3LjExNiwwLDAsNy4xMTksMCwxNS4wMDF2NTkuOTk4ICAgQzAsODIuODgxLDcuMTE2LDkwLDE1LjAwMSw5MEg0NVY1NkgzNFY0MWgxMXYtNS44NDRDNDUsMjUuMDc3LDUyLjU2OCwxNiw2MS44NzUsMTZINzR2MTVINjEuODc1QzYwLjU0OCwzMSw1OSwzMi42MTEsNTksMzUuMDI0VjQxICAgaDE1djE1SDU5djM0aDE2YzcuODg0LDAsMTUtNy4xMTksMTUtMTUuMDAxVjE1LjAwMXoiIGZpbGw9IndoaXRlIi8+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==);
	}
	
	.toast.toast-info {
		background-color: #4A90E2;
	}
	.toast.toast-info.icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnoiLz48L3N2Zz4=);
	}
	
	.toast.toast-premium {
		background-color: #202225;
	}
	.toast.toast-premium.icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDMiIGhlaWdodD0iMjYiPiAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOTYuMjgyNiA4LjYwMjc4ODI0bC0xLjIxNTUgOC4zOTAzNTI5NmMtLjI3NzUgMS45ODI2Mjc0LTIuNDY1NSAyLjkwMzMzMzMtNC40NzkgMi45MDMzMzMzLTEuODc1IDAtMy43MTU1LS45MjA3MDU5LTMuNDcyNS0yLjcyNTkyMTZsMS4yMTU1LTguNTY3NzY0NjZjLjI3NzUtMS44NzY1ODgyNCAyLjQ2NTUtMi44MzI0NzA2IDQuNDc5LTIuODMyNDcwNiAyLjAxNCAwIDMuNzUuOTU1ODgyMzYgMy40NzI1IDIuODMyNDcwNk05My43NzIxLjAwMzkyNTVsLjAwMDUtLjAwNDA3ODQ0aC0xMy4wODRjLS4zMzQgMC0uNjE4LjI1MDMxMzcyLS42NjYuNTg3Mjk0MTJsLS42MzY1IDQuNDMyMjM1M2MtLjA1OTUuNDE0NDcwNTguMjU2Ljc4NjExNzY0LjY2NjUuNzg2MTE3NjRoMi4zODk1Yy4yNCAwIC40MDQ1LjI0OTgwMzkyLjMxLjQ3NTY0NzA2LS4yOTguNzEyMTk2MDctLjUxNTUgMS40ODYwNzg0My0uNjM2IDIuMzIxNjQ3MDZsLTEuMjE1NSA4LjU2Nzc2NDY2Yy0uNzk5IDUuNzM1Mjk0MiAzLjg4OSA4LjYwMjQzMTQgOC45OTMgOC42MDI0MzE0IDUuMzQ3NSAwIDEwLjU5MDUtMi44NjcxMzcyIDExLjM4OS04LjYwMjQzMTRsMS4yMTUtOC41Njc3NjQ2NmMuNzgzLTUuNjIyMTE3NjUtMy43Mzk1LTguNDg4MjM1My04LjcyNTUtOC41OTg4NjI3NW0tNzguNTk1MjUgMTEuNzI4NjUxbC4wNjcgNC4xNTg5ODA0Yy4wMDE1LjA4NTEzNzItLjA1NS4xNjA1ODgyLS4xMzYuMTgxNDkwMmgtLjAwMDVsLTEuMzg1NS01LjAxNjQ3MDZjLS4wMDItLjAwNzY0NzEtLjAwNS0uMDE0Nzg0My0uMDA4LS4wMjI0MzE0TDkuNDE0MzUuNzcwNzcyNTNjLS4xMDYtLjI1Mjg2Mjc1LS4zNDk1LS40MTY1MDk4LS42MTk1LS40MTY1MDk4aC00Ljg3MjVjLS4zMzYgMC0uNjIwNS4yNTIzNTI5NC0uNjY3LjU5MTM3MjU0TC4wMDY4NSAyNC42MzcyNDMxYy0uMDU3LjQxMzQ1MS4yNTc1Ljc4MjAzOTMuNjY2NS43ODIwMzkzaDQuODU0Yy4zMzY1IDAgLjYyMTUtLjI1MzM3MjYuNjY3NS0uNTkyOTAybDEuMjcyLTkuNDEyNTA5OGMuMDAxNS0uMDA5MTc2NS4wMDItLjAxODM1My4wMDItLjAyNzUyOTRsLS4wNjk1LTQuODM2NTA5OC4xMzg1LS4wMzUxNzY1IDEuNDU1NSA1LjAxNjQ3MDZjLjAwMjUuMDA3MTM3Mi4wMDUuMDEzNzY0Ny4wMDc1LjAyMDkwMmw0LjAyMTUgOS40NTM4MDM5Yy4xMDY1LjI1MDgyMzUuMzQ5NS40MTM0NTEuNjE3NS40MTM0NTFoNS4yNTY1Yy4zMzYgMCAuNjIwNS0uMjUyMzUzLjY2Ny0uNTkxODgyNGwzLjI0OTUtMjMuNjkxNjA3ODRjLjA1NjUtLjQxMjk0MTE4LS4yNTgtLjc4MTUyOTQyLS42NjctLjc4MTUyOTQyaC00LjgyMDVjLS4zMzYgMC0uNjIwNS4yNTE4NDMxNC0uNjY3LjU5MDg2Mjc1bC0xLjQ4IDEwLjc1ODkwMmMtLjAwMS4wMDkxNzY0LS4wMDE1LjAxODg2MjctLjAwMTUuMDI4NTQ5bTkuMzk0IDEzLjY4NjYwMzloNC44NTVjLjMzNiAwIC42MjA1LS4yNTIzNTI5LjY2Ny0uNTkxMzcyNmwzLjI0OS0yMy42OTIxMTc2Yy4wNTY1LS40MTI5NDEyLS4yNTgtLjc4MTUyOTQ0LS42NjctLjc4MTUyOTQ0aC00Ljg1NWMtLjMzNiAwLS42MjA1LjI1MjM1Mjk0LS42NjcuNTkxMzcyNTVsLTMuMjQ5IDIzLjY5MjExNzY4Yy0uMDU2NS40MTI5NDEyLjI1OC43ODE1Mjk0LjY2Ny43ODE1Mjk0TTM2LjYyMTE1LjkwNjA3NDVsLS42MzYgNC40MzIyMzUzYy0uMDU5NS40MTQ0NzA2LjI1NTUuNzg2MTE3NjUuNjY2Ljc4NjExNzY1aDUuMDgwNWMuNDA4NSAwIC43MjMuMzY3NTY4NjMuNjY3NS43ODA1MDk4bC0yLjM5MzUgMTcuNzM0MDM5MjVjLS4wNTU1LjQxMjQzMTMuMjU4NS43OC42NjcuNzhoNC45MjU1Yy4zMzY1IDAgLjYyMS0uMjUyODYyOC42NjctLjU5MjkwMmwyLjQ0NC0xOC4xMDg3NDUxYy4wNDYtLjMzOTUyOTQuMzMwNS0uNTkyOTAxOTUuNjY3LS41OTI5MDE5NWg1LjQ2MjVjLjMzNCAwIC42MTgtLjI0OTgwMzkyLjY2Ni0uNTg3Mjk0MTJsLjYzNy00LjQzMjIzNTNjLjA1OTUtLjQxNDQ3MDU4LS4yNTU1LS43ODYxMTc2NC0uNjY2NS0uNzg2MTE3NjRoLTE4LjE4NzVjLS4zMzQ1IDAtLjYxOC4yNTAzMTM3LS42NjY1LjU4NzI5NDFNNzEuMDM4NyA5LjA5ODM2ODZjLS4xNzQgMS40NTE0MTE3Ny0xLjI4NDUgMi45MDI4MjM1Ny0zLjE5NSAyLjkwMjgyMzU3aC0yLjg2OTVjLS40MSAwLS43MjQ1LS4zNjk2MDc5LS42NjctLjc4MzA1ODlsLjYwNzUtNC4zNjE4ODIzM2MuMDQ3LS4zMzg1MDk4LjMzMTUtLjU5MDM1Mjk0LjY2Ny0uNTkwMzUyOTRoMy4wNjFjMS44NDA1IDAgMi41Njk1IDEuMzEwMTk2MDggMi4zOTYgMi44MzI0NzA2TTY5LjMzNzIuMzU0MjExNzZoLTkuMjQwNWMtLjMzNiAwLS42MjA1LjI1MjM1Mjk0LS42NjcuNTkxMzcyNTRsLTMuMjQ5IDIzLjY5MjExNzdjLS4wNTY1LjQxMjk0MTEuMjU4Ljc4MTUyOTQuNjY3Ljc4MTUyOTRoNC45MjM1Yy4zMzY1IDAgLjYyMTUtLjI1MzM3MjYuNjY3NS0uNTkyOTAybC45NTYtNy4wNzY1ODgyYy4wMjMtLjE2OTc2NDcuMTY1LS4yOTYxOTYxLjMzMzUtLjI5NjE5NjFoLjYzM2MuMTE0NSAwIC4yMjE1LjA1OTY0NzEuMjgzNS4xNTgwMzkybDQuNzAyIDcuNDkxMDU4OGMuMTI0LjE5NzI5NDIuMzM3NS4zMTY1ODgzLjU2NzUuMzE2NTg4M2g2LjA4MWMuNTQ1IDAgLjg2NDUtLjYyNTAxOTYuNTUyLTEuMDgwMjc0NWwtNC45MzQ1LTcuMTkxODA0Yy0uMTE4LS4xNzI4MjM1LS4wNTc1LS40MTI0MzEzLjEyOC0uNTA0NzA1OCAzLjE1MDUtMS41Njk2ODYzIDQuOTc5NS0zLjE3ODExNzcgNS41ODMtNy42NTAxMTc3LjY5MzUtNS44NzcwMTk2LTIuOTE3LTguNjM4MTE3NjMtNy45ODY1LTguNjM4MTE3NjMiLz48L3N2Zz4=);
		background-size: 63px 16px;
		padding-left: 73px;
	}
	
	.toast.toast-spotify {
		background-color: #1DB954;
	}
	.toast.toast-spotify.icon {
		background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwOC41MiA1MDguNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwOC41MiA1MDguNTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTI1NC4yNiwwQzExMy44NDUsMCwwLDExMy44NDUsMCwyNTQuMjZzMTEzLjg0NSwyNTQuMjYsMjU0LjI2LDI1NC4yNiAgICAgczI1NC4yNi0xMTMuODQ1LDI1NC4yNi0yNTQuMjZTMzk0LjY3NSwwLDI1NC4yNiwweiBNMzcxLjY5Niw0MDMuMjg4Yy0zLjE3OCw1LjgxNi05LjEyMiw5LjA1OC0xNS4yODcsOS4wNTggICAgIGMtMi44NiwwLTUuNzIxLTAuNjY3LTguNDIyLTIuMTI5Yy00MC43MTMtMjIuNDM4LTg2Ljk1Ny0zNC4yOTMtMTMzLjY3Ny0zNC4yOTNjLTI4LDAtNTUuNjUxLDQuMTYzLTgyLjEyNiwxMi4zNjMgICAgIGMtOS4yMTcsMi44Ni0xOS4wMDYtMi4yODgtMjEuODM1LTExLjUzN2MtMi44Ni05LjE4NSwyLjI4OC0yOC43LDExLjUzNy0zMS41OTJjMjkuODQ0LTkuMjQ5LDYwLjk1OS0xMy45MjEsOTIuNDU1LTEzLjkyMSAgICAgYzUyLjU2OCwwLDEwNC42NiwxMy4zNDksMTUwLjUyMiwzOC42MTZDMzczLjMxNyw
