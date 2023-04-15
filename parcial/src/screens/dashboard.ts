import {get_api} from '../services/data'
import {getApi} from '../services/datajokes'
import { AttributeAll } from '../components/all/all';
import "../components/export"

class Dashboard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const data = await get_api();
        this.render(data)
        const data2 = await getApi();
        this.render(data2)
    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        data.forEach((data: any) => {
            const card = this.ownerDocument.createElement('my-card');
            card.setAttribute(AttributeAll.btn_text, data);
            card.setAttribute(AttributeAll.text, data.value);
            this.shadowRoot?.appendChild(card);
        });
    }
}

customElements.define('app-dashboard',Dashboard);