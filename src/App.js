import { Redirect, Route } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';
import OwnOrderPageContainer from './components/OwnOrderPageContainer/OwnOrderPageContainer';
import ProductPageContainer from './components/ProductPage/ProductPageContainer';
import YourOrderPageContainer from './components/YourOrderPageContainer/YourOrderPageContainer';
import './sass/App.scss';

let App = () => {
  return (
   <>
     <Route path='/picbazar/'  component={HeaderContainer}/>
      <Route path='/picbazar/' exact component={ProductPageContainer}/>
      <Route path='/picbazar/owner-order' component={OwnOrderPageContainer}/>
      <Route path='/picbazar/your-order' component={YourOrderPageContainer}/>
      <Redirect from='/' to='/picbazar'/>
  </>
  )
}

export default App;
