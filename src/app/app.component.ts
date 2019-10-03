import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MainService } from './services/main.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  mainForm: FormGroup;
  alive: boolean;

  constructor(
    private _FormBuilder: FormBuilder,
    private _MainService: MainService
  ) {
    this.mainForm = this._FormBuilder.group({
      modules: this._FormBuilder.array([])
    });
    this.alive = true;
  }

  ngOnInit() {
    this._MainService.getData().pipe(takeWhile(() => this.alive)).subscribe({
      next: data => {
        if (data && data.modules) {
          data.modules.forEach(module => {
            this.modules.push(this.generateModule(module));
          });
        }
      }
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  get modules(): FormArray {
    return this.mainForm.get('modules') as FormArray;
  }

  generateModule(module: any) {
    const generateSubModules = (subModules) => {
      const formArray = this._FormBuilder.array([]);
      subModules.forEach(val => {
        formArray.push(this._FormBuilder.group({
          id: [val.id, [Validators.required]],
          name: [val.name, Validators.required],
          read: [val.read || false],
          write: [val.write || false],
          delete: [val.delete || false],
          create: [val.create || false],
          export: [val.export || false],
          import: [val.import || false]
        }));
      });
      formArray.disable();
      return formArray;
    };

    const control = this._FormBuilder.group({
      id: [module.id, [Validators.required]],
      name: [module.name, [Validators.required]],
      isChecked: [false],
      subModules: generateSubModules(module.subModules)
    });
    this.toggleInnerStatus(control);
    return control;
  }

  toggleInnerStatus(control: FormGroup) {
    control.get('isChecked').valueChanges.subscribe({
      next: value => {
        value === true ? control.get('subModules').enable() : control.get('subModules').disable();
      }
    });
  }

}
