import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@whcg/whcg-general-styles/grid.js';
import '@whcg/whcg-search-box';

class WhcgFooter extends PolymerElement {
    static get template() {
        return html`
        <style include = "style-element-grid">
            
                .footer-rows {
                    grid-template-rows: 30px auto;
                }

                .footer-headline {
                    font-family: var(--parmaco-font-family);
                    font-size: var(--parmaco-font-size-m);
                    font-weight: var(--parmaco-font-weight-normal);
                    color: var(--parmaco-base-color-100pct);
                    align-self: start;
                }

                .footer-body {
                    align-self: start;
                }

                .footer-body-section {
                    padding-bottom: 16px;
                }

                
                .footer-subhedline {
                    font-family: var(--parmaco-font-family);
                    font-size: var(--parmaco-font-size-xs);
                    font-weight: var(--parmaco-font-weight-bold);
                    color: var(--parmaco-base-color-100pct);
                    padding-bottom: 5px;
                }


                .footer-subexplain {
                    font-family: var(--parmaco-font-family);
                    font-size: var(--parmaco-font-size-xs);
                    font-weight: var(--parmaco-font-weight-normal);
                    color: var(--parmaco-base-color-100pct);
                }
            
        </style>



    
            <div class="grid-12">
                <div class="col2span4 grid-4 footer-rows">
                    <div class="col1span4 footer-headline">
                        OM MODELLEN
                    </div>
                    <div class="col1span4 footer-body">
                        <div class="footer-body-section">
                            <div class="footer-subhedline">
                                Information
                            </div>
                            <div class="footer-subexplain">
                                FPellentesque sit amet nisl odio. Duis erat libero, placerat vitae mi at, bibendum porta nisi. Proin fermentum mi et nibh sollicitudin, in interdum mauris molestie. Aliquam fermen
                        Pellentesque sit amet nisl odio. Duis erat libero, placerat vitae mi at, bibendum porta nisi. Proin fermentum mi et nibh sollicitudin, in interdum mauris molestie. Aliquam fermen
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col7span2 grid-2 footer-rows">
                    <div class="col1span2 footer-headline">
                        KONTAKTA OSS
                    </div>

                    <div class="col1span2 footer-body">
                        <div class="footer-body-section">
                            <div class="footer-subhedline">
                                Information
                            </div>
                            <div class="footer-subexplain">
                                08-783 24 12
                                info@parmaco.se
                            </div>
                        </div>
                        <div class="footer-body-section">
                            <div class="footer-subhedline">
                                Support
                            </div>
                            <div class="footer-subexplain">
                                08-783 24 12
                                support@parmaco.se
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col9span3 grid-3 footer-rows">

                        <div class="col1span3 footer-headline">
                                TA DEL AV VÅRAT NYHETSBREV
                        </div>

                        <div class="col1span3 footer-body">
                            <div class="footer-body-section">
                                <div class="footer-subhedline">
                                    Information
                                </div>
                                <div class="footer-subexplain">
                                    Få den senaste informationen om utvecklingen på marknaden för hyrda skollokaler
                                </div>
                            </div>
                            <div class="footer-body-section">
                                <whcg-search-box>
                                </whcg-search-box>
                            </div>
                        </div>       
                </div>
            </div>
        
    `;
    }

    static get properties() {

        return {

           
        }
    }



}

window.customElements.define('whcg-footer', WhcgFooter);

export { WhcgFooter };
