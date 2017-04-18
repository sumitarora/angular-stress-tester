import { Component, OnInit } from '@angular/core';
import { Service443Service } from '../../services/service-443.service';

@Component({
  selector: 'app-comp-443',
  templateUrl: './comp-443.component.html',
  styleUrls: ['./comp-443.component.css']
})
export class Comp443Component implements OnInit {

  constructor(private _service: Service443Service) { }

  ngOnInit() {
  }

}
