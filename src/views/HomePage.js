import React from 'react';
import { View } from 'react-native';
import CustomChessboard from '../components/chessboard';

const HomePage = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <CustomChessboard />
        </View>
    )
}

export default HomePage