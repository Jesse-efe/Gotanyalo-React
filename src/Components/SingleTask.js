import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class SingleTask extends Component {
    render() {
        const classNameMap = {
            toDo: 'warning-element',
            inProgress: 'info-element',
            completed: 'success-element',
        }
        return (
            <Draggable draggableId={this.props.task.id.toString()} index={this.props.index}>
                {(provided) => (
                    <li 
                        className={classNameMap[this.props.columnName]}
                        ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    >
                        {this.props.task.content}
                        <div className="agile-detail">
                            {this.props.isCompleted ? 
                                <span className="float-right btn btn-xs btn-primary">Done</span> :
                                <span className="float-right btn btn-xs btn-white" onClick={this.props.complete}>Mark</span>
                            }
                            <span className="float-right btn btn-xs btn-white" onClick={this.props.editTask}>Edit</span>
                            <i className="fa fa-clock-o"></i> {this.props.task.date}
                        </div>
                    </li>
                )}
            </Draggable>
        );
    }
}

export default SingleTask;
