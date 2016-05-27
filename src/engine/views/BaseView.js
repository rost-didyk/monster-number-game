import _ from 'lodash';

export default class BaseView {
    constructor(html, data) {
        this.el = this.makeTemplate(html, data);
    }
    
    makeTemplate(templateHtml, data) {
        return _.template(templateHtml)(data);
    }

    html() {
        return this.el;
    }

    htmlObject() {
        let d = document.createElement('div');
        d.innerHTML = this.el;
        return d.firstChild;
    }
}