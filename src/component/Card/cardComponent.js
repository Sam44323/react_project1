import { React, Component, Fragment } from 'react';

import './cardComponent.css';
import CardElement from './cardElement';
import InputComponent from '../InputComponent/Input';

class CardComponent extends Component {
  state = {
    userInfo: [
      {
        name: 'Sam Henrick',
        imageUrl:
          'https://img.freepik.com/free-vector/business-people-organization-office-freelance-job-character_40876-1291.jpg?size=338&ext=jpg',
        age: 17,
      },
      {
        name: 'Max Schwarz',
        imageUrl:
          'https://img.freepik.com/free-vector/business-people-organization-office-freelance-job-character_40876-1291.jpg?size=338&ext=jpg',
        age: 27,
      },
      {
        name: 'Manu Lorenz',
        imageUrl:
          'https://img.freepik.com/free-vector/business-people-organization-office-freelance-job-character_40876-1291.jpg?size=338&ext=jpg',
        age: 30,
      },
    ],
  };

  addNewUser = (userObject) => {
    if (
      userObject.name === '' &&
      userObject.imageUrl === '' &&
      userObject.age === 0
    ) {
      alert('Enter some valid data');
      return;
    }
    const currentState = [...this.state.userInfo];
    currentState.push(userObject);
    this.setState({ userInfo: currentState });
  };

  clearData = () => {
    this.setState({ userInfo: [] });
  };

  render() {
    let renderCardElements = <h3>Nothing to remind! Maybe set one</h3>;
    if (this.state.userInfo.length > 0) {
      renderCardElements = this.state.userInfo.map((user) => {
        return (
          <CardElement
            name={user.name}
            imageUrl={user.imageUrl}
            age={user.age}
            key={Math.random()}
          />
        );
      });
    }
    return (
      <Fragment>
        <InputComponent addUser={this.addNewUser} clearAll={this.clearData} />
        <div className='container'>{renderCardElements}</div>
      </Fragment>
    );
  }
}

export default CardComponent;
