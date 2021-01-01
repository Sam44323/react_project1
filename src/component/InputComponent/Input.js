import React from 'react';
import './Input.css';

class InputComponent extends React.Component {
  state = {
    name: '',
    imageUrl: '',
    age: 0,
  };

  changeInputValue = (inputName, e) => {
    const curState = { ...this.state };
    curState[inputName] = e.target.value;
    this.setState({ ...curState });
  };

  render() {
    return (
      <div className='input_container'>
        <div className='input-group mb-1'>
          <input
            type='text'
            className='form-control'
            placeholder='Name'
            onChange={(event) => this.changeInputValue('name', event)}
            value={this.state.name}
          />
        </div>
        <div className='input-group mb-1'>
          <input
            type='text'
            className='form-control'
            placeholder='Image'
            onChange={(event) => this.changeInputValue('imageUrl', event)}
            value={this.state.imageUrl}
          />
        </div>
        <div className='input-group mb-1'>
          <input
            type='number'
            className='form-control'
            onChange={(event) => this.changeInputValue('age', event)}
            value={this.state.age}
          />
        </div>
        <button
          className='btn btn-primary add_button'
          onClick={() => {
            this.props.addUser({ ...this.state });
            const newState = {
              name: '',
              imageUrl: '',
              age: 0,
            };
            this.setState(newState);
          }}
        >
          Set the Reminder
        </button>
        <button onClick={this.props.clearAll} className='btn btn-primary'>
          Clear The Reminders
        </button>
      </div>
    );
  }
}

export default InputComponent;
