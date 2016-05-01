/**
 * Created by SuhairZain on 1/5/16.
 * Licensed under the MIT License. Read LICENSE prior to usage.
 */

import React, {
    AppRegistry,
    Component,
    ListView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import LoadingSplashView from './components/android/LoadingSplashView';
import OperationsView from './components/android/OperationsView';

import FOAAS_BASE_URL from './components/Endpoint';

class FoaasClient extends Component {
    constructor(props){
        super(props);
        this.state = {
            operations: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        };
    }

    componentDidMount() {
        fetch(FOAAS_BASE_URL + 'operations').
            then((response) => response.json()).
            then((response) => {
                this.setState({
                    operations: this.state.operations.cloneWithRows(response),
                    loaded: true
                })
        }).done()
    }

    render() {
        return this.state.loaded?<OperationsView operations={this.state.operations}/>:<LoadingSplashView/>;
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
