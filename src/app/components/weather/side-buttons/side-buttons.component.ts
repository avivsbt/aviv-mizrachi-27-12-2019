import { Component, OnInit } from '@angular/core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-buttons',
  templateUrl: './side-buttons.component.html',
  styleUrls: ['./side-buttons.component.css']
})
export class SideButtonsComponent implements OnInit {
  
  public faLocationArrow = faLocationArrow;

  constructor(

  ) { }

  ngOnInit() {

  }


}
