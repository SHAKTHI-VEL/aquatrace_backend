const express=require('express')
const searchFood = require('../controller/searchFood')
const searchActivity = require('../controller/searchActivity')
const addData = require('../controller/addUserData')
const getUserData = require('../controller/getUserData')
const getUserDataofToday = require('../controller/getUserDataofToday')
const getAllFood = require('../controller/getAllFood')
const getAllActivity = require('../controller/getAllActivity')
const router=express.Router()

router.get('/food',searchFood)
router.get('/activity',searchActivity)
router.post('/add',addData)
router.get('/user/:uid',getUserData)
router.get('/user/today/:uid',getUserDataofToday)
router.get('/getallfood',getAllFood)
router.get('/getallactivity',getAllActivity)

module.exports=router