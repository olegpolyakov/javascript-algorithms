function knapsack(values, weights, capacity) {
    var load = 0;
    var i = 0;
    var w = 0;

    while (load < capacity && i < 4) {
        if (weights[i] <= (capacity - load)) {
            w += values[i];
            load += weights[i];
        }
        else {
            var r = (capacity - load) / weights[i];
            w += r * values[i];
            load += weights[i];
        }
        ++i;
    }

    return w;
}

function knapSack(capacity, weights, values) {
    const n = values.length;
    let load = 0;
    let val = 0;

    for (let i = 0; i < n && load < capacity; i++) { // {1}
        if (weights[i] <= capacity - load) { // {2}
            val += values[i];
            load += weights[i];
        } else {
            const r = (capacity - load) / weights[i]; // {3}
            val += r * values[i];
            load += weights[i];
        }
    }

    return val;
}