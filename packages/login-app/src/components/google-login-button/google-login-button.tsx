import { CSSProperties, useCallback } from "react";
import { GoogleIcon } from "./icons";
import { darkStyle, lightStyle, disabledStyle } from "./styles";

export const GoogleButton = ({
  type = "dark",
  disabled,
  onClick,
  label = "Sign in with Google"
}: {
  label?: string;
  disabled?: boolean;
  type?: "light" | "dark";
  tabIndex?: number;
  onClick: (e: React.MouseEvent) => void;
  style?: CSSProperties;
}) => {

  const getStyle = useCallback(
    (propStyles?: CSSProperties): CSSProperties => {
      const baseStyle = type === 'dark' ? darkStyle : lightStyle

      if (disabled) {
        return { ...baseStyle, ...disabledStyle, ...propStyles }
      }
      return { ...baseStyle, ...propStyles }

    },
    [
      disabled,
      type,
    ]
  );

  return (<button
    onClick={onClick}
    disabled={disabled}
    style={getStyle()}
  >
    <GoogleIcon disabled={disabled} type={type} />
    <span>
      {label}
    </span>
  </button>
  );
}

export const MyGoogleButton = (renderProps: {
  disabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
}) => {
  return (<GoogleButton
    onClick={renderProps.onClick}
  />
  );
};