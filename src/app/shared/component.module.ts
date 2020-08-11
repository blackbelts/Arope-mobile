import {NgModule} from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, TranslateModule.forChild()],
    exports: [TopHeaderComponent],
    declarations: [TopHeaderComponent]
})

export class ComponentModule {}