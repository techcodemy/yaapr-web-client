const Currency = (code,amount) => new Intl.NumberFormat('en',{ style: 'currency', currency: code }).format(amount)

export default Currency;