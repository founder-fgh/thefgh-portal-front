import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';


import Header from './components/Header';

import ScrollablePage from './pages/ScrollablePage';
import OurTeam from './pages/OurTeam';

import HeaderContext from './contexts/HeaderContext';

import './app.css'


class App extends Component {
  state = {
    activeTab :'',
  }

  onChangeTab = id => {
    this.setState({activeTab: id})
  }

  render(){
    const {activeTab} = this.state  
       return(
      <HeaderContext.Provider value={{activeTab, changeTab: this.onChangeTab}}>
          <Header/>
          <Routes>
            <Route path="/" element={<ScrollablePage/>}/>
            <Route path="/our-team" element={<OurTeam/>}/>
            {/* <Navigate to="/"/> */}
        </Routes>
      </HeaderContext.Provider>
    )
  }
}


export default App;
