import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button, Col, Form } from 'react-bootstrap';
import { UserContext } from '../../App';
import googleIcon from '../../Files/Icon/google.png';
import fbIcon from '../../Files/Icon/fb.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [, setLoggedInUser] = useContext(UserContext);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: '',
        name: '',
        email: '',
        password: '',
        error: '',
        success: ''
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const userSignIn = { name: displayName, email };
                setLoggedInUser(userSignIn);
                history.replace(from);
            })
            .catch(error => {
                console.log(error);
            });
    }
    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider).then(res => {
            const user = res.user;
            setLoggedInUser(user);
            history.replace(from);
        }).catch(function (error) {
            console.log(error);
        });
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const pass = e.target.value.length > 6;
            const isPassValid = /\d{1}/.test(e.target.value);
            isFieldValid = pass && isPassValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    console.log('sign in user info', res.user);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(() => {
            console.log('user name updated successfully');
        }).catch(error => {
            console.log(error);
        });
    }
    return (
        <div className="container pt-5">
            <div className='content1 bg-white m-auto rounded border'>
                <Form onSubmit={handleSubmit} className='formContent m-auto pt-3'>
                    {
                        newUser ? <h3>Create an account</h3> : <h3>Login</h3>
                    }
                    {
                        newUser && <Form.Group controlId="FirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onBlur={handleBlur} name='name' type='text' placeholder="First Name" required />
                        </Form.Group>}
                    {
                        newUser && <Form.Group controlId="LastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onBlur={handleBlur} name='lastName' type='text' placeholder="Last Name" required />
                        </Form.Group>}
                    <Form.Group controlId="Email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onBlur={handleBlur} name='email' type='email' placeholder="Email Address" required />
                    </Form.Group>
                    <Form.Group controlId="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleBlur} name='password' type='password' placeholder="Password" required />
                    </Form.Group>
                    {
                        newUser && (<Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control onBlur={handleBlur} name="confirmPassword" type="password" placeholder="Confirm password" required />
                        </Form.Group>)
                    }
                    <Form.Row>
                        <Form.Group as={Col} controlId="Checkbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Link href="#login">{!newUser ? 'Forgot Password' : ''}</Link>
                    </Form.Row>
                    <Button variant="warning" type="submit" className='w-100 mb-2'>
                        {newUser ? 'Create an account' : 'Login'}
                    </Button>
                    <Form.Group controlId="change">
                        <Form.Check onChange={() => setNewUser(!newUser)} name="newUser" type="checkbox" label="Create New Account" />
                    </Form.Group>
                </Form>
            </div>
            <div className="content2 m-auto">
                <p className='text-danger'>{user.error}</p>
                {user.success && <p className='text-success'>User {newUser ? 'created' : 'Logged In'} successfully</p>}
                <pre className="m-auto">   .......................Or....................</pre>
                <Button className="mb-2 d-block w-100" onClick={handleSignIn} variant="secondary"><img style={{ height: '25px' }} src={googleIcon} alt="Google"></img> Continue with google</Button>
                <Button className='w-100' onClick={handleFbSignIn} variant="secondary"><img style={{ height: '25px' }} src={fbIcon} alt="facebook"></img> Continue with facebook</Button>
            </div>
        </div >
    );
};

export default Login;



