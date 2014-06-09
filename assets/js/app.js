(function() {


var app= angular.module('store',[]);

app.controller('StoreController',function(){
	this.products=gems;
});



app.controller("PanelController",function(){
	this.tab=2;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};

	this.isSelected=function(checkTab){
		return this.tab===checkTab;
	};

});


var gems=[
			{
				name:'Akarsh',
				price:2.1,
				desc:'........',
				canPurchase:true,
				images:
				[
					{
						full:'http://www.wtprsoftball.com/images/facebook_thumbnail.jpg',
						thumb:'http://www.wtprsoftball.com/images/facebook_thumbnail.jpg'
					},
					{
						full:'http://www.wtprsoftball.com/images/facebook_thumbnail.jpg',
						thumb:'http://www.wtprsoftball.com/images/facebook_thumbnail.jpg'
					}
				],
				reviews:
				[
					{
						stars:2,
						body:'body goes here',
						author:'authorName goes here'
					},
					{
						stars:4,
						body:'body goes here',
						author:'authorName goes here'
					},
					{
						stars:1,
						body:'body goes here',
						author:'authorName goes here'
					},
				],

			},
			{
				name:'product2',
				price:8.1,
				desc:'........',
				canPurchase:false,
				images:
				[
					{
						full:'http://www.wtprsoftball.com/images/facebook_thumbnail.jpg',
						thumb:'url here'
					},
					{
						full:'http://www.wtprsoftball.com/images/facebook_thumbnail.jpg',
						thumb:'url here'
					}
				],
				reviews:
				[
					{
						stars:2,
						body:'body goes here',
						author:'authorName goes here'
					},
					{
						stars:4,
						body:'body goes here',
						author:'authorName goes here'
					},
					
				],

			},
			{
				name:'product3',
				price:8,
				desc:'....asasd....',
				canPurchase:true,

			}
			];

})();