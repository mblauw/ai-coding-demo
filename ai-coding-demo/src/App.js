import './App.css';
import Logo from './logo.png';

function App() {
  const userFirstName = 'John';
  const creditCardAccounts = [
    {
      cardNumber: '1234 5678 9012 3456',
      rewardsBalance: 0,
      currentBalance: 1500.0,
      cardName: 'Discover It Miles'
    },
    {
      cardNumber: '1234 5678 9012 3456',
      rewardsBalance: 200.0,
      currentBalance: 1800.0,
      cardName: 'Discover It Miles'
    },
    {
      cardNumber: '9876 5432 1098 7654',
      rewardsBalance: 100.0,
      currentBalance: 2300.0,
      cardName: 'Discover It'
    }
    // Add more credit card accounts as needed
  ];

  const NavigationBar = ({ onLogout }) => {
    return (
      <nav className="navigation-bar">
        <div className="logo">
          <div className="logo-container">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <button className="logout-button" onClick={onLogout}>Log Out</button>
      </nav>
    );
  };

  const SecondaryHeader = ({ firstName }) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greeting;
    let circleColor;
  
    if (hours < 12) {
      greeting = 'Good morning';
      circleColor = 'orange';
    } else if (hours < 18) {
      greeting = 'Good afternoon';
      circleColor = 'orange';
    } else {
      greeting = 'Good evening';
      circleColor = 'darkblue';
    }
  
    return (
      <div className="secondary-header">
        <div className="half-circle" style={{ backgroundColor: circleColor }}></div>
        <p className="greeting">{greeting}, {firstName}!</p>
      </div>
    );
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

  //function to sort the credit card accounts by cardName and then by availableBalance
  creditCardAccounts.sort((a, b) => {
    if (a.cardName < b.cardName) {
      return -1;
    }
    if (a.cardName > b.cardName) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="app">
      <NavigationBar onLogout={handleLogout} />
      <SecondaryHeader firstName={userFirstName} />
      <CreditCardAccountList accounts={creditCardAccounts} />
    </div>
  );
}

const CreditCardAccount = ({ account }) => {
  return (
    <div className="credit-card-account">
      <div className="card-header">
        <div className="card-top-left">
          <div className="card-name">{account.cardName}</div>
          <div className="card-number">{account.cardNumber.slice(-4)}</div>
        </div>
        <div className="card-top-right">
          <div className="balance-amount">${account.currentBalance}</div>
          <div className="balance-label">Current Balance</div>
        </div>
        
      </div>
      <div className="card-footer">
        <div className="balance">
          <a href="#">Pay Bill   </a>
          <a href="#">Statement</a>
        </div>
        <div className="expiry">
          <div className="expiry-date">${account.rewardsBalance}</div>
          <div className="expiry-label">Cashback Balance</div>
        </div>
      </div>
    </div>
  );
};

const CreditCardAccountList = ({ accounts }) => {
  return (
    <div className="credit-card-account-list">
      <div className="section-header">
        Credit Cards
      </div>
      {accounts.map((account, index) => (
        <CreditCardAccount key={index} account={account} />
      ))}
    </div>
  );
};

export default App;
