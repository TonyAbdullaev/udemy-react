import BirthdayBuddy from "./modules/01-birthday-buddy/index.jsx";
import Tours from "./modules/02-tours";
import Reviews from "./modules/03-reviews/index.jsx";
import Accordion from "./modules/04-accordion/index.jsx";
import Menu from "./modules/05-menu/index.jsx";
function App() {

  return (
    <div style={{maxWidth: "1200px", margin: "0 auto"}}>
        <BirthdayBuddy />
        <Tours />
        <Reviews />
        <Accordion />
        <Menu />
    </div>
  )
}

export default App
