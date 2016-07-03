import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ApplicationComponent} from './application.component';
import {ComponentDataService} from './datamodel/screen.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import {componentconfig} from './scripts/componentconfig';

bootstrap(ApplicationComponent,[ComponentDataService,HTTP_PROVIDERS,componentconfig]);