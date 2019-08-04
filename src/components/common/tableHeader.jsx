import React, {Component} from 'react';

//array of headers: (label, path=>define data)
class TableHeader extends Component {
    render() {
        const {columns} = this.props;
        return (
            <thead>
                <tr>
                    {columns.map(column=>(
                        <th key={column.label || column.key}>{column.label}</th>
                    ))}
                </tr>
            </thead>
        );
    }
}


export default TableHeader;
