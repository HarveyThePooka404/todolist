export enum TASK_STATUS {
    DONE = "Done",
    TO_BE_DONE = "To Be Done",
    URGENT = "Urgent"
}

export class Task {

    id?: string;
    userId: string;
    status: TASK_STATUS;
    description: string;
    tags: Array<string>;
    title: string;

    constructor(userId?: string, status?: TASK_STATUS, tags?: Array<string>, title?: string, description?: string, id?: string) {
        this.id = id;
        this.userId = userId || "";
        this.status = status || TASK_STATUS.TO_BE_DONE;
        this.description = description || "This is an empty task";
        this.tags = tags || [];
        this.title = title || "Title"
    }

} 