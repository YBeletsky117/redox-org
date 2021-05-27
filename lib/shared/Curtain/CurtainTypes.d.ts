import * as React from 'react';
import * as ReactNative from 'react-native';

type CurtainType = (props: {
    gradientEnabled?: boolean;
    colors?: string[];
    children: React.ReactNode[];
    style?: ReactNative.StyleProp<ReactNative.ViewStyle>;
    colorСurtain?: string;
}) => JSX.Element

interface CurtainProps {
    gradientEnabled?: boolean;
    colors?: string[];
    children: React.ReactNode[];
    style?: ReactNative.StyleProp<ReactNative.ViewStyle>;
    colorСurtain?: string;
}
export class Curtain extends React.Component<CurtainProps> {}