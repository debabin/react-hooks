import React, { Component } from "react";

// Simulated authentication check
const isAuthenticated = () => {
  return true;
};

export const withAuthentication = (WrappedComponent) => {
  return class WithAuthentication extends Component {
    render() {
      // Check if the user is authenticated
      if (!isAuthenticated()) {
        return <p>Please login to view this content.</p>;
      }

      return <WrappedComponent />;
    }
  };
};
