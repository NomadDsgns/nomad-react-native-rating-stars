import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function({ stars, size, style }) {
    const list = [];
    const sortStars = () => {
        let count = 0;
        while (count < stars) {
            list.push("star");
            count++;
        }
        while (count < 5) {
            list.push("star-o")
            count++;
        }
    }
    sortStars();
    

    return (
        <View style={{ flexDirection: "row", justifyContent: "center", ...style }}>
            {
                list.map((star, index) => {
                    return (<FontAwesome style={styles.star} name={star} key={index} size={size ? size : 24} color="black" />)
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      star: {
        paddingLeft: 2,
        paddingRight: 2,
        color: "#ffd000"
      }
});
