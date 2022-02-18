import {LitElement, html, css} from 'lit';

class Footer extends LitElement{
    // defined css styling
    static get styles(){
        return css`
        footer {
            position: static;
            bottom: 0;
            width: 100%;
        }
       #footer-div {
           /* standard font */
            font-family: Helvetica, sans-serif;
            font-size: 117%;
            font-weight: 500;
            /* colors and stuff */
            background-color: black;
            color: white;
            /* positioning for flex */
            display: flex;
            flex-basis: 50%;
            align-items: center;
            flex-direction: column;

            /* innovation. */
            padding:22px 0px 22px 0px; 
            
       }
       .footer-images {
           /* Yes david, I know, I know.*/
           width: 33px;
           margin-left: 11px;
           margin-right: 11px;
       }
       `;
    }


    render(){
        return html`
<footer>
<div id="footer-div">
<p>© Grand Canyon University</p>
<p>
<a href="${this.imgsLinks[0]}"><img src="${this.imgs[0]}" class="footer-images"></a>
<a href="${this.imgsLinks[1]}"><img src ="${this.imgs[1]}" class="footer-images"></a> 
</p>
</div>
</footer>`;
    }

    constructor(){
        super();
        this.imgs = [];
        this.imgsLinks = [];
    }

    static get properties(){
        return{
            imgs: { type: Array},
            imgsLinks: { type: Array}
        };
    }

}

customElements.define('footer-ss', Footer);

/*
Author : Alexander 'admeeer' Peltier
*/