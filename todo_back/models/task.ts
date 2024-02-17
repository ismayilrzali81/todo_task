import {model, Schema} from "mongoose";


export interface TaskModel {
    title: string;
    description: string;
    urgency: number,
    done: boolean
}

const schema = new Schema({
    title: {

        type: Schema.Types.String,
        required: true
    },
    description: {
        type: Schema.Types.String,
        required: true
    },

    done: {
        type: Schema.Types.Boolean,
        default: false
    },

    urgency: {
        type: Schema.Types.Number,
        required: true
    }
})

const Task = model('Task', schema)


export default Task
