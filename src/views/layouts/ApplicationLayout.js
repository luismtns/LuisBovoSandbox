import React from 'react';
import PropTypes from 'prop-types';

import NotificationContainer from '@containers/notification';

export default class ApplicationLayout extends React.Component {

  render() {
    return (
      <React.Fragment>
        {this.props.children}

        <NotificationContainer />
      </React.Fragment>
    );
  }

}

ApplicationLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
