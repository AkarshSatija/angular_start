(function() {


var app= angular.module('store',[]);

app.controller('StoreController',function(){
this.products=gems;

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

},
{
	name:'product3',
	price:8,
	desc:'....asasd....',
	canPurchase:true,

}
];

})();