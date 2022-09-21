module.exports = {
    normalizeErrors: function (err) {
        let normalizeErrors = [];
        for (let prop in err) {
            if (err.hasOwnProperty(prop)) {
                normalizeErrors.push({ title: prop, details: err[prop].message })
            }
        }
        return normalizeErrors;
    }
}