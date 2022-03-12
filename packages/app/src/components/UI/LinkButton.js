import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  Animated,
  Easing,
} from "react-native";
import { useLinkProps } from "@react-navigation/native";

const Animation = ({ children, isHovered }) => {
  const translation = useRef(new Animated.Value(0)).current;
  console.log(isHovered);
  useEffect(() => {
    if (isHovered) {
      handleAnimation();
    } else {
      resetAnimation();
    }
  }, [isHovered]);

  const handleAnimation = () => {
    Animated.timing(translation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };
  const resetAnimation = () => {
    Animated.timing(translation, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              translateX: translation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 2],
              }),
            },
            {
              translateY: translation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1.2],
              }),
            },
            {
              scaleX: translation.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.1],
              }),
            },
            {
              scaleY: translation.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1],
              }),
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const LinkButton = ({ to, action, children, onHover, ...rest }) => {
  const { onPress, ...props } = useLinkProps({ to, action });
  const [isHovered, setIsHovered] = React.useState(false);
  if (Platform.OS === "web") {
    // It's important to use a `View` or `Text` on web instead of `TouchableX`
    // Otherwise React Native for Web omits the `onClick` prop that's passed
    // You'll also need to pass `onPress` as `onClick` to the `View`
    // You can add hover effects using `onMouseEnter` and `onMouseLeave`
    return (
      <View
        onClick={onPress}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transitionDuration: "150ms", opacity: isHovered ? 0.5 : 1 }}
        {...props}
        {...rest}
      >
        <Animation isHovered={isHovered}>
          <Text>{children}</Text>
        </Animation>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} {...props} {...rest}>
      <Animation isHovered={isHovered}>
        <Text>{children}</Text>
      </Animation>
    </TouchableOpacity>
  );
};

export default LinkButton;
