import { Component, OnInit } from '@angular/core';
import { Service862Service } from '../../services/service-862.service';

@Component({
  selector: 'app-comp-862',
  templateUrl: './comp-862.component.html',
  styleUrls: ['./comp-862.component.css']
})
export class Comp862Component implements OnInit {

  constructor(private _service: Service862Service) { }

  ngOnInit() {
  }

}
