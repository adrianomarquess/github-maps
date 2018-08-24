import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UsersActions } from '../../store/ducks/users';

import { Container, Button } from './styles';

class Modal extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    modalClose: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  state = {
    textInput: '',
  };

  addUser = (e) => {
    e.preventDefault();
    const { textInput } = this.state;
    const { addUserRequest } = this.props;

    if (textInput.length > 0) {
      addUserRequest(textInput);
    }
  };

  render() {
    const { modalClose, isLoading } = this.props;
    const { textInput } = this.state;

    return (
      <Container>
        <form onSubmit={this.addUser}>
          <h1>Adicionar novo usuário</h1>

          <input
            type="text"
            placeholder="Usuário no Github"
            value={textInput}
            onChange={e => this.setState({ textInput: e.target.value })}
            required
          />

          <div>
            <Button type="button" onClick={modalClose}>
              Cancelar
            </Button>
            <Button primary type="submit">
              Salvar
            </Button>
          </div>

          {isLoading && <i className="fa fa-spinner fa-pulse" />}
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.users.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...UsersActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
