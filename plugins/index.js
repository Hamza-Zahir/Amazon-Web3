import Web3 from "web3";
import dataCcontract from "../build/contracts/Amazon.json";
const AbiCcontract = dataCcontract.abi;

const contractAddress = {
  97: "0x2Ec5500Bc1571F079194188FF1E76E5Ad311211C", //tbnb
  3: "0x24191b423D0Ec4bCd6F6eeC4dafba7CEEe93b5BC", // ropsten
  42: "0xb902294E52012ad786dc739B495c35bd579c8792", // kovan
  4: "0x9E9f08302DD27b9908A758bb2d5D53fE2B414788", // rinkeby
};

export default {
  async getUserItemsCart(_chainId, _CurrentAccount) {
    try {
      let _itemsOfUser = [];
      let _numberOfAllitems = 0;
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );

      await AmazonContract.methods
        .getCartItemsOfOwner(_CurrentAccount)
        .call()
        .then((resalt) => {
          if (resalt.length) {
            _itemsOfUser = resalt;
            resalt.map((e) => {
              _numberOfAllitems = _numberOfAllitems + Number(e.Quantity);
            });
          }
        });
      return { itemsOfUser: _itemsOfUser, numberOfAllitems: _numberOfAllitems };
    } catch (error) {
      console.log(error);
    }
  },

  async addItemsToCart(
    _chainId,
    _CurrentAccount,
    _itemName,
    _Quantity,
    _isGeft
  ) {
    try {
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );
      await AmazonContract.methods
        .addItemsToCart(_itemName, _Quantity, _isGeft)
        .send({
          from: _CurrentAccount,
        });


    } catch (error) {
      console.log(error);
    }
  },

  async removeItemFromCart(_chainId, _CurrentAccount, _itemName, _isGeft) {
    try {
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );
      await AmazonContract.methods.removeItemFromCart(_itemName, _isGeft).send({
        from: _CurrentAccount,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async setGift(_chainId, _CurrentAccount, _itemName, _isGeft) {
    try {
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );
      await AmazonContract.methods.setGift(_itemName, _isGeft).send({
        from: _CurrentAccount,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async changeQuantity(_chainId, _CurrentAccount, _itemName, _Quantity, _isGeft) {
    try {
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );
      await AmazonContract.methods.changeQuantity(_itemName, _Quantity, _isGeft).send({
        from: _CurrentAccount,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async buyItem(
    _chainId,
    _CurrentAccount,
    _itemName,
    _DeliveryAddress,
    _message,
    _Quantity,
    _isGeft,
    _current_price
  ) {
    try {
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );
      const item_USD_Price = _current_price;
      const itemBNBPrice = item_USD_Price * 0.00005;
      const _itemBNBPriceToWei = (itemBNBPrice * 10 ** 18).toFixed(0);
      const _amount = _itemBNBPriceToWei * _Quantity;

      await AmazonContract.methods
        .buyItem(_itemName, _DeliveryAddress, _message, _Quantity, _isGeft)
        .send({
          from: _CurrentAccount,
          value: _amount,
        });
    } catch (error) {
      console.log(error);
    }
  },
};
