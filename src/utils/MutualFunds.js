export default class MutualFunds {

    getColumns() {
        return (['#', 'Mutual Fund Name','NAV', 'Asset', 'Rating']);
    }


    fetchAxisBankData() {
        return ([['Axis1','B','C','D', 'E'],
            ['Axis2','B','C','D', 'E'],
            ['Axis3','B','C','D', 'E'],
            ['Axis4','B','C','D', 'E'],
            ['Axis5','B','C','D', 'E'],
            ['Axis6','F','G','H', 'I']]);
    }

    fetchRelianceBankData() {
        return ([['Reliance1','B','C','D', 'E'],
            ['Reliance2','B','C','D', 'E'],
            ['Reliance3','B','C','D', 'E'],
            ['Reliance4','B','C','D', 'E'],
            ['Reliance5','B','C','D', 'E'],
            ['Reliance6','F','G','H', 'I']]);
    }

    fetchSBIData() {
        return ([['SBI1','B','C','D', 'E'],
            ['SBI2','B','C','D', 'E'],
            ['SBI3','B','C','D', 'E'],
            ['SBI4','B','C','D', 'E'],
            ['SBI5','B','C','D', 'E'],
            ['SBI6','F','G','H', 'I']]);
    }

    fetchAdityaBankData() {
        return ([['Aditya Birla 1','B','C','D', 'E'],
            ['Aditya Birla 2','B','C','D', 'E'],
            ['Aditya Birla 3','B','C','D', 'E'],
            ['Aditya Birla 4','B','C','D', 'E'],
            ['Aditya Birla 5','B','C','D', 'E'],
            ['Aditya Birla 6','F','G','H', 'I']]);
    }

    fetchICICIBankData() {
        return ([['ICICI 1','B','C','D', 'E'],
            ['ICICI 2','B','C','D', 'E'],
            ['ICICI 3','B','C','D', 'E'],
            ['ICICI 4','B','C','D', 'E'],
            ['ICICI 5','B','C','D', 'E'],
            ['ICICI 6','F','G','H', 'I']]);
    }

    fetchHDFCData() {
        return ([['HDFC 1','B','C','D', 'E'],
            ['HDFC 2','B','C','D', 'E'],
            ['HDFC 3','B','C','D', 'E'],
            ['HDFC 4','B','C','D', 'E'],
            ['HDFC 5','B','C','D', 'E'],
            ['HDFC 6','F','G','H', 'I']]);

    }

}