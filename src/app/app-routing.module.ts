import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildingEditComponent } from './views/pages/buildings/building-edit/building-edit.component';
import { RoomEditComponent } from './views/pages/rooms/room-edit/room-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BuildingEditComponent
  },
  {
    path: 'building/:building_id/edit',
    component: BuildingEditComponent
  },
  {
    path: 'building/:building_id/room/:room_id/edit',
    component: RoomEditComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
