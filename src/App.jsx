import { Header } from "./components/Header/Header.module";
import   { CardList }   from "./components/Swiper/CardList.module";


import { About } from "./components/About/About.module";
import { Price } from "./components/Price/Price.module";
import Statistic from "./components/Statistic/Statistic.module";
import { Partners } from "./components/Partners/Partners.module";
import { Contacts } from "./components/Contacts/Contacts.module";
import { Map } from "./components/Map/Map.module";
import { Footer } from "./components/Footer/Footer.module";


 const App = () => {

  return (
    <div className="App">
        <Header/>
        <CardList/>
        
        <About/>
        <Price/>
        <Statistic/>
        <Partners/>
        <Contacts/>
        <Map/>
        <Footer/>
        
        </div>  
  );
}



export default App;


