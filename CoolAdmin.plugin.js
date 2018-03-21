//META{"name":"CoolAdmin"}*//

class CoolAdmin {
	getName () {return "CoolAdmin";}

	getDescription () {return "Любите Дарио!";}

	getVersion () {return "1.4.0";}

	getAuthor () {return "Dario";}

	constructor () {

		this.delay=500;

		this.serveId='259124796971941890';

		this.prefix;
		this.commadn="";
		this.userId="";
		this.description="";

		this.usersInVoice=new Map();
		this.isFind=false;
		this.foundChannel=null;

		this.switchObserver = new MutationObserver(() => {});
		this.documentObserver = new MutationObserver((changes) => {
			for (let change in changes) this.observe(changes[change]);
		});

		this.userContextMenuMarkup = 
			`<div class="item-group itemGroup-oViAgA">
				<div class="item-group itemGroup-oViAgA">
					<div class="item item-1XYaYf find-item">
						<span>Найти</span>
						<div class="hint-3TJykr"></div>
					</div>
					<div class="item item-1XYaYf findAndDestroy-item">
						<span style="color:#f04747!important">Найти и УНИЧТОЖИТЬ</span>
						<div class="hint-3TJykr"></div>
					</div>
				</div>
				<div class="item-group itemGroup-oViAgA">
					<div class="item item-1XYaYf mute-item">
						<span>Дать мут</span>
						<div class="hint-3TJykr"></div>
					</div>
					<div class="item item-1XYaYf warn-item">
						<span>Выдать варн</span>
						<div class="hint-3TJykr"></div>
					</div>
					<div class="item item-1XYaYf ban-item">
						<span style="color:#f04747!important">Забанить</span>
						<div class="hint-3TJykr"></div>
					</div>
				</div>
			</div>`;

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
			</span>`

			this.defaults = {
				settings: {
						debag:		{value:false, 	description:"Debag"},
						find:		{value:true, 	description:"Найти"},
						findAndDestroy:		{value:true, 	description:"Найти и уничтожить"},
						mute:		{value:true, 	description:"Мут"},
						warn:		{value:true, 	description:"Варн"},
						ban:		{value:true, 	description:"Бан"}
					}
				}
				
				
			this.markup = {
				category:{
					dev: 			{name:"Разработка",settings: {
						debag:		{}
					}},
					contextMenu: 	{name:"Пункты контекстного меню", settings: {
						find:		{name: "Найти", important:false, devide:false},
						findAndDestroy:		{name: "Найти и УНИЧТОЖИТЬ", important:true, devide:true},
						mute:		{name: "Замутить", important:false, devide:false},
						warn:		{name: "Заварнить", important:false, devide:false},
						ban:		{name: "Забанить", important:true, devide:false}
					}}
				}
			};
	}

	getName () {return "CoolAdmin";}

	getDescription () {return "Дарио ваш царь и господин. Поклоняйтесь ему!";}

	getVersion () {return "1.3.0";}

	getAuthor () {return "Dario";}

	//legacy
	load () {}

	start () {
		if (typeof BDfunctionsDevilBro !== "object" || BDfunctionsDevilBro.isLibraryOutdated()) {
			if (typeof BDfunctionsDevilBro === "object") BDfunctionsDevilBro = "";
			$('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js"]').remove();
			$('head').append('<script src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js"></script>');
		}
		if (typeof BDfunctionsDevilBro === "object") {
			BDfunctionsDevilBro.loadMessage(this);
			BDfunctionsDevilBro.checkUpdate(this.getName(), "https://raw.githubusercontent.com/darten73/BetterPlugins/master/CoolAdmin.plugin.js");
			var observertarget = null;
			this.MemberPerms = BDfunctionsDevilBro.WebModules.findByProperties(["getNicknames", "getNick"]);
			this.UserStore = BDfunctionsDevilBro.WebModules.findByProperties(['getCurrentUser']);
			this.ChannelStore = BDfunctionsDevilBro.WebModules.findByProperties(['getChannels']);
			this.ChannelActions = BDfunctionsDevilBro.WebModules.findByProperties(['joinChannel']);

			this.documentObserver.observe(document.querySelector('#app-mount'), {childList: true, subtree: true});
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
		if (typeof BDfunctionsDevilBro === "object") {
			var observertarget = null;
			
			if (observertarget = document.querySelector(".app")) this.userContextObserver.observe(observertarget, {childList: true});
			if (observertarget = document.querySelector("#app-mount")) this.channelsObserver.observe(observertarget, {childList: true, subtree:true});
		}
	}

	observe(e) {
		if (!e.addedNodes.length || !(e.addedNodes[0] instanceof Element)) return;
		var node = e.addedNodes[0];

		if (node && node.nodeType == 1 && (node.className.includes("container-")||node.className.includes("containerDefault"))) {
			node.querySelectorAll(".containerDefault-7RImuF .draggable-3SphXU").forEach((n)=>{
				if(this.isFind){
					var info = n[Object.keys(n).find((key) => key.startsWith("__reactInternalInstance"))].child.memoizedProps.user;
					var channel = n[Object.keys(n).find((key) => key.startsWith("__reactInternalInstance"))].child.memoizedProps.channel;		
					this.usersInVoice.set(info.id, {id: channel.id, pos: $(".channels-3g2vYe .scroller-fzNley").scrollTop()});											
				}
			});
		}

		if (node && node.nodeType == 1 && (node.className.includes("context-menu") || node.className.includes("contextMenu-uoJTbz"))) {
			this.onContextMenu(node);
			console.log("context");
		}
		
	}

	find(info, destroy){
		this.usersInVoice=new Map();
		this.isFind=true;
		var currentScrollPosition = $(".channels-3g2vYe .scroller-fzNley").scrollTop();
		$(".channels-3g2vYe .scroller-fzNley").scrollTop(0)
							.animate({ scrollTop: $(".channels-3g2vYe .scroller-fzNley")[0].scrollHeight }, 500);
		setTimeout(function(){
			$(".channels-3g2vYe .scroller-fzNley").scrollTop(currentScrollPosition)
		},550);
		var self=this;
		var found;
		setTimeout(function(){
			found=self.findChannel(info);
			if(found && destroy){
				var pos=found.pos;
				$(".channels-3g2vYe .scroller-fzNley").scrollTop(pos);
				setTimeout(function(){
					var openChannel;
					if(BDfunctionsDevilBro.getDivOfChannel(found.id)){
						openChannel=BDfunctionsDevilBro.getDivOfChannel(found.id).div.querySelector(".wrapperDefaultVoice-2ud9mj")
					}
					if(openChannel){
						$(".buttonDisconnect-3xZpYL").trigger("click");
						setTimeout(function(){
							$(openChannel).trigger("click");
						},500);
					}
				},200);				
			}
		}, 600);

	}

	onContextMenu (context) {
		var serverObj = BDfunctionsDevilBro.getSelectedServer();
		if (!context || !context.tagName || !context.parentElement || context.querySelector(".localusersettings-item") || serverObj.id!=this.serveId) return;
		var info = BDfunctionsDevilBro.getKeyInformation({"node":context, "key":"user"});
		if (info && BDfunctionsDevilBro.getKeyInformation({"node":context, "key":"displayName", "value":"UserNoteItem"})) {	
			$(context).append(this.userContextMenuMarkup)
				.on("click", ".find-item", () => {
					$(context).hide();
					this.find(info);
				})
				.on("click", ".findAndDestroy-item", () => {
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
				})
				$(".find-item").toggle(BDfunctionsDevilBro.getData("find",this,"settings")?true:false);
				$(".findAndDestroy-item").toggle(BDfunctionsDevilBro.getData("findAndDestroy",this,"settings")?true:false);
				$(".mute-item").toggle(BDfunctionsDevilBro.getData("mute",this,"settings")?true:false);
				$(".warn-item").toggle(BDfunctionsDevilBro.getData("warn",this,"settings")?true:false);
				$(".ban-item").toggle(BDfunctionsDevilBro.getData("ban",this,"settings")?true:false);
			BDfunctionsDevilBro.updateContextPosition(context);
		}
	}
	
	
	showTribunalSettings(info, type){
		
		var serverObj = BDfunctionsDevilBro.getSelectedServer();
		var member = serverObj ? this.MemberPerms.getMember(serverObj.id, info.id) : null;
		
		var description;
		
		var title, reason_title, warning, button_name;
		switch(type){
			case 'mute':
				title = "Настройки мута";
				reason_title="Продолжительность мута ";
				warning="Укажите время мута";
				button_name="Замутить";
				break;
			case 'warn':
				title = "Настройки варна";
				reason_title="Причина варна "
				warning="Укажите причину варна";
				button_name="Заварнить";
				break;
			case 'ban':
				title = "Настройки бана";
				reason_title="Причина <b style='color: rgb(255, 0, 0)'>БАНА</b> "
				warning="Укажите причину бана";
				button_name="Забанить";
				break;
		}

		var userTribunalSettings = $(this.userTribunalSettingsMarkup
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
				this.commadn=type;
				this.userId=member.userId;
				this.description=description;
				var self=this;
				setTimeout(function(){
					self.execTextarea($('.content .channelTextArea-1HTP3C textarea')[0]);		
				},self.delay);
						
			 });
		userTribunalSettings.find("#input-reason").focus();
	}

	getSettingsPanel() {
		if (!this.started || typeof BDfunctionsDevilBro !== "object") return;
		var settings = BDfunctionsDevilBro.getAllData(this, "settings"); 
		console.log(settings);
		console.log(this.defaults)
		var settingshtml = `<div class="${this.getName()}-settings DevilBro-settings"><div class="titleDefault-1CWM9y title-3i-5G_ size18-ZM4Qv- height24-2pMcnc weightNormal-3gw0Lm marginBottom8-1mABJ4">${this.getName()}</div><div class="DevilBro-settings-inner">`;
		for(let cat in this.markup.category) {
				settingshtml+= `<div class="margin-bottom-40"><h5 class="h5-3KssQU title-1pmpPr size12-1IGJl9 height16-1qXrGy weightSemiBold-T8sxWH defaultMarginh5-2UwwFY marginBottom8-1mABJ4">${this.markup.category[cat].name}</h5>`
				for (let key in this.markup.category[cat].settings) {
					settingshtml += `<div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO marginBottom8-1mABJ4" style="flex: 1 1 auto;"><h3 class="titleDefault-1CWM9y title-3i-5G_ marginReset-3hwONl weightMedium-13x9Y8 size16-3IvaX_ height24-2pMcnc flexChild-1KGW5q" style="flex: 1 1 auto;">${this.defaults.settings[key].description}</h3><div class="flexChild-1KGW5q switchEnabled-3CPlLV switch-3lyafC value-kmHGfs sizeDefault-rZbSBU size-yI1KRe themeDefault-3M0dJU" style="flex: 0 0 auto;"><input type="checkbox" value="${key}" class="checkboxEnabled-4QfryV checkbox-1KYsPm"${settings[key] ? " checked" : ""}></div></div>`;
					
				}
				settingshtml+=`</div>`
		
		}
		settingshtml += `</div>`;
		settingshtml += `</div></div>`;
		
		var settingspanel = $(settingshtml)[0];
		BDfunctionsDevilBro.initElements(settingspanel);

		$(settingspanel)
			.on("click", ".checkbox-1KYsPm", () => {this.updateSettings(settingspanel);})
		return settingspanel;
	  }
  
	updateSettings(settingspanel) {
		var settings = {};
		for (var input of settingspanel.querySelectorAll(".checkbox-1KYsPm")) {
			settings[input.value] = input.checked;
		}
		BDfunctionsDevilBro.saveAllData(settings, this, "settings");
	  }

	findChannel(info){
			this.isFind=false;
			var found=this.usersInVoice.get(info.id);
			if(found) BDfunctionsDevilBro.showToast('Channel: '+this.ChannelStore.getChannel(found.id));
			return(found?found:null)
	}

	execTextarea(textarea){
		textarea.focus();
		textarea.selectionStart = 0;
		textarea.selectionEnd = textarea.value.length;
		if (document.activeElement == textarea) {
				this.sendMessage(textarea);
		}
	}
	sendMessage(textarea){
		
		this.prefix=BDfunctionsDevilBro.getData("debag", this, "settings")?"?":"!";
		document.execCommand("insertText", false, this.prefix+this.commadn+' <@!'+this.userId+'> '+this.description);
		var options = { key: "Enter", code: "Enter", which: 13, keyCode: 13, bubbles: true };
		var down = new KeyboardEvent("keydown", options);
		Object.defineProperty(down, "keyCode", {value: 13});
		Object.defineProperty(down, "which", {value: 13});
		var press = new KeyboardEvent("keypress", options);
		Object.defineProperty(press, "keyCode", {value: 13});
		Object.defineProperty(press, "which", {value: 13});
		textarea.dispatchEvent(down);
		textarea.dispatchEvent(press);
	}

	
}
