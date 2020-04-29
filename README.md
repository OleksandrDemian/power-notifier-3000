## POWER NOTIFIER 3000

Powerful notifier for your webapp.

Highly customizable, yet easy to use. It works perfectly out of box.
You don't need to import CSS or declare containers in your html.

### Basic usage:
The following lines will display default blue card with title and body
```javascript
//es6 import
import { notify } from "power-notifier-3000";
notify({
    title: "Title",
    message: "Message body"
});

//require
var Notifier = require("power-notifier-3000");
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
import { createStyle } from "power-notifier-3000";
createStyle("POWER-NOTIFIER-3000-SUPER-ERROR-STYLE", {
    //css applied to head section
    header: {
        backgroundColor: "red",
        color: "white",
        textAlign: "center"
    },
    //css applied to body section
    content: {
        backgroundColor: "white",
        color: "red",
        border: "1px solid red",
        marginTop: "5px"//separate head and body
    }
});

//some other js file/component
import { notify } from "power-notifier-3000";
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
import { notify } from "power-notifier-3000";

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
import { notify, NotificationUpdate } from "power-notifier-3000";

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
import { notify } from "power-notifier-3000";

notify({
    message: "Listener",
    timeout: 5000//go away after 5 seconds
});
```

- Q: Why should I use POWER-NOTIFIER-3000?
- A: It is easy to setup. It is easy to use. It has cool name.

- Q: And if I need a confirmation? Like Yes/No buttons?
- A: It won't be a notification anymore. Check dictionary: "notification: the action of notifying someone or something", not asking questions.