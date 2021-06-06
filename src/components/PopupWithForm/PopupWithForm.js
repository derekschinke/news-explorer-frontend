import styles from './PopupWithForm.module.css';

import classnames from 'classnames';
import { useState } from 'react';

function PopupWithForm(props) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  function handleSignUpEmailChange(e) {
    setSignUpEmail(e.target.value);
    props.setIsSubmitErrorVisible(false);
  }
  function handleSignUpPasswordChange(e) {
    setSignUpPassword(e.target.value);
    props.setIsSubmitErrorVisible(false);
  }
  function handleSignUpNameChange(e) {
    setSignUpName(e.target.value);
    props.setIsSubmitErrorVisible(false);
  }
  function handleSignUpSubmit(e) {
    e.preventDefault();
    props.handleSignUp(signUpEmail, signUpPassword, signUpName);
  }

  function handleSignInEmailChange(e) {
    setSignInEmail(e.target.value);
  }
  function handleSignInPasswordChange(e) {
    setSignInPassword(e.target.value);
  }
  function handleSignInSubmit(e) {
    e.preventDefault();
    props.handleSignIn(signInEmail, signInPassword);
  }

  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <button
          className={classnames(styles.closeButton, 'clickable')}
          label="Close"
          onClick={props.onCloseButtonClick}
        />
        <div className={styles.content}>
          {
            {
              signIn: (
                <>
                  <h2 className={styles.header}>Sign in</h2>
                  <form
                    className={styles.form}
                    method="POST"
                    onSubmit={handleSignInSubmit}
                  >
                    <label className={styles.label} htmlFor="email">
                      Email
                    </label>
                    <input
                      className={styles.input}
                      type="email"
                      placeholder="Enter email"
                      required
                      id="email"
                      onChange={handleSignInEmailChange}
                    />
                    <span className={styles.validation}>
                      Invalid email address
                    </span>

                    <label className={styles.label} htmlFor="password">
                      Password
                    </label>
                    <input
                      className={styles.input}
                      type="password"
                      placeholder="Enter password"
                      required
                      minLength="8"
                      id="password"
                      onChange={handleSignInPasswordChange}
                    />
                    <span className={styles.validation}>Invalid password</span>

                    <input
                      className={styles.submitButton}
                      type="submit"
                      value="Sign in"
                      label="Sign in"
                    />
                  </form>

                  <p className={styles.redirect}>
                    or&nbsp;
                    <button
                      className={classnames(styles.redirectButton, 'clickable')}
                      label="Sign up"
                      onClick={props.onRedirectPopupButtonClick}
                    >
                      Sign up
                    </button>
                  </p>
                </>
              ),
              signUp: (
                <>
                  <h2 className={styles.header}>Sign up</h2>
                  <form
                    className={styles.form}
                    method="POST"
                    onSubmit={handleSignUpSubmit}
                  >
                    <label className={styles.label} htmlFor="email">
                      Email
                    </label>
                    <input
                      className={styles.input}
                      type="email"
                      placeholder="Enter email"
                      required
                      id="email"
                      onChange={handleSignUpEmailChange}
                    />
                    <span className={styles.validation}>
                      Invalid email address
                    </span>

                    <label className={styles.label} htmlFor="password">
                      Password
                    </label>
                    <input
                      className={styles.input}
                      type="password"
                      placeholder="Enter password"
                      required
                      minLength="8"
                      id="password"
                      onChange={handleSignUpPasswordChange}
                    />
                    <span className={styles.validation}>Invalid password</span>

                    <label className={styles.label} htmlFor="username">
                      Username
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Enter your username"
                      required
                      minLength="2"
                      id="username"
                      onChange={handleSignUpNameChange}
                    />
                    <span className={styles.validation}>Invalid username</span>

                    <span
                      className={classnames(styles.submitError, {
                        [styles.submitError_visible]:
                          props.isSubmitErrorVisible,
                      })}
                    >
                      This email is not available
                    </span>
                    <input
                      className={styles.submitButton}
                      type="submit"
                      value="Sign up"
                      label="Sign up"
                    />
                  </form>

                  <p className={styles.redirect}>
                    or&nbsp;
                    <button
                      className={classnames(styles.redirectButton, 'clickable')}
                      label="Sign in"
                      onClick={props.onRedirectPopupButtonClick}
                    >
                      Sign in
                    </button>
                  </p>
                </>
              ),
              registrationCompleted: (
                <>
                  <h2 className={styles.header}>
                    Registration successfully completed!
                  </h2>
                  <button
                    className={classnames(
                      styles.redirectButton,
                      styles.redirectButton_registrationCompleted,
                      'clickable'
                    )}
                    label="Sign in"
                    onClick={props.onRedirectPopupButtonClick}
                  >
                    Sign in
                  </button>
                </>
              ),
            }[props.type]
          }
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
