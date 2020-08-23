import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) { //ngOnChange no lugar do ngOnInit pois o onchange vai ser executado toda vez que tiver uma alteração no @input, que nesse caso é o photos
    if (changes.photos) {
      this.rows = this.grupoColunas(this.photos);
    }
  }

  grupoColunas(photos: Photo[]) {
    const novaLinha = [];

    for (let i = 0; i <= photos.length; i += 3) {
      novaLinha.push(photos.slice(i, i + 3)); //slice só da o push quando chega num valor determinado
    }

    return novaLinha;
  }

}
