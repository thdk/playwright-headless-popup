import GoogleLogin from "react-google-login";
import { CustomDivButton } from "../custom-button";

export function Login3() {
    return (
        <>
            <h1>Login 3</h1>
            {/* custom render function returning native button */}
            <GoogleLogin
                clientId="484619662659-fo31aag70iqdikcnb7vk3cr051iui8fg.apps.googleusercontent.com"
                render={CustomDivButton}
                onSuccess={(response) => console.log(response)}
                onFailure={(error) => console.log(error)}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )

}