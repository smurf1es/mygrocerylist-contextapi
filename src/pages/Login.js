import { useContext, useState } from 'react';
import { login } from '../actions/userActions';
import { UserContext } from '../context/user-context';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, dispatch] = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form
        className="flex flex-col md:w-3/12 lg:w-1/6"
        onSubmit={submitHandler}
      >
        <h1 className="text-center text-2xl font-bold">MGL Login</h1>
        <input
          className="border-gray-900 bg-transparent text-white my-2 px-2 border focus:outline-none"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="border-gray-900 bg-transparent text-white my-2 px-2 border focus:outline-none"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="bg-gray-900 hover:bg-gray-700 transition text-white py-2 px-8 focus:outline-none"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
