
import { Component } from 'react';
import { Table, Tag } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import './StockTable.css';

interface Stock {
  company: string;
  symbol: string;
  price: number;
  change: number;
  volume: string;
}

interface State {
  stocks: Stock[];
}

class StockTable extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      stocks: [
        { company: 'BK Group', symbol: 'BOK', price: 300.93, change: 1.2, volume: '52.4M' },
        { company: 'Bralirwa', symbol: 'BBL', price: 420.69, change: -0.8, volume: '28.1M' },
        { company: 'Ndayiagiwe', symbol: 'YOOO', price: 69.75, change: 2.3, volume: '31.2M' },
        { company: 'Crystal Ventures', symbol: 'CVL', price: 156.32, change: -1.5, volume: '45.7M' },
        { company: 'Bank of Africa', symbol: 'BOA', price: 89.45, change: 0.7, volume: '33.9M' },
      ]
    };
  }

  render() {
    const columns = [
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        render: (text: string, record: Stock) => (
          <div className="company-cell">
            <span className="company-name">{text}</span>
            <span className="company-symbol">{record.symbol}</span>
          </div>
        ),
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (price: number) => (
          <span className="price-value">
            ${price.toFixed(2)}
          </span>
        ),
      },
      {
        title: 'Change',
        dataIndex: 'change',
        key: 'change',
        render: (change: number) => (
          <div className={`change-cell ${change >= 0 ? 'positive' : 'negative'}`}>
            {change >= 0 ? <CaretUpOutlined /> : <CaretDownOutlined />}
            <span>{Math.abs(change)}%</span>
          </div>
        ),
      },
      {
        title: 'Volume',
        dataIndex: 'volume',
        key: 'volume',
        render: (volume: string) => (
          <Tag className="volume-tag">{volume}</Tag>
        ),
      },
    ];

    return (
      <div className="stock-table-container">
        <h2 className="table-title">Market Overview</h2>
        <Table 
          columns={columns}
          dataSource={this.state.stocks}
          pagination={false}
          className="stock-table"
          rowKey="symbol"
        />
      </div>
    );
  }
}

export default StockTable;