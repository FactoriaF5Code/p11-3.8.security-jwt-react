import { useState } from "react";
import { LoginButton } from "./components/LoginButton";
import { getUserName } from "./api/login";
import Message from "./components/Message";
import PuppyList from "./components/PuppyList";
import "./App.css";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pleaseLoginMessage = "Please login to see the puppies";

  return (
    <main>
      <header>
        <span>PuppyStore!</span>
        {isLoggedIn ?
          <Message text={"Welcome " + getUserName()} /> :
          <LoginButton onLoginSuccess={() => setIsLoggedIn(true)} />
        }
      </header>

      <section>
        {isLoggedIn ?
          <PuppyList /> :
          <Message text={pleaseLoginMessage} />
        }
      </section>
    </main>
  );
}

export default App;