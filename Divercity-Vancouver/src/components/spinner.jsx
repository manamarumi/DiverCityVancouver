import React from "react";
import homepageIcon from "../assets/homepage_icon.png";

export const LoadingSpinner = ({ className }) => (
  <div style={styles.container}>
    <img
      src={homepageIcon}
      className={className}
      alt="Loading spinner"
      style={styles.spinner}
    />
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
  spinner: {
    width: '300px',
    height: '300px',
  },
};
