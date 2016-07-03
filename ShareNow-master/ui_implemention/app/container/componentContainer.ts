import {Component} from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { baseComponent } from '../datamodel/baseComponent';
import { ComponentDataService } from '../datamodel/screen.service';
import {NavService} from './nav.service';
import {componentValue} from '../scripts/componentconfig';
import {MenuComponent} from '../scripts/menu.component';
import {PayScreen} from '../screens/pay.screen';
import {CreateGroupScreen} from '../screens/creategroup.screen';
import {ShareAmountScreen} from '../screens/shareamount.screen'
import {ReportScreen} from '../screens/report.screen';
import {PayService} from '../services/pay.service';
import { HTTP_PROVIDERS } from 'angular2/http';
@Component({
  selector: 'container',
  providers: [NavService, PayService, HTTP_PROVIDERS],
  directives: [MenuComponent, PayScreen, CreateGroupScreen, ShareAmountScreen, ReportScreen],
  template: `<div>
                    <snmenu></snmenu>
                    
                    <pay *ngIf="isScreen('Pay')" [componentJson]='componentValueArray'></pay>
                    <creategroup *ngIf="isScreen('creategroup')"></creategroup>
                    <shareamount *ngIf="isScreen('shareamount')"></shareamount>
                    <report *ngIf="isScreen('report')"></report>
                </div>`
})
export class componentContainer {
  componentJson: baseComponent;
  componentValueArray: componentValue[];
  menuItem: string = "creategroup";
  subscription: any;
  constructor(private navService: NavService, private dataService: ComponentDataService) { }
  ngOnInit() {
    this.subscription = this.navService.getNavChangeEmitter()
      .subscribe(item => this.selectedNavItem(item));
  }
  isScreen(screen) {
    if (screen == this.menuItem) { return true; } else return false;
  }
  selectedNavItem(item: string) {
    this.menuItem = item;
    // this.dataService.ComponentData(this.menuItem).subscribe(menu => {
    //             this.componentJson = menu;
    //             this.componentValueArray = this.componentJson.values;
    //         });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}