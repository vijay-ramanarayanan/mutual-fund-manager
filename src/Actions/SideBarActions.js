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
    }
}

export default actions;