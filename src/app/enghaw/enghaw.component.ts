import { Component, OnInit } from '@angular/core';
import { EnghawService } from '../enghaw.service';

@Component({
  selector: 'enghaw',
  templateUrl: './enghaw.component.html',
  styleUrls: ['./enghaw.component.css'],
})
export class EnghawComponent implements OnInit {
  constructor(private engHawService:EnghawService) { }

  text:string = '';
  musics:any = [];

  ngOnInit(): void {
  }

  public getMusic() {
    this.engHawService.searchLetter(this.text).subscribe(
      response => {
        this.musics = response.data;
        console.log(response.data);
      }
    );
  }

}
