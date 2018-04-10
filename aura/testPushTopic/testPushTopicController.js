({
	doSomething : function(component, event, helper) {
        //console.log('entering doSomething');
		var message = event.getParam("message");
        var channel = event.getParam("channel");
        console.log('channel : '+channel);
        console.log('type: '+message.data.event.type);
        console.log('id: '+message.data.sobject.Id);
        console.log('Name: '+message.data.sobject.Name);
        console.log('Description: '+message.data.sobject.Description__c);
        console.log('Status: '+message.data.sobject.Status__c);
	}
})