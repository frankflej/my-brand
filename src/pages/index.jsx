import AboutContainer from "../containers/AboutContainer";
import CategoryContainer from "../containers/CategoryContainer";
import ContactContainer from "../containers/ContactContainer";
import HomeContainer from "../containers/HomeContainer";
import LoginContainer from "../containers/LoginContainer";
import Notfound from "../containers/NotFound";
import SignupContainer from "../containers/SignupContainer";

const HomePage = () => <HomeContainer/>
const NotFoundPage = () => <Notfound/>
const LoginPage = () => <LoginContainer/>
const SingupPage = () => <SignupContainer/>
const CategoryPage = () => <CategoryContainer/>
const AboutPage = () => <AboutContainer/>
const ContactPage = () => <ContactContainer/>
export{
    HomePage,
    NotFoundPage,
    LoginPage,
    SingupPage,
    CategoryPage,
    AboutPage,
    ContactPage
}