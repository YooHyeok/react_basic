import { Component } from "react";
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";


class PopoverEx extends Component {
    render() {
        return(
            <>
                <Button id="popover_id" type="button">
                    Popover button
                </Button>
                <UncontrolledPopover placement="bottom" target="popover_id"> {/* left right bottom top */}
                    <PopoverHeader>React start</PopoverHeader>
                    <PopoverBody>
                        Aenean id magna id rsius congue ornare.
                        Vestibulum sed diam et mi pulvinar facilisis sed eu rusus.
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default PopoverEx;