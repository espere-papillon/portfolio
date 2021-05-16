import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                <Main />
                <Skills />
            </header>
        </div>
    );
}

export default App;
