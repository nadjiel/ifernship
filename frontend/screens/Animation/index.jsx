import React, { Component } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity, Text } from 'react-native';

class AnimatedExample extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0); // Inicializa o valor da animação como 0
    }

    startAnimation = () => {
        Animated.timing(this.animatedValue, {
            toValue: 1, // Define o valor final da animação como 1
            duration: 1000, // Define a duração da animação em milissegundos
            useNativeDriver: true // Opcional: habilita o uso do driver nativo para melhor desempenho
        }).start();
    }

    render() {
        const animatedStyle = {
            opacity: this.animatedValue // Define a propriedade 'opacity' como o valor da animação
        };

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]} />
                <TouchableOpacity onPress={this.startAnimation} style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar animação</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


