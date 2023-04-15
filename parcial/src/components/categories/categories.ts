import styles from './categories.css'

export enum AttributeCate {
    "btn_text" = "btn_text",
}

class Categories extends HTMLElement {
    btn_text?: string;

    static get observedAttributes() {
        const attrs: Record<AttributeCate, null> = {
            btn_text: null,

        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: AttributeCate, oldValue: undefined, newValue: string){
        switch(propName){
        default:
        this[propName] = newValue;
        this.render();
        break;
        }
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
            ${styles}
            </style>

            <section>
            <button>${this.btn_text}</button>
            </section>
            `;
        }
    }
}

customElements.define("my-categories", Categories);
export default Categories;