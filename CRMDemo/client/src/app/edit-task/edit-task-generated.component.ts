/*
  This file is automatically generated. Any changes will be overwritten.
  Modify edit-task.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { LabelComponent } from '@radzen/angular/dist/label';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { FormComponent } from '@radzen/angular/dist/form';
import { IconComponent } from '@radzen/angular/dist/icon';

import { ConfigService } from '../config.service';

import { CrmService } from '../crm.service';
import { SecurityService } from '../security.service';

export class EditTaskGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('closeLabel') closeLabel: LabelComponent;
  @ViewChild('closeButton') closeButton: ButtonComponent;
  @ViewChild('form0') form0: FormComponent;

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
  canEdit: any;
  task: any;
  getOpportunitiesResult: any;
  getTaskTypesResult: any;
  getTaskStatusesResult: any;
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
    this.canEdit = true;

    this.crm.getTaskById(this.parameters.Id)
    .subscribe((result: any) => {
      this.task = result;
    }, (result: any) => {
      this.canEdit = !(result.status == 400);
    });

    this.crm.getOpportunities(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getOpportunitiesResult = result.value;
    }, (result: any) => {

    });

    this.crm.getTaskTypes(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getTaskTypesResult = result.value;
    }, (result: any) => {

    });

    this.crm.getTaskStatuses(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getTaskStatusesResult = result.value;
    }, (result: any) => {

    });
  }

  closeButtonClick(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }

  form0Cancel(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }

  form0Submit(event: any) {
    this.crm.updateTask(this.parameters.Id, event)
    .subscribe((result: any) => {
      if (this.dialogRef) {
        this.dialogRef.close();
      } else {
        this._location.back();
      }
    }, (result: any) => {
      this.canEdit = !(result.status == 400);

      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to update Task` });
    });
  }
}
