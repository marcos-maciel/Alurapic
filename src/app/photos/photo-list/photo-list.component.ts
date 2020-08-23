import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filtroPesquisa: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService

    ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
    //quando chamar a rota que esta no arquivo routing, usa o 'data' para pegar o valor do resolve do arquivo routing

    this.debounce.pipe(debounceTime(300)).subscribe(filtroPesquisa => this.filtroPesquisa = filtroPesquisa);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos); // concat nesse caso serviu para apenas chamar o evento de OnChange por de baixo dos panos e com isso conseguir mudar o array de photos no photos.component.ts
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }

}
