import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TravelerInfoComponent } from './traveler-info/traveler-info.component';
import { CoversComponent } from './covers/covers.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, TranslateModule.forChild(), ReactiveFormsModule],
    exports: [TravelerInfoComponent, CoversComponent, ThankyouComponent],
    declarations: [TravelerInfoComponent, CoversComponent, ThankyouComponent]
})

export class TravelComponentsModule {}