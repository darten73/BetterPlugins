//META{"name":"ShowHiddenChannels"}*//

class ShowHiddenChannels {
	constructor () {
	    this.delay=60000;

		this.updateHiddenCategory = false;
		
		this.categoryMarkup = 
			`<div class="container-hidden">
				<div class="containerDefault-1bbItS">
					<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO wrapperDefault-1Dl4SS cursorPointer-3oKATS" style="flex: 1 1 auto;">
						<svg class="iconDefault-xzclSQ iconTransition-VhWJ85" width="12" height="12" viewBox="0 0 24 24">
							<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7 10L12 15 17 10"></path>
						</svg>
						<div class="nameDefault-Lnjrwm colorTransition-2iZaYd overflowEllipsis-2ynGQq" style="flex: 1 1 auto;">hidden</div>
					</div>
				</div>
			</div>`;
			
		this.channelTextMarkup = 
			`<div class="containerDefault-7RImuF">
				<div class="wrapperDefaultText-3M3F1R wrapper-fDmxzK">
					<div class="contentDefaultText-2elG3R content-2mSKOj">
						<div class="marginReset-1YolDJ" style="flex: 0 0 auto;">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="colorDefaultText-2v6rRX icon-3tVJnl">
								<path class="background-1BDvMy" fill="currentColor" d="M7.92,4.66666667 L6.50666667,4.66666667 L6.98,2 L5.64666667,2 L5.17333333,4.66666667 L2.50666667,4.66666667 L2.27333333,6 L4.94,6 L4.23333333,10 L1.56666667,10 L1.33333333,11.3333333 L4,11.3333333 L3.52666667,14 L4.86,14 L5.33333333,11.3333333 L9.33333333,11.3333333 L8.86,14 L10.1933333,14 L10.6666667,11.3333333 L13.3333333,11.3333333 L13.5666667,10 L12.2333333,10 L8.74333333,10 L5.56666667,10 L6.27333333,6 L7.92,6 L7.92,4.66666667 Z"></path>
								<path class="foreground-2GKNZG" fill="currentColor" fill-rule="nonzero" d="M15.1,3.2 L15.1,2 C15.1,0.88 14.05,0 13,0 C11.95,0 10.9,0.88 10.9,2 L10.9,3.2 C10.45,3.2 10,3.68 10,4.16 L10,6.96 C10,7.52 10.45,8 10.9,8 L15.025,8 C15.55,8 16,7.52 16,7.04 L16,4.24 C16,3.68 15.55,3.2 15.1,3.2 Z M14,3 L12,3 L12,1.92857143 C12,1.35714286 12.4666667,1 13,1 C13.5333333,1 14,1.35714286 14,1.92857143 L14,3 Z"></path>
							</svg>
						</div>
						<div class="nameDefaultText-QoumjC name-2SL4ev overflowEllipsis-3Rxxjf" style="flex: 1 1 auto;"></div>
						<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginReset-1YolDJ" style="flex: 0 1 auto;"></div>
					</div>
				</div>
			</div>`;
			
		this.channelVoiceMarkup = 
			`<div id="REPLACE_ID" class="voiceChannel containerDefault-7RImuF">
				<div class="wrapperDefaultVoice-2ud9mj wrapper-fDmxzK">
					<div class="contentDefaultVoice-311dxZ content-2mSKOj">
						<div class="marginReset-1YolDJ" style="flex: 0 0 auto;">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="colorDefaultVoice-1x4dEl icon-3tVJnl">
								<path class="background-2nyTH_" fill="currentColor" d="M13.6005009,10 C12.8887426,11.8438372 11.2906136,13.2480521 9.33333333,13.6933333 L9.33333333,12.3133333 C10.5512947,11.950895 11.5614504,11.1062412 12.1398042,10 L13.6005009,10 Z M10.7736513,8.99497564 C10.4978663,9.6613459 9.98676114,10.2040442 9.33333333,10.5133333 L9.33333333,8.99497564 L10.7736513,8.99497564 Z M2,5.84666667 L4.66666667,5.84666667 L8,2.51333333 L8,13.18 L4.66666667,9.84666667 L2,9.84666667 L2,5.84666667 Z"></path>
								<path class="foreground-2zy1hc" fill="currentColor" fill-rule="nonzero" d="M15.1,3.2 L15.1,2 C15.1,0.88 14.05,0 13,0 C11.95,0 10.9,0.88 10.9,2 L10.9,3.2 C10.45,3.2 10,3.68 10,4.16 L10,6.96 C10,7.52 10.45,8 10.9,8 L15.025,8 C15.55,8 16,7.52 16,7.04 L16,4.24 C16,3.68 15.55,3.2 15.1,3.2 Z M14,3 L12,3 L12,1.92857143 C12,1.35714286 12.4666667,1 13,1 C13.5333333,1 14,1.35714286 14,1.92857143 L14,3 Z"></path>
							</svg>
						</div>
						<div class="nameDefaultVoice-1swZoh name-2SL4ev overflowEllipsis-3Rxxjf" style="flex: 1 1 auto;"></div>
						<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginReset-1YolDJ" style="flex: 0 1 auto;"></div>
					</div>
					<div class="putHere flex-lFgbSz flex-3B1Tl4 vertical-3X17r5 flex-3B1Tl4 directionColumn-2h-LPR justifyStart-2yIZo0 alignStretch-1hwxMa noWrap-v6g9vO listDefault-3i7eWQ" style="flex: 1 1 auto;">
					    
                    </div>
				</div>
			</div>`;
			
		this.channelCategoryMarkup = 
			`<div class="containerDefault-7RImuF">
				<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO cursorPointer-3oKATS wrapperCollapsed-18mf-c content-2mSKOj" style="flex: 1 1 auto;">
					<svg class="iconTransition-VhWJ85 closed-2Hef-I iconCollapsed-1INdMX" width="12" height="12" viewBox="0 0 24 24">
						<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7 10L12 15 17 10"></path>
					</svg>
					<div class="colorTransition-2iZaYd overflowEllipsis-2ynGQq nameCollapsed-3_ChMu" style="flex: 1 1 auto;"></div>
				</div>
			</div>`;
			
		this.defaults = {
			settings: {
				showUsers:				{value:true, 	description:"Show users hidden in Voicechannels:"},
				showText:				{value:true, 	description:"Show hidden Textchannels:"},
				showVoice:				{value:true, 	description:"Show hidden Voicechannels:"},
				showCategory:			{value:false, 	description:"Show hidden Categories:"},
				showAllowedRoles:		{value:true,	description:"Show allowed Roles on hover:"},
				showOverWrittenRoles:	{value:true,	description:"Include overwritten Roles in allowed Roles:"},
				showDeniedRoles:		{value:true,	description:"Show denied Roles on hover:"},
				showDeniedUsers:		{value:true,	description:"Show denied Users on hover:"},
				showForNormal:			{value:false,	description:"Also show Roles/Users for allowed channels:"},
				showTopic:				{value:false, 	description:"Show the topic of hidden channels:"}
			}
		};
	}

	getName () {return "ShowHiddenChannels";}

	getDescription () {return "Displays channels that are hidden from you by role restrictions. (Upgraded by Dario)";}

	getVersion () {return "2.2.4";}

	getAuthor () {return "DevilBro (Upgraded by Dario)";}
	
	getSettingsPanel () {
		if (!this.started || typeof BDfunctionsDario !== "object") return;
		var settings = BDfunctionsDario.getAllData(this, "settings"); 
		var settingshtml = `<div class="${this.getName()}-settings Dario-settings"><div class="titleDefault-1CWM9y title-3i-5G_ size18-ZM4Qv- height24-2pMcnc weightNormal-3gw0Lm marginBottom8-1mABJ4">${this.getName()}</div><div class="Dario-settings-inner">`;
		for (let key in settings) {
			settingshtml += `<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom8-1mABJ4" style="flex: 1 1 auto;"><h3 class="titleDefault-1CWM9y title-3i-5G_ marginReset-3hwONl weightMedium-13x9Y8 size16-3IvaX_ height24-2pMcnc flexChild-1KGW5q" style="flex: 1 1 auto;">${this.defaults.settings[key].description}</h3><div class="flexChild-1KGW5q switchEnabled-3CPlLV switch-3lyafC value-kmHGfs sizeDefault-rZbSBU size-yI1KRe themeDefault-3M0dJU" style="flex: 0 0 auto;"><input type="checkbox" value="${key}" class="checkboxEnabled-4QfryV checkbox-1KYsPm"${settings[key] ? " checked" : ""}></div></div>`;
		}
		settingshtml += `</div></div>`;
		
		var settingspanel = $(settingshtml)[0];

		BDfunctionsDario.initElements(settingspanel);

		$(settingspanel)
			.on("click", ".checkbox-1KYsPm", () => {this.updateSettings(settingspanel);});
			
		return settingspanel;
	}

	//legacy
	load () {}

	start () {
		var libraryScript = null;
		if (typeof BDfunctionsDario !== "object" || BDfunctionsDario.isLibraryOutdated()) {
			if (typeof BDfunctionsDario === "object") BDfunctionsDario = "";
			libraryScript = document.querySelector('head script[src="https://raw.githubusercontent.com/darten73/BetterPlugins/master/BDfunctionsDario.js"]');
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://raw.githubusercontent.com/darten73/BetterPlugins/master/BDfunctionsDario.js");
			document.head.appendChild(libraryScript);
		}
		this.startTimeout = setTimeout(() => {this.initialize();}, 30000);
		if (typeof BDfunctionsDario === "object") this.initialize();
		else libraryScript.addEventListener("load", () => {this.initialize();});
	}

	initialize () {
		if (typeof BDfunctionsDario === "object") {
			BDfunctionsDario.loadMessage(this, true);
			
			this.UserStore = BDfunctionsDario.WebModules.findByProperties(["getUsers", "getUser"]);
			this.MemberStore = BDfunctionsDario.WebModules.findByProperties(["getMember", "getMembers"]);
			this.ChannelStore = BDfunctionsDario.WebModules.findByProperties(["getChannels", "getDMFromUserId"]);
			this.GuildChannels = BDfunctionsDario.WebModules.findByProperties(["getChannels", "getDefaultChannel"]);
			this.Permissions = BDfunctionsDario.WebModules.findByProperties(["Permissions", "ActivityTypes"]).Permissions;

            this.UsersVoiceStore= BDfunctionsDario.WebModules.findByProperties(['getVoiceStates']);


            var observer = null;

			observer = new MutationObserver((changes, _) => {
				changes.forEach(
					(change, i) => {
						if (change.addedNodes) {
							change.addedNodes.forEach((node) => {
								if (node && node.className && node.className.length > 0 && node.className.indexOf("container-") > -1 && node.className.indexOf("hidden") == -1) {
									this.appendToChannelList(document.querySelector(".container-hidden"));
								} 
							});
						}
					}
				);
			});
			BDfunctionsDario.addObserver(this, ".channels-3g2vYe", {name:"channelListObserver",instance:observer}, {childList: true, subtree: true});
			
			observer = new MutationObserver((changes, _) => {
				changes.forEach(
					(change, i) => {
						if (change.removedNodes) {
							change.removedNodes.forEach((node) => {
								if (this.updateHiddenCategory && node && node.tagName && node.getAttribute("layer-id") == "user-settings") {
									document.querySelectorAll(".container-hidden").forEach(category => {category.remove();});
									this.displayHiddenChannels();
									this.updateHiddenCategory = false;
								}
							});
						}
					}
				);
			});
			BDfunctionsDario.addObserver(this, ".layers-20RVFW", {name:"settingsWindowObserver",instance:observer}, {childList:true});
			
			this.displayHiddenChannels();
			this.i=false;
			let self=this;
            this.loop=setInterval(function(){
                $(".container-hidden").remove();
                self.displayHiddenChannels();
                console.log('loop'+new Date());
            },this.delay);
		}
		else {
			console.error(this.getName() + ": Fatal Error: Could not load BD functions!");
		}
	}

	stop () {
		if (typeof BDfunctionsDario === "object") {
			$(".container-hidden").remove();
			clearInterval(this.loop);

			BDfunctionsDario.unloadMessage(this);
		}
	}
	
	onSwitch () {
		if (typeof BDfunctionsDario === "object") {
			this.displayHiddenChannels();
		}
	}

	
	// begin of own functions

	updateSettings (settingspanel) {
		var settings = {};
		for (var input of settingspanel.querySelectorAll(".checkbox-1KYsPm")) {
			settings[input.value] = input.checked;
		}
		BDfunctionsDario.saveAllData(settings, this, "settings");
		this.updateHiddenCategory = true;
	}
	
	displayHiddenChannels () {
		var serverObj = BDfunctionsDario.getSelectedServer();
		if (serverObj) {
			var serverID = serverObj.id;
			if (!document.querySelector(".container-hidden.server" + serverID)) {
				$(".container-hidden").remove();
				var types = {
					"text":0,
					"voice":2,
					"category":4
				};
				var allChannels = this.ChannelStore.getChannels();
				var shownChannels = this.GuildChannels.getChannels(serverID);
				var hiddenChannels = {};
				
				for (let type in types) hiddenChannels[types[type]] = [];
				
				for (let channelID in allChannels) {
					var channel = allChannels[channelID];
					if (channel.guild_id == serverID) {
                        var isHidden = true;
						if (channel.type == types.category) {
							for (let type in types) {
								for (let shownChannel of shownChannels[types[type]]) {
									if (!channel.id || shownChannel.channel.parent_id == channel.id) {
										isHidden = false;
										break;
									}
								}
							}
						}
						else {
							for (let shownChannel of shownChannels[channel.type]) {
								if (shownChannel.channel.id == channel.id) {
									isHidden = false;
									break;
								}
							}
						}
                        if (isHidden) {
                            hiddenChannels[channel.type].push(channel);
                        }
					}
				}
				
						
				var settings = BDfunctionsDario.getAllData(this, "settings"); 
				var count = 0;
				for (let type in types) {
					if (!settings.showText && type == "text" || !settings.showVoice && type == "voice" || !settings.showCategory && type == "category") {
						hiddenChannels[types[type]] = [];
					}
					BDfunctionsDario.sortArrayByKey(hiddenChannels[types[type]], "name");
					count += hiddenChannels[types[type]].length;
				}
				hiddenChannels.count = count;
				
				if (count > 0) {
					var category = $(this.categoryMarkup)[0]
					var wrapper = category.querySelector(".cursorPointer-3oKATS");
					var svg = category.querySelector(".iconTransition-VhWJ85");
					var name = category.querySelector(".colorTransition-2iZaYd");
					$(category)
						.addClass("server" + serverID)
						.on("click", ".containerDefault-1bbItS > .flex-lFgbSz", () => {
							wrapper.classList.toggle("wrapperHovered-1KDCyZ");
							wrapper.classList.toggle("wrapperHoveredCollapsed-25KVVp");
							svg.classList.toggle("iconHovered-3PRzOR");
							svg.classList.toggle("iconHoveredCollapsed-jNYgOD");
							svg.classList.toggle("closed-2Hef-I");
							name.classList.toggle("nameHoveredCollapsed-2c-EHI");
							name.classList.toggle("nameHovered-1YFSWq");
							
							$(category).find(".containerDefault-7RImuF").toggle(!svg.classList.contains("closed-2Hef-I"));
							BDfunctionsDario.saveData(serverID, !svg.classList.contains("closed-2Hef-I"), this, "categorystatus");
						})
						.on("mouseenter mouseleave", ".containerDefault-1bbItS > .flex-lFgbSz", () => {
							if (!category.querySelector(".closed-2Hef-I")) {
								wrapper.classList.toggle("wrapperDefault-1Dl4SS");
								wrapper.classList.toggle("wrapperHovered-1KDCyZ");
								svg.classList.toggle("iconDefault-xzclSQ");
								svg.classList.toggle("iconHovered-3PRzOR");
								name.classList.toggle("nameDefault-Lnjrwm");
								name.classList.toggle("nameHovered-1YFSWq");
							}
							else {
								wrapper.classList.toggle("wrapperCollapsed-18mf-c");
								wrapper.classList.toggle("wrapperHoveredCollapsed-25KVVp")
								svg.classList.toggle("iconCollapsed-1INdMX")
								svg.classList.toggle("iconHoveredCollapsed-jNYgOD");
								name.classList.toggle("nameCollapsed-3_ChMu");
								name.classList.toggle("nameHoveredCollapsed-2c-EHI")
							}
						});
					
					for (let hiddenChannel of hiddenChannels[0]) {
						let channel = $(this.channelTextMarkup)[0];
						let channelwrapper = channel.querySelector(".wrapper-fDmxzK");
						let channelicon = channel.querySelector(".content-2mSKOj");
						let channelsvg = channel.querySelector(".icon-3tVJnl");
						let channelname = channel.querySelector(".name-2SL4ev");
						channelname.innerText = hiddenChannel.name;
						$(channel)
							.on("mouseenter mouseleave", ".wrapper-fDmxzK", (e) => {
								channelwrapper.classList.toggle("wrapperDefaultText-3M3F1R");
								channelwrapper.classList.toggle("wrapperHoveredText-1PA_Uk");
								channelicon.classList.toggle("contentDefaultText-2elG3R");
								channelicon.classList.toggle("contentHoveredText-2HYGIY");
								channelsvg.classList.toggle("colorDefaultText-2v6rRX");
								channelsvg.classList.toggle("colorHoveredText-1CsxK1");
								channelname.classList.toggle("nameDefaultText-QoumjC");
								channelname.classList.toggle("nameHoveredText-2FFqiz");
								this.showAccessRoles(serverObj, hiddenChannel, e, false);
							})
							.on("click", () => {
								BDfunctionsDario.showToast(`You can not enter the hidden channel ${hiddenChannel.name}.`, {type:"error"});
							})
							.appendTo(category);
					}
					
					for (let hiddenChannel of hiddenChannels[2]) {
						let channel = $(this.channelVoiceMarkup.replace("REPLACE_ID","cid"+hiddenChannel.id))[0];
						let channelwrapper = channel.querySelector(".wrapper-fDmxzK");
						let channelicon = channel.querySelector(".content-2mSKOj");
						let channelsvg = channel.querySelector(".icon-3tVJnl");
						let channelname = channel.querySelector(".name-2SL4ev");
						let check=false;
                        this.UsersVoiceStore.getVoiceStatesForChannel(serverID,hiddenChannel.id).forEach((state) => {
                            let user = this.UserStore.getUser(state.userId);
                            let frag = document.createRange().createContextualFragment(`
                            <div class=\"userDefault-2_cnT0\" style="padding-bottom: 0px;padding-left: 28px;">
                                <div class=\"avatarContainer-303pFz margin-reset\" style=\"flex: 0 0 auto;\">
                                    <div class=\"avatarDefault-3jtQoc\" style=\"background-image: url(&quot;https://cdn.discordapp.com/avatars/${state.userId}/${user.avatar}.webp?size=128&quot;);\"></div>
                                </div>
                                <div class=\"nameDefault-1I0lx8 margin-reset\" style=\"flex: 1 1 auto;\">${user.username}</div>
                                </div>`);
                            channel.insertBefore(frag,channel.lastChild);
                        });

                        //channel.insertBefore(frag2,channel.lastChild);
                        // channel.insertBefore(frag,channel.lastChild);

                       // console.log(this.i);
						channelname.innerText = hiddenChannel.name;
						$(channel)
							.on("mouseenter mouseleave", ".wrapper-fDmxzK", (e) => {
								channelwrapper.classList.toggle("wrapperDefaultVoice-2ud9mj");
								channelwrapper.classList.toggle("wrapperHoveredVoice-3tbfNN");
								channelicon.classList.toggle("contentDefaultVoice-311dxZ");
								channelicon.classList.toggle("contentHoveredVoice-3qGNKh");
								channelsvg.classList.toggle("colorDefaultVoice-1x4dEl");
								channelsvg.classList.toggle("colorHoveredVoice-1P3kui");
								channelname.classList.toggle("nameDefaultVoice-1swZoh");
								channelname.classList.toggle("nameHoveredVoice-TIoHRJ");
								this.showAccessRoles(serverObj, hiddenChannel, e, false);
							})
							.on("click", () => {
								BDfunctionsDario.showToast(`You can not enter the hidden channel ${hiddenChannel.name}.`, {type:"error"});
							})
							.appendTo(category);
					}
					
					for (let hiddenChannel of hiddenChannels[4]) {
						let channel = $(this.channelCategoryMarkup)[0];
						let channelwrapper = channel.querySelector(".wrapperCollapsed-18mf-c");
						let channelsvg = channel.querySelector(".iconCollapsed-1INdMX");
						let channelname = channel.querySelector(".nameCollapsed-3_ChMu");
						channelname.innerText = hiddenChannel.name;
						$(channel)
							.on("mouseenter mouseleave", ".flex-lFgbSz", (e) => {
								channelwrapper.classList.toggle("wrapperCollapsed-18mf-c");
								channelwrapper.classList.toggle("wrapperHoveredCollapsed-25KVVp");
								channelsvg.classList.toggle("iconCollapsed-1INdMX")
								channelsvg.classList.toggle("iconHoveredCollapsed-jNYgOD");
								channelname.classList.toggle("nameCollapsed-3_ChMu");
								channelname.classList.toggle("nameHoveredCollapsed-2c-EHI");
								this.showAccessRoles(serverObj, hiddenChannel, e, false);
							})
							.on("click", () => {
								BDfunctionsDario.showToast(`You can not enter the hidden channel ${hiddenChannel.name}.`, {type:"error"});
							})
							.appendTo(category);
					}
					
					var isOpen = BDfunctionsDario.loadData(serverID, this, "categorystatus");
					isOpen = isOpen === null ? true : isOpen;
					
					if (!isOpen) {
						wrapper.classList.toggle("wrapperDefault-1Dl4SS");
						wrapper.classList.toggle("wrapperCollapsed-18mf-c");
						svg.classList.toggle("iconDefault-xzclSQ");
						svg.classList.toggle("iconCollapsed-1INdMX")
						svg.classList.toggle("closed-2Hef-I");
						name.classList.toggle("nameDefault-Lnjrwm");
						name.classList.toggle("nameCollapsed-3_ChMu");
						
						$(category).find(".containerDefault-7RImuF").hide();
					}
					
					this.appendToChannelList(category);
				}
			}
		}
	}
	
	showAccessRoles (serverObj, channel, e, allowed) {
		if (e.type != "mouseenter") return;
		var settings = BDfunctionsDario.getAllData(this, "settings");
		if (!settings.showAllowedRoles && !settings.showDeniedRoles) return;
		var myMember = this.MemberStore.getMember(serverObj.id, BDfunctionsDario.myData.id);
		var allowedRoles = [], overwrittenRoles = [], deniedRoles = [], deniedUsers = [];
		var everyoneDenied = false;
		for (let id in channel.permissionOverwrites) {
			if (settings.showAllowedRoles &&
				channel.permissionOverwrites[id].type == "role" && 
				(serverObj.roles[id].name != "@everyone") &&
				(channel.permissionOverwrites[id].allow | this.Permissions.VIEW_CHANNEL) == channel.permissionOverwrites[id].allow) {
					if (myMember.roles.includes(id) && !allowed) {
						if (settings.showOverWrittenRoles) overwrittenRoles.push(serverObj.roles[id]);
					}
					else {
						allowedRoles.push(serverObj.roles[id]);
					}
			}
			if (settings.showDeniedRoles &&
				channel.permissionOverwrites[id].type == "role" && 
				(channel.permissionOverwrites[id].deny | this.Permissions.VIEW_CHANNEL) == channel.permissionOverwrites[id].deny) {
					deniedRoles.push(serverObj.roles[id]);
					if (serverObj.roles[id].name == "@everyone") everyoneDenied = true;
			}
			else if (settings.showDeniedUsers &&
				channel.permissionOverwrites[id].type == "member" && 
				(channel.permissionOverwrites[id].deny | this.Permissions.VIEW_CHANNEL) == channel.permissionOverwrites[id].deny) {
					let user = this.UserStore.getUser(id);
					let member = this.MemberStore.getMember(serverObj.id,id);
					if (user && member) deniedUsers.push(Object.assign({name:user.username},member));
			}
		}
		if (settings.showAllowedRoles && allowed && !everyoneDenied) {
			allowedRoles.push({"name":"@everyone"});
		}
		var htmlString = ``;
		if (settings.showTopic && !allowed && channel.topic) {
			htmlString += `<div class="marginBottom4-_yArcI">Topic:</div><div class="flex-3B1Tl4 wrap-1da0e3"><div class="role-3rahR_ flex-3B1Tl4 alignCenter-3VxkQP size12-1IGJl9 weightMedium-13x9Y8 SHC-topic" style="border-color: rgba(255, 255, 255, 0.6); height: unset !important; padding-top: 5px; padding-bottom: 5px; max-width: ${window.outerWidth/3}px">${channel.topic}</div></div>`;
		}
		if (allowedRoles.length > 0 || overwrittenRoles.length > 0) {
			htmlString += `<div class="marginBottom4-_yArcI">Allowed Roles:</div><div class="flex-3B1Tl4 wrap-1da0e3">`;
			for (let role of allowedRoles) {
				let color = role.colorString ? BDfunctionsDario.color2COMP(role.colorString) : [255,255,255];
				htmlString += `<div class="role-3rahR_ flex-3B1Tl4 alignCenter-3VxkQP size12-1IGJl9 weightMedium-13x9Y8 SHC-allowedrole" style="border-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.6);"><div class="roleCircle-3-vPZq" style="background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});"></div><div class="roleName-DUQZ9m">${BDfunctionsDario.encodeToHTML(role.name)}</div></div>`;
			}
			for (let role of overwrittenRoles) {
				let color = role.colorString ? BDfunctionsDario.color2COMP(role.colorString) : [255,255,255];
				htmlString += `<div class="role-3rahR_ flex-3B1Tl4 alignCenter-3VxkQP size12-1IGJl9 weightMedium-13x9Y8 SHC-overwrittenrole" style="border-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.6);"><div class="roleCircle-3-vPZq" style="background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});"></div><div class="roleName-DUQZ9m" style="text-decoration: line-through !important;">${BDfunctionsDario.encodeToHTML(role.name)}</div></div>`;
			}
			htmlString += `</div>`;
		}
		if (deniedRoles.length > 0) {
			htmlString += `<div class="marginBottom4-_yArcI">Denied Roles:</div><div class="flex-3B1Tl4 wrap-1da0e3">`;
			for (let role of deniedRoles) {
				let color = role.colorString ? BDfunctionsDario.color2COMP(role.colorString) : [255,255,255];
				htmlString += `<div class="role-3rahR_ flex-3B1Tl4 alignCenter-3VxkQP size12-1IGJl9 weightMedium-13x9Y8 SHC-deniedrole" style="border-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.6);"><div class="roleCircle-3-vPZq" style="background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});"></div><div class="roleName-DUQZ9m">${BDfunctionsDario.encodeToHTML(role.name)}</div></div>`;
			}
			htmlString += `</div>`;
		}
		if (deniedUsers.length > 0) {
			htmlString += `<div class="marginBottom4-_yArcI">Denied Users:</div><div class="flex-3B1Tl4 wrap-1da0e3">`;
			for (let user of deniedUsers) {
				let color = user.colorString ? BDfunctionsDario.color2COMP(user.colorString) : [255,255,255];
				htmlString += `<div class="role-3rahR_ flex-3B1Tl4 alignCenter-3VxkQP size12-1IGJl9 weightMedium-13x9Y8 SHC-denieduser" style="border-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.6);"><div class="roleCircle-3-vPZq" style="background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});"></div><div class="roleName-DUQZ9m">${BDfunctionsDario.encodeToHTML(user.nick ? user.nick : user.name)}</div></div>`;
			}
			htmlString += `</div>`;
		}
		if (htmlString) {
			var customTooltipCSS = `
				.showhiddenchannels-tooltip {
					max-width: ${window.outerWidth/2}px !important;
				}`;
			var tooltip = BDfunctionsDario.createTooltip(htmlString, e.currentTarget, {type:"right", selector:"showhiddenchannels-tooltip", html:true, css:customTooltipCSS});
			tooltip.style.top = tooltip.style.top.replace("px","") - $(e.currentTarget).css("padding-bottom").replace("px","")/2 + $(e.currentTarget).css("padding-top").replace("px","")/2 + "px";
		}
	}
	
	appendToChannelList (category) {
		var channelList = document.querySelector(".channels-3g2vYe .scroller-fzNley.scroller-NXV0-d");
		if (channelList) {
			$(channelList).off("mouseenter." + this.getName());
			if (category) channelList.insertBefore(category,channelList.lastChild);
			if (BDfunctionsDario.getData("showForNormal", this, "settings")) {
				var serverObj = BDfunctionsDario.getSelectedServer();
				if (serverObj) {
					$(channelList).on("mouseenter." + this.getName(), ".containerDefault-7RImuF, .containerDefault-1bbItS", (e) => {
						var channel = BDfunctionsDario.getKeyInformation({"node":e.currentTarget,"key":"channel"});
						if (channel) this.showAccessRoles(serverObj, channel, e, true);
						console.log(channel);
					});

				}
			}
		}
	}

}
