import "./App.css";
import { Button } from "./components/Button";
import BookIcon from "./components/icons/BookIcon";
import BriefcaseIcon from "./components/icons/BriefcaseIcon";
import EnvelopeIcon from "./components/icons/EnvelopeIcon";
import HomeIcon from "./components/icons/HomeIcon";
import LicenseIcon from "./components/icons/LicenseIcon";
import UserIcon from "./components/icons/UserIcon";

function App() {
    return (
        <>
            <Button>{<HomeIcon />}</Button>
            <Button>{<UserIcon />}</Button>
            <Button>{<LicenseIcon />}</Button>
            <Button>{<BriefcaseIcon />}</Button>
            <Button>{<BookIcon />}</Button>
            <Button>{<EnvelopeIcon />}</Button>
        </>
    );
}

export default App;
