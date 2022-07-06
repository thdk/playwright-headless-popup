// import GoogleButton from "react-google-button";
import GoogleLogin from "react-google-login";
import { GoogleButton } from "../components/google-login-button";

// const CustomButton = (renderProps: {disabled?: boolean; onClick: () => void; }) => (
//     <GoogleButton
//         onClick={renderProps.onClick}
//         disabled={renderProps.disabled}
//     />
// );

export function Login2() {
    return (
        <GoogleLogin
            clientId="484619662659-fo31aag70iqdikcnb7vk3cr051iui8fg.apps.googleusercontent.com"
            render={GoogleButton}
            onSuccess={(response) => console.log(response)}
            onFailure={(error) => console.log(error)}
            cookiePolicy={'single_host_origin'}
        />
    );
}

