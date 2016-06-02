import _ from 'lodash';

export default class BaseView {

    //@to-do add remove events functionality
    constructor(template,options) {
        
        this.dispatch = options['dispatch'] || null;

        let tmpl = this.makeTemplate(template['html'], template['data']);

        this.$el = this.toHtmlObject(tmpl);

        this.parseEvents();
    }
    
    makeTemplate(templateHtml, data) {
        return _.template(templateHtml)({
            data
        });
    }

    toHtmlObject(html) {
        let d = document.createElement('div');
        d.innerHTML = html;
        return d.firstChild;
    }

    events() {}

    parseEvents(){
        let eventsObject = this.events() || {};

        let keys = Object.keys(eventsObject);

        if (keys.length) {
            keys.forEach(v=>{
                let [event, selector] = v.split(' ');

                let $el = this.$el.querySelector(selector);

                try {
                    $el.addEventListener(event, this[eventsObject[v]].bind(this));
                } catch(e) {
                    console.warn('Events: %s not assign. Please, check DOM element by selector: %s', v, selector);
                }
            });
        }
    }
    
    dispatchAction(action, data) {
        let fn = this.dispatch[action];
        return fn.call(this.dispatch, data);
    }
}