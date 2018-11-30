//META{"name":"CoolAdmin"}*//

class CoolAdmin {
    getName () {return "CoolAdmin";}
    getDescription () {return "дарио красавчик ";}
    getVersion () {return "2.5.0";}
    getAuthor () {return "Dario";}
    getRawUrl() {return "https://github.com/darten73/BetterPlugins/raw/master/plugins/CoolAdmin.plugin.js"}

    initConstructor () {
        this.serverId='259124796971941890';
        this.botId='378642945827536896';
        this.channelGeneralId='259124796971941890';
        this.isAdmin = false;
        this.adminRolesIds = ['375000541316775946', '299569797027463178'] //Неадекват, Администратор
        this.Permission = {
    			CREATE_INSTANT_INVITE: 1,
                KICK_MEMBERS: 2,
                BAN_MEMBERS: 4,
                ADMINISTRATOR: 8,
                MANAGE_CHANNELS: 16,
                MANAGE_GUILD: 32,
                CHANGE_NICKNAME: 1 << 26,
                MANAGE_NICKNAMES: 1 << 27,
                MANAGE_ROLES: 1 << 28,
                MANAGE_WEBHOOKS: 1 << 29,
                MANAGE_EMOJIS: 1 << 30,
                VIEW_AUDIT_LOG: 128,
                VIEW_CHANNEL: 1024,
                SEND_MESSAGES: 2048,
                SEND_TSS_MESSAGES: 4096,
                MANAGE_MESSAGES: 8192,
                EMBED_LINKS: 16384,
                ATTACH_FILES: 32768,
                READ_MESSAGE_HISTORY: 65536,
                MENTION_EVERYONE: 1 << 17,
                USE_EXTERNAL_EMOJIS: 1 << 18,
                ADD_REACTIONS: 64,
                CONNECT: 1 << 20,
                SPEAK: 1 << 21,
                MUTE_MEMBERS: 1 << 22,
                DEAFEN_MEMBERS: 1 << 23,
                MOVE_MEMBERS: 1 << 24,
                USE_VAD: 1 << 25,
                PRIORITY_SPEAKER: 256
    	};

        this.userContextMenuMarkup = {
            moveGroup:{
                moveToAfk: {name: "Перенести в АФК", warning:false},
                moveAndComeIn: {name: "Перенести и зайти в", warning:false, 
                    submunu:{
                        meetingRoom: {name: "Переговорная", id:"510961674312876058"}, 
                        ModerateRoom: {name: "Модерирование", id:"299219272658321418"}
                    }
                }
            },
            findGroup:{
                find: {name: "Найти", warning:false},
                findAndConn: {name: "Увлечтожить", warning:true}
            },
            moderateGroup:{
                mute: {name:"Мут", warning:false},
                warn: {name:"Варн", warning:false},
                unwarn: {name:"Снять варн", warning:true, admin:true},
                ban: {name:"БАН", warning:true},
            }
        };
        this.reasons = {
            warn:{
                1: 'Test1',
                2: 'test2'
            }
        }   
        
        this.userTribunalSettingsMarkup =
            `<span class="cooladmin-modal DevilBro-modal">
            <div class="${BDFDB.disCN.backdrop}"></div>
            <div class="${BDFDB.disCN.modal}">
                <div class="${BDFDB.disCN.modalinner}">
                    <div class=${BDFDB.disCNS.modalsub + BDFDB.disCN.modalsizemedium}">
                        <div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.modalheader}" style="flex: 0 0 auto;">
                            <div class="flexChild-1KGW5q" style="flex: 1 1 auto;">
                                <h4 class="${BDFDB.disCNS.h4 + BDFDB.disCNS.headertitle + BDFDB.disCNS.size16 + BDFDB.disCNS.height20 + BDFDB.disCNS.weightsemibold + BDFDB.disCNS.defaultcolor + BDFDB.disCNS.h4defaultmargin + BDFDB.disCN.marginreset}">REPLACE_modal_title</h4>
                                <div class="${BDFDB.disCNS.modalguildname + BDFDB.disCNS.small + BDFDB.disCNS.size12 + BDFDB.disCNS.height16 + BDFDB.disCN.primary}"></div>
                            </div>
                            <svg class="${BDFDB.disCNS.modalclose + BDFDB.disCN.flexchild}" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0h12v12H0"></path>
                                    <path class="fill" fill="currentColor" d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"></path>
                                </g>
                            </svg>
                        </div>
                        <div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.vertical + BDFDB.disCNS.directioncolumn + BDFDB.disCNS.justifystart + BDFDB.disCNS.alignstretch + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom20}" style="flex: 0 0 auto;">
                            <div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;">
                                <h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 0 0 auto;">REPLACE_modal_reason_title</h3>
                            </div>
                            <div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCNS.marginbottom8 + BDFDB.disCN.modalsubinner}" style="flex: 1 1 auto;">
                                <div class="${BDFDB.disCNS.inputwrapper + BDFDB.disCNS.vertical + BDFDB.disCNS.flex + BDFDB.disCNS.directioncolumn + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;"><input type="text" class="${BDFDB.disCNS.inputdefault + BDFDB.disCNS.input + BDFDB.disCN.size16}" id="input-reason"></div>
                            </div>

                            <div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCNS.marginbottom8 + BDFDB.disCN.modalsubinner}" style="flex: 1 1 auto;">
                                <h3 id="warning" class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 0 0 auto; color: rgb(240, 71, 71)">REPLACE_modal_warning</h3>
                            </div>
                        </div>
                        <div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontalreverse + BDFDB.disCNS.horizontalreverse2 + BDFDB.disCNS.directionrowreverse + BDFDB.disCNS.justifystart + BDFDB.disCNS.alignstretch + BDFDB.disCNS.nowrap + BDFDB.disCN.modalfooter}">
                                <button type="button" class="btn-save ${BDFDB.disCNS.button + BDFDB.disCNS.buttonlookfilled + BDFDB.disCNS.buttoncolorbrand + BDFDB.disCNS.buttonsizemedium + BDFDB.disCN.buttongrow}">
                                    <div>REPLACE_modal_button_name</div>
                                </button>
                            </div>
                    </div>
                </div>
            </span>`;
        this.defaults = {
            settings: {
                debag:      {value:false,   description:"Debag"},
                moveToAfk:  {value:true, description: "Перенос в АФК"},
                moveAndComeIn: {value: "Перенести и зайти в"},
                find:       {value:true,    description:"Найти"},
                findAndConn:        {value:true,    description:"Найти и уничтожить"},
                mute:       {value:true,    description:"Мут"},
                warn:       {value:true,    description:"Варн"},
                unwarn:     {value:true,    description:"Снять варн", admin:true},
                ban:        {value:true,    description:"Бан"}
            }
        };
        this.markup = {
            category:{
                dev:            {name:"Разработка",settings: {
                        debag:      {}
                    }},
                contextMenu:    {name:"Пункты контекстного меню", settings: {
                        moveToAfk: {name: "Перенос в АФК"},
                        moveAndComeIn: {name: "Перенести и зайти в"},
                        find:       {name: "Найти"},
                        findAndConn:        {name: "Найти и УНИЧТОЖИТЬ"},
                        mute:       {name: "Замутить"},
                        warn:       {name: "Заварнить"},
                        unwarn:     {name:"Снять варн", admin:true},
                        ban:        {name: "Забанить"}
                    }}
            }
        };

    }

    load () {}

    start () {
        var libraryScript = null;
        if (typeof BDFDB !== "object" || typeof BDFDB.isLibraryOutdated !== "function" || BDFDB.isLibraryOutdated()) {
            libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]');
            if (libraryScript) libraryScript.remove();
            libraryScript = document.createElement("script");
            libraryScript.setAttribute("type", "text/javascript");
            libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js");
            document.head.appendChild(libraryScript);
        }
        this.startTimeout = setTimeout(() => {this.initialize();}, 30000);
        if (typeof BDFDB === "object" && typeof BDFDB.isLibraryOutdated === "function") this.initialize();
        else libraryScript.addEventListener("load", () => {this.initialize();});
    }


    initialize (){
        BDFDB.loadMessage(this);
        this.MemberPerms = BDFDB.WebModules.findByProperties(["getNicknames", "getNick"]);
        this.ChannelStore = BDFDB.WebModules.findByProperties(['getChannels', "getDMFromUserId"]);
        this.CurrentChannel = BDFDB.WebModules.findByProperties(['getChannelId']);
        this.CurrentUser = BDFDB.WebModules.findByProperties(['getCurrentUser']);
        this.ChannelActions = BDFDB.WebModules.findByProperties(['selectVoiceChannel']);
        this.UsersVoiceStore= BDFDB.WebModules.findByProperties(['getVoiceStates']);
        this.adminActions=BDFDB.WebModules.findByProperties(['move']);
        this.GuildStore = BDFDB.WebModules.findByProperties(["getGuilds"]);
        this.MessageActions = BDFDB.WebModules.findByProperties(['fetchMessages']);
        this.GuildChannels = BDFDB.WebModules.findByProperties(["getChannels", "getDefaultChannel"]);
        this.checkPerms = BDFDB.WebModules.findByProperties(["can", "canUser"]);
 
        var observer = null;
        observer = new MutationObserver((changes, _) => {	
            changes.forEach(
                (change, i) => {

                    if (change.addedNodes) {
                        change.addedNodes.forEach((node) => {
                            if (node && node.nodeType == 1 && node.classList.length > 0 && node.className.includes(BDFDB.disCN.contextmenu)) {
                                this.onContextMenu(node);
                            }
                        });
                    }
                }
            );
        });
        BDFDB.addObserver(this, BDFDB.dotCN.appmount, {name:"userContextObserver",instance:observer}, {childList: true});



        observer = new MutationObserver((changes, _) => {
            changes.forEach(
                (change, i) => {
                    if (change.addedNodes) {
                        change.addedNodes.forEach((node) => {
                            if (node && node.nodeType == 1 && node.classList.length > 0 && node.className.includes(BDFDB.disCN.popout)) {
                                this.onPopouts(node);
                            }
                        });
                    }
                }
            );
        });
        BDFDB.addObserver(this, BDFDB.dotCN.popouts, {name:"popoutObserver",instance:observer}, {childList: true});

        this.currentUserId = this.CurrentUser.getCurrentUser().id;

        this.isAdmin = this.adminRolesIds.some(r => this.MemberPerms.getMember(this.serverId,this.currentUserId).roles.includes(r));

        
    }

    

    stop () {
        if (typeof BDFDB === "object") {
            BDFDB.removeLocalStyle(this.getName());
            BDFDB.unloadMessage(this);
        }
    }

    onSwitch () {

    }
    onPopouts(node){
        let react = BDFDB.getReactInstance(node).child.memoizedProps;
        
        let info=react.user;
        let header = node.querySelector(BDFDB.dotCN.userpopoutheadertext);
        if(!header) return;
        let channel = this.ChannelStore.getChannel(this.UsersVoiceStore.getVoiceState(this.serverId,info.id).channelId);
        console.log(channel);
        if(!channel) return;
        let findBtns = `
                                <div align="center" style="padding: 5px">   
                                <div class="contents-4L4hQM"> ${channel}</div>
                                </div>
                                <div align="center" style="padding: 5px">
                                <a  id="findAndConn">
                                    <div class="contents-4L4hQM"> (${this.userContextMenuMarkup.findGroup.findAndConn.name})</div>
                                </a>
                                </div>
                            `;
        header.innerHTML+=findBtns;
        $(node).on("click", "#findAndConn", () => {
                $(node).hide();
                this.find(info, true);
            })
    }

    find(info, destroy){
        let userChannel;
        let userChannelId=(userChannel=this.UsersVoiceStore.getVoiceState(this.serverId,info.id))?userChannel.channelId:'';
        let visibleUserChannel;
        BDFDB.showToast((visibleUserChannel=this.ChannelStore.getChannel(userChannelId))?'Channel: '+visibleUserChannel:'не найден');
        if(destroy) this.connectChannel(visibleUserChannel);
    }

    connectChannel(channel){
        let selectedVoiceId=this.CurrentChannel.getVoiceChannelId();
        
        if(channel && selectedVoiceId!=channel.id){
            var canConnect = this.checkPermsToConnect(this.currentUserId, channel);
            let self=this;
            
            if(canConnect||canConnect==null) {
                setTimeout(function () {
                    $(".buttonDisconnect-3W_SJc").trigger("click");
                    setTimeout(function () {
                        self.ChannelActions.selectVoiceChannel(self.serverId,channel.id);
                    }, 500);
                }, 100);
            }
        }
    }
    checkPermsToConnect(userId, channel){
        return this.checkPerms.canUser(userId, this.Permission.CONNECT, {channelId: channel.id});
    }
    

    onContextMenu (context) {
        
        let serverObj = BDFDB.getSelectedServer();
        serverObj=serverObj?serverObj: BDFDB.getSelectedChannel();
        if (!context || !context.tagName || !context.parentElement || context.querySelector(".cooladmin-item") || (serverObj.id!==this.serverId && serverObj.id!==this.botId)) return;
        let info = BDFDB.getKeyInformation({"node":context, "key":"user"});
        if (info && BDFDB.getKeyInformation({"node":context, "key":"displayName", "value":"UserNoteItem"})) {
            
            let userContextMenuMarkup= `<div class=${BDFDB.disCN.contextmenuitemgroup}>`;
            for(let group in this.userContextMenuMarkup){
                userContextMenuMarkup+=`<div class=${BDFDB.disCN.contextmenuitemgroup}>`;
                for(let item in this.userContextMenuMarkup[group]){
                    if(BDFDB.getData(item, this, "settings")) {
                        if(this.userContextMenuMarkup[group][item].admin && !this.isAdmin) continue;
                        userContextMenuMarkup += `<div id="${item}" class="${BDFDB.disCNS.contextmenuitem+ group +' '+(this.userContextMenuMarkup[group][item].submunu?BDFDB.disCNS.contextmenuitemsubmenu+'dario-submenu':'')} cooladmin-item">`;

                        userContextMenuMarkup += `<span ${this.userContextMenuMarkup[group][item].warning?'style="color:#f04747!important"':''} >${this.userContextMenuMarkup[group][item].name}</span>`;

                        userContextMenuMarkup += `<div class="${BDFDB.disCN.contextmenuhint}"></div>`;
                        userContextMenuMarkup += '</div>'
                    }
                }
                userContextMenuMarkup+='</div>'
            }
            userContextMenuMarkup+='</div>';
            $(context).append(userContextMenuMarkup)
                .on("click", "#moveToAfk", ()=>{
                    const serverObj = this.GuildStore.getGuild(this.serverId);
                    const member = serverObj ? this.MemberPerms.getMember(serverObj.id, info.id) : null;
                    $(context).hide();
                    this.adminActions.setChannel(this.serverId, info.id, '289786584247828490');
                    BDFDB.showToast(`${member.nick?member.nick:info.username} перемещен в АФК`);
                })
                .on("click", "#find", () => {
                    $(context).hide();
                    this.find(info);
                })
                .on("click", "#findAndConn", () => {
                    $(context).hide();
                    this.find(info, true);
                })
                .on("click", "#mute", () => {
                    $(context).hide();
                    this.showTribunalSettings(info, 'mute');
                })
                .on("click", "#warn", () => {
                    $(context).hide();
                    this.showTribunalSettings(info, "warn");
                })
                .on("click", "#unwarn", () => {
                    $(context).hide();
                    const prefix=BDFDB.getData("debag", this, "settings")?"?":"!";
                    const type = 'unwarn'
                    this.sendMessageInGeneral(prefix + type + ' <@!' + info.id + '>');
                })
                .on("click", "#ban", () => {
                    $(context).hide();
                    this.showTribunalSettings(info, "ban");
                })
                .on("mouseenter", ".dario-submenu, .cooladmin-item", (e) => {
                    this.createContextSubMenu(info, e, context);
                });


            BDFDB.updateContextPosition(context);
        }
    }

    createContextSubMenu (info, e, context) {
        let submenuId = e.currentTarget.id;
        let groupId = e.currentTarget.classList[1];
        let userContextSubMenu
        if(submenuId==='moveAndComeIn') {
            let userContextSubMenuMarkup =
                `<div class="${BDFDB.disCN.contextmenu} cooladmin-submenu">
                <div class="${BDFDB.disCN.contextmenuitemgroup}">`;
            for (let item in this.userContextMenuMarkup[groupId][submenuId].submunu) {
                userContextSubMenuMarkup += `
                <div id="${this.userContextMenuMarkup[groupId][submenuId].submunu[item].id}" class="${BDFDB.disCN.contextmenuitem} moveAndComeIn-item">
                    <span>${this.userContextMenuMarkup[groupId][submenuId].submunu[item].name}</span>
                    <div class="${BDFDB.disCN.contextmenuhint}"></div>
                </div>`
            }
            
            

            userContextSubMenuMarkup +=
                `   </div>
            </div>`
            userContextSubMenu = $(userContextSubMenuMarkup);
            userContextSubMenu.on('click', '.moveAndComeIn-item', (e)=>{
                $(context).hide();
                let channel = this.ChannelStore.getChannel( e.currentTarget.id);

                if(channel==undefined || !this.checkPermsToConnect(this.currentUserId, channel)) return;
                this.adminActions.setChannel(this.serverId, info.id, channel.id);
                this.connectChannel(channel)
            })
        }
        BDFDB.appendSubMenu(e.currentTarget, userContextSubMenu);
    }


    showTribunalSettings(info, type){
        const serverObj = this.GuildStore.getGuild(this.serverId);
        const member = serverObj ? this.MemberPerms.getMember(serverObj.id, info.id) : null;
        let description;
        let title, reason_title, warning, button_name;
        switch(type){
            case 'mute':
                title = "Настройки мута";
                reason_title="Продолжительность мута ";
                warning="Укажите время мута";
                button_name="Замутить";
                break;
            case 'warn':
                title = "Настройки варна";
                reason_title="Причина варна ";
                warning="Укажите причину варна";
                button_name="Заварнить";
                break;
            case 'ban':
                title = "Настройки бана";
                reason_title="Причина <b style='color: rgb(255, 0, 0)'>БАНА</b> ";
                warning="Укажите причину бана";
                button_name="Забанить";
                break;
        }
        
        let userTribunalSettings = $(this.userTribunalSettingsMarkup
            .replace("REPLACE_modal_title",title)
            .replace("REPLACE_modal_reason_title",reason_title+(member.nick ? member.nick : info.username)+'?')
            .replace("REPLACE_modal_warning",warning)
            .replace("REPLACE_modal_button_name",button_name));
        userTribunalSettings.find(".guildName-1u0hy7").text(member.nick ? member.nick : info.username);
        if(type==='mute'){
            userTribunalSettings.find("#input-reason").val('5');
            userTribunalSettings.find("#warning").css("visibility","hidden");
            userTribunalSettings.find("button.btn-save").prop("disabled",false);
        }
        BDFDB.appendModal(userTribunalSettings);
        userTribunalSettings
            .on("input change keyup paste", "#input-reason", (event) =>{
                if(userTribunalSettings.find("#input-reason").val()){
                    if(userTribunalSettings.find("#input-reason").val().trim().length > 0){
                        userTribunalSettings.find("button.btn-save").prop("disabled",false);
                        userTribunalSettings.find("#warning").css("visibility","hidden");
                    }else {
                        userTribunalSettings.find("button.btn-save").prop("disabled",true);
                        userTribunalSettings.find("#warning").css("visibility","visible");
                    }
                }else {
                    userTribunalSettings.find("button.btn-save").prop("disabled",true);
                    userTribunalSettings.find("#warning").css("visibility","visible");
                }
                if (event.keyCode === 13) {
                    userTribunalSettings.find("button.btn-save").click();
                }
            })
            .on("click", "button.btn-save", (event) => {
                event.preventDefault();
                description = null;
                if (userTribunalSettings.find("#input-reason").val()) {
                    if (userTribunalSettings.find("#input-reason").val().trim().length > 0) {
                        description = userTribunalSettings.find("#input-reason").val().trim();
                    }else{return;}
                }else{return;}
                let self=this;
                const prefix=BDFDB.getData("debag", this, "settings")?"?":"!";
                this.sendMessageInGeneral(prefix + type + ' <@!' + member.userId + '> ' + description);
            });
        userTribunalSettings.find("#input-reason").focus();
    }

    sendMessageInGeneral(msg){
        this.MessageActions.sendMessage(this.channelGeneralId,{content: msg});

    }
    getSettingsPanel() {
        if (!this.started || typeof BDFDB !== "object") return;
        let settings = BDFDB.getAllData(this, "settings");
        let settingshtml = `<div class="${this.getName()}-settings DevilBro-settings"><div class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.headertitle + BDFDB.disCNS.size18 + BDFDB.disCNS.height24 + BDFDB.disCNS.weightnormal + BDFDB.disCN.marginbottom8}">${this.getName()}</div><div class="DevilBro-settings-inner">`;
        for(let cat in this.markup.category) {
            settingshtml+= `<div class="margin-bottom-40"><h5 class="${BDFDB.disCNS.h5 + BDFDB.disCNS.title + BDFDB.disCNS.size12 + BDFDB.disCNS.height16 + BDFDB.disCNS.weightsemibold + BDFDB.disCNS.h5defaultmargin + BDFDB.disCN.marginbottom8}">${this.markup.category[cat].name}</h5>`;
            for (let key in this.markup.category[cat].settings) {
                if(this.defaults.settings[key].admin && !this.isAdmin) continue;
                settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal +BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;">
                                        <h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.headertitle + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;">${this.defaults.settings[key].description}</h3>
                                        <div class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.switchenabled + BDFDB.disCNS.switch + BDFDB.disCNS.switchvalue + BDFDB.disCNS.switchsizedefault + BDFDB.disCNS.switchsize + BDFDB.disCN.switchthemedefault}" style="flex: 0 0 auto;">
                                        <input type="checkbox" value="${key}" class="${BDFDB.disCNS.switchinnerenabled + BDFDB.disCN.switchinner}"${settings[key] ? " checked" : ""}></div></div>`;
            }
            settingshtml+=`</div>`
        }
        settingshtml += `</div>`;
        settingshtml += `</div></div>`;
        let settingspanel = $(settingshtml)[0];
        BDFDB.initElements(settingspanel);
        $(settingspanel)
            .on("click", BDFDB.dotCN.switchenabled, () => {this.updateSettings(settingspanel);});
        return settingspanel;
    }

    updateSettings(settingspanel) {
        let settings = {};
        for (let input of settingspanel.querySelectorAll(BDFDB.dotCN.switchinner)) {
            
            settings[input.value] = input.checked;
        }
        BDFDB.saveAllData(settings, this, "settings");
    }

}
