import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const LoginPage = ({ username, password }) => (
  <main id="login-page">
    <h2>Author login</h2>
    <p className="detail">Weclome to share knowledge</p>
    <form
      id="login-form"
      acceptCharset="UTF-8"
      encType="application/x-www-form-urlencoded"
      method="post"
      action={process.env.SERVER_URL || 'http://127.0.0.1:5000'}
      name="login-form"
      target="_top"
    >
      <input
        required
        className="login-form-item"
        type="text"
        placeholder="Username"
        name="login-username"
        form="login-form"
        formAction={process.env.SERVER_URL || 'http://127.0.0.1:5000'}
        formEncType="application/x-www-form-urlencoded"
        formMethod="post"
        formTarget="_top"
        min="8"
        value={username}
      />
      <input
        required
        className="login-form-item"
        type="password"
        name="login-password"
        placeholder="Password"
        form="login-form"
        formAction={process.env.SERVER_URL || 'http://127.0.0.1:5000'}
        formEncType="application/x-www-form-urlencoded"
        formMethod="post"
        formTarget="_top"
        min="8"
        value={password}
      />
      <button
        className="login-form-item"
        type="submit"
        name="submit-login"
        form="login-form"
        formAction={process.env.SERVER_URL || 'http://127.0.0.1:5000'}
        formEncType="application/x-www-form-urlencoded"
        formMethod="post"
        formTarget="_top"
      >
        Login
      </button>
    </form>
  </main>
);

LoginPage.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginPage;
