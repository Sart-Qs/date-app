import RegisterButton from '../../components/registerbutton/registerButton';
import RegisterPopUp from '../../components/registerPopUp/reginsterPopUp';
import { useState } from 'react';

export default function LoginPage(){
    const [popUpIsOpen, setPopUpOpen ] = useState(false);
    
    return(
        <>
            <RegisterButton onOpen = {() => setPopUpOpen(true)}/>
            <RegisterPopUp onClose= {() => setPopUpOpen(false)} isOpen = {popUpIsOpen}/>
        </>
    );
};