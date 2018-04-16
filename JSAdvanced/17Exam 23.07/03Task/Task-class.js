let expect = require("chai").expect

class Task{
    constructor(title,deadline){
        this.title = title
        this.deadline = new Date(deadline)
        this.status = 'Open'
        this.statusCode = {
                Open: "\u2731",
                In_Progress: "\u219D",
                Complete: "\u2714",
                Overdue: "\u26A0"
        }

    }

    set deadline(date){
        if(date < Date.now()) throw new Error('Deadline is in the past')
        this._deadline = date
    }
    get deadline(){
        return this._deadline
    }

    get isOverdue(){
        if(this.deadline < Date.now() && this.status !== 'Complete'){
            return true
        }
        else return false
    }

    static comparator(a, b){
        if(a.isOverdue && b.isOverdue) return a.deadline - b.deadline
        if(a.isOverdue && !b.isOverdue) return -1
        if(!a.isOverdue && b.isOverdue) return 1
        if(!a.isOverdue && !b.isOverdue){
            if(a.status === 'In Progress' && b.status === 'In Progress') return a.deadline - b.deadline
            if(a.status === 'In Progress' && b.status !== 'In Progress') return -1
            if(a.status !== 'In Progress' && b.status === 'In Progress') return 1
            if(a.status === 'Open' && b.status === 'Open') return 0
            if(a.status === 'Open' && b.status !== 'Open') return -1
            if(a.status !== 'Open' && b.status === 'Open') return 1
            if(a.status === 'Complete' && b.status === 'Complete') return a.deadline - b.deadline
        }
    }

    toString(){
        if(this.isOverdue) this.status = 'Overdue'
        let icon = this.statusCode[this.status.replace(' ', '_')]
        return `[${icon}] ${this.title} (${this.isOverdue ? 'overdue' : 'deadline: ' + this.deadline})`
    }
}

//let Task = result;
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later
