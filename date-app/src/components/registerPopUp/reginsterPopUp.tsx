import React, { useState }  from 'react';
import AnotherAuthButton from './anotherAuthButton/anotherAuthButton'
import { FC } from 'react';
import * as SC from './style';
import { User } from '../../models/user'

interface RegisterPopUpIProps{
    onClose: () => void;
    isOpen: boolean;
}

const RegisterPopUp: FC<RegisterPopUpIProps> = ({onClose, isOpen}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = () =>{
       const newUser = new User(email, password);
       
    }

    return(
        <>{isOpen && (
            <SC.PopUp>
                <SC.PopUpWrapper>
                    <SC.PopUpContent>
                        <SC.CloseButton onClick={onClose}>x</SC.CloseButton>
                        <SC.RegisterInputBlock>
                            <SC.RegisterInput type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                            <SC.RegisterInput type='password' placeholder='Пароль' onChange={(e) => setPassword(e.target.value)}/>
                        </SC.RegisterInputBlock>
                            <SC.RegisterComplite type = 'submit' onClick={submitForm}>Зарегистрироваться</SC.RegisterComplite>
                        <SC.LineTextBlock>
                            <SC.Line></SC.Line>
                                Или войти с помощью
                            <SC.Line></SC.Line>
                        </SC.LineTextBlock>
                        <SC.AnotherAuthBlock>
                            <AnotherAuthButton/>
                            <AnotherAuthButton/>
                            <AnotherAuthButton/>
                        </SC.AnotherAuthBlock>
                    </SC.PopUpContent>
                </SC.PopUpWrapper>
            </SC.PopUp>
            )}
        </>
    )
}

export default RegisterPopUp;