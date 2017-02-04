function AppCtlr ($scope,$http){
	console.log("hello world from ");
	$http.get('/contactlist')
	person1={
		name:"jon",
		email:"hello.com",
		number:"12345"
	};
	person2={
		name:"jonyy",
		email:"hellklko.com",
		number:"1239845"
	};
	person3={
		name:"kan",
		email:"hello123.com",
		number:"768897"
	};
	var contactlist=[person1,person2,person3]
	$scope.contactlist=contactlist;
}