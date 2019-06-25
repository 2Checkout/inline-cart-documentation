(function (document, src, libName, config) {
    var script             = document.createElement('script');
    script.src             = src;
    script.async           = true;
    var firstScriptElement = document.getElementsByTagName('script')[0];
    script.onload          = function () {
        for (var namespace in config) {
            if (config.hasOwnProperty(namespace)) {
                window[libName].setup.setConfig(namespace, config[namespace]);
            }
        }
        window[libName].register();
        window[libName].cart.setTest(true);
    };

    firstScriptElement.parentNode.insertBefore(script, firstScriptElement);
})(
    document,
    'https://secure.2checkout.com/checkout/client/twoCoInlineCart.js',
    'TwoCoInlineCart',
    {
        app : {merchant: '2COLRNC'},
        cart: {host: 'https://secure.2checkout.com'}
    }
);
