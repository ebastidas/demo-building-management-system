import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { NicknameValidationService } from '../services/nickname-validation.service';

@Injectable()
export class CustomValidators {

  constructor(private nicknameValidationService: NicknameValidationService) { }

  async nickname(control: FormControl): Promise<ValidationErrors> {
    const isValidNickname = await this.nicknameValidationService.isValidNickname(control.value).toPromise();

    if (!isValidNickname) {
      const errorMessage = {
        nicknameValid: {
          message: 'Nickname invalid: nickname must start with the letter "a".'
        }
      };
      return errorMessage;
    }
    return null;

  }
}
