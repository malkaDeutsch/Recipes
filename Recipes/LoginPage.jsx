
// import React, { useState } from 'react';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [forgotPassword, setForgotPassword] = useState(false);
//   const [newEmail, setNewEmail] = useState('');

//   const handleLogin = () => {
//     // handle login logic with token management
//   };

//   const handleForgotPassword = () => {
//     setForgotPassword(true);
//   };

//   const handleSendPassword = () => {
//     // handle sending password to new email address
//   };

//   return (
//     <div>
//       {forgotPassword ? (
//         <div>
//           <input type="email" placeholder="Enter new email address" onChange={(e) => setNewEmail(e.target.value)} />
//           <button onClick={handleSendPassword}>Send Password</button>
//         </div>
//       ) : (
//         <div>
//           <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//           <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//           <button onClick={handleLogin}>Login</button>
//           <button onClick={handleForgotPassword}>I forgot my password</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPage;


// Importing necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Defining the component
function LoginPage() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Making a POST request to the server to authenticate the user
    axios.post('/api/authenticate', {
      username: 'exampleuser',
      password: 'examplepassword'
    })
    .then(response => {
      // Setting the token in the client-side storage
      setToken(response.data.token);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <h1>Token-Based Authentication Example</h1>
      <p>Token: {token}</p>
    </div>
  );
}

export default LoginPage;
