//SPDX-License-Identifier: UNLICENSED
pragma experimental ABIEncoderV2;
pragma solidity >=0.5.0 <0.9.0;
import "./onlyonwer.sol";

contract Election is Ownable {
    /**  
@dev candidates will the type of  candidates deitles
*/
    struct Candidates {
        string candidate_name;
        uint256 VoteCount;
    }

    /**  
    @dev this will stroe the candidtaes detiles
    */
    Candidates[] candidatesdetiles;

    mapping(address => uint256) Voted;

    /**  
@param _candidate_name will be the parties  name of election
@dev this will set the candidates name and vote count 
*/
    function setCandidates(string memory _candidate_name) public onlyOwner {
        candidatesdetiles.push(Candidates(_candidate_name, 0));
    }

    /**  
@dev the voter can vote for thier parites
*/
    function voteforParticiten(uint256 _candidate_id) public {
        require(Voted[msg.sender] == 0);
        candidatesdetiles[_candidate_id].VoteCount++;
        Voted[msg.sender] = 1;
    }

    function getLength() public view returns (string memory) {
        string memory name = getallcandidate(candidatesdetiles.length - 1);
        return (name);
    }

    function getallcandidate(uint256 count)
        public
        view
        returns (string memory)
    {
        return candidatesdetiles[count].candidate_name;
    }

    function showresult(uint256 n) public view returns (Candidates[] memory) {
        Candidates[] memory result =
            new Candidates[](candidatesdetiles.length - n);
        for (uint256 i = n; i < candidatesdetiles.length; i++) {
            result[i].candidate_name = candidatesdetiles[i].candidate_name;
            result[i].VoteCount = candidatesdetiles[i].VoteCount;
        }
        return result;
    }
}
