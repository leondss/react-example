import React from 'react';
import {Layout} from 'antd';

const {Header, Content, Footer, Sider} = Layout;

const Layouts = () => (
    <div>
        <Layout>
            <Header/>
            <Content/>
            <Footer/>
        </Layout>
    </div>
);

export default Layouts;