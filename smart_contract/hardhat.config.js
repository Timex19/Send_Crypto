// https://eth-ropsten.alchemyapi.io/v2/O0hVAYnUs5NFNceWlTqB_oqju6u2Ww3E

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/O0hVAYnUs5NFNceWlTqB_oqju6u2Ww3E',
      accounts: [ '07539d5d507a51949563991778ee64072784cd36cb7fea4f88535f4c8f26fc82' ]
    }
  }
}