import { AttributeCate } from "../categories/categories";
import { AttributeJokes } from "../jokes/jokes";

export enum AttributeAll {
    "btn_text" = "btn_text",
    "text" = "text",
}

export default class All extends HTMLElement{
    btn_text: string = "";
    text: string = "";

    static get observedAttributes(){
        const attrs: Record <AttributeAll,null> = {
            btn_text: null,
            text: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: AttributeJokes, oldValue: undefined, newValue: string){
        switch(propName){
        default:
        this[propName] = newValue;
        this.render();
        break;
        }
        this.render()
    }

        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot) this.shadowRoot.innerHTML = '';

            const container = this.ownerDocument.createElement('section');

            const categories = this.ownerDocument.createElement('my-categories');
            categories.setAttribute(AttributeCate.btn_text, this.btn_text);

            const jokes = this.ownerDocument.createElement('my-jokes');
            jokes.setAttribute(AttributeJokes.text, this.text);

            container.appendChild(categories);
            container.appendChild(jokes);

            this.shadowRoot?.appendChild(container)
        }
}

customElements.define('app-all', All)