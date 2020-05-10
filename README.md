## POWER NOTIFIER 3000

Powerful notifier for your webapp.

Highly customizable, yet easy to use. It works perfectly out of box.
You don't need to import CSS or declare containers in your html.

### Basic usage:
The following lines will display default blue card with title and body
```javascript
//es6 import
import { notify } from "power-notifier";
notify({
    title: "Title",
    message: "Message body"
});

//require
var Notifier = require("power-notifier");
Notifier.notify({
    title: "Title",
    message: "Message body"
});
```

This library is based on native Javascript APIs, so it works perfectly with anything that runs in browser.
It works with Vanilla js and every Javascript framework (React, Vue, Svelte, Angular).

### Styling
Instead of styling in-place, like you do with majority of notification libraries,
POWER-NOTIFIER-3000 allows you to declare custom css and then reuse it everywhere.

```javascript
//some js file/component
import { createStyle } from "power-notifier";
createStyle("POWER-NOTIFIER-3000-SUPER-ERROR-STYLE", {
    header: {
        //css applied to head section
    },
    content: {
        //css applied to body section
    },
    buttonsSection: {
        //css applied to whole buttons section
    },
    button: {
        //css applied to each button
    }
});

//some other js file/component
import { notify } from "power-notifier";
notify({
    title: "Title",
    message: "Message body",
    applyStyle: "POWER-NOTIFIER-3000-SUPER-ERROR-STYLE"
});
```
It aslo inherits your css styles. It allows you to style your **POWER-NOTIFIER-3000** notifications from a stylesheet instead of js.

# POWER-NOTIFIER-3000-FAQ
- Q: Well, I don't want any title for this particular error, only message, is it possible with **POWER-NOTIFIER-3000**?
- A: Everything related to the notifications is possible with **POWER-NOTIFIER-3000**. Just pass only the message to notify, it will figure out that you don't want any title. Same thing for body message:
```javascript
import { notify } from "power-notifier";

notify({
    message: "This notification has no title"
});

notify({
    title: "This notification has no body"
});
```

- Q: And what if I want to do something once notification is gone?
- A: You can attach a listener to your notification:
```javascript
import { notify, NotificationUpdate } from "power-notifier";

notify({
    message: "Listener",
    onStateUpdate: function (state) {
        if(state === NotificationUpdate.CLOSED){
            //do some extra cool stuff here
        }
    }
});
```

- Q: Will it go away by itself?
- A: If you want, it will:
```javascript
import { notify } from "power-notifier";

notify({
    message: "Listener",
    timeout: 5000//go away after 5 seconds
});
```

- Q: Why should I use POWER-NOTIFIER-3000?
- A: It is easy to setup. It is easy to use. It has cool name.

- Q: And if I need a confirmation? Like Yes/No buttons?
- A: You can pass them as buttons property to notification
```javascript
import { notify } from "power-notifier";

notify({
    title: "Notification with buttons",
    message: "This notification has some buttons.",
    buttons: [
        { text: "Answer A", action: "answerA" },
        { text: "Answer B", action: "answerB" }
    ],
    onStateUpdate: function (action) {
        if(action === "answerA"){
            //do things when button A is pressed 
        } else if(action === "answerB"){
            //do things when button B is pressed
        }   
    }
});
```

- A: You can also use confirm method which will create Accept/Decline buttons automatically
```javascript
import { confirm, NotificationUpdate } from "power-notifier";

confirm({
    title: "Confirm",
    message: "This is a confirm notification",
    onStateUpdate: function (action) {
        if(action === NotificationUpdate.ACCEPTED){
            //do things when accepted 
        } else if(action === NotificationUpdate.DECLINED){
            //do things when declined
        }   
    }
});
```

# Input
-  @param title - card title
-  @param message - card message
-  @param timeout - time in milliseconds before automatic closing (if null will not be closed automatically)
-  @param applyStyle - style to apply
-  @param onStateUpdate - triggered for each event (SHOWN, CLOSED, TIME_OUT, ACCEPTED, DECLINED, custom)
-  @param buttons - array of {text, action} buttons
-  @param closeOnClick - close when clicked