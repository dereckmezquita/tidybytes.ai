import React from 'react';
// import { Button } from '../components/base/Button';
import { Button } from '@blueprintjs/core';
import { Modal } from '../components/base/Modal';
import { LoginForm, RegistrationForm } from '../components/base/AuthForms';
import { useModal } from '../hooks/useModal';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const fadeInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.title};
    animation: ${fadeInRight} 1s ease-out;

    &:after {
        content: '';
        display: block;
        width: 150px;
        height: 5px;
        background-color: #007bff;
        margin: 10px auto;
    }
`;

const Subtitle = styled.h2`
    max-width: 600px;
    margin-bottom: ${({ theme }) => theme.spacing.large};
    font-size: ${({ theme }) => theme.fontSizes.subtitle};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    animation: ${fadeInUp} 1s ease-out;
`;


const Description = styled.section`
    color: #6c757d;
    font-size: 1.2em;
    text-align: center;
    max-width: 500px;
    margin-top: 20px;
`;

const Section = styled.section`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ButtonGroup = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 25px;
`;

export const LandingPage = () => {
    const { modal, openModal, closeModal } = useModal();
    const user = useSelector((state: any) => state.user);
    const navigate = useNavigate();

    return (
        <Container>
            <Section>
                <Title>TidyBytes.io</Title>
                <Subtitle>Data cleansing made easy!</Subtitle>
                <Description>
                    A webapp that hosts a suite of tools for working with and cleaning up datasets using ML models in the background.
                </Description>
            </Section>
            <Section>
                <ButtonGroup>
                    <Button onClick={() => user ? navigate('/dashboard') : openModal('register')}>Register</Button>
                    <Button intent={user ? "success" : "none"} onClick={() => user ? navigate('/dashboard') : openModal('login')}>Login</Button>
                </ButtonGroup>
            </Section>
            {modal === 'register' && (
                <Modal isOpen={true} onClose={closeModal} title="Register">
                    <RegistrationForm />
                </Modal>
            )}
            {modal === 'login' && (
                <Modal isOpen={true} onClose={closeModal} title="Login">
                    <LoginForm />
                </Modal>
            )}
        </Container>
    );
};
