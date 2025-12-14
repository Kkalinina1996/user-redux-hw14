import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/action";
import styles from "./userForm.module.css";

function UserForm({ setUserInfo }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !status.trim()) {
      alert("All fields are required");
      return;
    }

    setUserInfo(name, status);
    setName("");
    setStatus("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Edit User</h2>

      <input
        className={styles.input}
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Enter status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <button className={styles.button} type="submit">
        Update User
      </button>
    </form>
  );
}

export default connect(null, { setUserInfo })(UserForm);
