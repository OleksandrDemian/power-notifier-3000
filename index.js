const notifier = require("./src/notifier");

module.exports.notify = notifier.notify;
module.exports.confirm = notifier.confirm;
module.exports.NotificationUpdate = notifier.NotificationUpdate;
module.exports.createStyle = notifier.createStyle;