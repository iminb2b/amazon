import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase"
import { userLogin } from "../../store/reducers/basketSlice/basketSlice"
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Container, Error, Form, Frame, Input, Label, Logo, SignUpButton, Title, Text, Button } from './styles/SignUp';
import { Formik } from 'formik';
const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const validationSchema = Yup.object().shape({

        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
    })
    const register = (values) => {
        console.log('hello')

        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                dispatch(userLogin(userCredential.user));
                history.push("/");
            })
            .catch((error) => {
                alert(error);
            });
    }
    return (
        <Container>
            <Link to="/">
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo" />
            </Link>
            <Frame>
                <Title>Sign Up</Title>
                <Formik
                    initialValues={{ email: "", password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) =>
                        register(values)
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
                            <SignUpButton type="submit" >Sign Up</SignUpButton>
                            <Text>
                                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.Please
                                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                            </Text>

                            <Button to="/signin">Sign In to your Amazon Account</Button>
                        </Form>
                    )}
                </Formik>
            </Frame>
        </Container >
    )
}

export default SignUp
