import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',
  styleUrls: ['./building-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildingEditComponent implements OnInit {

  public buildingForm: FormGroup;
  public buildingId: string;

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.buildingId = this.route.snapshot.paramMap.get('building_id');
    this.createForm();
  }

  createForm(): void {
    this.buildingForm = this._fb.group({
      address: ['30 St Mary Axe, London'],
      description: ['UK office (sales & marketing)'],
      nicknames: this._fb.array([])
    });
  }

  submit(): void {
    this.snackBar.open('Building details saved (check console).', 'OK', { duration: 10000 });
    if (this.buildingForm.valid) {
      console.log('form AND subforms are valid', this.buildingForm.value);
    } else {
      console.warn('form AND/OR subforms are invalid', this.buildingForm.value);
    }
  }
}
