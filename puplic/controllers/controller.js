var app = angular.module('myapp', [])
app.controller("AppCtlr" ,function ($scope,$http){
	console.log("hello world from ");
	var add=function(){
		$http.get("/contactlist").success(function(data){
			console.log("i got the data")
			$scope.contactlist=data;
			$scope.contact="";
		});
	};

	add()

	$scope.addContact=function(){
		console.log($scope.contact)
		$http.post("/contactlist",$scope.contact).success(function(res){
			console.log(res)
			add()
		});
	};

	$scope.remove=function(id){
		console.log(id)
		$http.delete("/contactlist/"+id).success(function(res){
			add()
		});
	};

	$scope.edit=function(id){
		console.log(id)
		$http.get("/contactlist/"+id).success(function(res){
			$scope.contact=res;
		})
	};

	$scope.update=function(){
		console.log($scope.contact._id)
		$http.put('/contactlist/'+$scope.contact._id,$scope.contact).success(function(res){
			add();
		});
	};
})