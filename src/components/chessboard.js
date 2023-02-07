import React, { useRef, useState } from 'react';

import Chessboard from 'react-native-chessboard';
import { Button, View, Image } from 'react-native';
import { PIECES } from '../utils/constants'

const CustomChessboard = () => {

    const chessRef = useRef(null)
    const [chessMoves] = useState([
        { from: 'e2', to: 'e4' },
        { from: 'd2', to: 'd4' },
        { from: 'g1', to: 'f3' },
        { from: 'b2', to: 'b4' },
        { from: 'g2', to: 'g3' },
    ])

    const onClickNextMove = async () => {
        await chessRef.current?.resetBoard();
        var randomMove = chessMoves[Math.floor(Math.random() * chessMoves.length)];
        if (randomMove) {
            setTimeout(async () => await chessRef.current?.move(randomMove), 1000)

        }
    }

    const resetBoard = async () => {
        await chessRef.current?.resetBoard()
    }

    const renderCustomChessPiece = (itemName) => {
        return (
            <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', }}>
                <Image
                    style={[{ width: 50, height: 50, resizeMode: 'cover', borderColor: 'black', borderWidth: 1, }]}
                    source={PIECES[itemName]}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Chessboard ref={chessRef} colors={{ black: "black", white: 'white' }} renderPiece={(item) => renderCustomChessPiece(item)} />
            <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
                <View style={{ padding: 10 }}>
                    <Button title="Random Move" onPress={onClickNextMove} />
                </View>
                <View style={{ padding: 10 }}>
                    <Button title="reset Board" onPress={resetBoard} />
                </View>
            </View>
        </View >
    )

}

export default CustomChessboard
