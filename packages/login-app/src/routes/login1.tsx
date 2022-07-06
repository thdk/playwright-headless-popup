import GoogleLogin from "react-google-login";

export function Login1() {
    return (
        <>
            <h1>Login 1</h1>
            <GoogleLogin
                clientId="484619662659-fo31aag70iqdikcnb7vk3cr051iui8fg.apps.googleusercontent.com"
                onSuccess={(response) => console.log(response)}
                onFailure={(error) => console.log(error)}
                cookiePolicy={'single_host_origin'}
            />
        </>

    );
}
