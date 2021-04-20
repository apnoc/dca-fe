import React, { Component } from "react" ;
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import Services from './components/services';
import RtiAct from './components/rtiAct'
import OnlineSalesLicensingSystem from './components/onlineSalesLicensingSystem';
import ProcedureForLicenses from './components/procedureForLicenses';
import ContactUs from './components/contactUs';
import ApplicationsForms from './components/pages/applicationsForms';
import BloodBanks from './components/pages/bloodBanks';
import BannedDrugs from './components/pages/bannedDrugs';
import Drugs from './components/pages/drugs';
import MedicalStores from './components/pages/medicalStores';
import Jeevandhra from './components/pages/jeevandhra';
import GvtHospitals from './components/pages/gvtHospitals';
import RelatedLinks from './components/pages/relatedLinks';
import Dca from './components/pages/dca';
import Orgnisational from './components/pages/orgnisational';
import Citizen from './components/pages/citizen';
import Clients from './components/pages/clients';
import Statute from './components/pages/statute';
import HowToApply from './components/pages/howToApply';
import PerformanceDca from './components/pages/performanceDca';
import News from './components/pages/news';
import Sitemap from './components/pages/sitemap';
import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import './App.css';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"




const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://10.242.162.231:4000/graphql" // your graphql server link
  }),
  credentials: "same-origin",
})


function AppRouter() {
    return (
      <React.Fragment>
      <NavBar />
      <main  >
        <Switch>
        <Route path="/dca" component={Dca}></Route>
        <Route path="/orgnisational" component={Orgnisational}></Route>
        <Route path="/citizen" component={Citizen}></Route>
        <Route path="/clients" component={Clients}></Route>
        <Route path="/statute" component={Statute}></Route>
        <Route path="/howToApply" component={HowToApply}></Route>
        <Route path="/performanceDca" component={PerformanceDca}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/sitemap" component={Sitemap}></Route>
        <Route path="/relatedLinks" component={RelatedLinks}></Route>
        <Route path="/gvtHospitals" component={GvtHospitals}></Route>
        <Route path="/jeevandhra" component={Jeevandhra}></Route>
        <Route path="/medicalStores" component={MedicalStores}></Route>
        <Route path="/drugs" component={Drugs}></Route>
        <Route path="/bannedDrugs" component={BannedDrugs}></Route>
        <Route path="/bloodBanks" component={BloodBanks}></Route>
        <Route path="/applicationsForms" component={ApplicationsForms}></Route>
        <Route path="/procedureForLicenses" component={ProcedureForLicenses}></Route>
        <Route path="/onlineSalesLicensingSystem" component={OnlineSalesLicensingSystem}></Route>
        <Route path="/contactUs" component={ContactUs}></Route>
        <Route path="/rtiAct" component={RtiAct}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/aboutUs" component={AboutUs}></Route>
        <Route path="/home" component={Home}></Route>
	      <Route path="/" component={Home}></Route> 
        </Switch>
      </main>
     <Footer />
      </React.Fragment>
     );
  }


function App() {
  return (
    <ApolloProvider client = {client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
