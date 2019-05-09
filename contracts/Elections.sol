pragma solidity ^0.5.0;

contract Login{
     // Use struct
    struct User{
        string uniqueID;
        uint otp;
        address publicAddress;
        string userName;
        string dateOfBirth;
        string permanentAddress;
    }
    // to avoid a user registration with the same address twice
    mapping(address=>bool) exists;
    // store user using a hash 
    mapping(address=>User)  public Users;
    // add user
    function signup(string memory _id,uint _otp,
    string memory user,string memory permanentAddress,string memory dob) public{
          require(!exists[msg.sender]);
          Users[msg.sender] = User(_id,_otp,msg.sender,user,dob,permanentAddress);
          exists[msg.sender] = true;
    }
}
