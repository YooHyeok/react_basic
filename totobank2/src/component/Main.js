import {Component} from 'react';
import {Table} from 'reactstrap';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

class Main extends Component {
    render() {
        return(
            <div className='main'>
                <Table borderless size='sm'> 
                    <tbody>
                        <Section0/><hr/>
                        <Section1/><hr/>
                        <Section2/><hr/>
                        <Section3/><hr/>
                        <Section4/><hr/>
                        <Section5/><hr/>
                        <Section6/><hr/>
                        <Section7/>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Main;