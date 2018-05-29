//META{"name":"CoolAdmin"}*//

class CoolAdmin {
    getName () {return "CoolAdmin";}
    getDescription () {return "Ты пидор";}
    getVersion () {return "2.3.1";}
    getAuthor () {return "Dario";}

    initConstructor () {
        this.serverId='259124796971941890';
        this.botId='378642945827536896';
        this.channelGeneralId='259124796971941890';
        this.isAdmin = false;
        this.adminRolesIds = ['375000541316775946', '299569797027463178'] //Неадекват, Администратор

        this.userContextMenuMarkup = {
            moveGroup:{
                moveToAfk: {name: "Перенести в АФК", warning:false},
                moveAndComeIn: {name: "Перенести и зайти в", warning:false, admin:true,
                    submunu:{
                        ceilingRoom: {name: "Потолок", id:"377077054350295042"},
                        MskRoom: {name: "МСК", id:"419560015440117771"},
                        CloudVapersRoom: {name: "Cloud Vapers", id:"418849720643878914"},
                        AdminRoom: {name: "Администрирование", id:"374969273480773633"},
                        ModerRoom: {name: "Модерирование", id:"299219272658321418"}
                    }},
            },
            findGroup:{
                find: {name: "Найти", warning:false},
                findAndConn: {name: "Найти и Перейти", warning:true}
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
        };
        
        this.userTribunalSettingsMarkup =
            `<span class="cooladmin-modal DevilBro-modal">
			<div class="${BDfunctionsDario.disCN.backdrop}"></div>
			<div class="${BDfunctionsDario.disCN.modal}">
				<div class="${BDfunctionsDario.disCN.modalinner}">
					<div class=${BDfunctionsDario.disCNS.modalsub + BDfunctionsDario.disCN.modalsizemedium}">
						<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.aligncenter + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCN.modalheader}" style="flex: 0 0 auto;">
							<div class="flexChild-1KGW5q" style="flex: 1 1 auto;">
								<h4 class="${BDfunctionsDario.disCNS.h4 + BDfunctionsDario.disCNS.headertitle + BDfunctionsDario.disCNS.size16 + BDfunctionsDario.disCNS.height20 + BDfunctionsDario.disCNS.weightsemibold + BDfunctionsDario.disCNS.defaultcolor + BDfunctionsDario.disCNS.h4defaultmargin + BDfunctionsDario.disCN.marginreset}">REPLACE_modal_title</h4>
								<div class="${BDfunctionsDario.disCNS.modalguildname + BDfunctionsDario.disCNS.small + BDfunctionsDario.disCNS.size12 + BDfunctionsDario.disCNS.height16 + BDfunctionsDario.disCN.primary}"></div>
							</div>
							<svg class="${BDfunctionsDario.disCNS.modalclose + BDfunctionsDario.disCN.flexchild}" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">
								<g fill="none" fill-rule="evenodd">
									<path d="M0 0h12v12H0"></path>
									<path class="fill" fill="currentColor" d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"></path>
								</g>
							</svg>
						</div>
						<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.vertical + BDfunctionsDario.disCNS.directioncolumn + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.alignstretch + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCN.marginbottom20}" style="flex: 0 0 auto;">
							<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.aligncenter + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCN.marginbottom8}" style="flex: 1 1 auto;">
								<h3 class="${BDfunctionsDario.disCNS.titledefault + BDfunctionsDario.disCNS.title + BDfunctionsDario.disCNS.marginreset + BDfunctionsDario.disCNS.weightmedium + BDfunctionsDario.disCNS.size16 + BDfunctionsDario.disCNS.height24 + BDfunctionsDario.disCN.flexchild}" style="flex: 0 0 auto;">REPLACE_modal_reason_title</h3>
							</div>
							<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.aligncenter + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCNS.marginbottom8 + BDfunctionsDario.disCN.modalsubinner}" style="flex: 1 1 auto;">
								<div class="${BDfunctionsDario.disCNS.inputwrapper + BDfunctionsDario.disCNS.vertical + BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.directioncolumn + BDfunctionsDario.disCN.flexchild}" style="flex: 1 1 auto;"><input type="text" class="${BDfunctionsDario.disCNS.inputdefault + BDfunctionsDario.disCNS.input + BDfunctionsDario.disCN.size16}" id="input-reason"></div>
							</div>

							<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.aligncenter + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCNS.marginbottom8 + BDfunctionsDario.disCN.modalsubinner}" style="flex: 1 1 auto;">
								<h3 id="warning" class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.aligncenter + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCN.marginbottom8}" style="flex: 0 0 auto; color: rgb(240, 71, 71)">REPLACE_modal_warning</h3>
							</div>
						</div>
						<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontalreverse + BDfunctionsDario.disCNS.horizontalreverse2 + BDfunctionsDario.disCNS.directionrowreverse + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.alignstretch + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCN.modalfooter}">
								<button type="button" class="btn-save ${BDfunctionsDario.disCNS.button + BDfunctionsDario.disCNS.buttonlookfilled + BDfunctionsDario.disCNS.buttoncolorbrand + BDfunctionsDario.disCNS.buttonsizemedium + BDfunctionsDario.disCN.buttongrow}">
									<div>REPLACE_modal_button_name</div>
								</button>
							</div>
					</div>
				</div>
			</span>`;
        this.defaults = {
            settings: {
                debag:		{value:false, 	description:"Debag"},
                moveToAfk: 	{value:true, description: "Перенос в АФК"},
                moveAndComeIn: {value: "Перенести и зайти в", admin:true},
                find:		{value:true, 	description:"Найти"},
                findAndConn:		{value:true, 	description:"Найти и уничтожить"},
                mute:		{value:true, 	description:"Мут"},
                warn:		{value:true, 	description:"Варн"},
                unwarn:		{value:true, 	description:"Снять варн", admin:true},
                ban:		{value:true, 	description:"Бан"}
            }
        };
        this.markup = {
            category:{
                dev: 			{name:"Разработка",settings: {
                        debag:		{}
                    }},
                contextMenu: 	{name:"Пункты контекстного меню", settings: {
                        moveToAfk: {name: "Перенос в АФК"},
                        moveAndComeIn: {name: "Перенести и зайти в", admin:true},
                        find:		{name: "Найти"},
                        findAndConn:		{name: "Найти и УНИЧТОЖИТЬ"},
                        mute:		{name: "Замутить"},
                        warn:		{name: "Заварнить"},
                        unwarn:		{name:"Снять варн", admin:true},
                        ban:		{name: "Забанить"}
                    }}
            }
        };

    }

    load () {}

    start () {
        var libraryScript = null;
        if (typeof BDfunctionsDario !== "object" || BDfunctionsDario.isLibraryOutdated()) {
            if (typeof BDfunctionsDario === "object") BDfunctionsDario = "";
            libraryScript = document.querySelector('head script[src="https://darten73.github.io/BetterPlugins/BDfunctionsDario.js"]');
            if (libraryScript) libraryScript.remove();
            libraryScript = document.createElement("script");
            libraryScript.setAttribute("type", "text/javascript");
            libraryScript.setAttribute("src", "https://darten73.github.io/BetterPlugins/BDfunctionsDario.js");
            document.head.appendChild(libraryScript);
        }
        this.startTimeout = setTimeout(() => {this.initialize();}, 30000);
        if (typeof BDfunctionsDario === "object") this.initialize();
        else libraryScript.addEventListener("load", () => {this.initialize();});
    }


    initialize (){
        BDfunctionsDario.loadMessage(this);
        this.MemberPerms = BDfunctionsDario.WebModules.findByProperties(["getNicknames", "getNick"]);
        this.ChannelStore = BDfunctionsDario.WebModules.findByProperties(['getChannels', "getDMFromUserId"]);
        this.CurrentChannel = BDfunctionsDario.WebModules.findByProperties(['getChannelId']);
        this.CurrentUser = BDfunctionsDario.WebModules.findByProperties(['getCurrentUser']);
        this.ChannelActions = BDfunctionsDario.WebModules.findByProperties(['selectVoiceChannel']);
        this.UsersVoiceStore= BDfunctionsDario.WebModules.findByProperties(['getVoiceStates']);
        this.adminActions=BDfunctionsDario.WebModules.findByProperties(['move']);
        this.GuildStore = BDfunctionsDario.WebModules.findByProperties(["getGuilds"]);
        this.MessageActions = BDfunctionsDario.WebModules.findByProperties(['fetchMessages']);
        this.GuildChannels = BDfunctionsDario.WebModules.findByProperties(["getChannels", "getDefaultChannel"]);
        this.sendm = ''
        this.bufc=''
        

        $('.containerDefault-1ZnADq').off("drop."+this.getName());
        $('.draggable-1KoBzC').off("dragstart."+this.getName());
        $('.containerDefault-1ZnADq').on("drop."+this.getName(),(e) => {
            
            let buf = BDfunctionsDario.getReactInstance(e.currentTarget).child.memoizedProps;
            this.sendm += `в ${buf.channel.name}`;
            this.lpost(this.sendm);
        });
        $('.draggable-1KoBzC').on("dragstart."+this.getName(),(e) => {
            
            let u=BDfunctionsDario.getReactInstance(e.currentTarget).child.memoizedProps;
            this.sendm = `<@!${this.currentUserId}> переместил <@!${u.user.id}> из ${u.channel.name} `;
        });
        var observer = null;

        observer = new MutationObserver((changes, _) => {
                changes.forEach(
                    (change, i) => {
                        if (change.addedNodes) {
                            change.addedNodes.forEach((node) => {
                                if (node && node.className && node.className.length > 0 && ( node.className.indexOf("container-") > -1 || node.className.indexOf("flex-") > -1)) {
                                    $('.containerDefault-1ZnADq').off("drop."+this.getName());
                                    $('.draggable-1KoBzC').off("dragstart."+this.getName());
                                    $('.containerDefault-1ZnADq').on("drop."+this.getName(),(e) => {
                                        
                                        let buf = BDfunctionsDario.getReactInstance(e.currentTarget).child.memoizedProps;
                                        this.sendm += `в ${buf.channel.name}`;
                                        this.lpost(this.sendm);
                                    });
                                    $('.draggable-1KoBzC').on("dragstart."+this.getName(),(e) => {
                                        
                                        let u=BDfunctionsDario.getReactInstance(e.currentTarget).child.memoizedProps;
                                        this.sendm = `<@!${this.currentUserId}> переместил <@!${u.user.id}> из ${u.channel.name} `;
                                    });
                                } 
                            });
                        }
                    }
                );
            });
            BDfunctionsDario.addObserver(this, BDfunctionsDario.dotCN.channels, {name:"channelListObserver",instance:observer}, {childList: true, subtree: true});
        

        observer = new MutationObserver((changes, _) => {
            changes.forEach(
                (change, i) => {

                    if (change.addedNodes) {
                        change.addedNodes.forEach((node) => {
                            console.log(node)
                            if (node && node.nodeType == 1 && node.classList.length > 0 && node.className.includes(BDfunctionsDario.disCN.contextmenu)) {
                                this.onContextMenu(node);
                                $(BDfunctionsDario.dotCN.contextmenuitemsubmenu).on('mouseenter.'+this.getName(), (e)=>{
                                    let act = e.currentTarget.firstChild.data;
                                    
                                    $(BDfunctionsDario.dotCN.contextmenuitemsubmenu+BDfunctionsDario.dotCN.contextmenuitem).on('click.l'+this.getName(), (event) =>{
                                        let target = event.target.firstChild.data;
                                        let u = BDfunctionsDario.getKeyInformation({"node":node, "key":"user"});
                                        let c = BDfunctionsDario.getKeyInformation({"node":event.target, "key":"channel"});
                                        this.GuildChannels.getChannels(this.serverId)[2].forEach((ch)=>{
                                            if(ch.channel.name === target)
                                                this.lpost(`<@!${this.currentUserId}> переместил <@!${u.id}> из ${this.ChannelStore.getChannel(this.bufc)} в ${target}`);
                                        })
                                    })
                                });
                                $(BDfunctionsDario.dotCN.contextmenuitemsubmenu).on('mouseleave.'+this.getName(), (e)=>{
                                    
                                    $(BDfunctionsDario.dotCN.contextmenuitemsubmenu+BDfunctionsDario.dotCN.contextmenuitem).off('click.l'+this.getName())
                                });
                            }
                        });
                    }
                }
            );
        });
        BDfunctionsDario.addObserver(this, BDfunctionsDario.dotCN.appmount, {name:"userContextObserver",instance:observer}, {childList: true});



        observer = new MutationObserver((changes, _) => {
            changes.forEach(
                (change, i) => {
                    if (change.addedNodes) {
                        change.addedNodes.forEach((node) => {
                            if (node && node.nodeType == 1 && node.classList.length > 0 && node.className.includes(BDfunctionsDario.disCN.popout)) {
                                this.onPopouts(node);
                            }
                        });
                    }
                }
            );
        });
        BDfunctionsDario.addObserver(this, BDfunctionsDario.dotCN.popouts, {name:"popoutObserver",instance:observer}, {childList: true});

        this.currentUserId = this.CurrentUser.getCurrentUser().id;

        this.isAdmin = this.adminRolesIds.some(r => this.MemberPerms.getMember(this.serverId,this.currentUserId).roles.includes(r));

        
    }

    stop () {
        if (typeof BDfunctionsDario === "object") {
            BDfunctionsDario.removeLocalStyle(this.getName());
            BDfunctionsDario.unloadMessage(this);
        }
        $('.containerDefault-1ZnADq').off("drop."+this.getName());
        $('.draggable-1KoBzC').off("dragstart."+this.getName());
    }

    onSwitch () {

    }
    onPopouts(node){
        let react = BDfunctionsDario.getReactInstance(node).child.memoizedProps;
        
        let info=react.user;
        let header = node.querySelector(BDfunctionsDario.dotCN.userpopoutusername);
        if(!header) return;
        let findBtns = `<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal + BDfunctionsDario.disCN.horizontal2}">
								<div align="center" style="padding: 5px">	
								<button  id="find"  type="button" class="${BDfunctionsDario.disCNS.button + BDfunctionsDario.disCNS.buttonlookfilled + BDfunctionsDario.disCNS.buttoncolorbrand + BDfunctionsDario.disCNS.buttonsizemedium + BDfunctionsDario.disCN.buttongrow}">
									<div class="contents-4L4hQM"> ${this.userContextMenuMarkup.findGroup.find.name}</div>
								</button>
								</div>
								<div align="center" style="padding: 5px">
								<button  id="findAndConn" type="button" class="${BDfunctionsDario.disCNS.button + BDfunctionsDario.disCNS.buttonlookfilled + BDfunctionsDario.disCNS.buttoncolorred + BDfunctionsDario.disCNS.buttonsizemedium + BDfunctionsDario.disCN.buttongrow}">
									<div class="contents-4L4hQM"> ${this.userContextMenuMarkup.findGroup.findAndConn.name}</div>
								</button>
								</div>
							</div>`;
        header.innerHTML=findBtns+header.innerHTML;
        $(node).on("click", "#find", () => {
            $(node).hide();
            this.find(info);
        })
            .on("click", "#findAndConn", () => {
                $(node).hide();
                this.find(info, true);
            })
    }

    find(info, destroy){
        let userChannel;
        let userChannelId=(userChannel=this.UsersVoiceStore.getVoiceState(this.serverId,info.id))?userChannel.channelId:'';
        let visibleUserChannel;
        BDfunctionsDario.showToast((visibleUserChannel=this.ChannelStore.getChannel(userChannelId))?'Channel: '+visibleUserChannel:'не найден');
        if(destroy) this.connectChannel(visibleUserChannel)
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
        if(this.isAdmin) return true;
        let havePerms = null;
        let memberPerm=undefined;
        let tmpPerm;
        let ids = [];
        ids.push(this.currentUserId);
        ids = ids.concat(this.MemberPerms.getMember(this.serverId, this.currentUserId).roles);
        ids.push(this.serverId);
        ids.forEach((id) => {
            
            if (memberPerm == undefined) {
                if (tmpPerm = channel.permissionOverwrites[id]) {
                    let allow = tmpPerm.allow;
                    let deny = tmpPerm.deny;
                    let tmp;
                    if (allow >= 1048576) {
                        tmp = allow.toString(2);
                        if (tmp[tmp.length - 21] === '1') {
                            havePerms = true;
                            if (id === this.currentUserId) memberPerm = true;
                        }
                    }
                    if (deny >= 1048576) {
                        tmp = deny.toString(2);
                        if (tmp[tmp.length - 21] === '1' && havePerms !== true) {
                            BDfunctionsDario.showToast("Нет доступа на вход в канал");
                            havePerms = false;
                            if (id === this.currentUserId) memberPerm = false;
                        }
                    }

                }
            }
        });
        return havePerms;
    }
    lpost(msg){
        
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

    onContextMenu (context) {
        
        let serverObj = BDfunctionsDario.getSelectedServer();
        serverObj=serverObj?serverObj: BDfunctionsDario.getSelectedChannel();
        if (!context || !context.tagName || !context.parentElement || context.querySelector(".cooladmin-item") || (serverObj.id!==this.serverId && serverObj.id!==this.botId)) return;
        let info = BDfunctionsDario.getKeyInformation({"node":context, "key":"user"});
        if (info && BDfunctionsDario.getKeyInformation({"node":context, "key":"displayName", "value":"UserNoteItem"})) {
            this.bufc=this.UsersVoiceStore.getVoiceState(this.serverId,info.id).channelId;
            
            let userContextMenuMarkup= `<div class=${BDfunctionsDario.disCN.contextmenuitemgroup}>`;
            for(let group in this.userContextMenuMarkup){
                userContextMenuMarkup+=`<div class=${BDfunctionsDario.disCN.contextmenuitemgroup}>`;
                for(let item in this.userContextMenuMarkup[group]){
                    if(BDfunctionsDario.getData(item, this, "settings")) {
                        if(this.userContextMenuMarkup[group][item].admin && !this.isAdmin) continue;
                        console.log(this.userContextMenuMarkup[group][item].submunu + item)
                        userContextMenuMarkup += `<div id="${item}" class="${BDfunctionsDario.disCNS.contextmenuitem+ group +' '+(this.userContextMenuMarkup[group][item].submunu?BDfunctionsDario.disCNS.contextmenuitemsubmenu+'dario-submenu':'')} cooladmin-item">`;

                        userContextMenuMarkup += `<span ${this.userContextMenuMarkup[group][item].warning?'style="color:#f04747!important"':''} >${this.userContextMenuMarkup[group][item].name}</span>`;

                        userContextMenuMarkup += `<div class="${BDfunctionsDario.disCN.contextmenuhint}"></div>`;
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
                    this.lpost(`<@!${this.currentUserId}> переместил <@!${info.id}> из ${this.ChannelStore.getChannel(this.bufc)} в АФК`);
                    BDfunctionsDario.showToast(`${member.nick?member.nick:info.username} перемещен в АФК`);
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
                    const prefix=BDfunctionsDario.getData("debag", this, "settings")?"?":"!";
                    const type = 'unwarn'
                    this.sendMessageInGeneral(prefix + type + ' <@!' + info.id + '>');
                })
                .on("click", "#ban", () => {
                    console.log('tribunal')
                    $(context).hide();
                    this.showTribunalSettings(info, "ban");
                })
                .on("mouseenter", ".dario-submenu", (e) => {
                    this.createContextSubMenu(info, e, context);
                });

            BDfunctionsDario.updateContextPosition(context);;
        }
    }

    createContextSubMenu (info, e, context) {
        let submenuId = e.currentTarget.id;
        let groupId = e.currentTarget.classList[1];
        let userContextSubMenu
        if(submenuId==='moveAndComeIn') {
            let userContextSubMenuMarkup =
                `<div class="${BDfunctionsDario.disCN.contextmenu} editusers-submenu">
				<div class="${BDfunctionsDario.disCN.contextmenuitemgroup}">`;
            for (let item in this.userContextMenuMarkup[groupId][submenuId].submunu) {
                userContextSubMenuMarkup += `
                <div id="${this.userContextMenuMarkup[groupId][submenuId].submunu[item].id}" class="${BDfunctionsDario.disCN.contextmenuitem} moveAndComeIn-item">
                    <span>${this.userContextMenuMarkup[groupId][submenuId].submunu[item].name}</span>
                    <div class="${BDfunctionsDario.disCN.contextmenuhint}"></div>
                </div>`
            }
            
            

            userContextSubMenuMarkup +=
                `	</div>
			</div>`
            userContextSubMenu = $(userContextSubMenuMarkup);
            userContextSubMenu.on('click', '.moveAndComeIn-item', (e)=>{
                $(context).hide();
                let channel = this.ChannelStore.getChannel( e.currentTarget.id);

                if(!this.checkPermsToConnect() || channel==undefined) return;
                this.adminActions.setChannel(this.serverId, info.id, channel.id);
                this.connectChannel(channel)
            })
        }
        BDfunctionsDario.appendSubMenu(e.currentTarget, userContextSubMenu);
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
        BDfunctionsDario.appendModal(userTribunalSettings);
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
                const prefix=BDfunctionsDario.getData("debag", this, "settings")?"?":"!";
                this.sendMessageInGeneral(prefix + type + ' <@!' + member.userId + '> ' + description);
            });
        userTribunalSettings.find("#input-reason").focus();
    }

    sendMessageInGeneral(msg){
        this.MessageActions.sendMessage(this.channelGeneralId,{content: msg});

    }
    getSettingsPanel() {
        if (!this.started || typeof BDfunctionsDario !== "object") return;
        let settings = BDfunctionsDario.getAllData(this, "settings");
        let settingshtml = `<div class="${this.getName()}-settings DevilBro-settings"><div class="${BDfunctionsDario.disCNS.titledefault + BDfunctionsDario.disCNS.headertitle + BDfunctionsDario.disCNS.size18 + BDfunctionsDario.disCNS.height24 + BDfunctionsDario.disCNS.weightnormal + BDfunctionsDario.disCN.marginbottom8}">${this.getName()}</div><div class="DevilBro-settings-inner">`;
        for(let cat in this.markup.category) {
            settingshtml+= `<div class="margin-bottom-40"><h5 class="${BDfunctionsDario.disCNS.h5 + BDfunctionsDario.disCNS.title + BDfunctionsDario.disCNS.size12 + BDfunctionsDario.disCNS.height16 + BDfunctionsDario.disCNS.weightsemibold + BDfunctionsDario.disCNS.h5defaultmargin + BDfunctionsDario.disCN.marginbottom8}">${this.markup.category[cat].name}</h5>`;
            for (let key in this.markup.category[cat].settings) {
                if(this.defaults.settings[key].admin && !this.isAdmin) continue;
                settingshtml += `<div class="${BDfunctionsDario.disCNS.flex + BDfunctionsDario.disCNS.flex2 + BDfunctionsDario.disCNS.horizontal +BDfunctionsDario.disCNS.horizontal2 + BDfunctionsDario.disCNS.directionrow + BDfunctionsDario.disCNS.justifystart + BDfunctionsDario.disCNS.aligncenter + BDfunctionsDario.disCNS.nowrap + BDfunctionsDario.disCN.marginbottom8}" style="flex: 1 1 auto;">
										<h3 class="${BDfunctionsDario.disCNS.titledefault + BDfunctionsDario.disCNS.headertitle + BDfunctionsDario.disCNS.marginreset + BDfunctionsDario.disCNS.weightmedium + BDfunctionsDario.disCNS.size16 + BDfunctionsDario.disCNS.height24 + BDfunctionsDario.disCN.flexchild}" style="flex: 1 1 auto;">${this.defaults.settings[key].description}</h3>
										<div class="${BDfunctionsDario.disCNS.flexchild + BDfunctionsDario.disCNS.switchenabled + BDfunctionsDario.disCNS.switch + BDfunctionsDario.disCNS.switchvalue + BDfunctionsDario.disCNS.switchsizedefault + BDfunctionsDario.disCNS.switchsize + BDfunctionsDario.disCN.switchthemedefault}" style="flex: 0 0 auto;">
										<input type="checkbox" value="${key}" class="${BDfunctionsDario.disCNS.switchinnerenabled + BDfunctionsDario.disCN.switchinner}"${settings[key] ? " checked" : ""}></div></div>`;
            }
            settingshtml+=`</div>`
        }
        settingshtml += `</div>`;
        settingshtml += `</div></div>`;
        let settingspanel = $(settingshtml)[0];
        BDfunctionsDario.initElements(settingspanel);
        $(settingspanel)
            .on("click", BDfunctionsDario.dotCN.switchenabled, () => {this.updateSettings(settingspanel);});
        return settingspanel;
    }

    updateSettings(settingspanel) {
        let settings = {};
        for (let input of settingspanel.querySelectorAll(BDfunctionsDario.dotCN.switchinner)) {
            
            settings[input.value] = input.checked;
        }
        BDfunctionsDario.saveAllData(settings, this, "settings");
    }

}
