import styles from './PopupWithForm.module.css';

import classnames from 'classnames';

function PopupWithForm(props) {
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
                  <form className={styles.form} method="POST">
                    <label className={styles.label} htmlFor="email">
                      Email
                    </label>
                    <input
                      className={styles.input}
                      type="email"
                      placeholder="Enter email"
                      required
                      id="email"
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
                  <form className={styles.form} method="POST">
                    <label className={styles.label} htmlFor="email">
                      Email
                    </label>
                    <input
                      className={styles.input}
                      type="email"
                      placeholder="Enter email"
                      required
                      id="email"
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
                    />
                    <span className={styles.validation}>Invalid username</span>

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
