import {LitElement, html, css} from 'lit-element';

class ProjectCard extends LitElement{
    // defined css styling
    static get styles(){
        return css`
            .card{
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                border-radius: 5px;
                width: 300px;
            }
            .card:hover{
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }
            .container  {
                padding: 2px 16px;
            }
        `;
    }


    render(){
        return html`
            <div class="card">
                <img src="${this.img}" width=300px>

                <div class="container">
                    <h3> <b> ${this.name} </b> </h3>
                    <p> <a href="${this.url}"> Link </a></p>
                </div>
            </div>
        `;
    }

    constructor(){
        super();
        this.name = "Project Name";
        this.url = "https://google.com";
        this.img = "https://img.icons8.com/cotton/2x/folder-invoices.png"
    }

    static get properties(){
        return{
            name: { type: String },
            url: { type: String},
            img: { type: String}
        };
    }

}

customElements.define('project-card', ProjectCard);