import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FamilyComponent } from './family/family.component';
import { IndividualComponent } from './individual/individual.component';
import { GroupComponent } from './group/group.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  exports: [
      FamilyComponent,
      IndividualComponent,
      GroupComponent
  ],
  declarations: [FamilyComponent, IndividualComponent, GroupComponent]
})
export class TravelComponentsModule {}
