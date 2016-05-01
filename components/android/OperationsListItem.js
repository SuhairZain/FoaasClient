/**
 * Created by SuhairZain on 1/5/16.
 * Licensed under the MIT License. Read LICENSE prior to usage.
 */

import React, {
    Component,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

{/*<View style={styles.container}>
 <Image style={styles.image} source={require('../../images/bg.png')}/>
 <Text style={styles.title}>{this.props.operation.name}</Text>
 </View>*/}

class OperationsListItem extends Component {
    onPress() {
        console.error('PRESSES');
        this.setState({count: ++this.state.count})
    }

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <TouchableHighlight key={this.props.key}>
                <View style={styles.container} onPress={() => this.onPress}>
                    <Text style={styles.title}>{this.props.name}</Text>
                    <Text>{this.state.count}</Text>
                    {this.props.fields.map(function (field){
                        return (<Text key={field.field}>{field.name}</Text>);
                    })}
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = {
    container: {
        margin: 5
    },

    image: {
        borderRadius: 50,
        height: 100,
        width: 100
    },

    title: {
        fontSize: 20
    }
};

export default OperationsListItem;