import React, {Component} from 'react';
import Button from 'antd/lib/button';

const ButtonGroup = Button.Group;


class Buttons extends Component {

    state = {
        loading: false
    };

    enterLoading = () => {
        this.setState({loading: true});
    };

    render() {
        return (
            <div>
                <Button type="primary">Button</Button>
                <Button type="primary" icon="search">Icon Button</Button>
                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Loading</Button>
                <Button type="primary" shape="circle">Circle</Button>
                <Button type="primary" size="large">large</Button>
                <ButtonGroup>
                    <Button>cancel</Button>
                    <Button type="primary">ok</Button>
                </ButtonGroup>
            </div>
        );
    }
}


export default Buttons;