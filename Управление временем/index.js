/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    return {
    dateObj: new Date(date),  
    value: date,
    add: function (time,period) {
       if (time < 0) {
           throw new TypeError ('Time value is out of range!');
        }
        switch (period){
            case 'years': 
                this.dateObj.setFullYear(this.dateObj.getFullYear() + time);
                break;
            case 'months':
                this.dateObj.setMonth(this.dateObj.getMonth() + time);
                break;
            case 'days':
                this.dateObj.setDate(this.dateObj.getDate() + time);
                break;
            case 'hours':
                this.dateObj.setHours(this.dateObj.getHours() + time);
                break;
            case 'minutes':
                this.dateObj.setMinutes(this.dateObj.getMinutes() + time);
                break;
            default:
            throw new TypeError ('Unknown time period');
        }
        this.value = this.dateObj.toISOString().slice(0,16).replace('T',' ');
       return this;
   },
   subtract: function (time,period) {
    if (time < 0) {
        throw new TypeError ('Time dateObj is out of range!');
     }
     switch (period){
         case 'years': 
             this.dateObj.setFullYear(this.dateObj.getFullYear() - time);
             break;
         case 'months':
             this.dateObj.setMonth(this.dateObj.getMonth() - time);
             break;
         case 'days':
             this.dateObj.setDate(this.dateObj.getDate() - time);
             break;
         case 'hours':
             this.dateObj.setHours(this.dateObj.getHours() - time);
             break;
         case 'minutes':
             this.dateObj.setMinutes(this.dateObj.getMinutes() - time);
             break;
         default:
         throw new TypeError ('Unknown time period');
     }
     this.value = this.dateObj.toISOString().slice(0,16).replace('T',' ');
    return this;
   }
}

};
