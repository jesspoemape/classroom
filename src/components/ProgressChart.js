import React from 'react';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { View } from 'react-native';
import moment from 'moment';

const ProgressChart = ({ data }) => {
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30

        // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
        // All react-native-svg-charts components support full flexbox and therefore all
        // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
        // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
        // and then displace the other axis with just as many pixels. Simple but manual.

    return (
        <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
            <YAxis
                data={data}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
                numberOfTicks={10}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={{ top: 20, bottom: 20 }}
                >
                    <Grid />
                </LineChart>
                <XAxis 
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={data}
                    formatLabel={(value, index) => moment(`Aug ${index + 1}, 2018`, 'MMM D, YYYY').format('MM-D-YY')}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ ...axesSvg, rotation: 20, originY: 30, y: 5 }}
                    numberOfTicks={5}
                />
            </View>
        </View>
        
    );
}

export default ProgressChart;
