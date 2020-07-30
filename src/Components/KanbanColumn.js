import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import SingleTask from './SingleTask';

class KanbanColumn extends Component {
    state = { 
        newTask: '',
        isEdittingTask: false,
    };

    addTask = () => {
        const { newTask, isEdittingTask, editTargetId, editTargetIndex } = this.state;
        if(newTask.trim() === '') return;
        if(isEdittingTask) {
            this.props.editTask(editTargetId, editTargetIndex, newTask, this.props.columnName);
            this.setState({
                newTask: '', 
                isEdittingTask: false
            });
            return;
        }
        this.props.taskHandler(newTask);
        this.setState({newTask: ''});
    }

    handleChange = e => {
        this.setState({newTask: e.target.value});
    }

    onEditTask = (task, index) => {
        this.setState({
            isEdittingTask: true,
            newTask: task.content,
            editTargetId: task.id,
            editTargetIndex: index,
        });
    }

    cancelEdit = () => {
        this.setState({
            isEdittingTask: false,
            newTask: '',
        });
    }

    renderTextInput = () => {
        if(this.props.columnName === 'toDo' || this.state.isEdittingTask) {
            return (<div className="input-group">
                <input 
                    type="text" 
                    placeholder="Add new task." 
                    value={this.state.newTask}
                    onChange={this.handleChange} 
                    className="input input-sm form-control" 
                />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-sm btn-white" onClick={this.addTask}> 
                        {this.state.isEdittingTask ? 'Submit' : <span><i className="fa fa-plus"></i> Add task</span>}
                    </button>
                    {this.state.isEdittingTask && <button type="button" className="btn btn-sm btn-white" onClick={this.cancelEdit}> 
                        Cancel
                    </button>}
                </span>
            </div>)
        }
    }

    render() {
        const nameMap = {
            toDo: 'To Do',
            inProgress: 'In Progress',
            completed: 'Completed',
        }
        return (
            <div className="col-md-4">
                <div className="ibox">
                    <div className="ibox-content">
                        <h3>{nameMap[this.props.columnName]}</h3>
                        <p className="small"><i className="fa fa-hand-o-up"></i> Drag task between list</p>
                        {this.renderTextInput()}
                        <Droppable droppableId={this.props.column}>
                            {(provided) => (
                                <ul 
                                    className="sortable-list connectList agile-list" id="todo"
                                    ref={provided.innerRef} {...provided.droppableProps}
                                >
                                    {this.props.tasks.map((task, index) => (
                                        <SingleTask 
                                            task={task} 
                                            index={index}   
                                            key={task.id}
                                            columnName={this.props.columnName}
                                            editTask={() => this.onEditTask(task, index)}
                                            complete={() => this.props.completeTask(index, this.props.columnName)}
                                            isCompleted={this.props.columnName === 'completed'}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </div>
                </div>
            </div>
        );
    }
}

export default KanbanColumn;
