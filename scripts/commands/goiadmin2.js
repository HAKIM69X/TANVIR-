module.exports.config = {
  name: "goiadmin2",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100005881964828") {
    var aid = ["100005881964828"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["তোর লাং লাগে? মেনশন দেছ কেন😑?", "💋💋🙂"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}