import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase"
import { userLogin } from "../../store/reducers/basketSlice/basketSlice"
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Container, Error, Form, Frame, Input, Label, Logo, SignInButton, Title, Text, Button } from './styles/Login';
import { Formik } from 'formik';
const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const signin = values => {

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                dispatch(userLogin(values.email));
                history.push("/");
            })
            .catch((error) => {
                console.log(error)
            });
    }
    const validationSchema = Yup.object().shape({

        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
    })

    return (
        <Container>
            <Link to="/">
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo" />
            </Link>
            <Frame>
                <Title>Sign In</Title>
                <Formik
                    initialValues={{ email: "", password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) =>
                        signin(values)
                    }
                >
                    {({ errors, touched }) => (

                        <Form>

                            <Label>Email</Label>
                            <Input type="email" name="email" placeholde="Email" />
                            <Error>{errors.email && touched.email && errors.email}</Error>
                            <Label>Password</Label>
                            <Input type="password" name="password" placeholde="Password" />
                            <Error>{errors.password && touched.password && errors.password}</Error>
                            <SignInButton type="submit" >Sign In</SignInButton>
                            <Text>
                                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.Please
                                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                            </Text>

                            <Button to="/signup">Create your Amazon Account</Button>
                        </Form>
                    )}
                </Formik>
            </Frame>
        </Container>
    )
}

export default Login
