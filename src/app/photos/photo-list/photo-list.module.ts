import { PhotoModule } from './../photo/photo.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { filtroPorDescricao } from "./filtro-por-descricao.pipe";


@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    filtroPorDescricao
  ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoListModule {

}
