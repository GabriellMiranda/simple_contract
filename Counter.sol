// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 private count;

    event CountUpdated(uint256 newCount);

    constructor() {
        count = 0;
    }

    function increment() public {
        count += 1;
        emit CountUpdated(count);
    }

    function decrement() public {
        require(count > 0, "Counter: count is already zero");
        count -= 1;
        emit CountUpdated(count);
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}
