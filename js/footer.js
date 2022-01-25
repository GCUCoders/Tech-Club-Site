import {LitElement, html, css} from 'lit-element';

class Footer extends LitElement{
    // defined css styling
    static get styles(){
        return css`
           #footer-heading {
               /* standard font */
                font-family: Helvetica, sans-serif;
                font-weight: bold;

                background-color: black;
                color: white;
                text-align: center;
                /* innovation. */
                padding:22px 0px 22px 0px; 
                
           }
        `;
    }


    render(){
        return html`
<footer>
<div id="footer-heading">Ⓒ Grand Canyon University</div>
</footer>`;
    }

    constructor(){
        super();
    }

}

customElements.define('footer-ss', Footer);