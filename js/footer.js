import {LitElement, html, css} from 'lit-element';

class FooterWebComponent extends LitElement {
    // CSS style sheet 
    static get styles(){
        return css`
        #footer-w-c{
            background-color:black; 
            color:white; 
            text-align:center; 
            padding:10px 0px 30px 0px; 
        }`;
    }

    render(){
        return html`
        <footer ID="footer-w-c">Grand Canyon University 2021 | All Rights Reserved.</footer>
        `
    }

    constructor(){
        super();
    }

}

customElements.define('footer-w-c', FooterWebComponent);