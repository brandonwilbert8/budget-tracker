import {StyleSheet, View} from 'react-native';
import React from 'react';
import Svg, {G, Circle} from 'react-native-svg';
import {Colors} from '../../assets/constants';
import {DonutValues} from '../../types/typings';
import {Text} from '../Text';
import CircleGraph from './CircleGraph';

interface PlanType {
  wants: number;
  needs: number;
  savings: number;
}

const HomeDonut = (donut: DonutValues) => {
  const desc: string = 'Total Spending';
  const halfCircle = donut.radius + donut.strokeWidth;
  const planType: PlanType = {wants: 0.3, needs: 0.5, savings: 0.2};
  return (
    <View>
      <Svg
        style={styles.donutShadow}
        width={donut.radius * 2}
        height={donut.radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={donut.color}
            strokeWidth={donut.strokeWidth}
            r={donut.radius}
            fill="transparent"
            strokeOpacity={0.2}
          />

          <CircleGraph
            color={Colors.orange300}
            strokeWidth={donut.strokeWidth}
            radius={donut.radius}
            value={2000}
            percentageValue={planType.needs}
            totalPrecedingSegments={0}
            isFill={true}
            amountSoFar={1000}
          />

          <CircleGraph
            color={Colors.blue300}
            strokeWidth={donut.strokeWidth}
            radius={donut.radius}
            value={800}
            percentageValue={planType.savings}
            totalPrecedingSegments={0.5}
            firstSegmentOffset={0.5}
            isFill={true}
            amountSoFar={700}
          />

          <CircleGraph
            color={Colors.green300}
            strokeWidth={donut.strokeWidth}
            radius={donut.radius}
            value={1200}
            percentageValue={planType.wants}
            totalPrecedingSegments={0.7}
            firstSegmentOffset={0.5}
            isFill={true}
            amountSoFar={900}
          />
        </G>
      </Svg>
      <View style={[StyleSheet.absoluteFillObject, styles.planDescContainer]}>
        <Text style={[styles.inputText, {fontSize: donut.radius / 10}]}>
          {desc}
        </Text>
        <Text style={[styles.planDesc, {fontSize: donut.radius / 4}]}>
          {`$100`}
        </Text>
      </View>
    </View>
  );
};

export default HomeDonut;

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
