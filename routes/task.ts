import express from 'express'
import {
    addTask,
    changeTaskUrgencyStatus,
    deleteTask,
    editTask,
    getAllReadyTasks,
    getAllTasks,
    makeTaskDone
} from "../controllers/task";
import {body, check} from 'express-validator';

let router = express.Router();


router.delete('/deleteOneTask/:taskID', deleteTask);

router.put('/editTask/:taskID', editTask);


router.get('/getAllTasks', getAllTasks)

router.get('/getAllReadyTasks', getAllReadyTasks)

router.post('/addOneTask',
    [
        body('title').isString().notEmpty(),
        body('description').isString().notEmpty(),
        body('urgency').isNumeric().notEmpty()],
    addTask);


router.put('/changeTaskDoneStatus/:taskID', check('done').isBoolean().notEmpty(), makeTaskDone)

router.put('/changeTaskUrgencyStatus/:taskID', check('urgency').isBoolean().notEmpty(), changeTaskUrgencyStatus)


module.exports = router;
