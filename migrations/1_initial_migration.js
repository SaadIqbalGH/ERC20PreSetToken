const Migrations = artifacts.require("SILTokens");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
