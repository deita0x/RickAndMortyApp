import Home from '@screens/Home';
import Characters from '@screens/Characters';
import CharactersDetail from '@screens/Characters/Detail';
import Seasons from '@screens/Seasons';

const Screens = {
  characters: {
    Characters,
    CharactersDetail
  },

  common: {
    Home,
    Seasons,
  }

};

export default Screens;
