import React, { FC, ReactNode } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleProp, useWindowDimensions, View, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

type Curtain = {
    gradientEnabled?: boolean;
    colors?: string[];
    children: ReactNode[];
    style?: StyleProp<ViewStyle>;
    colorСurtain?: string;
}

export const Curtain: FC<Curtain> = ({
    gradientEnabled = false,
    colors,
    children,
    style = { flex: 1 },
    colorСurtain = '#FFFFFF',
    ...otherProps
}) => {
    const ref: any = React.useRef<React.LegacyRef<View>>(null),
        { width, height } = useWindowDimensions(),
        onScroll = (gr: NativeSyntheticEvent<NativeScrollEvent>) => {
            const currentHeight = gr.nativeEvent.contentOffset.y,
                maxH: number = (width / 3.9) * 1.1;
            ref.current?.setNativeProps({ style: { zIndex: currentHeight > 24 ? -1 : 1 } })
            if (currentHeight > 0 && currentHeight < maxH) {
                return ref.current?.setNativeProps({ style: { opacity: 1 - gr.nativeEvent.contentOffset.y / maxH } })
            }
        },
        content = (): JSX.Element => (<>{children[0]}
            <View>
                <View ref={ref as React.LegacyRef<View>} style={[{
                    paddingBottom: 36,
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: 'transparent',
                    width,
                    bottom: height - 240
                }]}
                >
                    {children[1]}
                </View>
                <ScrollView
                    bounces={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    style={{ zIndex: 0, minHeight: height, backgroundColor: 'transparent' }}>
                    <View style={{
                        marginTop: (height / width) * 15 + 220,
                        minHeight: height - 200,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        paddingBottom: (width > 280
                            ? width > 310
                                ? width > 350
                                    ? width > 390
                                        ? width > 470
                                            ? 26
                                            : 19.8
                                        : 17
                                    : 13
                                : 12
                            : 10) * 4 * 2.6,
                        paddingHorizontal: 12,
                        backgroundColor: colorСurtain
                    }}>
                        {children[2]}
                    </View>
                </ScrollView>
            </View></>)
    if (gradientEnabled && !colors) {
        throw SyntaxError('Parameter value `colors` is required')
    } else {
        if (gradientEnabled) {
            return (
                <LinearGradient children={content()} style={style} colors={colors!} {...otherProps} />
            )
        }
    }
    return (
        <View children={content()} style={style} {...otherProps} />
    )
}