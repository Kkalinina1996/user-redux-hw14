import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

function User({ name, status }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Information</h2>
      <p className={styles.text}>
        <strong>Name:</strong> {name}
      </p>
      <p className={styles.text}>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);
