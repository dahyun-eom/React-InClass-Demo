import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';

// export Slide 28
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make 'this' work in the callback
    // Can anyone think of another way to make sure 'this' points
    // to the correct object when the callback function is invoked?
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// Slide 27
class LoggingButton extends React.Component {
  handleClick() {
    console.log('This is:', this);
  }

  render() {
    //This syntax ensures that 'this' is bound within handleClick
    return <button onClick={() => this.handleClick()}>Click Me!</button>;
  }
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

// Not a Slide
class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false, content: 'Display your message here' };
    this.openDisplayEditForm = this.openDisplayEditForm.bind(this);
    this.submitDisplayEdit = this.submitDisplayEdit.bind(this);
    this.cancelDisplayEdit = this.cancelDisplayEdit.bind(this);
  }

  openDisplayEditForm() {
    console.log('Switching to Form');
    this.setState({ showForm: true });
  }

  submitDisplayEdit(cnt) {
    console.log('Form Submission');
    this.setState({ content: cnt, showForm: false });
  }

  cancelDisplayEdit() {
    console.log('Form Cancelled');
    this.setState({ showForm: false });
  }

  render() {
    if (this.state.showForm) {
      return (
        <div className="FormContainerClass">
          <DisplayEditForm
            submitFunc={this.submitDisplayEdit}
            cancelFunc={this.cancelDisplayEdit}
          />
        </div>
      );
    }
    return (
      <div className="FormContainerClass">
        <DisplayText
          content={this.state.content}
          onClick={this.openDisplayEditForm}
        />
      </div>
    );
  }
}

class DisplayText extends React.Component {
  render() {
    return (
      <div className="DisplayText">
        <h1>{this.props.content}</h1>
        <button onClick={this.props.onClick}>Edit</button>
      </div>
    );
  }
}

class DisplayEditForm extends React.Component {
  state = { cnt: '' };

  handleContentChange = (e) => {
    this.setState({ cnt: e.target.value });
  };

  handleFormSubmit = () => {
    this.props.submitFunc(this.state.cnt);
  };

  render() {
    return (
      <div className="DisplayEditForm">
        <span>New Content:</span>
        <input
          type="text"
          value={this.state.cnt}
          onChange={this.handleContentChange}
        />

        <div className="DEF_Buttons">
          <button onClick={this.handleFormSubmit}>Submit</button>
          <button onClick={this.props.cancelFunc}>Cancel</button>
        </div>
      </div>
    );
  }
}

export {
  Toggle,
  LoggingButton,
  Greeting,
  UserGreeting,
  GuestGreeting,
  FormContainer,
};
