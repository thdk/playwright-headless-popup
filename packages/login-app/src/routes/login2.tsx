import GoogleButton from "react-google-button";
import GoogleLogin from "react-google-login";

const renderCustomButton = (renderProps: {disabled?: boolean; onClick: () => void; }) => (
    <GoogleButton
        onClick={renderProps.onClick}
        disabled={renderProps.disabled}
    />
);

export function Login2() {
    return (
        <GoogleLogin
            clientId=""
            render={renderCustomButton}
            onSuccess={(response) => console.log(response)}
            onFailure={(error) => console.log(error)}
            cookiePolicy={'single_host_origin'}
        />
    );
}

