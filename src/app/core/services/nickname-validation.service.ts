import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class NicknameValidationService {

  public isValidNickname(nickname: string): Observable<boolean> {
    // TODO: change this to the backend nickname validation
    if (nickname.startsWith('a')) {
      return of(true);
    }
    return of(false);
  }

}
