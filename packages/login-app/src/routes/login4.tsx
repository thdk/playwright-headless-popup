import GoogleLogin from "react-google-login";
import { CustomButton } from "../custom-button";

export function Login4() {
    return (
        <>
            <h1>Login 4</h1>
            {/* custom render function returning native button */}
            <GoogleLogin
                clientId="484619662659-fo31aag70iqdikcnb7vk3cr051iui8fg.apps.googleusercontent.com"
                render={({ onClick, disabled }) => <CustomButton onClick={onClick} disabled={disabled} />}
                onSuccess={(response) => console.log(response)}
                onFailure={(error) => console.log(error)}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )

}