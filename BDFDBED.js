var lib;
$.get('https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js', function(data) {
	lib = data.text().replace(/BDFDB/g, 'BDFDBED').replace('My Support Server: http://bit.ly/DevilBrosHaus or https://discordapp.com/invite/Jx3TjNS', 'Спасибо DevilBro за библиотеку: http://bit.ly/DevilBrosHaus').replace(new RegExp('https://raw.githubusercontent.com/mwittrien/BetterDiscordAddons/master/Plugins/', 'g'), 'https://raw.githubusercontent.com/darten73/BetterPlugins/master/plugins/');
});
console.log(lib)