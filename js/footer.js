import { LitElement, html, css } from 'https://cdn.skypack.dev/pin/lit@v2.2.0-SekDu8dt49Zcuxzc30cK/mode=imports,min/optimized/lit.js';

class Footer extends LitElement {
    imgs = [
        {
            href: 'https://github.com/GCUCoders/Tech-Club-Site',
            src: 'images/github-logo-alt.png',
        },
        {
            href: 'https://discord.gg/6bmQyKdjzs',
            src: 'images/discord-brands.svg',
        },
    ];
	// defined css styling
	static get styles() {
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
				padding: 22px 0px 22px 0px;
			}
			.footer-images {
				/* Yes david, I know, I know.*/
				width: 33px;
				margin-left: 11px;
				margin-right: 11px;
			}
		`;
	}

	render() {
        const { imgs } = this;
		return html`<footer>
			<div id="footer-div">
				<p>© Grand Canyon University</p>
				<p>
					<a href="${imgs[0].href}" target="_blank">
                        <img src="${imgs[0].src}" class="footer-images"/>
                    </a>
					<a href="${imgs[1].href}" target="_blank">
                        <img src="${imgs[1].src}" class="footer-images"/>
                    </a>
				</p>
			</div>
		</footer>`;
	}

	constructor() {
		super();
	}
}

customElements.define('footer-ss', Footer);

/*
Author : Alexander 'admeeer' Peltier
*/
