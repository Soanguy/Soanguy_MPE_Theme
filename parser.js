module.exports = {
    onWillParseMarkdown: function (markdown) {
        return new Promise((resolve, reject) => {
            markdown = markdown.replace(/\[([^\[\]]+)\]\^\{([^\{\}]+)\}/gm, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");
            return resolve(markdown)
        })
    },
    onWillTransformMarkdown: function (markdown) {
        return new Promise((resolve, reject) => {
            markdown = markdown.replace(/\[([^\[\]]+)\]\^\{([^\{\}]+)\}/gm, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");
            return resolve(markdown)
        })
    },
    onDidTransformMarkdown: function (markdown) {
        return new Promise((resolve, reject) => {
            markdown = markdown.replace(/\[([^\[\]]+)\]\^\{([^\{\}]+)\}/gm, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");
            return resolve(markdown)
        });
    },
    // onWillParseMarkdown: function (markdown) {
    //     return new Promise((resolve, reject) => {
    //         return resolve(markdown)
    //     })
    // },
    onDidParseMarkdown: function (html, {
        cheerio
    }) {
        return new Promise((resolve, reject) => {
            return resolve(html)
        })
    },
    // onWillTransformMarkdown: function (markdown) {
    //     return new Promise((resolve, reject) => {
    //         return resolve(markdown);
    //     });
    // },
    // onDidTransformMarkdown: function (markdown) {
    //     return new Promise((resolve, reject) => {
    //         return resolve(markdown);
    //     });
    // },
}