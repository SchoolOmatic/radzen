/*
  This file is automatically generated. Any changes will be overwritten.
  Modify home.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { IconComponent } from '@radzen/angular/dist/icon';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { CardComponent } from '@radzen/angular/dist/card';
import { ProgressBarComponent } from '@radzen/angular/dist/progressbar';
import { ChartComponent } from '@radzen/angular/dist/chart';
import { GridComponent } from '@radzen/angular/dist/grid';
import { LabelComponent } from '@radzen/angular/dist/label';
import { HtmlComponent } from '@radzen/angular/dist/html';
import { ImageComponent } from '@radzen/angular/dist/image';

import { ConfigService } from '../config.service';

import { CrmService } from '../crm.service';
import { SecurityService } from '../security.service';

export class HomeGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('icon0') icon0: IconComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('heading11') heading11: HeadingComponent;
  @ViewChild('card2') card2: CardComponent;
  @ViewChild('card7') card7: CardComponent;
  @ViewChild('icon1') icon1: IconComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('heading13') heading13: HeadingComponent;
  @ViewChild('heading3') heading3: HeadingComponent;
  @ViewChild('card3') card3: CardComponent;
  @ViewChild('card8') card8: CardComponent;
  @ViewChild('icon2') icon2: IconComponent;
  @ViewChild('heading14') heading14: HeadingComponent;
  @ViewChild('heading15') heading15: HeadingComponent;
  @ViewChild('heading4') heading4: HeadingComponent;
  @ViewChild('card4') card4: CardComponent;
  @ViewChild('card9') card9: CardComponent;
  @ViewChild('icon3') icon3: IconComponent;
  @ViewChild('heading5') heading5: HeadingComponent;
  @ViewChild('heading16') heading16: HeadingComponent;
  @ViewChild('heading17') heading17: HeadingComponent;
  @ViewChild('card5') card5: CardComponent;
  @ViewChild('card10') card10: CardComponent;
  @ViewChild('icon4') icon4: IconComponent;
  @ViewChild('heading6') heading6: HeadingComponent;
  @ViewChild('heading7') heading7: HeadingComponent;
  @ViewChild('heading8') heading8: HeadingComponent;
  @ViewChild('progressbar0') progressbar0: ProgressBarComponent;
  @ViewChild('heading12') heading12: HeadingComponent;
  @ViewChild('card0') card0: CardComponent;
  @ViewChild('heading0') heading0: HeadingComponent;
  @ViewChild('chart0') chart0: ChartComponent;
  @ViewChild('card1') card1: CardComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('chart1') chart1: ChartComponent;
  @ViewChild('card6') card6: CardComponent;
  @ViewChild('heading10') heading10: HeadingComponent;
  @ViewChild('chart2') chart2: ChartComponent;
  @ViewChild('heading9') heading9: HeadingComponent;
  @ViewChild('card11') card11: CardComponent;
  @ViewChild('heading18') heading18: HeadingComponent;
  @ViewChild('grid0') grid0: GridComponent;
  @ViewChild('card12') card12: CardComponent;
  @ViewChild('heading20') heading20: HeadingComponent;
  @ViewChild('grid1') grid1: GridComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  crm: CrmService;

  security: SecurityService;
  monthlyStats: any;
  revenueByCompany: any;
  revenueByMonth: any;
  revenueByEmployee: any;
  getOpportunitiesResult: any;
  getTasksResult: any;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.crm = this.injector.get(CrmService);
    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/ServerMethods/MonthlyStats`, {
withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.security.token}`
      })
    })
    .subscribe((result: any) => {
      this.monthlyStats = result;
    }, (result: any) => {

    });

    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/ServerMethods/RevenueByCompany`, {
withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.security.token}`
      })
    })
    .subscribe((result: any) => {
      this.revenueByCompany = result.value;
    }, (result: any) => {

    });

    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/ServerMethods/RevenueByMonth`, {
withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.security.token}`
      })
    })
    .subscribe((result: any) => {
      this.revenueByMonth = result.value;
    }, (result: any) => {

    });

    this.httpClient.request('get', `${this.configService.get('serverMethodsUrl')}api/ServerMethods/RevenueByEmployee`, {
withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.security.token}`
      })
    })
    .subscribe((result: any) => {
      this.revenueByEmployee = result.value;
    }, (result: any) => {

    });

    this.crm.getOpportunities(null, 10, null, `CloseDate desc`, null, `OpportunityStatus,Contact`, null, null)
    .subscribe((result: any) => {
      this.getOpportunitiesResult = result.value;
    }, (result: any) => {

    });

    this.crm.getTasks(null, null, null, `DueDate desc`, null, `Opportunity,Opportunity($expand=User,Contact),TaskType`, null, null)
    .subscribe((result: any) => {
      this.getTasksResult = result.value;
    }, (result: any) => {

    });
  }
}
