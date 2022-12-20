angular.module('App', [])
  .controller('AppController', function() {
    var machine = this;

    // machine product
    machine.products = [
      {
        id:'no.1',
        name:'coke',
        price:12,
        stock:50
    },
    {
        id:'no.2',
        name:'coke',
        price:15,
        stock:50
    },
    {
        id:'no.3',
        name:'coke',
        price:20,
        stock:50
    },

    ];

// machine pad
machine.pads =[
    {
        id:'1bath',
        price:1
    },
    {
        id:'5bath',
        price:5
    },
    {
        id:'10bath',
        price:10
    },
]

machine.screen= `walcome please select order and then put coin`;

 //machine methode
 
    machine.addstock = function() {
      machine.products.push({stock:50});
    };

    var selectProductPrice;
    var selectProductName;
    machine.selectproduct = function(price,productname){
        selectProductPrice = price;
        selectProductName = productname;
        machine.screen=`Please put coin ${selectProductPrice} baht` ;
        return selectProductPrice;
    }
    
    machine.putcoin = function(coin){

         if(selectProductPrice>0){
           selectProductPrice -= coin; 
           machine.screen =`Remainding ${selectProductPrice}`;
           if(selectProductPrice==0){
            machine.screen = 'buy complete';
            alert(`you buy ${selectProductName} complete`);
           }
        }
        else{
            machine.screen ='please select product';
            console.log(`error:please select product`);
        }
    }
   
  });