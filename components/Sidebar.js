import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Hearth from './common/Hearth';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.title}>
                            <Text style={styles.sectionHeadingStyle}>
                                3Lives
                            </Text>
                            <Hearth />
                            <Hearth />
                            <Hearth />
                        </View>
                        <View>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                                Home
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('About')}>
                                About
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text>alejandrogvillarreal</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    },
    title: {
        flexDirection: 'row',
        alignItems: "center"
    },
    sectionHeadingStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        padding: 20,
    },
    navItemStyle: {
        padding: 20,
    },
    footerContainer: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;