import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// const name = 'Jiaan Cui'
// const element = <h1>Hello, {name}, {2+2}</h1>

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Jiaan',
//   lastName: 'Cui'
// }

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// )

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// const element = <Welcome name="Jiaan" />

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Jiaan" />
//         <Welcome name="Mengsha" />
//       </div>
//     )
//   }
// }


function formatDate(date) {
  return date.toLocaleDateString();
}

class Avatar extends React.Component {
  render() {
    return (
      <img 
        className="Avatar"
        src={this.props.user.avatarUrl}
        alt={this.props.user.name}
      />
    )
  }
}

class UserInfo extends React.Component {
  render() {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">{this.props.user.name}</div>
      </div>
    )
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div className="Comment">
        <UserInfo user={this.props.author} />
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-text">{formatDate(this.props.date)}</div>
      </div>
    )
  }
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <h1>Hello, world</h1>,
  // element,
  // <App />,
  <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
