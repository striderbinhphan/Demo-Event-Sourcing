const EventStore = require('../models/eventstore.model')
const ContractEvent =  require('../classes/contractevent.class')
const { v4: uuidv4 } = require('uuid');
exports.getContracts = async ()=>{
    const contracts = await  EventStore.find();
    return contracts;
}

exports.findContracts = async (id)=>{
    const contract = await  EventStore.findOne({contractId: id});
    return contract;
}

exports.createContractEvent = async (contractName) => {
    
    const contractId = uuidv4();
    const contractEvent = new ContractEvent();
    contractEvent.createContractEvent(contractName);
    const events = [contractEvent];
    const eventStream = new EventStore({
        contractId:contractId,
        contractEvents: events,
        currentStatus: contractEvent.getStatus()
    });
    eventStream.save();
    return contractId;
}
const regenContractEventFromEventStream = (events) =>{
    const applyEvent = new ContractEvent();
    events.forEach(e=>{
        applyEvent.apply(e.contractName,e.contractStatus,e.timestamp);
    })
    return applyEvent;
}
exports.aSignContractEvent  =async (contractId) => {
    const contract = await  EventStore.findOne({contractId: contractId});
    const events = contract.contractEvents;

    const newContractEvent =regenContractEventFromEventStream(events);
    newContractEvent.aSignContractEvent();
    
    const newEventStream  =[...events,newContractEvent];
    console.log(newEventStream);

    contract.contractEvents = newEventStream;
    contract.currentStatus = newContractEvent.getStatus() 
    contract.save();

    return contractId;
}
exports.pendingContractEvent  =async (contractId) => {
    const contract = await  EventStore.findOne({contractId: contractId});
    const events = contract.contractEvents;

    const newContractEvent =regenContractEventFromEventStream(events);
    newContractEvent.pendingContractEvent();
    
    const newEventStream  =[...events,newContractEvent];
    console.log(newEventStream);
    
    contract.contractEvents = newEventStream;
    contract.currentStatus = newContractEvent.getStatus() 
    contract.save();

    return contractId;
}

exports.bSignContractEvent  =async (contractId) => {
    const contract = await  EventStore.findOne({contractId: contractId});
    const events = contract.contractEvents;

    const newContractEvent =regenContractEventFromEventStream(events);
    newContractEvent.bSignContractEvent();
    
    const newEventStream  =[...events,newContractEvent];
    console.log(newEventStream);
    
    contract.contractEvents = newEventStream;
    contract.currentStatus = newContractEvent.getStatus() 
    contract.save();

    return contractId;
}
exports.closeContractEvent  =async (contractId) => {
    const contract = await  EventStore.findOne({contractId: contractId});
    const events = contract.contractEvents;

    const newContractEvent =regenContractEventFromEventStream(events);
    newContractEvent.closeContractEvent();
    
    const newEventStream  =[...events,newContractEvent];
    console.log(newEventStream);
    
    contract.contractEvents = newEventStream;
    contract.currentStatus = newContractEvent.getStatus() 
    contract.save();
    
    return contractId;
}