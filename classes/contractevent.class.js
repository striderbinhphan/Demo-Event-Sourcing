module.exports = class ContractEvent{
    constructor(contractName,contractStatus,timestamp){
        this.contractName = contractName||null;
        this.contractStatus = contractStatus||null;
        this.timestamp = timestamp||null;
    }
    createContractEvent(contractName){   
        this.contractName =contractName;     
        this.contractStatus = "created";
        this.timestamp = new Date();
    }
    pendingContractEvent(){ 
        this.contractStatus = "pending";
        this.timestamp = new Date();
    }
    aSignContractEvent(){ 
        this.contractStatus = "signed";
        this.timestamp = new Date();
    }
    bSignContractEvent(){ 
        this.contractStatus = "signed";
        this.timestamp = new Date();
    }
    closeContractEvent(){ 
        this.contractStatus = "closed";
        this.timestamp = new Date();
    }
    apply(contractName,contractStatus,timestamp){
        this.contractName = contractName||null;
        this.contractStatus = contractStatus||null;
        this.timestamp = timestamp||null;
    }
    getStatus(){
        return this.contractStatus;
    }
}