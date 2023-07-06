import Messanger from './components/messanger'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
function App() {
  const clientId="704655153426-hd4ctohfq4e26lg27u2n51qg5kh372e6.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
     <AccountProvider>
     <Messanger/>
     </AccountProvider>
     
    </GoogleOAuthProvider>
  );
}

export default App;
