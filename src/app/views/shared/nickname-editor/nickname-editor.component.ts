import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidators } from '../../../core/form-validators/custom-validators';
import { NicknameValidationService } from '../../../core/services/nickname-validation.service';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.scss']
})
export class NicknameEditorComponent implements OnInit {

  @Input()
  public parentForm: FormGroup;

  public newNickname: string;

  constructor(
    private _fb: FormBuilder,
    private customValidators: CustomValidators
  ) { }

  ngOnInit() {
    // this.nicknames.push(this._fb.control('', [], [this.customValidators.nickname.bind(this.customValidators)]));
  }

  get nicknames(): FormArray {
    return this.parentForm.get('nicknames') as FormArray;
  }

  addNickname(): void {
    if (!this.newNickname) {
      return;
    }
    this.nicknames.push(this._fb.control(this.newNickname, [], [this.customValidators.nickname.bind(this.customValidators)]));
    this.newNickname = '';
  }

  remove(index: number): void {
    this.nicknames.removeAt(index);
  }

}
