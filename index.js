const notifier = require("./src/notifier");

module.exports.notify = notifier.notify;
module.exports.NotificationState = notifier.NotificationUpdate;
module.exports.createStyle = notifier.createStyle;