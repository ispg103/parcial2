import "./components/export"
import "./screens/dashboard"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const data = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(data);
    }
}

customElements.define('app-container', AppContainer)