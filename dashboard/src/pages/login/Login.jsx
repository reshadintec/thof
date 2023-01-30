import { useCallback, useState } from 'react';
import { useDispatch , useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
    },
    [username, password, dispatch]
  );

  if (currentUser) {
    history.replace('/');
    return null;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button disabled={isFetching} style={{ padding: 10, width:100 }} onClick={handleClick}>
        Login
      </button>
      {error && (
          <span className="text-red-500 ">Something Went Wrong...</span>
        )}
    </div>
  );
};

export default Login;