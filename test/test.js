const election = artifacts.require("Election");

require('chai').use(require('chai-as-promised')).should()

contract("Election", ([deployer, author, tipper]) => {

  let Election
  before(async () => {
    Election = await election.deployed();
  })
  describe('development', async () => {
    it('deployed sccessfully ', async () => {
      const address = await Election.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, '');
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);

    });



  });
  describe('fu', async () => {
    it('fun', async () => {
      let result = await Election.getLength()
      console.log(result)
    })


  });



});

