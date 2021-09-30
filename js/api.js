// Binance Coin
fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd")

.then(function(response){
    return response.json()
})

.then(function(response){

    
    let binancecoinusd = response.binancecoin.usd

    binancecoinusd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(binancecoinusd);
    bnb = document.querySelector("#binanceusd-bnb")
    bnb.innerText = binancecoinusd  

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=brl")

    .then(function(response){
        return response.json()
    })

    .then(function(response){

    
        let binancecoin = response.binancecoin.brl

        binancecoin = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(binancecoin);
        bnb = document.querySelector("#binance-bnb")
        bnb.innerText = binancecoin

    });

});



// Cardano
fetch("https://api.pancakeswap.info/api/v2/tokens/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47")

.then(function(response){
    return response.json()
})

.then(function(response){

    
    let cardanousd = response.data.price

    cardanousd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cardanousd);
    ada = document.querySelector("#cardanousd-ada")
    ada.innerText = cardanousd  

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=brl")

    .then(function(response){
        return response.json()
    })

    .then(function(response){

    
        let cardano = response.cardano.brl

        cardano = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cardano);
        ada = document.querySelector("#cardano-ada")
        ada.innerText = cardano

    });

});





// Ethereum
fetch("https://api.pancakeswap.info/api/v2/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8")

.then(function(response){
    return response.json()
})

.then(function(response){

    
    let ethereumusd = response.data.price

    ethereumusd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ethereumusd);
    eth = document.querySelector("#ethereumusd-eth")
    eth.innerText = ethereumusd  

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl")

    .then(function(response){
        return response.json()
    })
    
    .then(function(response){
    
        
        let ethereum = response.ethereum.brl
    
        ethereum = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(ethereum);
        eth = document.querySelector("#ethereum-eth")
        eth.innerText = ethereum  
    })

});


// Dogecoin
fetch("https://api.pancakeswap.info/api/v2/tokens/0xbA2aE424d960c26247Dd6c32edC70B295c744C43")

.then(function(response){
    return response.json()
})

.then(function(response){

    
    let dogecoinusd = response.data.price

    dogecoinusd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dogecoinusd);
    doge = document.querySelector("#dogecoinusd-doge")
    doge.innerText = dogecoinusd  

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=brl")

    .then(function(response){
        return response.json()
    })
    
    .then(function(response){
    
        
        let dogecoin = response.dogecoin.brl
    
        dogecoin = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dogecoin);
        doge = document.querySelector("#dogecoin-doge")
        doge.innerText = dogecoin  
    })

});



// Polkadot
fetch("https://api.pancakeswap.info/api/v2/tokens/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402")

.then(function(response){
    return response.json()
})

.then(function(response){

    
    let polkadotusd = response.data.price

    polkadotusd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(polkadotusd);
    dot = document.querySelector("#polkadotusd-dot")
    dot.innerText = polkadotusd  

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=brl")

    .then(function(response){
        return response.json()
    })
    
    .then(function(response){
    
        
        let polkadot = response.polkadot.brl
    
        polkadot = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(polkadot);
        dot = document.querySelector("#polkadot-dot")
        dot.innerText = polkadot  
    })

});


// Tether
fetch("https://api.pancakeswap.info/api/v2/tokens/0x55d398326f99059fF775485246999027B3197955")

.then(function(response){
    return response.json()
})

.then(function(response){

    
    let tetherusd = response.data.price

    tetherusd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tetherusd);
    usdt = document.querySelector("#tetherusd-usdt")
    usdt.innerText = tetherusd  

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=brl")

    .then(function(response){
        return response.json()
    })
    
    .then(function(response){
    
        
        let tether = response.tether.brl
    
        tether = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tether);
        usdt = document.querySelector("#tether-usdt")
        usdt.innerText = tether  
    })

});