import React, { Component } from 'react';

import kanbanData from '../kanbanData';
import KanbanColumn from '../Components/KanbanColumn';
import { DragDropContext } from 'react-beautiful-dnd';

class Kanban extends Component {
    state = kanbanData;

    onDragEnd = result => {
        const { destination, source } = result;
        if(!destination) return;
        if(destination.droppableId === source.droppableId && destination.index === source.index)return;

        const startColumn = this.state[source.droppableId];
        const endColumn = this.state[destination.droppableId];
        const newStartColumn = [ ...startColumn ];
        const movedTask = newStartColumn.splice(source.index, 1);
        let newEndColumn;

        if(startColumn !== endColumn) {
            // a request should be made to the backend at this point to move the task to 
            // update the column the task is
            newEndColumn = [ ...endColumn ];
            newEndColumn.splice(destination.index, 0, movedTask[0]);
        } else{
            newStartColumn.splice(destination.index, 0, movedTask[0]);
        }

        const updatedData = {
            ...this.state,
            [destination.droppableId]: newEndColumn,
            [source.droppableId]: newStartColumn,
        }
        this.setState(updatedData);
    };

    getCurrentDate = () => {
        const now = new Date();
        return `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()}`;
    }

    addTask = task => {
        // a request should be made to the backend at this point to add the task
        // the id of the new task should be returned as responce
        // we use that id in place of generated id on line 44
        const id = Math.floor(Math.random()*10099);
        const taskObject = {
            id,
            content: task,
            date: this.getCurrentDate(),
        }
        const updatedTasks = {
            ...this.state,
            toDo: [ ...this.state.toDo, taskObject]
        }
        this.setState(updatedTasks);
    }

    editTask = (taskId, index, content, columnName) => {
        // a request should be made to the backend at this point to edit the task
        const targetColumn = this.state[columnName];
        targetColumn.splice(index, 1, {id: taskId, content})
        const updatedTasks = {
            ...this.state,
            [columnName]: targetColumn,
        }
        this.setState(updatedTasks);
    }

    completeTask = (index, currentColumn) => {
        // a request should be made to the backend at this point to complete the task
        const sourceColumn = this.state[currentColumn];
        const targetTask = sourceColumn.splice(index, 1);
        const targetColumn = this.state.completed;
        targetColumn.push(targetTask[0]);

        const updatedTasks = {
            ...this.state,
            [currentColumn]: sourceColumn,
            completed: targetColumn,
        }
        // console.log(updatedTasks);
        this.setState(updatedTasks);
    }

    renderColumns = () => {
        const data = this.state;
        const columns = [];
        for(const column in data) {
            const columnTasks = data[column];
            columns.push(<KanbanColumn 
                tasks={columnTasks}
                taskHandler={this.addTask} 
                column={column} 
                key={column} 
                columnName={column}
                editTask={this.editTask}
                completeTask={this.completeTask}
            />);
        }
        return columns;
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="row">
                    {this.renderColumns()}
                </div>
            </DragDropContext>
        );
    }
}

export default Kanban;
