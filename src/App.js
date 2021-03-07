import { Redirect, Route } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';
import OwnOrderPageContainer from './components/OwnOrderPage/OwnOrderPageContainer';
import ProductPageContainer from './components/ProductPage/ProductPageContainer';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import YourOrderPageContainer from './components/YourOrderPage/YourOrderPageContainer';
import './sass/App.scss';

let App = () => {
  return (
   <>
     <Route path='/picbazar/'  component={HeaderContainer}/>
      <Route path='/picbazar/' exact component={ProductPageContainer}/>
      <Route path='/picbazar/profile'  component={ProfilePageContainer}/>
      <Route path='/picbazar/owner-order' component={OwnOrderPageContainer}/>
      <Route path='/picbazar/your-order' component={YourOrderPageContainer}/>
      <Redirect from='/' to='/picbazar'/>
  </>
  )
}

export default App;
