const util = {
    formatNumber: function(num, type) {
        var numSplit, int, dec;
        /*
            + or - before number
            exactly 2 decimal points
            comma separating the thousands

            2310.4567 -> + 2,310.46
            2000 -> + 2,000.00
            */

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
        }

        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

    },
    displayPercentage: function(denominator, numerator) {
        if (denominator === 0 ) {
            return '---';
        } else {
            return `${Math.round((numerator / denominator) * 100)}%`;
        }
    }   
}

export default (util)