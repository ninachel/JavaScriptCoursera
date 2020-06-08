function copyCollection(arr) {
    let newArr = arr.map(function(elem) {
        let keys = Object.keys(elem);
        let newObj = {};
        for (let i = 0; i < keys.length; i++) {
            newObj[keys[i]] = elem[keys[i]];
        }
        return newObj;
    });
    return newArr;
}

function query(collection) {
    let newColl = copyCollection(collection);
    if (arguments[1] === undefined) return newColl;
    var commands = [].slice.call(arguments, 1);
    var selectArgs = [];
    var isSelect = false;
    var isFilter = false;
    var filterObj = {};


    for (let i = 0; i < commands.length; i++) {
        let command = commands[i][0];
        switch (command) {
            case 'select': 
                var Args = commands[i][1];
                if (selectArgs.length == 0) selectArgs = selectArgs.concat(Args);
                else selectArgs = selectArgs.filter(value => -1 !== Args.indexOf(value));
                isSelect = true;
                break;
            case 'filter':
                filterFieldName = commands[i][1]; 
                if  (filterFieldName in filterObj) {
                    filterObj[filterFieldName] = filterObj[filterFieldName].filter(value => -1 !== commands[i][2].indexOf(value));
                }   
                else filterObj[filterFieldName] = commands[i][2];
                isFilter = true;
                break;
        }
    }
    if (isFilter){
        let keys = Object.keys(filterObj);
        for (let i = 0; i < keys.length; i++){
            field = keys[i];
            args = filterObj[field];

            newColl = newColl.filter(function(elem) {
                //elem[field] это яблоко или картофель. Если они входят в фильтр, тогда отсавляем элемент, иначе нет
                return args.indexOf(elem[field]) != -1;
            });
        }
    }
    if (newColl.length == 0)  return newColl;
    if (isSelect){
        if (selectArgs.length != 0){
            let existFieldsNames = Object.keys(newColl[0]); 
            selectArgs = selectArgs.filter(function(elem) {
                return existFieldsNames.indexOf(elem) != -1;
            });
            
            newColl = newColl.map(function(elem) {
                let newObj = {};
                selectArgs.forEach(function(jElem) {
                    newObj[jElem] = elem[jElem];
                });
                return newObj;
            });
        }
        else newColl = [];
    }
    
    return newColl;
}

function select() {
    return ['select', [].slice.call(arguments)];
}

function filterIn(property, values) {
    return ['filter', property, values];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};