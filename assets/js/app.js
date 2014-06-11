(function() {


var app= angular.module('store',[]);

app.controller('StoreController',function(){
	this.products=gems;
});


app.directive('productPanels',function()
	{
		return {
			restrict:'E',
			templateUrl:'panels/product-panels.html',
			controller:function(){
									this.tab=2;
									this.selectTab=function(setTab){
										this.tab=setTab;
									};
									this.isSelected=function(checkTab){
										return this.tab===checkTab;
									};

								},
			controllerAs:'panel'
		};	
	});

app.directive('productTitle',function () {
	
	return {
		restrict:'E',
		templateUrl:'panels/product-title.html'

	};

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


app.controller('ReviewController',function(){
	this.review={};
	this.addReview=function(product){
		product.reviews.push(this.review);
		this.review={};
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
				reviews:[],

			}
			];

})();