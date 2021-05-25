import styles from './PopupWithForm.module.css';

import classnames from 'classnames';

function PopupWithForm() {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.content}>
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
            <span className={styles.validation}>Invalid email address</span>

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
            />
          </form>

          <p className={styles.redirect}>
            or{' '}
            <button className={classnames(styles.redirectButton, 'clickable')}>
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
