
import Layout from "./layout";
import HomePage from "./pages/homepage";
import AboutUs from "./pages/aboutUsPage";
import ContactUs from "./pages/contactUsPage";
import SignUp from "./pages/signup";
import { Routes, Route } from 'react-router-dom'
import JavascriptPractice from "./pages/javascriptPractice";
import HttpsRequest from "./pages/httpsRequest";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about_us" exact element={<AboutUs />} />
          <Route path="/services" exact element={<ContactUs />} />
          <Route path="/sign_up" exact element={<SignUp />} />
          <Route path="/javascript_practice" exact element={<JavascriptPractice />} />
          <Route path="/https_request" exact element={<HttpsRequest />} />
        </Routes>
        {/* 
        <HomePage />
        <AboutUs />
        <ContactUs /> */}
      </Layout>
    </div>
  );
}

export default App;
