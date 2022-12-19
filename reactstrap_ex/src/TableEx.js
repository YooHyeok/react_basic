import { Component } from "react";
import { Table } from "reactstrap";

class TableEx extends Component {
    render() {
        return(
            <Table border="true" striped hover size='sm'> {/* borderless, bordered, border="true", striped, hover, dark */}
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>React start</td>
                        <td>$2000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>React start2</td>
                        <td>$2000</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>React start3</td>
                        <td>$3000</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>React start4</td>
                        <td>$4000</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}
export default TableEx;