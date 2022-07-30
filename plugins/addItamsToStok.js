// import Web3 from "web3";
// import dataCcontract from "../build/contracts/Amazon.json";
// import Products from "../json/Products.json";
// import Names from "../json/routers.json";
// const AbiCcontract = dataCcontract.abi;

// const contractAddress = {
//   97: "0x2Ec5500Bc1571F079194188FF1E76E5Ad311211C", //tbnb
//   3: "0x24191b423D0Ec4bCd6F6eeC4dafba7CEEe93b5BC", // ropsten
//   42: "0xb902294E52012ad786dc739B495c35bd579c8792", // kovan
//   4: "0x9E9f08302DD27b9908A758bb2d5D53fE2B414788", // rinkeby
// };

// export default {
//   async setItemsToStoke(_chainId) {
//     try {

//       const ethereum = await window.ethereum;
//       const web3 = new Web3(Web3.givenProvider || ethereum);
//       const AmazonContract = new web3.eth.Contract(
//         AbiCcontract,
//         contractAddress[_chainId]
//       );

//       // ........................................................

//      // let _names = [];
      // let _prices = [];
      // Names.map((e) => {
      //   let item = this.handelParams(e);
      //   const item_USD_Price = item.current_price;
      //   const itemBNBPrice = item_USD_Price * 0.00005;
      //   const itemBNBPriceToWei = itemBNBPrice * 10 ** 18;
      //   _prices.push(itemBNBPriceToWei.toFixed(0));
      //    _names.push(e);
      // });

      // console.log(_prices);
      // console.log(_names);


      // await AmazonContract.methods
      //         .addItemsToStoke(_names, _prices)
      //         .send({
      //           from: _CurrentAccount,
      //         })
      //         .then(async () => {
      //           // Make sure the price is correct
      //           _names.map(async (e, i) => {
      //             await AmazonContract.methods
      //               .itemsInStoke(e)
      //               .call()
      //               .then(async (res) => {
      //                 let _res = res * 10 ** -18;
      //                 _res = _res / 0.00005;
      //                 const prodact = this.handelParams(e);
      //                 console.log(prodact.current_price == _res.toFixed(2));
      //               });
      //           });

//     } catch (error) {
//       console.log(error);
//     }
//   },
   // handelParams(_itemName) {
  //       const itemsName = _itemName.split("-")[0];
  //       const index = _itemName.split("-")[1];
  //       let _items;
  //       if (itemsName.split("+")[1]) {
  //         _items = Products[itemsName.split("+")[0]][itemsName.split("+")[1]];
  //       } else {
  //         _items = Products[itemsName];
  //       }
  //       return _items[index - 1];
  //     },
// };
