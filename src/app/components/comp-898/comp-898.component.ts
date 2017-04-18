import { Component, OnInit } from '@angular/core';
import { Service898Service } from '../../services/service-898.service';

@Component({
  selector: 'app-comp-898',
  templateUrl: './comp-898.component.html',
  styleUrls: ['./comp-898.component.css']
})
export class Comp898Component implements OnInit {

  constructor(private _service: Service898Service) { }

  ngOnInit() {
  }

}
