/**
 * Created by SuhairZain on 1/5/16.
 * Licensed under the MIT License. Read LICENSE prior to usage.
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import LoadingSplashView from './components/android/LoadingSplashView';
import OperationsView from './components/android/OperationsView';

class FoaasClient extends Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false
        };
    }

    render() {
        return this.state.loaded?<OperationsView/>:<LoadingSplashView/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('FoaasClient', () => FoaasClient);
