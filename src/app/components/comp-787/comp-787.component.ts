import { Component, OnInit } from '@angular/core';
import { Service787Service } from '../../services/service-787.service';

@Component({
  selector: 'app-comp-787',
  templateUrl: './comp-787.component.html',
  styleUrls: ['./comp-787.component.css']
})
export class Comp787Component implements OnInit {

  constructor(private _service: Service787Service) { }

  ngOnInit() {
  }

}
