/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let start = []
    let end = []
    for (let i = 0; i < paths.length; i++) {
        start.push(paths[i][0])
        end.push(paths[i][1])
    }
    for (let e of end) {
        if (!start.includes(e)) return e
    }
    return -1
};

console.log(destCity([['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']]))