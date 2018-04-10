/* global $ */

({
    doInit : function(component, event, helper) {

        // Retrieve the session id and initialize cometd
        let sessionAction = component.get("c.sessionId");
        let url = helper.buildUrl(component);

        sessionAction.setCallback(this, function(response) {
            //console.log('entering setCallback, function');
            let state = response.getState();
            if(state  === "SUCCESS") {
                let sessionId = response.getReturnValue();
                //console.log('sessionID : '+sessionId);
                let authstring = "OAuth " + sessionId;
				
                //authenticate to the Streaming API
                $.cometd.init({
                    url: window.location.protocol + '//' + window.location.hostname + '/cometd/40.0/',
                    requestHeaders: { Authorization: authstring },
                    appendMessageTypeToURL : false
                });
				
                $.cometd.subscribe(url, function (message){
                    //console.log('inside subscribe function');
                    console.log(message);
                    let evt = $A.get("e.ltng:sendMessage");
                    evt.setParams({"message" : message, "channel" : message.channel});
                    evt.fire();
                });
            }

        });

        $A.enqueueAction(sessionAction);
    }
})