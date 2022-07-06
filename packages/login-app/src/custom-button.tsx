export const CustomButton = (renderProps: { disabled?: boolean; onClick: () => void; }) => (
    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
        Sign in with Google
    </button>
);

export const CustomDivButton = (renderProps: { onClick: () => void; }) => (
    <div onClick={renderProps.onClick}>
        Sign in with Google
    </div>
);