import { useState } from "react";
import "./sass/App.scss";
import { Redirect, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";

//COMPONENTS
import HeaderContainer from "./components/HeaderContainer";
import OwnOrderPageContainer from "./components/OwnOrderPage/OwnOrderPageContainer";
import ProductPageContainer from "./components/ProductPage/ProductPageContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import YourOrderPageContainer from "./components/YourOrderPage/YourOrderPageContainer";
import BlogPageContainer from "./components/BlogPage/BlogPageContainer";

import en from "./lang/messages/en.json";

let App = () => {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(en);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Route
        path="/picbazar/"
        render={() => (
          <HeaderContainer setLocale={(local) => setLocale(local)}
                           setMessages={(lang) => setMessages(lang)}
          />
        )}
      />
      <Route path="/picbazar/" exact component={ProductPageContainer} />
      <Route path="/picbazar/profile" component={ProfilePageContainer} />
      <Route path="/picbazar/owner-order" component={OwnOrderPageContainer} />
      <Route path="/picbazar/your-order" component={YourOrderPageContainer} />
      <Route path="/picbazar/market-blog" component={BlogPageContainer} />
      <Redirect from="/" to="/picbazar" />
    </IntlProvider>
  );
};

export default App;
