import { Component, OnInit } from '@angular/core';
import { Service914Service } from '../../services/service-914.service';

@Component({
  selector: 'app-comp-914',
  templateUrl: './comp-914.component.html',
  styleUrls: ['./comp-914.component.css']
})
export class Comp914Component implements OnInit {

  constructor(private _service: Service914Service) { }

  ngOnInit() {
  }

}
