
import './App.css';
import Navbar from './Navbar';
import Content from './Content';

import './CocktailGallery.css';
import CocktailGallery from './CockTailGallery';
import FooterSection from './FooterSection';
import './FooterSection.css';


function App() {
  return (
    <div className="App">
      <Navbar> </Navbar>
      <Content></Content>
      <CocktailGallery></CocktailGallery>
<FooterSection></FooterSection>
      

    </div>
  );
}

export default App;
