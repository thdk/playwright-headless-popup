import GoogleLogin from "react-google-login";

export function Login3() {
    return (
        <>
            <h1>Login 3</h1>
            {/* custom render function returning native button */}
            <GoogleLogin
                clientId=""
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Sign in with Google
                    </button>
                )}
                onSuccess={(response) => console.log(response)}
                onFailure={(error) => console.log(error)}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )

}