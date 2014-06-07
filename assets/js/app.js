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

},
{
	name:'product2',
	price:8.1,
	desc:'........',
	canPurchase:false,

}
];

})();