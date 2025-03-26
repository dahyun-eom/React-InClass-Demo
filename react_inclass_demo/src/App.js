import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Toggle,
  LoggingButton,
  Greeting,
  UserGreeting,
  GuestGreeting,
  FormContainer,
} from './components/components.js';
import { Calculator1_2, Calculator2_2 } from './components/components2.js';
//import FilterableProductTable from './components/productTable1.js';//
import FilterableProductTable from './components/productTable2.js';

const demo_header = (
  <h1 style={{ margin: 75 + 'px', textDecoration: 'underline' }}>
    Examples Below
  </h1>
);

function ExampleLabel(props) {
  return <h3 className="exampleLabel">{props.slide}</h3>;
}

// slide 7
const element1 = <h1>Hello, World!</h1>;

// Slide 8
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user1 = {
  firstName: 'Jane',
  lastName: 'Shepard',
};

const element2 = <h1>Hello, {formatName(user1)}!</h1>;

const user2 = {
  firstName: 'Garrus',
  lastName: 'Vakarian',
};

// Slide 9
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Unknown!</h1>;
}

function playersList() {
  const pLst = ['Avram', 'Belal', 'Cristobal', 'Denholm', 'Ephraim'];
  const pLstItems = pLst.map((p) => {
    return <li> {p} </li>;
  });
  return <ul> {pLstItems} </ul>;
}

// slide 10
const element3 = (
  <div>
    <a
      target="_blank"
      href="https://www3.cs.stonybrook.edu/~ckane/fall2024/cse316/index.html"
    >
      {' '}
      A Link
    </a>
    <h2>Good to see you here.</h2>
  </div>
);

// Slide 12
function Tick1() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is: {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  return element;
}

//setInterval(Tick1, 1000);

// Slide 13
function Welcome1({ name: username }) {
  return <h1>Hello, {username}!</h1>;
}

class Welcome2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>{"There's no Shepard without Vakarian"}</p>
      </div>
    );
  }
}

// Slide 15
function Msg(props) {
  return (
    <div className="msg">
      <h1>Hello, {props.name}</h1>
      <p>{props.body}</p>
    </div>
  );
}

function MsgList() {
  return (
    <div>
      <Msg name="Joyce" body="Your next appointment is on Thursday." />
      <Msg name="James" body="Please call the office ASAP." />
      <Msg name="Julie" body="Your A1C is below 6.5%" />
    </div>
  );
}
function MsgList1() {
  const messages = [
    { name: 'Joyce', body: 'Your next appointment is on Thursday.' },
    { name: 'James', body: 'Please call the office ASAP.' },
    { name: 'Julie', body: 'Your A1C is below 6.5%hofo' },
  ];

  return (
    <div>
      {messages.map((msg, index) => (
        <Msg key={index} name={msg.name} body={msg.body} />
      ))}
    </div>
  );
}

// Slide 16
function formatDate(d) {
  const nd = new Date(d);
  return nd.toLocaleString();
}

function Comment1({ author, text, date }) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={author.avatarUrl} alt={author.name} />
        <div className="UserInfo-name">{author.name}</div>
      </div>
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}

// Slide 17
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

// Slide 18
function Comment2({ author, text, date }) {
  return (
    <div className="Comment">
      <UserInfo user={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}

// Slide 21
function Clock1(props) {
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick2() {
  ReactDOM.render(
    <Clock1 date={new Date()} />,
    document.getElementById('root')
  );
}
//setInterval(tick2, 1000);

// Slide 24
class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log('CLOCK2 ID: ' + props.id);
  }

  render() {
    return (
      <div id={this.props.id}>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  componentDidMount() {
    //this.timerID = setInterval(
    //  ()=> this.setState({date: new Date()}), 1000
    //);
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }
}

//function definition using react hooks
function Clock3(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    //set up the timer
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id={props.id}>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

// Slide 27
// This is not a complete component definition;
// just meant to demonstrate separate update of state values
// Meant to contact model or data server to retrieve post data
function fetchPosts() {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

// Meant to contact model or data server to retrieve post data
function fetchComments() {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

// This component is very incomplete
// Just meant to illustrate independent state updates
class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    fetchPosts().then((response) => {
      this.setState({ posts: response.posts });
    });

    fetchComments().then((response) => {
      this.setState({ comments: response.comments });
    });
  }
}

// Slide 31
function NumbersList1(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return <ul>{listItems}</ul>;
}
const numbers1 = [1, 2, 3, 4, 5];

// Slide 32
function NumbersList2(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={'id-' + number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}
const numbers2 = [81, 763, 44, 219, 21773456822];

// Slide 33
function ListItem(props) {
  const value = props.value;
  return <li>{value}</li>;
}

function NumbersList3(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}
const numbers3 = [1111, 8293, 3483, 5532, 9820];

// Slide 35
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water is boiling.</p>;
  }
  return <p>The water is not boiling.</p>;
}

function InputBox(props) {
  return (
    <fieldset>
      <legend>Enter the temperature in Celsius:</legend>
      <input value={props.temp} onChange={props.onChange} />
    </fieldset>
  );
}

// Slide 36
class Calculator1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: '' };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <InputBox temp={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

// Slide 38
function toCelsius(t) {
  return ((t - 32) * 5) / 9;
}

function toFahrenheit(t) {
  return (t * 9) / 5 + 32;
}

class Calculator2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleTempChange = this.handleTempChange.bind(this);
    this.state = { temperature: 0.0, unit: 'C' };
  }

  handleTempChange(t, u) {
    this.setState({ temperature: t, unit: u });
  }

  render() {
    const unit = this.state.unit;
    const temperature = this.state.temperature;
    const celsius = unit === 'F' ? toCelsius(temperature) : temperature;
    const fahrenheit = unit === 'C' ? toFahrenheit(temperature) : temperature;

    return (
      <div className="Calculator2div">
        <CelsiusTemp
          temperature={celsius}
          onTemperatureChange={this.handleTempChange}
        />
        <FahrenheitTemp
          temperature={fahrenheit}
          onTemperatureChange={this.handleTempChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

// Slide 39
class CelsiusTemp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value, 'C');
  }

  render() {
    const temperature = this.props.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class FahrenheitTemp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value, 'F');
  }

  render() {
    const temperature = this.props.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Fahrenheit:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

// Slide 43 - Data
const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

// Slide 60
function addTask(n) {
  console.log('New Task: ' + n);
  window.alert('New Task: ' + n);
}

function Form1(props) {
  const [name, setName] = useState('');
  const [taskList, updateTaskList] = useState([<li>Fold Laundry</li>]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    let temp = [<li>{name}</li>].concat(taskList);
    setName('');
    updateTaskList(temp);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div>
        <h1>List of Tasks</h1>
        <ol>{taskList}</ol>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {demo_header}
      <div style={{ margin: 20 + 'px' }}>
        {/* Slide 7 */}
        <ExampleLabel slide="Slide 7" />
        {element1}
        {/* Slide 8 */}
        <ExampleLabel slide="Slide 8" />
        {element2}
        {/* Slide 9 */}
        <ExampleLabel slide="Slide 9" />
        {getGreeting()}
        {playersList()}
        {/* Slide 10 */}
        <ExampleLabel slide="Slide 10" />
        {element3}
        {/* Slide 12 */}
        <ExampleLabel slide="Slide 12" />
        {Tick1()}
        {setInterval(Tick1, 1000)}
        {/* Slide 13 */}
        <ExampleLabel slide="Slide 13" />
        <Welcome1 name="Wrex" />
        <Welcome1 name="Tali" />
        <Welcome1 name="Liara" />
        <Welcome1 name="Ashley" />
        <Welcome1 name="Kaidan" />
        <Welcome2 name="Garrus" />
        {/* Slide 15 */}
        <ExampleLabel slide="Slide 15" />
        <MsgList1 />
        {/* Slide 16 */}
        <ExampleLabel slide="Slide 16" />
        <Comment1
          author={{ avatarUrl: logo, name: 'P4U1' }}
          text="Why doesn't anyone ever have anything postive to say."
          date="August 10, 2024 04:18:00"
        />
        {/* Slide 18 */}
        <ExampleLabel slide="Slide 18" />
        <Comment2
          author={{ avatarUrl: logo, name: 'P4U1' }}
          text="Why doesn't anyone ever have anything postive to say."
          date="August 10, 2024 04:18:00"
        />
        {/* Slide 21 */}
        <ExampleLabel slide="Slide 21" />
        <Clock1 date={new Date()} />
        {/* Slide 24 */}
        <ExampleLabel slide="Slide 24-2" />
        <Clock2 />
        <ExampleLabel slide="Slide 24-2" />
        <Clock2 id="clock22" />
        <ExampleLabel slide="Slide 24-3" />
        <Clock3 />
        {/* Slide 28*/}
        <ExampleLabel slide="Slide 28" />
        <Toggle />
        <Toggle />
        <Toggle />
        {/* Slide 29 */}
        <ExampleLabel slide="Slide 29" />
        <LoggingButton />
        {/* Slide 30 */}
        <ExampleLabel slide="Slide 30" />
        <Greeting isLoggedIn={true} />
        {/* Slide 31 */}
        <ExampleLabel slide="Slide 31" />
        <NumbersList1 numbers={numbers1} />
        {/* Slide 32 */}
        <ExampleLabel slide="Slide 32" />
        <NumbersList2 numbers={numbers2} />
        {/* Slide 33 */}
        <ExampleLabel slide="Slide 33" />
        <NumbersList3 numbers={numbers3} />
        {/* Slide 36 */}
        <ExampleLabel slide="Slide 36" />
        <Calculator1 />
        {/* Slide 38 */}
        <ExampleLabel slide="Slide 38" />
        <Calculator2 />
        {/* Not a Slide */}
        <ExampleLabel slide="Not a Slide" />
        <FormContainer />
        {/* Slides 47 - 58 */}
        <ExampleLabel slide="Slides 47 - 58" />
        {console.log(PRODUCTS)}
        <FilterableProductTable products={PRODUCTS} />
        {/* Slide 61 */}
        <ExampleLabel slide="Slide 61" />
        <Form1 addTask={addTask} />
        {/* Slide 36, Again */}
        <ExampleLabel slide="Slide 36, Function-style" />
        <Calculator1_2 />
        {/* Slide 38, Again */}
        <ExampleLabel slide="Slide 38, Function-style" />
        <Calculator2_2 />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
