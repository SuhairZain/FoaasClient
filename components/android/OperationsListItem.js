/**
 * Created by SuhairZain on 1/5/16.
 * Licensed under the MIT License. Read LICENSE prior to usage.
 */

import React, {
    Component,
    Text,
    View
} from 'react-native';

{/*<View style={styles.container}>
 <Image style={styles.image} source={require('../../images/bg.png')}/>
 <Text style={styles.title}>{this.props.operation.name}</Text>
 </View>*/}

class OperationsListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.operation.name}</Text>
                {this.props.operation.fields.map(function (field){
                    return (<Text>{field.name}</Text>);
                })}
            </View>
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