var app = angular.module('widgetjs',[])
var c;
	app.factory('servive1',function($http,$q){
		//var factory={};
		return{
			//factory.provaFun = function(a){	
			get: function(a){
				var deferred =$q.defer();
		
		$http.get(a)
			.then(function (response) 
				{
					deferred.resolve(response.data)
				})
			.catch(function(response)
			{
				deferred.reject(response);
			});

			return deferred.promise;

}
//}
}
//return factory;
	})


	app.controller('widgetController',function($scope,servive1){
		$scope.vect=[];
		$scope.ind=0;
$scope.api = 'https://openweathermap.org/data/2.5/weather?q=';
$scope.key = '&appid=b6907d289e10d714a6e88b30761fae22';
$scope.url='https://openweathermap.org/data/2.5/weather?q=rome&appid=b6907d289e10d714a6e88b30761fae22';
	$scope.myFun = function(){
				$scope.url=$scope.api+$scope.city+$scope.key;
		servive1.get($scope.url).then(function(data){
			$scope.weather=data;
			$scope.img='http://openweathermap.org/img/w/'+$scope.weather.weather[0].icon+'.png';
				$scope.vect.push({city:$scope.weather, url:$scope.url, ind:$scope.ind, img:$scope.img});
				$scope.ind=$scope.ind+1;
	$scope.vento="vento:";
	$scope.umidita="umidità";
	$scope.pressione="pressione:";
	$scope.weather.wind.speed=$scope.weather.wind.speed+' km/h';
	$scope.weather.main.humidity=$scope.weather.main.humidity+'%';
	$scope.weather.main.pressure=$scope.weather.main.pressure+' atm'
	$scope.weather.name=$scope.weather.name+',';
	$scope.weather.main.temp=$scope.weather.main.temp+'°C';
	$scope.city="";
		})
		.catch(function(response){
			console.log(response.status);
		})
}
	$scope.myChro = function(){ 








		}
	})





