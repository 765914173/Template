import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  carouseImg: [
    {url: '../../assets/img/Accenture_1920x1200_chromeyellow.jpg'},
    {url: '../../assets/img/Accenture_1920x1200_forestgreen.jpg'},
    {url: '../../assets/img/Accenture_1920x1200_inkblue.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
