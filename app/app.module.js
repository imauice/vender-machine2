angular.module('App', [])
    .controller('AppController', function ($http) {
        var machine = this;

        // machine product

        // for api

        // $http({
        //     method: 'GET',
        //     url: '/apiUrl' //some api url
        //   }).then(res =>{
        //     console.log(res.data);
        //     machine.products=res.data; //<-- use this when connect to api
        //   }
        //   );

        // with mockup
        machine.products = [   //<-- we delete all this when use api
            {
                id: 'no.1',
                name: 'Coke',
                price: 12,
                stock: 50
            },
            {
                id: 'no.2',
                name: 'Fanta',
                price: 15,
                stock: 50
            },
            {
                id: 'no.3',
                name: 'Pepsi',
                price: 20,
                stock: 50
            },

        ];

        // machine pad
        machine.pads = [
            {
                id: '1bath',
                price: 1
            },
            {
                id: '5bath',
                price: 5
            },
            {
                id: '10bath',
                price: 10
            },
        ]

        machine.screen = `Welcome please select order and then put coin`;
        machine.oncoin = 0;

        //machine methode

        machine.addstock = function () {
            machine.products.push({ stock: 50 });
        };

        var selectProductPrice;
        var selectProductName;
        var selectProductStock;
        var selectProductId;

        machine.updatestock = function(id,remainding){
           var objIndex =  machine.products.findIndex((obj => obj.id == id));
           machine.products[objIndex].stock = remainding;
        };
     

        machine.selectproduct = function (id,price, productname,stock) {
            if(machine.oncoin==0){
                console.log('stock: ',stock);
                selectProductId = id;
                selectProductPrice = price;
                selectProductName = productname;
                selectProductStock = stock;
                console.log('id ',selectProductId,' stock ',selectProductStock);
                
                machine.screen = `Please put coin ${selectProductPrice} baht`;
            }
            else{
                machine.screen = `Cannot change product after to insert coin remaining is ${selectProductPrice} baht`
            }
            return selectProductPrice;
        }

        machine.putcoin = function (coin) {

            if (selectProductPrice > 0) {

                if(coin<=selectProductPrice){

                    selectProductPrice -= coin;
                    machine.oncoin = 1;
                    machine.screen = `Remaining ${selectProductPrice}`;
                    if(selectProductPrice==0){
                        const remaindingStock = (selectProductStock-1)
                        machine.updatestock(selectProductId,remaindingStock)
                        machine.screen = `buy ${selectProductName} complete`;
                        machine.oncoin = 0;
                    }
                    return;
                };

                if(coin>selectProductPrice){
                    console.log("coin ",coin,"Remaining ",selectProductPrice);
                    machine.screen = `Coin has return to you please insert less than remaining price ${selectProductPrice} baht`;
                    return;
                };

               
            }

            else {
                machine.screen = 'Please select product';
                console.log(`Error:please select product`);
            }
        }

        console.log('coining',machine.oncoin);

    });