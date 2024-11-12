import React, { Component } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import './StockTable.css';

interface StockData {
  company: string;
  symbol: string;
  price: number;
  change: number;
  volume: string;
}

interface State {
  stocks: StockData[];
}

class StockTable extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      stocks: [
        { company: 'BK Group', symbol: 'BOK', price: 300.93, change: 1.2, volume: '52.4M' },
        { company: 'Bralirwa', symbol: 'BBL', price: 420.69, change: -0.8, volume: '28.1M' },
        { company: 'Ndayiagiwe', symbol: 'YOOO', price: 69.75, change: 2.3, volume: '31.2M' },
       
      ]
    };
  }

  render() {
    return (
      <div className="stock-table-container">
        <div className="stock-header">
          <h2>Market Watch</h2>
          <span className="update-badge">Live</span>
        </div>
        <div className="stocks-wrapper">
          {this.state.stocks.map((stock) => (
            <div key={stock.symbol} className="stock-card">
              <div className="stock-info">
                <div className="stock-name">
                  <span className="symbol">{stock.symbol}</span>
                  <span className="company">{stock.company}</span>
                </div>
                <div className="stock-price">
                  <span className="price">${stock.price}</span>
                  <span className={`change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                    {stock.change >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    {Math.abs(stock.change)}%
                  </span>
                </div>
              </div>
              <div className="stock-volume">
                <span className="volume-label">Volume:</span>
                <span className="volume-value">{stock.volume}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StockTable; 