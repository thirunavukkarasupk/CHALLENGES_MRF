const accounts = [
    {
      'name': 'Arun',
      'accountNo': '001',
    },
    {
      'name': 'Babu',
      'accountNo': '002',
    },
    {
      'name': 'Chandra',
      'accountNo': '003',
    },
  ];
  
  const balances = {
    '001': 5000,
    '002': 2000,
    '003': 0,
  };

  const transactions = [
    {
      'accountNo': '001',
      'type': 'withdrawal',
      'amount': 1000,
    },
    {
      'accountNo': '001',
      'type': 'deposit',
      'amount': 500,
    },
    {
      'accountNo': '001',
      'type': 'withdrawal',
      'amount': 1000,
    },
    {
      'accountNo': '002',
      'type': 'deposit',
      'amount': 300,
    },
    {
      'accountNo': '002',
      'type': 'withdrawal',
      'amount': 200,
    },
    {
      'accountNo': '003',
      'type': 'deposit',
      'amount': 200,
    },
  ];
  
  var updateBalancesWithTransactions = () => {
    transactions.map((transaction)=>{
      balances.hasOwnProperty(transaction['accountNo']) ? (transaction['type'] === 'deposit') ? (balances[transaction['accountNo']] += transaction['amount']):(balances[transaction['accountNo']]-=transaction['amount']):null;
       })
  }
  
  
  var displayBalances = function() {
    accounts.map( (account)=>
    {
        console.log(account['name']);
        console.log(account['accountNo']);
        console.log(balances[account['accountNo']]);
        console.log('\n');
    })

  }
  
  var main = function() {
      console.log('Balances before transactions');
      displayBalances();
      updateBalancesWithTransactions();
      console.log('Balances after transactions');
      displayBalances();
  }
  
  main();
