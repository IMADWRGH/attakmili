import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        MatSidenavModule,
        MatGridListModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatExpansionModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule,
        MatBadgeModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatCardModule,


    ]
})
export class MaterialDesignModule { }