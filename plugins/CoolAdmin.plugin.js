//META{"name":"CoolAdmin"}*//

class CoolAdmin {
	getName () {return "CoolAdmin";}
    getDescription () {return "ДАААРИИИИИООООО";}
    getVersion () {return "2.2.2";}
    getAuthor () {return "Dario";}

	initConstructor () {
		this.delay=100;
		this.serverId='259124796971941890';
		this.botId='378642945827536896';
		this.channelGeneralId='259124796971941890';
		this.usersInVoice=new Map();
	
		this.userContextMenuMarkup = {
			moveGroup:{
				moveToAfk: {name: "Перенести в АФК", warning:false}
			},
			findGroup:{
				find: {name: "Найти", warning:false},
				findAndConn: {name: "Найти и Перейти", warning:true}
			},
			moderateGroup:{
				mute: {name:"Мут", warning:false},
				warn: {name:"Варн", warning:false},
				ban: {name:"БАН", warning:true},
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
						find:		{value:true, 	description:"Найти"},
						findAndConn:		{value:true, 	description:"Найти и уничтожить"},
						mute:		{value:true, 	description:"Мут"},
						warn:		{value:true, 	description:"Варн"},
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
						find:		{name: "Найти"},
						findAndConn:		{name: "Найти и УНИЧТОЖИТЬ"},
						mute:		{name: "Замутить"},
						warn:		{name: "Заварнить"},
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
        this.ChannelStore = BDfunctionsDario.WebModules.findByProperties(['getChannels']);
        this.CurrentChannel = BDfunctionsDario.WebModules.findByProperties(['getChannelId']);
        this.CurrentUser = BDfunctionsDario.WebModules.findByProperties(['getCurrentUser']);
        this.ChannelActions = BDfunctionsDario.WebModules.findByProperties(['selectVoiceChannel']);
        this.UsersVoiceStore= BDfunctionsDario.WebModules.findByProperties(['getVoiceStates']);
        this.adminActions=BDfunctionsDario.WebModules.findByProperties(['move']);
        this.GuildStore = BDfunctionsDario.WebModules.findByProperties(["getGuilds"]);
        this.MessageActions = BDfunctionsDario.WebModules.findByProperties(['fetchMessages']);
        var observer = null;

        observer = new MutationObserver((changes, _) => {
            changes.forEach(
                (change, i) => {
                    if (change.addedNodes) {
                        change.addedNodes.forEach((node) => {
                            if (node && node.nodeType == 1 && node.classList.length > 0 && node.className.includes(BDfunctionsDario.disCN.contextmenu)) {
                                this.onContextMenu(node);
                                console.log('node');
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
    }

	stop () {
		if (typeof BDfunctionsDario === "object") {
			BDfunctionsDario.removeLocalStyle(this.getName());
			BDfunctionsDario.unloadMessage(this);
		}
	}

	onSwitch () {

	}
	onPopouts(node){
        let react = BDfunctionsDario.getReactInstance(node).child.memoizedProps;
        	console.log(node);
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
		let s;
        BDfunctionsDario.showToast((s=this.ChannelStore.getChannel(userChannelId))?'Channel: '+s:'не найден');
		let selectedVoice=this.CurrentChannel.getVoiceChannelId();
        if(destroy&&userChannelId &&selectedVoice!=userChannelId){
        	let canConnect=undefined;
        	let memberPerm=undefined;
            let self=this;
            let tmpPerm;
            let currentUserId = this.CurrentUser.getCurrentUser().id;
            let ids=[];
            ids.push(currentUserId);
            ids = ids.concat( this.MemberPerms.getMember(this.serverId,currentUserId).roles);
            ids.push(this.serverId);
            ids.forEach((id) => {
                console.log(id);
                if(memberPerm==undefined) {
					if(tmpPerm=s.permissionOverwrites[id]){
						let allow = tmpPerm.allow;
						let deny = tmpPerm.deny;
						let tmp;
						if(allow >= 1048576) {
							tmp=allow.toString(2);
							if(tmp[tmp.length-21]==='1') {
                                canConnect = true;
                                if (id === currentUserId) memberPerm = true;
                            }
						}
						if(deny >= 1048576){
							tmp=deny.toString(2);
							if(tmp[tmp.length-21]==='1'&&canConnect!==true) {
								BDfunctionsDario.showToast("Нет доступа на вход в канал");
								canConnect=false;
                                if(id===currentUserId) memberPerm=false;
							}
						}
                        console.log(canConnect);
					}
                }
			});
            console.log(canConnect);
            if(canConnect||canConnect==undefined) {
                setTimeout(function () {
                    $(".buttonDisconnect-3xZpYL").trigger("click");
                    setTimeout(function () {
                        self.ChannelActions.selectVoiceChannel(self.serverId,userChannelId);
                    }, 500);
                }, 100);
            }
		}
	}

	onContextMenu (context) {
		console.log('context-menu');
        let serverObj = BDfunctionsDario.getSelectedServer();
        serverObj=serverObj?serverObj: BDfunctionsDario.getSelectedChannel();
		if (!context || !context.tagName || !context.parentElement || context.querySelector(".localusersettings-item") || (serverObj.id!==this.serverId && serverObj.id!==this.botId)) return;
        let info = BDfunctionsDario.getKeyInformation({"node":context, "key":"user"});
		if (info && BDfunctionsDario.getKeyInformation({"node":context, "key":"displayName", "value":"UserNoteItem"})) {
			let userContextMenuMarkup= `<div class=${BDfunctionsDario.disCN.contextmenuitemgroup}>`;
			for(let group in this.userContextMenuMarkup){
				userContextMenuMarkup+=`<div class=${BDfunctionsDario.disCN.contextmenuitemgroup}>`;
                for(let item in this.userContextMenuMarkup[group]){
					if(BDfunctionsDario.getData(item,this,"settings")) {
                        userContextMenuMarkup += `<div class="${BDfunctionsDario.disCN.contextmenuitem} ${item}-item">`;
                        if(!this.userContextMenuMarkup[group][item].warning) {
                            userContextMenuMarkup += '<span>' + this.userContextMenuMarkup[group][item].name + '</span>';
                        }else{
                            userContextMenuMarkup += '<span style="color:#f04747!important">' + this.userContextMenuMarkup[group][item].name + '</span>';
						}
                        userContextMenuMarkup += '<div class="hint-3TJykr"></div>';
                        userContextMenuMarkup += '</div>'
                    }
                }
				userContextMenuMarkup+='</div">'
			}
            userContextMenuMarkup+='</div">';
			$(context).append(userContextMenuMarkup)
				.on("click", ".moveToAfk-item", ()=>{
					$(context).hide();
					this.adminActions.setChannel(this.serverId, info.id, '289786584247828490');
				})
				.on("click", ".find-item", () => {
					$(context).hide();
					this.find(info);
				})
				.on("click", ".findAndConn-item", () => {
					$(context).hide();
					this.find(info, true);
				})
				.on("click", ".mute-item", () => {
					$(context).hide();
					this.showTribunalSettings(info, 'mute');
				})
				.on("click", ".warn-item", () => {
					$(context).hide();
					this.showTribunalSettings(info, "warn");
				})
				.on("click", ".ban-item", () => {
					console.log('tribunal')
					$(context).hide();
					this.showTribunalSettings(info, "ban");
				});
			BDfunctionsDario.updateContextPosition(context);
			let buf = context;
			console.log(userContextMenuMarkup);
		}
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
		console.log(button_name);
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
                this.MessageActions.sendMessage(this.channelGeneralId,{content: prefix + type + ' <@!' + member.userId + '> ' + description })
				setTimeout(function(){
					self.execTextarea($(BDfunctionsDario.dotCN.textareainnerenabled)[0], type, member.userId, description);
				},self.delay);
			 });
		userTribunalSettings.find("#input-reason").focus();
	}

	getSettingsPanel() {
		if (!this.started || typeof BDfunctionsDario !== "object") return;
        let settings = BDfunctionsDario.getAllData(this, "settings");
        let settingshtml = `<div class="${this.getName()}-settings DevilBro-settings"><div class="titleDefault-1CWM9y title-3i-5G_ size18-ZM4Qv- height24-2pMcnc weightNormal-3gw0Lm marginBottom8-1mABJ4">${this.getName()}</div><div class="DevilBro-settings-inner">`;
		for(let cat in this.markup.category) {
				settingshtml+= `<div class="margin-bottom-40"><h5 class="h5-3KssQU title-1pmpPr size12-1IGJl9 height16-1qXrGy weightSemiBold-T8sxWH defaultMarginh5-2UwwFY marginBottom8-1mABJ4">${this.markup.category[cat].name}</h5>`;
				for (let key in this.markup.category[cat].settings) {
					settingshtml += `<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom8-1mABJ4" style="flex: 1 1 auto;"><h3 class="titleDefault-1CWM9y title-3i-5G_ marginReset-3hwONl weightMedium-13x9Y8 size16-3IvaX_ height24-2pMcnc flexChild-1KGW5q" style="flex: 1 1 auto;">${this.defaults.settings[key].description}</h3><div class="flexChild-1KGW5q switchEnabled-3CPlLV switch-3lyafC value-kmHGfs sizeDefault-rZbSBU size-yI1KRe themeDefault-3M0dJU" style="flex: 0 0 auto;"><input type="checkbox" value="${key}" class="checkboxEnabled-4QfryV checkbox-1KYsPm"${settings[key] ? " checked" : ""}></div></div>`;
				}
				settingshtml+=`</div>`
		}
		settingshtml += `</div>`;
		settingshtml += `</div></div>`;
        let settingspanel = $(settingshtml)[0];
		BDfunctionsDario.initElements(settingspanel);
		$(settingspanel)
			.on("click", ".checkbox-1KYsPm", () => {this.updateSettings(settingspanel);});
		return settingspanel;
	  }

	updateSettings(settingspanel) {
        let settings = {};
		for (let input of settingspanel.querySelectorAll(".checkbox-1KYsPm")) {
			settings[input.value] = input.checked;
		}
		BDfunctionsDario.saveAllData(settings, this, "settings");
	  }

	findChannel(info){
        this.isFind=false;
        let found=this.usersInVoice.get(info.id);
        if(found) BDfunctionsDario.showToast('Channel: '+this.ChannelStore.getChannel(found.id));
        return(found?found:null)
	}
}
