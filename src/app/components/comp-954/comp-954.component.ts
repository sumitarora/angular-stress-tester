import { Component, OnInit } from '@angular/core';
import { Service954Service } from '../../services/service-954.service';

@Component({
  selector: 'app-comp-954',
  templateUrl: './comp-954.component.html',
  styleUrls: ['./comp-954.component.css']
})
export class Comp954Component implements OnInit {

  constructor(private _service: Service954Service) { }

  ngOnInit() {
  }

}
