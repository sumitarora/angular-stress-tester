import { Component, OnInit } from '@angular/core';
import { Service403Service } from '../../services/service-403.service';

@Component({
  selector: 'app-comp-403',
  templateUrl: './comp-403.component.html',
  styleUrls: ['./comp-403.component.css']
})
export class Comp403Component implements OnInit {

  constructor(private _service: Service403Service) { }

  ngOnInit() {
  }

}
