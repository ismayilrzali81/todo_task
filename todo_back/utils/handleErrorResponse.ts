import {Response} from "express";

export const handleErrorResponse = (res: Response, error: unknown, status: number = 500) => {
    console.error(error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    res.status(status).json({error: message});
};
