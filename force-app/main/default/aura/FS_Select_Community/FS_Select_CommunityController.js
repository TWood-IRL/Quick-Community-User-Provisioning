({
	init: function(component, event, helper){
       // Set the validate attribute to a function that includes validation logic
      
       var customMetadataArray = component.get("v.var_customMetadataArray") ; 
        var customMetadataOptions = [] ; 
        customMetadataArray.forEach(function(item){
            customMetadataOptions.push({
                label: item.Label, 
                value: item.Id
            }) ; 
        }) ; 
        component.set("v.var_customMetadataOptions", customMetadataOptions) ; 
        
	},
    handleChange : function(component, event, helper) {
		var communityValues =  component.get("v.var_selectedCommunity") ; 
        component.set("v.var_selectedCommunityId",communityValues ) ; 
        //var navigate = component.get("v.navigateFlow");
        //navigate("NEXT");
	}
})