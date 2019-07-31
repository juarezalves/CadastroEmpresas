import React, {Component} from 'react';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import { Form, Input, Button, Radio } from 'antd';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

export default class Usuario extends React.Component {

    handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
    };

    render (){
        return (
            <StickyContainer >
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} className="formularios">
                    <TabPane tab="Identidade" key="1" style={{ height: 600 }}>       
                        <div >
                            <Form >         
                                <Form.Item  >
                                    <Input placeholder="Nome" />
                                </Form.Item>         
                                <Form.Item  >
                                    <Input placeholder="CNPJ" />
                                </Form.Item>
                                <Form.Item >
                                    <Input placeholder="Telefone" />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" block>Alterar</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </TabPane>
                    <TabPane tab="Residência" key="2" style={{ height: 600 }}>
                    <div >
                            <Form >         
                                <Form.Item  >
                                    <Input placeholder="Logradouro" />
                                </Form.Item>         
                                <Form.Item  >
                                    <Input placeholder="Bairro" />
                                </Form.Item>
                                <Form.Item >
                                    <Input placeholder="Cidade" />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" block>Alterar</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </TabPane>
                    <TabPane tab="Conta Bancária" key="3" style={{ height: 600 }}>
                    <div >
                            <Form >         
                                <Form.Item  >
                                    <Input placeholder="Banco" />
                                </Form.Item>         
                                <Form.Item  >
                                    <Input placeholder="Agência" />
                                </Form.Item>
                                <Form.Item >
                                    <Input placeholder="Conta" />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" block>Alterar</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </TabPane>
                </Tabs>
            </StickyContainer>
 
        );
    }
}