import abi from './abis/abi.json' assert {type: "json"};

const connect = new Promise((res,rej) => {
    if(typeof window.ethereum == "undefined"){
        rej("Install Metamask")
    }
    window.ethereum.request({method: "eth_requestAccounts"})

    let web3 = new Web3(window.ethereum)
    let contract = new web3.eth.Contract(abi,"0xeA8bd27F41405fA8E9c3FaAcaDA4858d1bBc5142")

    web3.eth.getAccounts().then((accounts) => {
        contract.methods.totalSupply().call({from: accounts[0]}).then((supply) => {
            contract.methods.getBuildings().call({from: accounts[0]}).then((building) => {
                res({supply: supply, buildings: building})
            })
        })
    })
})


export default connect

