import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Map from '../../components/Map';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';

const Main = ({ modalIsOpen, haveUsers }) => (
  <Fragment>
    <Map />
    {haveUsers && <Sidebar />}
    {modalIsOpen && <Modal />}
  </Fragment>
);

Main.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  haveUsers: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  modalIsOpen: state.modal.isOpen,
  haveUsers: state.users.data.length > 0,
});

export default connect(mapStateToProps)(Main);
