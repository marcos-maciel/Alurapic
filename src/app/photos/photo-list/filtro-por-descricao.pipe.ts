import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filtroPorDescricao' })
export class filtroPorDescricao implements PipeTransform {

  transform(photos: Photo[], descricao: string) {
    descricao = descricao.trim().toLocaleLowerCase();
      // trim para desconsiderar espaços vazios e toLowerCase para considerar sempre carcteres minusculos
    if (descricao) {
      return photos.filter(
        photo => photo.description.toLocaleLowerCase().includes(descricao)
        );
        // filter: é do próprio javascript
        // para cada photo.description irá incluir(mostrar) apenas as que tiveram o parametro 'descricao'
    } else {
      return photos;
    }
  }

}
