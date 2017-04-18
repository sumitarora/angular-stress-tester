import { Component, OnInit } from '@angular/core';
import { Service433Service } from '../../services/service-433.service';

@Component({
  selector: 'app-comp-433',
  templateUrl: './comp-433.component.html',
  styleUrls: ['./comp-433.component.css']
})
export class Comp433Component implements OnInit {

  constructor(private _service: Service433Service) { }

  ngOnInit() {
  }

}
