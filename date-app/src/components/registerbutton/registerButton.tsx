import { useState } from 'react';
import { FC } from 'react';
import * as SC from './style';

interface RegisterButtonProps{
    onOpen: () => void;
};

const RegisterButton: FC<RegisterButtonProps> = ({onOpen}) =>{

    return(
        <SC.CentertDiv>
            <SC.Button onClick={onOpen}>
                Регистрация
            </SC.Button>
        </SC.CentertDiv>
    );
};


export default RegisterButton;