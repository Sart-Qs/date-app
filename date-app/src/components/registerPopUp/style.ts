import styled,{css} from 'styled-components'

export const PopUp = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 999;
`;

export const PopUpWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
`;

export const PopUpContent = styled.div`
    display: grid;
    background-color: white;
    padding: 20px;

`;

export const RegisterInputBlock = styled.div`
    display:grid;
    gap: 3px;
`;

export const RegisterInput = styled.input`
`;

export const LineTextBlock = styled.div`
    margin-top: 10px;
    font-size: 13px;
    display: flex;
`;

export const Line = styled.hr`
`;

export const AnotherAuthBlock = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const RegisterComplite = styled.button`
`;

export const GoogleLogInButton = styled.button`
`;

export const YandexLogInButton = styled.button`
`;

export const TelegramLogInButton = styled.button`
`;

export const CloseButton = styled.button`
`;

