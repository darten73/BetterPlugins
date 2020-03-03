//META{"name":"CoolAdmin","website":"","source":""}*//

class CoolAdmin {
	getName() {
		return "CoolAdmin";
	}

	getVersion() {
		return "4.0.2";
	}

	getAuthor() {
		return "Dario";
	}

	getDescription() {
		return 'Le Cool Admin';
	}

	constructor() {
		this.changelog = {
			"added": [["admWarn", 'Добавлен адмВарн']],
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
				admWarn: {name: 'Админ Варн', enabled: true,},
				unAdmWarn: {name: 'Админ Разварн', enabled: true,},
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

	start () {
		if (!window.BDFDB) window.BDFDB = {myPlugins:{}};
		if (window.BDFDB && window.BDFDB.myPlugins && typeof window.BDFDB.myPlugins == "object") window.BDFDB.myPlugins[this.getName()] = this;
		var libraryScript = document.querySelector('head script#BDFDBLibraryScript');
		if (!libraryScript || (performance.now() - libraryScript.getAttribute("date")) > 600000) {
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("id", "BDFDBLibraryScript");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.min.js");
			libraryScript.setAttribute("date", performance.now());
			libraryScript.addEventListener("load", _ => {this.initialize();});
			document.head.appendChild(libraryScript);
		}
		else if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) this.initialize();
		this.startTimeout = setTimeout(_ => {
			try {return this.initialize();}
			catch (err) {console.error(`%c[${this.getName()}]%c`, "color: #3a71c1; font-weight: 700;", "", "Fatal Error: Could not initiate plugin! " + err);}
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
		BDFDB.LibraryRequires.request({
				url: 'https://server-discord-plugins.herokuapp.com/auth/login',
				method: "POST",
				json: {
					discordId: BDFDB.UserUtils.me.id,
					password: BDFDB.DataUtils.load(this, "security", "password"),
				}
			},
			(error, response, body) => {
				if (response.statusCode === 200) {
					if(body.password) {
						BDFDB.DataUtils.save(body.password, this, "security", "password");
					}
					if(!body.token) return;
					this.jwt=body.token;
					this.updateTokenTimeout = setTimeout(_ => {
						if(this.stopped) return;
						this.updateToken();
					}, 5000);
					BDFDB.LibraryRequires.request({
							url: 'https://server-discord-plugins.herokuapp.com/plugin/cool_admin',
							headers:{
								"Authorization": `Bearer_${this.jwt}`
							}
						},
						(error, response, body) => {
							if (error) {
								this.retryConnectionTimeout = setTimeout(_ => {
									if (!this.stopped) this.initialize();
								}, 5000);
								console.error(`%c[${this.getName()}]%c`, "color: #3a71c1; font-weight: 700;", "", "Fatal Error: Could not load CoolAdmin! Network exception");
								return;
							}
							if (response.statusCode === 200) {
								eval(body);
								BDFDB.PluginUtils.init(this);
							} else if (response.statusCode === 404) {
								console.error(`%c[${this.getName()}]%c`, "color: #3a71c1; font-weight: 700;", "", "Fatal Error: Could not load CoolAdmin! Plugin not found");
							}
						});
				} else {
					console.error(`%c[${this.getName()}]%c`, "color: #3a71c1; font-weight: 700;", "", "Fatal Error: Could not load CoolAdmin! Authorisation exception");
					BDFDB.NotificationUtils.toast("Ошибка авторизации")
				}
			});
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
