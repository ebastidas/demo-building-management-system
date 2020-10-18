import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomEditComponent implements OnInit {

  public roomForm: FormGroup;
  public roomId: string

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('room_id');
    this.createForm();
  }

  createForm(): void {
    this.roomForm = this._fb.group({
      description: [''],
      nicknames: this._fb.array([])
    });
  }

  submit(): void {
    this.snackBar.open('Room details saved (check console).', 'OK', { duration: 10000 });
    if (this.roomForm.valid) {
      console.log('form AND subforms are valid', this.roomForm.value);
    } else {
      console.warn('form AND/OR subforms are invalid', this.roomForm.value);
    }
  }
}
