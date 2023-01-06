import "./App.css";
import { Button } from "./components/Button";
import HomeIcon from "./components/icons/HomeIcon";
import UserIcon from "./components/icons/UserIcon";

function App() {
    return (
        <>
            <Button>{<HomeIcon />}</Button>
            <Button>{<UserIcon />}</Button>
        </>
    );
}

export default App;
