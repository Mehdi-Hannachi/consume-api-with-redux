import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import UsersList from "./components/UsersList/UsersList";
import { getUsers } from "./JS/actions/userActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  });

  return (
    <div>
      <UsersList />
    </div>
  );
};

export default App;
