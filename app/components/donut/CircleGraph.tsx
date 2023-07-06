import {StyleSheet, View, Animated, TextInput, Dimensions} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Svg, {G, Circle} from 'react-native-svg';
import {Colors} from '../../assets/constants';
import {DonutValues} from '../../types/typings';
import {Text} from '../Text';
import {
  calculateStrokeDasharray,
  calculateStrokeDashoffset,
  calculateFillPercentage,
  calculateStrokeDasharrayOnFill,
} from '../../utils/helper';

interface CircleAssets {
  color: string;
  strokeWidth: number;
  radius: number;
  value: number;
  percentageValue: number;
  totalPrecedingSegments: number;
  firstSegmentOffset?: number;
  isFill: boolean;
  amountSoFar?: number;
  overview?: boolean;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const animation = (toValue: number, animatedValue: Animated.Value) => {
  return Animated.timing(animatedValue, {
    toValue,
    duration: 1000,
    delay: 0,
    useNativeDriver: true,
  }).start();
};

const CircleGraph = ({
  color,
  strokeWidth,
  radius,
  value,
  percentageValue,
  totalPrecedingSegments,
  firstSegmentOffset,
  isFill,
  amountSoFar,
  overview,
}: CircleAssets) => {
  const circleRef = useRef<any>();
  const circleRefFill = useRef<any>();
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const circleCircumference = 2 * Math.PI * radius;
  useEffect(() => {
    animation(value, animatedValue);

    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const strokeDasharray = calculateStrokeDasharray(
          circleCircumference,
          percentageValue
        );
        const strokeDashoffset = calculateStrokeDashoffset(
          circleCircumference,
          circleCircumference * totalPrecedingSegments,
          firstSegmentOffset
        );

        circleRef.current.setNativeProps({
          strokeDashoffset,
          strokeDasharray,
        });
      }

      if (circleRefFill?.current) {
        const fillPercentage = calculateFillPercentage(amountSoFar!, v.value);
        const strokeDasharray = calculateStrokeDasharrayOnFill(
          circleCircumference,
          percentageValue!,
          fillPercentage
        );
        const strokeDashoffset = calculateStrokeDashoffset(
          circleCircumference,
          circleCircumference * totalPrecedingSegments,
          firstSegmentOffset
        );
        if (!strokeDasharray.includes(Infinity || NaN)) {
          circleRefFill.current.setNativeProps({
            strokeDashoffset,
            strokeDasharray,
          });
        }
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  });

  return (
    <>
      <AnimatedCircle
        ref={circleRef}
        cx="50%"
        cy="50%"
        stroke={color}
        strokeWidth={strokeWidth}
        r={radius}
        fill="transparent"
        strokeDasharray={circleCircumference}
        strokeDashoffset={circleCircumference}
        strokeLinecap={overview ? 'round' : 'butt'}
        strokeOpacity={overview ? 1 : 0.3}
      />

      {isFill ? (
        <AnimatedCircle
          ref={circleRefFill}
          cx="50%"
          cy="50%"
          stroke={color}
          strokeWidth={strokeWidth}
          r={radius}
          fill="transparent"
          strokeDasharray={circleCircumference}
          strokeDashoffset={circleCircumference}
          strokeLinecap="butt"
          strokeOpacity={1}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default CircleGraph;

const styles = StyleSheet.create({});
