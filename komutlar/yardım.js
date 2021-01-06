const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "_"; 
const yardım = new Discord.MessageEmbed()
.setColor("#5b258b")
.setAuthor("NightWolf")
.setTitle("<a:Fire:789461230531117086> - NightWolf Yardım Menüsüne Hoş Geldin! - <a:Fire:789461230531117086> ")
 .setTimestamp()
.setDescription(`
<a:mod:789461230489305158>・Yapımcım : <@733176349895819315>
<a:mod:789461230489305158>・Geliştirici : <@733176349895819315> 
=========================
<a:tik:789423844577771550>・\`${prefix}moderasyon\` : Moderasyon Menüsünü Gösterir.
<a:Saturn:794182710784425984>・\`${prefix}kullanıcı\` : Kullanıcı Menüsünü Gösterir.
===========[Sunucuya Özel Komutlar]==============
<:discordpartner:793513456815964260>・\`${prefix}foto\` : <#789229911083581510> Kanalını Bu Komut Sayesinde Göre Bilirsiniz.
<:discordpartner:793513456815964260>・\`${prefix}abone\` : Abone Rolünü Sadece <@&789249261161676800> Sahip Kişiler Verebilir.
===========[Premium Bilgi]==============
<a:hype:789423839774769153>・\`${prefix}premium-ver\` : Premium Verir. (<@733176349895819315>)
<a:hype:789423839774769153>・\`${prefix}premium-al\` : Premium Alır. (<@733176349895819315>)



**NightWolf İyi Günler Diler...**

`)


message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-yardım'
}