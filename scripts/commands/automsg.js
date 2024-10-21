module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  pefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['টেম্পু চালও তোমরা🙂']
},
             {
    timer: '2:00:00 AM',
    message: ['কেউ নাই😑']
},				 {
    timer: '2:00:00 PM',
    message: ['কেউ নাই যাইগা, ']
},		
		 {
    timer: '7:00:00 PM',
    message: ['পোলাপান নামাজ পড় যাহ😑. ']
},
            {
    timer: '10:00:00 PM',
    message: ['Heyy sona ra😑🖤']
},
            {
    timer: '11:00:00 PM',
    message: ['বাচ্চারা ঘুমিয়ে গেলা]
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};