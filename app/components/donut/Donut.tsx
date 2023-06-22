import {StyleSheet, View, Animated, TextInput, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Svg, {G, Circle} from 'react-native-svg';
import {Colors} from '../../assets/constants';
import {DonutValues} from '../../types/typings';
import {Text} from '../Text';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Donut = (donut: DonutValues) => {
  const planType: string = 'Basic';
  const planTypeDesc: string =
    'Expected dividends \n 50% Needs \n 30% Wants \n 20% Savings';

  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const animatedValue2 = React.useRef(new Animated.Value(0)).current;
  const animatedSavings = React.useRef(new Animated.Value(0)).current;

  const orangeCircleRef = React.useRef<any>();
  const greenCircleRef = React.useRef<any>();
  const blueCircleRef = React.useRef<any>();

  const halfCircle = donut.radius + donut.strokeWidth;
  const circleCircumference = 2 * Math.PI * donut.radius;

  const animation = (toValue: number, animatedValue: Animated.Value) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration: donut.duration,
      delay: donut.delay,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(donut.monthlyIncome, animatedValue);
    animation(donut.wants, animatedValue2);
    animation(donut.savings, animatedSavings);

    animatedValue.addListener(v => {
      if (orangeCircleRef?.current) {
        const maxPerc = (100 * v.value) / donut.monthlyIncome;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        orangeCircleRef.current.setNativeProps({strokeDashoffset});
      }
    });

    animatedValue2.addListener(v => {
      if (greenCircleRef?.current) {
        const maxPerc = (100 * v.value) / donut.monthlyIncome;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        greenCircleRef.current.setNativeProps({strokeDashoffset});
      }
    });

    animatedSavings.addListener(v => {
      if (blueCircleRef?.current) {
        const maxPerc = (100 * v.value) / donut.monthlyIncome;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        blueCircleRef.current.setNativeProps({strokeDashoffset});
      }
    });

    return () => {
      animatedValue.removeAllListeners();
      animatedValue2.removeAllListeners();
      animatedSavings.removeAllListeners();
    };
  }, [donut.monthlyIncome]);

  return (
    <View style={styles.donutShadow}>
      <Svg
        width={donut.radius * 2}
        height={donut.radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-180" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={donut.color}
            strokeWidth={donut.strokeWidth}
            r={donut.radius}
            fill="transparent"
            strokeOpacity={0.2}
          />

          <AnimatedCircle
            ref={orangeCircleRef}
            cx="50%"
            cy="50%"
            stroke={Colors.orange300}
            strokeWidth={donut.strokeWidth}
            r={donut.radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
          <AnimatedCircle
            ref={greenCircleRef}
            cx="50%"
            cy="50%"
            stroke={Colors.green300}
            strokeWidth={donut.strokeWidth}
            r={donut.radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
          <AnimatedCircle
            ref={blueCircleRef}
            cx="50%"
            cy="50%"
            stroke={Colors.blue300}
            strokeWidth={donut.strokeWidth}
            r={donut.radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <View style={[StyleSheet.absoluteFillObject, styles.planDescContainer]}>
        <Text style={[styles.inputText, {fontSize: donut.radius / 5}]}>
          {planType} Plan
        </Text>
        <Text style={[styles.planDesc, {fontSize: donut.radius / 12}]}>
          {planTypeDesc}
        </Text>
      </View>
    </View>
  );
};

export default Donut;

const styles = StyleSheet.create({
  planDescContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  planDesc: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'NotoSans-Thin',
  },
  inputText: {
    textAlign: 'center',
    fontFamily: 'NotoSans-Thin',
  },
  donutShadow: {
    shadowColor: Colors.foreground,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
