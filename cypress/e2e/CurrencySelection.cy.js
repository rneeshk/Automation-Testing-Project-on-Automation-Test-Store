import CurrencySelection from "../pageObjects/CurrencySelection";

describe('Currency Selection', () => {
    beforeEach(() => {
        CurrencySelection.visit();
    });

    it('Ensure that when a user selects a different currency from the currency dropdown, all product prices are updated accordingly.', () => {
        CurrencySelection.selectCurrency('Euro');
        CurrencySelection.verifyCurrencySymbol('€');
    });
    it.only('Ensure that when the user selects a new currency, the total order price (including taxes and shipping) is updated correctly.', () => {
        CurrencySelection.selectCurrency('Euro');
        CurrencySelection.addProductToCart();
        CurrencySelection.verifyTotalOrderPrice('€');
    });
    it('Ensure that the correct currency symbol is displayed when switching to a different currency.', () => {
        CurrencySelection.selectCurrency('US Dollar');
        CurrencySelection.verifyCurrencySymbol('$');
        CurrencySelection.selectCurrency('Euro');
        CurrencySelection.verifyCurrencySymbol('€');
    });

    it('Ensure that currency switch works seamlessly when a user is logged into their account and their previous preferences are maintained.', () => {
        CurrencySelection.selectCurrency('Pound Sterling');
        CurrencySelection.verifyPreferencesPreservedAfterLogin('Pound Sterling');
    });
    it('Verify the behavior of the currency switcher when switching between multiple currencies in quick succession.', () => {
        const currencies = ['US Dollar', 'Euro', 'Pound Sterling'];
        currencies.forEach(currency => {
            CurrencySelection.selectCurrency(currency);
            CurrencySelection.verifyCurrencySymbol(
                currency === 'US Dollar' ? '$' : currency === 'Euro' ? '€' : '£'
            );
        });
    });
    it('Verify if currency switch affects the total price when there is only one item in the cart with a minimum order value.', () => {
        CurrencySelection.selectCurrency('Euro');
        CurrencySelection.addProductToCart();
        CurrencySelection.verifyTotalOrderPrice('€');
    });
});
