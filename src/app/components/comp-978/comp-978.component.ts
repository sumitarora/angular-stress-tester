import { Component, OnInit } from '@angular/core';
import { Service978Service } from '../../services/service-978.service';

@Component({
  selector: 'app-comp-978',
  templateUrl: './comp-978.component.html',
  styleUrls: ['./comp-978.component.css']
})
export class Comp978Component implements OnInit {

  constructor(private _service: Service978Service) { }

  ngOnInit() {
  }

}
