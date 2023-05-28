import { Typography,Button} from "@mui/material"
import Google from '../assets/images/google.png'
import AuthBlueSide from "../components/AuthBlueSide"
import TLogo from '../assets/images/T_Logo.png';

const LoginContainer = () => {
  return (
    <div className="loginPage">
      <div>
        <div className="loginPage__mobileHeader">
          <div className="loginPage__imgHeader">
            <img src={TLogo} alt="" />
          </div>
          <div className="loginPage__signInHeader">
            <Button variant="contained">
              Sign up
            </Button>
          </div>
        </div>
      <div className="loginPage__title">
        <Typography variant="h4">
          Sign In
        </Typography>
      </div>

      <div className="loginPage__form">
        <form action="">
          <div className="loginPage__input">
            <input type="text" name="email" required/>
            <label htmlFor="Email">Email</label>
          </div>
          <div className="loginPage__input">
            <input type="text" name="password" required/>
            <label htmlFor="Password">Password</label>
          </div>
          <div className="loginPage__forgotcode">
            <Typography variant="body1">
              Forgot your password?
            </Typography>
          </div>
          <div className="loginPage__button">
            <Button variant="contained">
              SIGN IN
            </Button>
          </div>
        </form>
      </div>

      <div className="loginPage__googleAuth">
       <div className="loginPage__googleButton">
       <div>
            <img src={Google} alt="" />
        </div>
        <div>
            <Typography variant="body2">
              Sign in with google
            </Typography>
        </div>
       </div>
      </div>
      </div>
      <AuthBlueSide/>
    </div>
  )
}

export default LoginContainer