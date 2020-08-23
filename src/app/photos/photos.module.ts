import { PhotoModule } from './photo/photo.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
  imports: [
    PhotoModule,
    PhotoListModule,
    PhotoFormModule
   ]  ////usado para pegar informações do back
})
export class PhotosModule {}
