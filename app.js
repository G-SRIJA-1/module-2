(function () {
    'use strict';
  
    angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;
      toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  
      toBuy.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      };
    }
  
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought = this;
      bought.items = ShoppingListCheckOffService.getBoughtItems();
    }
  
    function ShoppingListCheckOffService() {
      var service = this;
      var toBuyItems = [
        { name: "cookies", quantity: 10 },
        { name: "apples", quantity: 5 },
        { name: "milk", quantity: 2 },
        { name: "bread", quantity: 1 },
        { name: "cheese", quantity: 3 }
      ];
      var boughtItems = [];
  
      service.getToBuyItems = function () {
        return toBuyItems;
      };
  
      service.getBoughtItems = function () {
        return boughtItems;
      };
  
      service.buyItem = function (itemIndex) {
        var item = toBuyItems.splice(itemIndex, 1)[0];
        boughtItems.push(item);
      };
    }
  })();
  
  // index.html
  // -----------------------------
  // <!DOCTYPE html>
  // <html lang="en" ng-app="ShoppingListCheckOff">
  // <head>
  //   <meta charset="UTF-8">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <title>Shopping List Checkoff</title>
  //   <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  //   <script src="app.js"></script>
  // </head>
  // <body>
  //   <div ng-controller="ToBuyController as toBuy">
  //     <h2>To Buy</h2>
  //     <p ng-if="toBuy.items.length === 0">Everything is bought!</p>
  //     <ul>
  //       <li ng-repeat="item in toBuy.items">
  //         Buy {{ item.quantity }} {{ item.name }}
  //         <button ng-click="toBuy.buyItem($index)">Bought</button>
  //       </li>
  //     </ul>
  //   </div>
  //   <div ng-controller="AlreadyBoughtController as bought">
  //     <h2>Already Bought</h2>
  //     <p ng-if="bought.items.length === 0">Nothing bought yet.</p>
  //     <ul>
  //       <li ng-repeat="item in bought.items">
  //         Bought {{ item.quantity }} {{ item.name }}
  //       </li>
  //     </ul>
  //   </div>
  // </body>
  // </html>
