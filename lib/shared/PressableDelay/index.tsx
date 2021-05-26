import React, { FC, useEffect, useRef, useState } from 'react';
import { Pressable, PressableProps } from 'react-native';

interface Props extends PressableProps {
  onPress?: () => void;
  onLongPress?: () => void;
  loading?: boolean;
  style?: {
    [key: string]: string | number;
  }, 
}

export const PressableDelay: FC<Props> = props => {
  const {
    children,
    onPress = () => {},
    onLongPress = () => {},
    loading = false,
    style,
  } = props;

  const [ isDisabled, setIsDisabled ] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  const handlePress = (): void => {
    if (!isDisabled || !loading) {
      setIsDisabled(true);
      onPress();

      timeout.current = setTimeout(() => {
        setIsDisabled(false);
        clearTimeout(timeout.current);
      }, 1000);
    }
  };

  return (
    <Pressable
      {...props}
      onPress={handlePress}
      onLongPress={onLongPress}
      disabled={isDisabled || loading}
      style={style}
    >
      {children}
    </Pressable>
  );
};
