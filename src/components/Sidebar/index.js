import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../store/ducks/users';

import { Container, User } from './styles';

const Sidebar = ({ users, removeUser }) => (
  <Container>
    <ul>
      {users.map(user => (
        <User key={user.id}>
          <div className="user">
            <img src={user.avatar} alt={user.name} />

            <div className="description">
              <h1>{user.name}</h1>
              <span>{user.login}</span>
            </div>

            <button type="button" onClick={() => removeUser(user)}>
              <i className="fa fa-times-circle" />
            </button>

            <i className="fa fa-angle-right" />
          </div>
        </User>
      ))}
    </ul>
  </Container>
);

Sidebar.propTypes = {
  removeUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      login: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  users: state.users.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
