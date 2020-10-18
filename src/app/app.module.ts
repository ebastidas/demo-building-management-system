// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingEditComponent } from './views/pages/buildings/building-edit/building-edit.component';
import { RoomEditComponent } from './views/pages/rooms/room-edit/room-edit.component';
import { NicknameEditorComponent } from './views/shared/nickname-editor/nickname-editor.component';

// Core - Services
import { NicknameValidationService } from './core/services/nickname-validation.service';

// Core - Validators
import { CustomValidators } from './core/form-validators/custom-validators';

@NgModule({
  declarations: [
    AppComponent,
    BuildingEditComponent,
    NicknameEditorComponent,
    RoomEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [
    NicknameValidationService,
    CustomValidators
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
