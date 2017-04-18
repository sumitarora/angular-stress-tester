import { Component, OnInit } from '@angular/core';
import { Service641Service } from '../../services/service-641.service';

@Component({
  selector: 'app-comp-641',
  templateUrl: './comp-641.component.html',
  styleUrls: ['./comp-641.component.css']
})
export class Comp641Component implements OnInit {

  constructor(private _service: Service641Service) { }

  ngOnInit() {
  }

}
