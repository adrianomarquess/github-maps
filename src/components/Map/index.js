import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MapGL, { Marker } from 'react-map-gl';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';

import { Avatar } from './styles';

import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar: PropTypes.string,
        location: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      }),
    ).isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;

    const { modalOpen } = this.props;
    modalOpen({ latitude, longitude });
  };

  render() {
    const { viewport } = this.state;
    const { users } = this.props;

    return (
      <MapGL
        {...viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_ACCESSTOKEN}
        onViewportChange={view => this.setState({ viewport: view })}
      >
        {users.map(user => (
          <Marker
            key={user.id}
            latitude={user.location.latitude}
            longitude={user.location.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <Avatar src={user.avatar} alt={user.name} />
          </Marker>
        ))}

        <ToastContainer />
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
