import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css'],
})
export class AlbumesComponent implements OnInit {
  public albums = {};
  public tooltip = 'A tocar';
  constructor() {}

  ngOnInit(): void {
    this.loadAlbums();
  }
  public dropDownOPtions(): void{
    console.log('avoid this');
    this.tooltip = '';
  }
  public loadAlbums(): void {
    this.albums = ['a', 'b'];
    // this.albums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];
  }
}
