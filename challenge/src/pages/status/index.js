import React, {Component} from 'react';
import { Card, Row, Col} from 'antd';
import { Table } from 'antd';

import './styles.css';

const columns = [
    {
      title: 'Hash',
      dataIndex: 'name',
      
    },
    {
      title: 'Valor',
      className: 'column-money',
      dataIndex: 'money',
    },
    {
      title: 'Status',
      dataIndex: 'address',
    },
];
  
const data = [
    {
      key: '1',
      name: 'dfkdlakflglherrtrtrdfdgfgstrtsfgfdfgfgd',
      money: '0.02541254',
      address: 'Indisponível',
    },
    {
      key: '2',
      name: 'dfkdlakflglherrtrtrdfdgfgstrtsfgfdfgfgd',
      money: '0.02541254',
      address: 'Indisponível',
    },
    {
      key: '3',
      name: 'dfkdlakflglherrtrtrdfdgfgstrtsfgfdfgfgd',
      money: '0.02541254',
      address: 'Indisponível',
    },
    {
      key: '4',
      name: 'dfkdlakflglherrtrtrdfdgfgstrtsfgfdfgfgd',
      money: '0.02541254',
      address: 'Indisponível',
    },
    {
      key: '5',
      name: 'dfkdlakflglherrtrtrdfdgfgstrtsfgfdfgfgd',
      money: '0.02541254',
      address: 'Indisponível',
    },
    {
      key: '6',
      name: 'dfkdlakflglherrtrtrdfdgfgstrtsfgfdfgfgd',
      money: '0.02541254',
      address: 'Indisponível',
    }
];

export default class Status extends React.Component{

    render (){
        return (
            <layout>
                <div className="logos">
                    <Row gutter={16} type="flex" justify="center">
                        <Col span={6}>
                            <Card className="card" actions                               
                                cover={
                                    <img
                                        alt="bitcoin"
                                        src="https://omnes-pay.s3-sa-east-1.amazonaws.com/coins/btc.png"
                                    />
                                }
                            >   
                                <div className = "info"> 
                                    <strong>Bitcoin</strong>
                                    <article>0.02541254 BTC = R$ 200,00</article>
                                    <strong>R$ 48.000,00</strong>
                                </div> 
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card className="card"                                
                                cover={
                                    <img
                                        alt="ethereum"
                                        src="https://omnes-pay.s3-sa-east-1.amazonaws.com/coins/eth.png"
                                    />
                                }    
                            >                   
                                <div className = "info">
                                    <strong>Ethereum</strong>
                                    <article>0.02541254 ETH = R$ 200,00</article>
                                    <strong>R$ 1.400,00</strong>
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card className="card"                                 
                                cover={
                                    <img
                                        alt="real"
                                        src="https://image.flaticon.com/icons/svg/300/300283.svg"        
                                    />      
                                }    
                            >              
                                <div className = "info">
                                    <strong>Real</strong>     
                                    <p>R$ 400,00</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="tabela">
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered    
                    />
                </div>
            </layout>
        );
    }
}



