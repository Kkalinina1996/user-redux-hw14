import Users from "./components/Users";
import UserForm from "./components/userForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux User App</h1>
      <Users />
      <UserForm />
    </div>
  );
}

export default App;
