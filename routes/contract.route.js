const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const EventStoreEntity  = require('../entities/eventstore.entity')
// const EventStore = mongoose.model("EventStore", EventStoreEntity);
const eventStoreController = require('../controllers/eventstore.controller')

router.get('/',async (req,res)=>{
    // Books.find()
    // .then(function(books) {
    //   res.status(200).json({items: books});
    // });
    // const contracts = await EventStore.find();
    const contracts =await eventStoreController.getContracts();
    res.status(200).json(contracts);
})
router.post('/',async (req,res)=>{
    const {contractName} = req.body;
    const contractId = await eventStoreController.createContractEvent(contractName);
    res.status(200).json({message:`create new contract with id ${contractId}`});
})
router.post('/asign/:contractId',async (req,res)=>{
    const contractId = req.params.contractId;
    const resContractId = await eventStoreController.aSignContractEvent(contractId);
    res.status(200).json({message:`A sign contract successfully with id ${resContractId}`});
})
router.post('/pending/:contractId',async (req,res)=>{
    const contractId = req.params.contractId;
    const resContractId = await eventStoreController.pendingContractEvent(contractId);
    res.status(200).json({message:`pending with id ${resContractId}`});
})
router.post('/bsign/:contractId',async (req,res)=>{
    const contractId = req.params.contractId;
    const resContractId = await eventStoreController.bSignContractEvent(contractId);
    res.status(200).json({message:`B sign contract successfully with id ${resContractId}`});
})
router.post('/close/:contractId',async (req,res)=>{
    const contractId = req.params.contractId;
    const resContractId = await eventStoreController.closeContractEvent(contractId);
    res.status(200).json({message:`close contract with id ${resContractId}`});
})
module.exports = router;