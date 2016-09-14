
var app=angular.module("myApp",[]);

			app.controller("myCtrl",function($scope,$http){
				$scope.flag=false;
				$scope.ajadata=function(){
					$http.get('date/list.json').success(function(data){
						$scope.flag=true;
						$scope.categorie=data;
						//console.log(data);
					});
					
					};
				$scope.ajadata();
				
			});
			
