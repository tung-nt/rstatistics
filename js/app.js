angular.module('rs', [])
	.controller('HomeController', function($scope) {
		$scope.numbers = [[{name:1,color:'red'},		{name:2,color:'black'},	{name:3,color:'red'}],
		                  [{name:4,color:'black'},	{name:5,color:'red'},	{name:6,color:'black'}],
		                  [{name:7,color:'red'},		{name:8,color:'black'},	{name:9,color:'red'}],
		                  [{name:10,color:'black'},	{name:11,color:'black'},{name:12,color:'red'}],
		                  [{name:13,color:'black'},	{name:14,color:'red'},	{name:15,color:'black'}],
		                  [{name:16,color:'red'},	{name:17,color:'black'},{name:18,color:'red'}],
		                  [{name:19,color:'red'},	{name:20,color:'black'},{name:21,color:'red'}],
		                  [{name:22,color:'black'},	{name:23,color:'red'},	{name:24,color:'black'}],
		                  [{name:25,color:'red'},	{name:26,color:'black'},{name:27,color:'red'}],
		                  [{name:28,color:'black'},	{name:29,color:'black'},{name:30,color:'red'}],
		                  [{name:31,color:'black'},	{name:32,color:'red'},	{name:33,color:'black'}],
		                  [{name:34,color:'red'},	{name:35,color:'black'},{name:36,color:'red'}],
		                  ];
		
		$scope.undo = function(number){
			$scope.histories.shift();
		};
		$scope.reset = function(number){
			$scope.histories = [];
			$scope.zero 		= 0;
			$scope.black 		= 0;
			$scope.red 			= 0;
			$scope.odd 			= 0;
			$scope.even			= 0;
			$scope.from1to18 	= 0;
			$scope.from19to36 	= 0;
			$scope.from1to12 	= 0;
			$scope.from13to24 	= 0;
			$scope.from25to36 	= 0;
			$scope.from1to34 	= 0;
			$scope.from2to35 	= 0;
			$scope.from3to36 	= 0;
		};
		$scope.reset();
		
		$scope.nextNumber = function(number){
			$scope.histories.unshift(number);
			if(number.name == 0){
				$scope.zero = 0;
				$scope.black 		++;
				$scope.red 			++;
				$scope.odd 			++;
				$scope.even			++;
				$scope.from1to18 	++;
				$scope.from19to36 	++;
				$scope.from1to12 	++;
				$scope.from13to24 	++;
				$scope.from25to36 	++;
				$scope.from1to34 	++;
				$scope.from2to35 	++;
				$scope.from3to36 	++;
				return;
			}
			else{
				$scope.zero ++;
			}
			
			if(number.color == 'red'){
				$scope.red = 0;
				$scope.black++;
			}
			else {
				$scope.red++;
				$scope.black = 0;
			}
			
			if(number.name % 2 == 0){
				$scope.even = 0;
				$scope.odd ++;
			}
			else {
				$scope.even ++;
				$scope.odd =0;
			}
			
			if(number.name < 19){
				$scope.from1to18 = 0;
				$scope.from19to36++;
			}
			else {
				$scope.from1to18++;
				$scope.from19to36 = 0;
			}
			
			if(number.name < 13){
				$scope.from1to12 	= 0;
				$scope.from13to24 	++;
				$scope.from25to36 	++;
			}
			else if(number.name > 24){
				$scope.from1to12 	++;
				$scope.from13to24 	++;
				$scope.from25to36 	= 0;
			}
			else {
				$scope.from1to12 	++;
				$scope.from13to24 	= 0;
				$scope.from25to36 	++;
			}
			
			if([1,4,7,10,13,16,19,22,25,28,21,34].indexOf(number.name) > -1){
				$scope.from1to34 	= 0;
				$scope.from2to35 	++;
				$scope.from3to36 	++;
			}
			else if([2,5,8,11,14,17,20,23,26,29,32,35].indexOf(number.name) > -1){
				$scope.from1to34 	++;
				$scope.from2to35 	= 0;
				$scope.from3to36 	++;
			}
			else {
				$scope.from1to34 	++;
				$scope.from2to35 	++;
				$scope.from3to36 	= 0;
			}
		};
	});