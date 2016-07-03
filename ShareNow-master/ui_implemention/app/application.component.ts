import {Component} from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { baseComponent } from './datamodel/baseComponent';
import { ComponentDataService } from './datamodel/screen.service';
import { componentContainer } from './container/componentContainer';

@Component({
    selector: 'myapp',
    directives:[componentContainer],
    template: `<div>
                <img src="images/logo.png">
                <container></container>
               </div>`
})
export class ApplicationComponent {
    constructor(){}
            
 }