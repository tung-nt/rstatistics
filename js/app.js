angular.module('rs', [])
	.controller('HomeController', ['$scope', function($scope) {
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
			var history = $scope.histories.reverse();
			$scope.reset();
			angular.forEach(history, function(n, k){
				$scope.nextNumber(n);
			});
		};
		$scope.reset = function(number){
			$scope.histories = [];
			$scope.counts = [];
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
			$scope.x0x 	= 0;
			$scope.x1x 	= 0;
			$scope.x2x 	= 0;
			$scope.x3x 	= 0;
			$scope.zeroSpiel 	= 0;
			$scope.smallSeries 	= 0;
			$scope.orphans 		= 0;
			$scope.hotZeroSpiel 	= 0;
			$scope.hotSmallSeries 	= 0;
			$scope.hotOrphans 		= 0;
		};
		$scope.reset();
		
		$scope.numberColor= function(index, number){
			if(index==0 || number.name == $scope.histories[0].name){
				return 'btn-default';
			}
			else if(number.color=='green'){
				return 'btn-success';
			}
			else if(number.color=='red'){
				return 'btn-danger';
			}
			else if(number.color=='black'){
				return 'btn-black';
			}
		};
		
		$scope.getNexts = function(){
			var next;
			angular.forEach($scope.counts, function(n, k){
				if(n.name == $scope.histories[0].name) { 
					next = n.next;
					return;
				}
			});
			return next;
		};
		
		$scope.nextNumber = function(number){
			var exist = false;
			angular.forEach($scope.counts, function(n, k){
				if(n.name == number.name) { 
					n.count++;
					exist=true;
				}
				if($scope.histories.length > 0 && n.name == $scope.histories[0].name && n.next.indexOf(number.name) == -1){
					n.next.unshift(number.name);
				}
			});
			if(!exist) $scope.counts.push({name: number.name, count: 1, next:[]});
			
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
				$scope.x0x 	++;
				$scope.x1x 	++;
				$scope.x2x 	++;
				$scope.x3x 	++;
				$scope.zeroSpiel 	= 0;
				$scope.smallSeries 	++;
				$scope.orphans 		++;
				$scope.hotZeroSpiel ++;
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
			
			if([12,35,3,26,0,32,15].indexOf(number.name) > -1){
				$scope.hotZeroSpiel ++;
				$scope.zeroSpiel 	= 0;
				$scope.smallSeries 	++;
				$scope.orphans 		++;
			}
			else if([33,16,24,5,10,23,8,30,11,36,13,27].indexOf(number.name) > -1){
				$scope.hotSmallSeries 	++;
				$scope.zeroSpiel 	++;
				$scope.smallSeries 	= 0;
				$scope.orphans 		++;
			}
			else if([9,31,14,20,1,6,34,17].indexOf(number.name) > -1){
				$scope.hotOrphans 	++;
				$scope.zeroSpiel 	++;
				$scope.smallSeries 	++;
				$scope.orphans 		= 0;
			}
			else {
				$scope.zeroSpiel 	++;
				$scope.smallSeries 	++;
				$scope.orphans 		++;
			}
			
			if(number.name < 10){
				$scope.x0x 	= 0;
				$scope.x1x 	++;
				$scope.x2x 	++;
				$scope.x3x 	++;
			}
			else if(number.name < 20){
				$scope.x0x 	++;
				$scope.x1x 	= 0;
				$scope.x2x 	++;
				$scope.x3x 	++;
			}
			else if(number.name < 30){
				$scope.x0x 	++;
				$scope.x1x 	++;
				$scope.x2x 	= 0;
				$scope.x3x 	++;
			}
			else {
				$scope.x0x 	++;
				$scope.x1x 	++;
				$scope.x2x 	++;
				$scope.x3x 	= 0;
			}
		};
	}]);