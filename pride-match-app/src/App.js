import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/NavigationBar";
import socialMediaAuth from './service/auth';
import { googleProvider } from './firebase_config/authMethod';

function App() {

    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    }

    return (
        <div className="App">
            <NavigationBar/>
            {/*<h1>Home</h1>*/}

            <button onClick={() => handleOnClick(googleProvider)}>Google Login</button>

        </div>
    );
}

export default App;
