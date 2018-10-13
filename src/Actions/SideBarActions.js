 const actions = {
    changeActiveOption(selectedKey) {

        return({
            type : 'ACTIVE_MENU_ITEM_CHANGED',
            data : selectedKey         
        });
    },

    displaySelectedFundOverview(selectedFund) {
        return({
            type : 'MUTUAL_FUND_SELECTED_FROM_TABLE',
            data : selectedFund
        })
    },

    displayForecastView() {
        return({
            type : 'MUTUAL_FUND_FORECAST_CLICKED',
            data : ""
        })
    }
}

export default actions;