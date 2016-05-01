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
            <OperationsListItem name={operation.name} key={operation.url} fields={operation.fields}/>
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