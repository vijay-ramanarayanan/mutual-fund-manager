import {combineReducers} from 'redux';

const initialState = {
    activeView : 'Top10',
    showMutualFundOverView : false,
    showForeCastView : false,
    showMutualFundsSummary : true

}

const changeActiveItem = (state, action) => {
    return ({
        ...state,
        showMutualFundOverView : false,
        showForeCastView : false,
        showMutualFundsSummary : true,
        activeView : action.data
    });
}

const selectedMutualFund = (state, action) => {
    return ({
        ...state,
        showMutualFundOverView : true,
        showForeCastView : false,
        showMutualFundsSummary : false,
        activeFund : action.data
    });
}

const handler = {
    ['ACTIVE_MENU_ITEM_CHANGED'] : changeActiveItem,
    ['MUTUAL_FUND_SELECTED_FROM_TABLE'] : selectedMutualFund
}

const mutualFunds = (state = initialState, action ={}) => (handler[action.type] ? handler[action.type](state, action) : state)

const rootReducer = combineReducers({
    mutualFunds
});

export default rootReducer;