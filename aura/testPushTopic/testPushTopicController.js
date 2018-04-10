({
	doSomething : function(component, event, helper) {
        //console.log('entering doSomething');
		var message = event.getParam("message");
        var channel = event.getParam("channel");
        
        
        console.log('channel : '+channel);
        console.log('body: '+message.data.payload.commentbody__c);
        document.getElementById("casecomment").innerHTML = message.data.payload.commentbody__c;
        /*
        console.log('type: '+message.data.event.type);
      
        console.log('id: '+message.data.sobject.Id);
        console.log('Name: '+message.data.sobject.Name);
        console.log('Description: '+message.data.sobject.Description__c);
        console.log('Status: '+message.data.sobject.Status__c);
		*/
        /*
        document.getElementById("channel").innerHTML = channel;
        document.getElementById("type").innerHTML = message.data.event.type;
        document.getElementById("id").innerHTML = message.data.sobject.Id;
        document.getElementById("Name").innerHTML = message.data.sobject.Name;
        document.getElementById("Description").innerHTML = message.data.sobject.Description__c;
        document.getElementById("Status").innerHTML = message.data.sobject.Status__c;
        */
	}
})