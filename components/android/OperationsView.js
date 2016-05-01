/**
 * Created by SuhairZain on 1/5/16.
 * Licensed under the MIT License. Read LICENSE prior to usage.
 */

import React, {
    Component,
    ListView
} from 'react-native';

import OperationsListItem from './OperationsListItem';

class OperationsView extends Component {
    renderOperation(operation) {
        return (
            <OperationsListItem operation={operation}/>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.props.operations}
                renderRow={this.renderOperation}/>
        );
    }
}

export default OperationsView;