import { useContext, useState, useEffect } from "react";
import { authContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, login, logout, user } = useContext(authContext);

  // Automatically close the modal when the user logs in or registers successfully
  useEffect(() => {
    if (user) {
      const modalId = isLogin ? "my_modal_7" : "my_modal_8";
      const modalCheckbox = document.getElementById(modalId);
      if (modalCheckbox) {
        modalCheckbox.checked = false; // Close the modal
      }
    }
  }, [user, isLogin]);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        console.log("User logged in:", result.user);
      })
      .catch((error) => console.error("Login error:", error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    register(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, { displayName: name })
          .then(() => console.log("Profile updated:", user))
          .catch((error) =>
            console.error("Profile update error:", error.message)
          );
      })
      .catch((error) => console.error("Registration error:", error.message));
  };

  console.log("isLogin state:", isLogin); // Debugging the state

  return (
    <>
      {user ? (
        <button onClick={logout} className="cursor-pointer btn md:px-7 ml-5">
          Logout
        </button>
      ) : (
        <label
          htmlFor={isLogin ? "my_modal_7" : "my_modal_8"}
          className="cursor-pointer btn md:px-7 md:ml-5 ml-2"
        >
          {isLogin ? "Login" : "Sign Up"}
        </label>
      )}
      {isLogin ? (
        <Login handleLogin={handleLogin} setIsLogin={setIsLogin} />
      ) : (
        <Register handleRegister={handleRegister} setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default Auth;
