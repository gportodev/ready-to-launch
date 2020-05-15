import Svg, {Text, Image} from 'react-native-svg';
import LottieView from 'lottie-react-native';
import React from 'react';
import {View, Button} from 'react-native';

import dev from './assets/devcoffecode.png';
import rocket from './animations/rocket.json';

export default class SvgExample extends React.Component {
  launchRocket = () => {
    this.rocket.play();
  };

  render() {
    return (
      <View
        style={[
          {
            flex: 1,
            backgroundColor: '#7159c1',
          },
        ]}>
        <LottieView
          ref={(rocket) => {
            this.rocket = rocket;
          }}
          source={rocket}
        />

        <View>
          <Svg>
            <Image
              x="1"
              y="0"
              width="100%"
              preserveAspectRatio="xMidYMid slice"
              opacity="0.1"
              href={dev}
            />

            <Text
              x="220"
              y="100"
              textAnchor="middle"
              fontWeight="bold"
              fontSize="48"
              opacity="0.6"
              fill="#ffff">
              RocketSeat
            </Text>
          </Svg>
        </View>

        <View style={{marginTop: -100, alignItems: 'center'}}>
          <Button
            title="Ready to launch?"
            color="#400080"
            onPress={this.launchRocket}
          />
        </View>
      </View>
    );
  }
}
