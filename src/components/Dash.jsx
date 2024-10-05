import './dash.css'


const SidePanel = () => {
    const transactions = [
      {name: 'Bitcoin', icon: 'fab fa-btc', abbr: 'BTC', price: '1,849.32', date:'19 Aug 2021'},
      {name: 'Ethereum', icon: 'fab fa-ethereum', abbr: 'ETH', price: 143.12, date:'19 Aug 2021'},
      {name: 'Bitcoin', icon: 'fab fa-btc', abbr: 'BTC', price: 43.19, date:'17 Aug 2021'},
    ];
    const transactions_list = transactions.map((item, key) => {
      return (
          <div className="transaction-item flex-row text-medium"><i className={item.icon}></i>
          <div className="flex-row flex-apart">
            <div>
            <span className="text-small"></span>{item.name}<div className="text-small">{item.abbr}</div>
            </div>
            <div className="transaction-price">
              <div><span className="text-small">£</span>{item.price}</div><div className="text-small">{item.date}</div>
            </div>
          </div>
          </div>
      )
    })
    return (
        <div id="app-sidepanel">
          <div className="flex-row flex-apart">
            <i className="fa fa-bell header-icon"></i>
            <i className="fa fa-user header-icon"></i>
          </div>
          <h3 className="text-medium">
              Your Cards
          </h3>
          <img src="https://i.pinimg.com/originals/f0/ae/1c/f0ae1cc9cc1a8fb481aba314352a04dd.png"></img>
        <div className="flex-center flex-row">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
        <h3 className="text-medium">
              Recent Transations
          </h3>
        {transactions_list}
        <div id="upgrade-area" className="flex-center flex-column text-small">
          <i className="fas fa-shield-alt"></i>
          <span className="flex-center">Be more secure with pro features</span>
          <button className="text-small"> Upgrade Now! </button>
        </div>
     </div>
    )
  }
  const Dashboard = () => {
    return (
        <div className="flex-column" id="app-dashboard">
          <div className="flex-row flex-apart" id="dashboard-header">
            <div>
              <h1>Dashboard</h1>
              <h2>16:20 PM * 02 Aug 2021</h2>
            </div>
            <div>
              <input placeholder="Search.." id="app-search"></input>
              <i className="fa fa-search"></i>
            </div>
          </div>
          <div className="flex-apart flex-column" id="dashboard-charts">
            <div className="flex-row dashboard-row">
              <div className="dashboard-container">
                <div className="dashboard-item">
                <div className="dashboard-container-logo"><img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=013"></img></div>
                <div className="flex-row flex-apart">
                  <div className="text-small">
                    BTC <i style={{'margin':'0 5px'}} className="fas fa-arrows-alt-h"></i> GBP
                  </div>
                  <div className="text-small success">5.23%%</div>
                </div>
                <div className="text-large"><span className="text-small">£ </span>28,642.33</div>
                <div className="chart-container">
                  <table class="charts-css line app-chart" id="chart1">
                  <tbody>
                    <tr><td style={{"--start": 0.0,"--size": 0.4}}></td></tr>
                    <tr><td style={{"--start": 0.4,"--size": 0.2}}></td></tr>
                    <tr><td style={{"--start": 0.2,"--size": 0.6}}></td></tr>
                    <tr><td style={{"--start": 0.6,"--size": 0.8}}></td></tr>
                    <tr><td style={{"--start": 0.8,"--size": 0.8}}></td></tr>
                    <tr><td style={{"--start": 0.8,"--size": 0.6}}></td></tr>
                    <tr><td style={{"--start": 0.6,"--size": 1.0}}></td></tr>
                  </tbody>
                </table>
                  <div className="chart-overlay"></div>
                </div>
                </div>
              </div>
              <div className="dashboard-container">
                <div className="dashboard-item">
                <div className="dashboard-container-logo"><img src="https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=013"></img></div>
                <div className="flex-row flex-apart">
                  <div className="text-small">
                    LTC <i style={{'margin':'0 5px'}} className="fas fa-arrows-alt-h"></i> GBP
                  </div>
                  <div className="text-small alert">2.83%%</div>
                </div>
                <div className="text-large"><span className="text-small">£ </span>103.26</div>
                <div className="chart-container">
                  <table class="charts-css line app-chart" id="chart2">
                  <tbody>
                    <tr><td style={{"--start": 0.0,"--size": 0.0}}></td></tr>
                    <tr><td style={{"--start": 0.0,"--size": 0.5}}></td></tr>
                    <tr><td style={{"--start": 0.5,"--size": 0.3}}></td></tr>
                    <tr><td style={{"--start": 0.3,"--size": 0.2}}></td></tr>
                    <tr><td style={{"--start": 0.2,"--size": 0.8}}></td></tr>
                    <tr><td style={{"--start": 0.8,"--size": 0.6}}></td></tr>
                    <tr><td style={{"--start": 0.6,"--size": 0.5}}></td></tr>
                  </tbody>
                </table>
                  <div className="chart-overlay"></div>
                </div>
                </div>
              </div>
              <div className="dashboard-container">
                <div className="dashboard-item">
                <div className="dashboard-container-logo"><img src="https://cryptologos.cc/logos/amp-amp-logo.png?v=013"></img></div>
                <div className="flex-row flex-apart">
                  <div className="text-small">
                    AMP <i style={{'margin':'0 5px'}} className="fas fa-arrows-alt-h"></i> GBP
                  </div>
                  <div className="text-small success">11.13%%</div>
                </div>
                <div className="text-large"><span className="text-small">£ </span>259.42</div>
                <div className="chart-container">
                  <table class="charts-css line app-chart" id="chart3">
                  <tbody>
                    <tr><td style={{"--start": 0.0,"--size": 0.4}}></td></tr>
                    <tr><td style={{"--start": 0.4,"--size": 0.2}}></td></tr>
                    <tr><td style={{"--start": 0.2,"--size": 0.4}}></td></tr>
                    <tr><td style={{"--start": 0.4,"--size": 0.4}}></td></tr>
                    <tr><td style={{"--start": 0.4,"--size": 0.7}}></td></tr>
                    <tr><td style={{"--start": 0.7,"--size": 0.8}}></td></tr>
                    <tr><td style={{"--start": 0.8,"--size": 1.0}}></td></tr>
                  </tbody>
                </table>
                  <div className="chart-overlay"></div>
                </div>
              </div>
              </div>
            </div>
            <div className="flex-row dashboard-row-large">
              <div className="dashboard-container dashboard-container-large">
                <div className="dashboard-item flex-column">
                  <div className="chart-header flex-row flex-apart">
                    <h3 className="text-medium">Market Overview</h3>
                    <div className="text-small dropdown">
                      Yearly <i className="fa fa-chevron-down"></i>
                    </div>
                  </div>
                  <table id="chart4" className="charts-css line multiple hide-data show-labels"><caption> Line Example #16 </caption> <thead><tr><th scope="col"> Year </th> <th scope="col"> Progress 1 </th> <th scope="col"> Progress 2 </th> <th scope="col"> Progress 3 </th></tr></thead> <tbody><tr><th scope="row" className="text-small"> 2000 </th> <td style={{"--start":0.1, "--size":0.5}}><span className="data"> 50 </span></td> <td style={{"--start":0, "--size":0.2}}><span className="data"> 20 </span></td> <td style={{"--start":0.2, "--size":0.4}}><span className="data"> 40 </span></td></tr> <tr><th scope="row" className="text-small"> 2010 </th> <td style={{"--start":0.5, "--size":0.8}}><span className="data"> 80 </span></td> <td style={{"--start":0.2, "--size":0.5}}><span className="data"> 50 </span></td> <td style={{"--start":0.4, "--size":0.1}}><span className="data"> 10 </span></td></tr> <tr><th scope="row" className="text-small"> 2020 </th> <td style={{"--start":0.8, "--size":0.4}}><span className="data"> 40 </span></td> <td style={{"--start":0.5, "--size":0.3}}><span className="data"> 30 </span></td> <td style={{"--start":0.1, "--size":0.2}}><span className="data"> 20 </span></td></tr></tbody><div className="chart-overlay"></div></table>
                  <div className="flex-center flex-row text-medium">
                    <div className="flex-row">
                      <span className="chart-legend-circle" style={{"background": "#f79319"}}></span> BTC
                    </div>
                    <div className="flex-row">
                      <span className="chart-legend-circle" style={{"background": "#345d9d"}}></span> LTC
                    </div>
                    <div className="flex-row">
                      <span className="chart-legend-circle" style={{"background": "#d9327b"}}></span> AMP
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-column dashboard-column">
              <div className="dashboard-container">
                <div className="dashboard-item">
                  <div className="chart-header flex-row flex-apart">
                    <h3 className="text-medium">Profit</h3>
                  </div>
                  <div className="flex-column">
                    <div className="profit-item flex-row text-medium"><i className="fa fa-arrow-up success"></i><span><span className="text-small">£</span>6,969.45<div className="text-small">Income</div></span></div>
                    <div className="profit-item flex-row text-medium"><i className="fa fa-arrow-down alert"></i><span><span className="text-small">£</span>420.12<div className="text-small">Expenses</div></span></div>
                  </div>
                </div>
              </div>
              <div className="dashboard-container">
                <div className="dashboard-item" id="transfer-now">
                  <div className="chart-header flex-row flex-apart">
                    <h3 className="text-medium">Quick Transfer</h3>
                  </div>
                  <div className="flex-row flex-apart"><input placeholder="To.."></input></div>
                  <div className="flex-row flex-apart"><input placeholder="Amount.."></input></div>
                  <button className="text-medium"> Transfer Now </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
  const Nav = () => {
    const nav_items = [
      {name: 'Home', icon: 'fa fa fa-home', active: true},
      {name: 'Reports', icon: 'fa fa-chart-pie'},
      {name: 'Statistics', icon: 'fa fa-chart-bar'},
      {name: 'Trade', icon: 'fas fa-coins'},
      {name: 'Wallet', icon: 'fa fa-wallet'},
      {name: 'Settings', icon: 'fa fa-cog'},
    ];
    const nav = nav_items.map((item, key) => {
      return (
        <div key={key} className={'nav-item flex-center ' + (item.active ? 'active' : '')}>
          <i class={item.icon}></i>
        </div>
      )
    })
    return (
        <div id="app-nav">
        <div className="flex-center">
          <img id="logo" src="https://image.flaticon.com/icons/png/512/187/187902.png"></img>
        </div>
          <div>
           {nav}
          </div>
        </div>
    )
  }
  
 
 

  export default Dashboard;
