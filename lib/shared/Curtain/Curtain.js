import React from 'react'
import { ScrollView, Dimensions, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default ({
    gradientEnabled = false,
    colors,
    children,
    style = { flex: 1 },
    colorСurtain = '#FFFFFF',
    ...otherProps
}) => {
    const ref = React.useRef<React.LegacyRef<View>>(null),
        { width, height } = Dimensions.get('window'),
        onScroll = (event) => {
            const currentHeight = event.nativeEvent.contentOffset.y,
                maxH = (width / 3.9) * 1.1;
            ref.current?.setNativeProps({ style: { zIndex: currentHeight > 24 ? -1 : 1 } })
            if (currentHeight > 0 && currentHeight < maxH) {
                return ref.current?.setNativeProps({ style: { opacity: 1 - event.nativeEvent.contentOffset.y / maxH } })
            }
        },
        content = () => (<>{children[0]}
            <View>
                <View ref={ref} style={[{
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
                <LinearGradient children={content()} style={style} colors={colors} {...otherProps} />
            )
        }
    }
    return (
        <View children={content()} style={style} {...otherProps} />
    )
}