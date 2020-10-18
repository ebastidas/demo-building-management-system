
import { TestBed, async, ComponentFixture, fakeAsync, flush } from '@angular/core/testing';
import { FormArray, FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomValidators } from 'src/app/core/form-validators/custom-validators';
import { NicknameValidationService } from 'src/app/core/services/nickname-validation.service';
import { NicknameEditorComponent } from 'src/app/views/shared/nickname-editor/nickname-editor.component';
import { BuildingEditComponent } from './building-edit.component';

describe('BuildingEditComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
      ],
      declarations: [
        BuildingEditComponent,
        NicknameEditorComponent
      ],
      providers: [
        NicknameValidationService,
        CustomValidators
      ],
    }).compileComponents();

  }));

  it('should create the building-edit component', () => {
    const fixture = TestBed.createComponent(BuildingEditComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should start with a valid form', () => {
    const fixture = TestBed.createComponent(BuildingEditComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    component.ngOnInit();
    expect(component.buildingForm.valid).toBeTruthy();
  });

  it('should have a valid form when insert a valid nickname', fakeAsync(() => {
    const fixture = TestBed.createComponent(BuildingEditComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    component.ngOnInit();

    const nicknameValidationService: NicknameValidationService = new NicknameValidationService();
    const customValidators: CustomValidators = new CustomValidators(nicknameValidationService);

    const validNickname = 'abb'; // must start with 'a'
    const newNickname = (new FormBuilder()).control(validNickname, [], [customValidators.nickname.bind(customValidators)])

    const nicknames = (component.buildingForm.get('nicknames') as FormArray);
    nicknames.push(newNickname);

    component.buildingForm.updateValueAndValidity();
    flush();

    expect(component.buildingForm.valid).toBeTruthy();
  }));

  it('should have a invalid form when insert a invalid nickname', fakeAsync(() => {
    const fixture = TestBed.createComponent(BuildingEditComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    component.ngOnInit();

    const nicknameValidationService: NicknameValidationService = new NicknameValidationService();
    const customValidators: CustomValidators = new CustomValidators(nicknameValidationService);

    const invalid = 'bbb'; // must start with 'a'
    const newNickname = (new FormBuilder()).control(invalid, [], [customValidators.nickname.bind(customValidators)])

    const nicknames = (component.buildingForm.get('nicknames') as FormArray);
    nicknames.push(newNickname);

    component.buildingForm.updateValueAndValidity();
    flush();

    expect(component.buildingForm.valid).toBeFalsy();
  }));
});
