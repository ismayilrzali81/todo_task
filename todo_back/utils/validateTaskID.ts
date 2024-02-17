import {Response} from "express";

export const validateTaskID = (taskID: any, res: Response) => {
    if (!taskID || typeof taskID !== 'string') {
        res.status(400).json({error: 'Invalid taskID'});
        return false;
    }
    return true;
};
