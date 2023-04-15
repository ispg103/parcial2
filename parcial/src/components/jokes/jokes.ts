import styles from './jokes.css'

export enum AttributeJokes {
    "text" = "text",
}

class Jokes extends HTMLElement {
    text?: string;

    static get observedAttributes() {
        const attrs: Record<AttributeJokes, null> = {
            text: null,

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

    attributeChangedCallback(propName: AttributeJokes, oldValue: undefined, newValue: string){
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
            <p>${this.text}</p>
            </section>
            `;
        }
    }
}

customElements.define("my-jokes", Jokes);
export default Jokes;