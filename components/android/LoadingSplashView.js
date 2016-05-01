/**
 * Created by suhairzain on 1/5/16.
 */

import React, {
    Component,
    Image,
    StyleSheet,
    Text
} from 'react-native';

class LoadingSplashView extends Component{
    render(){
        return (
            <Image
                source={require('../../images/bg.png')}
                style={styles.container}>
                <Text style={styles.splashTitle}>Fuck Off As A Service</Text>
                <Text style={styles.splashDesc}>Created by Suhair Zain using the foaas.com API</Text>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: null,
        justifyContent: 'center',
        width: null
    },

    splashTitle: {
        color: '#fff',
        fontSize: 27,
        textAlign: 'center'
    },

    splashDesc: {
        color: '#aaa',
        fontSize: 12,
        textAlign: 'center'
    }
});

export default LoadingSplashView;