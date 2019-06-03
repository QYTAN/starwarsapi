import { NgModule } from "@angular/core";

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';

// import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [    
    MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    MatIconModule, MatListModule, 
]

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule{}
