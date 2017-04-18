import { Component, OnInit } from '@angular/core';
import { Service444Service } from '../../services/service-444.service';

@Component({
  selector: 'app-comp-444',
  templateUrl: './comp-444.component.html',
  styleUrls: ['./comp-444.component.css']
})
export class Comp444Component implements OnInit {

  constructor(private _service: Service444Service) { }

  ngOnInit() {
  }

}
