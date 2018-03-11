import React from 'react';
import PropTypes from 'prop-types';

const LoginPage = ({ username, password }) => (
  <main id="login-page">
    <h2>Author login</h2>
    <p>Weclome to share knowledge</p>
    <form>
      <input type="text" value={username} />
      <input type="password" value={password} />
      <button type="submit">Login</button>
    </form>
  </main>
);

LoginPage.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginPage;
