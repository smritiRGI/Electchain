var assert = require('assert');
var Election = artifacts.require("Election");

contract("Election",function(accounts)
{
    it("initializes with 3 candidates",function(){
        return Election.deployed().then(function(instance){
            return instance.CandidatesCount();
        }).then(function(count){
            assert.equal(count,3);
        });
    });
    it("checks age of candidate 1",function(){
        return Election.deployed().then(function(instance){
            ElectionInstance = instance;
            return ElectionInstance.candidates(1);
        }).then(function(candidate){
                assert.equal(candidate[2].toNumber() , 25);
                return ElectionInstance.candidates(2);
            }).then(function(candidate){
                    assert.equal(candidate[2].toNumber() , 24);
                    return ElectionInstance.candidates(3);
                }).then(function(candidate){
                        assert.equal(candidate[2].toNumber() , 22);
                });   
            });   
});