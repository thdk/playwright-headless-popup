import GoogleLogin from "react-google-login";

export function Login1() {
    return (
        <>
            <h1>Login 1</h1>
            <GoogleLogin
                clientId=""
                onSuccess={(response) => console.log(response)}
                onFailure={(error) => console.log(error)}
                cookiePolicy={'single_host_origin'}
            />
        </>

    );
}
