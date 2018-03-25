//META{"name":"CoolAdmin"}*//
class CoolAdmin {
	getName () {return "CoolAdmin";}
    getDescription () {return "Попробуй муа муа, попробуй Дарио Дарио";}
    getVersion () {return "2.1.2";}
    getAuthor () {return "Dario";}

	constructor () {
		this.delay=100;
		this.serverId='259124796971941890';
		this.botId='378642945827536896';
		this.usersInVoice=new Map();
		this.isFind=false;
		this.switchObserver = new MutationObserver(() => {});
		this.documentObserver = new MutationObserver((changes) => {
			for (let change in changes) this.observe(changes[change]);
		});
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
			<div class="backdrop-2ohBEd"></div>
			<div class="modal-2LIEKY">
				<div class="inner-1_1f7b">
					<div class="modal-3HOjGZ sizeSmall-1sh0-r">
						<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO header-3sp3cE" style="flex: 0 0 auto;">
							<div class="flexChild-1KGW5q" style="flex: 1 1 auto;">
								<h4 class="h4-2IXpeI title-1pmpPr size16-3IvaX_ height20-165WbF weightSemiBold-T8sxWH defaultColor-v22dK1 defaultMarginh4-jAopYe marginReset-3hwONl">REPLACE_modal_title</h4>
								<div class="guildName-1u0hy7 small-3-03j1 size12-1IGJl9 height16-1qXrGy primary-2giqSn"></div>
							</div>
							<svg class="btn-cancel close-3ejNTg flexChild-1KGW5q" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">
								<g fill="none" fill-rule="evenodd">
									<path d="M0 0h12v12H0"></path>
									<path class="fill" fill="currentColor" d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"></path>
								</g>
							</svg>
						</div>
						<div class="scrollerWrap-2uBjct content-1Cut5s scrollerThemed-19vinI themeGhostHairline-2H8SiW">
							<div class="scroller-fzNley inner-tqJwAU">
								<div tab="user" class="flex-lFgbSz flex-3B1Tl4 vertical-3X17r5 flex-3B1Tl4 directionColumn-2h-LPR justifyStart-2yIZo0 alignStretch-1hwxMa noWrap-v6g9vO marginBottom20-2Ifj-2 tab-content" style="flex: 1 1 auto;">
									<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom8-1mABJ4" style="flex: 1 1 auto;">
										<h3 class="titleDefault-1CWM9y title-3i-5G_ marginReset-3hwONl weightMedium-13x9Y8 size16-3IvaX_ height24-2pMcnc flexChild-1KGW5q" style="flex: 0 0 auto;">REPLACE_modal_reason_title</h3>
									</div>
									<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom8-1mABJ4" style="flex: 1 1 auto;">
										<div class="inputWrapper-3xoRWR vertical-3X17r5 flex-3B1Tl4 directionColumn-2h-LPR flexChild-1KGW5q" style="flex: 1 1 auto;"><input type="text" class="inputDefault-Y_U37D input-2YozMi size16-3IvaX_" id="input-reason"></div>
									</div>
									<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom8-1mABJ4" style="flex: 1 1 auto;">
										<h3 id="warning" class="titleDefault-1CWM9y title-3i-5G_ marginReset-3hwONl weightMedium-13x9Y8 size16-3IvaX_ height24-2pMcnc flexChild-1KGW5q" style="flex: 0 0 auto; color: rgb(240, 71, 71)">REPLACE_modal_warning</h3>
									</div>
								</div>
							</div>
						</div>
						<div class="flex-lFgbSz flex-3B1Tl4 horizontalReverse-2LanvO horizontalReverse-k5PqxT flex-3B1Tl4 directionRowReverse-2eZTxP justifyStart-2yIZo0 alignStretch-1hwxMa noWrap-v6g9vO footer-1PYmcw">
						<button type="button" disabled class="btn-save buttonBrandFilledDefault-2Rs6u5 buttonFilledDefault-AELjWf buttonDefault-2OLW-v buttonFilled-29g7b5 buttonBrandFilled-3Mv0Ra mediumGrow-uovsMu button-2t3of8 lookFilled-luDKDo colorBrand-3PmwCE sizeMedium-2VGNaF grow-25YQ8u">
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
		if (typeof BDfunctionsDevilBro !== "object" || BDfunctionsDevilBro.isLibraryOutdated()) {
			if (typeof BDfunctionsDevilBro === "object") BDfunctionsDevilBro = "";
			$('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js"]').remove();
			$('head').append('<script src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js"></script>');
			$('head script[src="https://raw.githubusercontent.com/jquery/jquery-ui/9e8e339648901899827a58e5bf919f7dda03b88e/tests/jquery.simulate.js"]').remove();
			$('head').append('<script src="https://raw.githubusercontent.com/jquery/jquery-ui/9e8e339648901899827a58e5bf919f7dda03b88e/tests/jquery.simulate.js"></script>');
		}
		if (typeof BDfunctionsDevilBro === "object") {
			BDfunctionsDevilBro.loadMessage(this);
            BDfunctionsDevilBro.checkUpdate(this.getName(), "");
            this.MemberPerms = BDfunctionsDevilBro.WebModules.findByProperties(["getNicknames", "getNick"]);
			this.ChannelStore = BDfunctionsDevilBro.WebModules.findByProperties(['getChannels']);
			this.CurrentChannel = BDfunctionsDevilBro.WebModules.findByProperties(['getChannelId']);
			this.CurrentUser = BDfunctionsDevilBro.WebModules.findByProperties(['getCurrentUser']);
			this.ChannelActions = BDfunctionsDevilBro.WebModules.findByProperties(['selectVoiceChannel']);
			//this.ChannelPermissions = BDfunctionsDevilBro.WebModules.findByProperties(['getChannelPermissions']);
			this.UsersVoiceStore= BDfunctionsDevilBro.WebModules.findByProperties(['getVoiceStates']);
			this.documentObserver.observe(document.querySelector('#app-mount'), {childList: true, subtree: true});
			this.adminActions=BDfunctionsDevilBro.WebModules.findByProperties(['move']);
			//this.roleActions=BDfunctionsDevilBro.WebModules.findByProperties(['connect']);
            this.GuildStore = BDfunctionsDevilBro.WebModules.findByProperties(["getGuilds"]);

		}
	}

	stop () {
		if (typeof BDfunctionsDevilBro === "object") {
			this.switchObserver.disconnect();
		    this.documentObserver.disconnect();
			BDfunctionsDevilBro.removeLocalStyle(this.getName());	
			BDfunctionsDevilBro.unloadMessage(this);
		}
	}

	onSwitch () {

	}

	observe(e) {
		if (!e.addedNodes.length || !(e.addedNodes[0] instanceof Element)) return;
		try {
            let node = e.addedNodes[0];
            if (node && node.nodeType === 1 && (node.className.includes("context-menu") || node.className.includes("contextMenu-uoJTbz"))) {
                this.onContextMenu(node);
            }
            if (node && node.nodeType === 1 && (node.className.includes("popout"))) {
                let body = node.querySelector(".userPopout-11hFKo");
                if (body) {
                    this.onPopouts(node);
                }
            }
        }catch (err){


        }
	}

	onPopouts(node){
        let react = BDfunctionsDevilBro.getReactInstance(node).child.memoizedProps;
        	let info=react.user;
        	let header = node.querySelector(".bodyTitle-18hsd9");
        	let findBtns = `<div>
								<div align="center" style="padding: 5px">	
								<button  id="find"  type="button" class="button-2t3of8 lookFilled-luDKDo colorBrand-3PmwCE sizeSmall-3g6RX8 grow-25YQ8u">
									<div class="contents-4L4hQM"> ${this.userContextMenuMarkup.findGroup.find.name}</div>
								</button>
								</div>
								<div align="center" style="padding: 5px">
								<button  id="findAndConn" type="button" class="button-2t3of8 lookFilled-luDKDo colorRed-3HTNPV sizeSmall-3g6RX8 grow-25YQ8u">
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
        BDfunctionsDevilBro.showToast((s=this.ChannelStore.getChannel(userChannelId))?'Channel: '+s:'не найден');
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
								BDfunctionsDevilBro.showToast("Нет доступа на вход в канал");
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
        let serverObj = BDfunctionsDevilBro.getSelectedServer();
        serverObj=serverObj?serverObj: BDfunctionsDevilBro.getSelectedChannel();
		if (!context || !context.tagName || !context.parentElement || context.querySelector(".localusersettings-item") || (serverObj.id!==this.serverId && serverObj.id!==this.botId)) return;
        let info = BDfunctionsDevilBro.getKeyInformation({"node":context, "key":"user"});
		if (info && BDfunctionsDevilBro.getKeyInformation({"node":context, "key":"displayName", "value":"UserNoteItem"})) {
			let userContextMenuMarkup= '<div class=\"item-group itemGroup-oViAgA\">';
			for(let group in this.userContextMenuMarkup){
				userContextMenuMarkup+='<div class="item-group itemGroup-oViAgA">';
                for(let item in this.userContextMenuMarkup[group]){
					if(BDfunctionsDevilBro.getData(item,this,"settings")) {
                        userContextMenuMarkup += '<div class="item item-1XYaYf ' + item + '-item">';
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
					this.adminActions.setChannel(this.serverId,info.id,'289786584247828490');
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
					$(context).hide();
					this.showTribunalSettings(info, "ban");
				});
			BDfunctionsDevilBro.updateContextPosition(context);
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
		BDfunctionsDevilBro.appendModal(userTribunalSettings);
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
				setTimeout(function(){
					self.execTextarea($('.content .channelTextArea-1HTP3C textarea')[0], type, member.userId, description);		
				},self.delay);
			 });
		userTribunalSettings.find("#input-reason").focus();
	}

	getSettingsPanel() {
		if (!this.started || typeof BDfunctionsDevilBro !== "object") return;
        let settings = BDfunctionsDevilBro.getAllData(this, "settings");
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
		BDfunctionsDevilBro.initElements(settingspanel);
		$(settingspanel)
			.on("click", ".checkbox-1KYsPm", () => {this.updateSettings(settingspanel);});
		return settingspanel;
	  }

	updateSettings(settingspanel) {
        let settings = {};
		for (let input of settingspanel.querySelectorAll(".checkbox-1KYsPm")) {
			settings[input.value] = input.checked;
		}
		BDfunctionsDevilBro.saveAllData(settings, this, "settings");
	  }

	findChannel(info){
        this.isFind=false;
        let found=this.usersInVoice.get(info.id);
        if(found) BDfunctionsDevilBro.showToast('Channel: '+this.ChannelStore.getChannel(found.id));
        return(found?found:null)
	}

	execTextarea(textarea, commadn, userId, description){
		textarea.focus();
		textarea.selectionStart = 0;
		textarea.selectionEnd = textarea.value.length;
		if (document.activeElement === textarea) {
				this.sendMessage(textarea, commadn, userId, description);
		}
	}

	sendMessage(textarea, commadn, userId, description){
		const prefix=BDfunctionsDevilBro.getData("debag", this, "settings")?"?":"!";
		document.execCommand("insertText", false, prefix + commadn + ' <@!' + userId + '> ' + description);
		const options = { key: "Enter", code: "Enter", which: 13, keyCode: 13, bubbles: true };
		const down = new KeyboardEvent("keydown", options);
		Object.defineProperty(down, "keyCode", {value: 13});
		Object.defineProperty(down, "which", {value: 13});
		const press = new KeyboardEvent("keypress", options);
		Object.defineProperty(press, "keyCode", {value: 13});
		Object.defineProperty(press, "which", {value: 13});
		textarea.dispatchEvent(down);
		textarea.dispatchEvent(press);
	}
}
