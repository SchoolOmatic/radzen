/*
  This file is automatically generated. Any changes will be overwritten.
  Modify opportunities.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { GridComponent } from '@radzen/angular/dist/grid';
import { ImageComponent } from '@radzen/angular/dist/image';
import { LabelComponent } from '@radzen/angular/dist/label';

import { ConfigService } from '../config.service';
import { AddOpportunityComponent } from '../add-opportunity/add-opportunity.component';
import { EditOpportunityComponent } from '../edit-opportunity/edit-opportunity.component';

import { CrmService } from '../crm.service';
import { SecurityService } from '../security.service';

export class OpportunitiesGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('grid0') grid0: GridComponent;

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
  parameters: any;
  getOpportunitiesResult: any;
  getOpportunitiesCount: any;

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
    this.grid0.load();
  }

  grid0Add(event: any) {
    this.dialogService.open(AddOpportunityComponent, { parameters: {}, title: 'Add Opportunity' });
  }

  grid0Delete(event: any) {
    this.crm.deleteOpportunity(event.Id)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: `Success`, detail: `Opportunity deleted!` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to delete Opportunity` });
    });
  }

  grid0LoadData(event: any) {
    this.crm.getOpportunities(`${event.filter}`, event.top, event.skip, `${event.orderby}`, event.top != null && event.skip != null, `Contact,OpportunityStatus,User`, null, null)
    .subscribe((result: any) => {
      this.getOpportunitiesResult = result.value;

      this.getOpportunitiesCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0RowSelect(event: any) {
    this.dialogService.open(EditOpportunityComponent, { parameters: {Id: event.Id}, title: 'Edit Opportunity' });
  }
}
