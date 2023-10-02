import React from 'react';
import { Dialog, TextField, Box, Button, Typography, styled} from '@mui/material';
import { useState, useContext } from 'react';
import { authenticateSignUp } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { authenticateLogin } from '../../service/api';

const Component = styled(Box)({
  height: '70vh',
  width:'90vh'
})

const Image = styled(Box)({
  background:'#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat',
  height: '83.4%',
  width: '28%',
  padding: '45px 35px',
  '& > p, & > h5':{
    color:'#ffffff',
    fontWeight:600
  }
})

const Wrapper = styled(Box)({
  display:'flex',
  flexDirection:'column',
  padding: '25px 35px',
  flex: 1,
  '& > div, & > button, & > p':{
    marginTop: 20
  }
})

const LoginButton = styled(Button)({
  textTransform:'none',
  background: '#FB641B',
  color:'#fff',
  height:48,
  borderRadius:2
})

const RequestOTP = styled(Button)({
  textTransform:'none',
  background: '#fff',
  color:'#2874f0',
  height:48,
  borderRadius:2,
  boxShadow:'0 2px 4px 0 rgb(0 0 0/20%)'
})

const Text = styled(Typography)({
  fontSize:12,
  color:'#878787'
})

const CreateAccount =styled(Typography)({
  fontSize:14,
  textAlign:'center',
  color:'#2874f0',
  fontWeight:600,
  cursor:'pointer'
})

const Error = styled(Typography)({
  fontSize: 10,
  color: '#ff6161',
  lineHeight: 0,
  marginTop: 10,
  fontWeight: 600
})

const accountInitialValue = {
  login:{
    view:'login',
    heading:'Login',
    subheading:'Get access to your Orders, Wishlist and Recommendations'
  },
  signup:{
    view:'signup',
    heading:"Looks like yo're new here!",
    subheading: 'Signup with your mobile to get started'
  }
}

const SignUpInitialValues = {
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  phone:''
}

const LoginInitialValues = {
  username:'',
  password:''
}

const LoginDialog = ({open, setOpen}) => {

  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup, setSignUp] = useState(SignUpInitialValues);
  const [login, setLogin] = useState(LoginInitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
    setError(false);
  }

  const toggleSignUp = () => {
    toggleAccount(accountInitialValue.signup);
  }

  const toggleLogin = () => {
    toggleAccount(accountInitialValue.login);
  }

  const onInputChnage = (e) => {
    setSignUp({...signup,[e.target.name]:e.target.value});
  }

  const SignUpUser = async() => {
    let response = await authenticateSignUp(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname);
    
  }

  const onValueChnage = (e) => {
    setLogin({...login,[e.target.name]:e.target.value});
  }

  const loginUser = async() => {
    let response = await authenticateLogin(login);
    if(response.status === 200){
      handleClose();
      setAccount(response.data.data.firstname);
    }
    else {
      setError(true);
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
      <Component>
        <Box style={{display: 'flex', height: '100%'}}>
          <Image>
            <Typography variant='h5'>{account.heading}</Typography>
            <Typography style={{marginTop: 20}}>{account.subheading}</Typography>
          </Image>

          {
            account.view === 'login' ?
              <Wrapper>
                <TextField variant='standard' onChange={(e) => onValueChnage(e)} name="username" label="Enter Username"/>
                <TextField variant='standard' onChange={(e) => onValueChnage(e)} name="password" label="Enter Password"/>
                {
                  error && <Error>Please Enter valid username or Password</Error>
                }
                <Text>By continuing, you agree to Flipkart's Terms of use and privacy policy.</Text>
                <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={() => toggleSignUp()}>New to Flipkart? Create an account.</CreateAccount>
              </Wrapper>
            :
              <Wrapper>
                <TextField variant='standard' onChange={(e) => onInputChnage(e)} name="firstname" label="Enter First Name"/>
                <TextField variant='standard' onChange={(e) => onInputChnage(e)} name="lastname" label="Enter Last Name"/>
                <TextField variant='standard' onChange={(e) => onInputChnage(e)} name="username" label="Enter Username"/>
                <TextField variant='standard' onChange={(e) => onInputChnage(e)} name="email" label="Enter Email"/>
                <TextField variant='standard' onChange={(e) => onInputChnage(e)} name="password" label="Enter Password"/>
                <TextField variant='standard' onChange={(e) => onInputChnage(e)} name="phone" label="Enter Phone"/>
                <LoginButton onClick={() => SignUpUser()}>Continue</LoginButton>
                <CreateAccount onClick={() => toggleLogin()}>Already have an account.</CreateAccount>
              </Wrapper>
          }

        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog;