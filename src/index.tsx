import React, { useState, } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './index.scss';

const Main = () => {
  const [password, setPassword] = useState('');
  const [displayUrl, setDisplayUrl] = useState(false);
  const [wrongMessage, setWrongMessage] = useState(false);
  const submitPassword = () => {
    const allowPassword = ['蘋果', '香蕉', 'apple', 'banana'];
    if (allowPassword.indexOf(password) !== -1) {
      setDisplayUrl(true);
    } else {
      setWrongMessage(true);
    }
  }
  return (
    <div className={styles.mainBlock}>
      {
        !displayUrl ? (
        <div className={styles.mainBlock}>
          <span
            className={styles.wrongText}
            style={{ display: wrongMessage ? 'inline-block' : 'none',}}
          >
            通關密語輸入錯誤！
          </span>
          <TextField
            label="Password"
            margin="normal"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={submitPassword}
            >
              確定送出
            </Button>
          </div>
        </div>) : null}
        <a href="https://unsplash.com/photos/5bYxXawHOQg">
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)`,
              transition: 'opacity 1s',
              opacity: displayUrl ? 1 : 0,
              height: displayUrl ? '500px' : 0,
            }}
          />
        </a>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));