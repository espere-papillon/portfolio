import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                <Main />
                <Skills />
                <Projects />
            </header>
        </div>
    );
}

export default App;
