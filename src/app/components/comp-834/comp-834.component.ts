import { Component, OnInit } from '@angular/core';
import { Service834Service } from '../../services/service-834.service';

@Component({
  selector: 'app-comp-834',
  templateUrl: './comp-834.component.html',
  styleUrls: ['./comp-834.component.css']
})
export class Comp834Component implements OnInit {

  constructor(private _service: Service834Service) { }

  ngOnInit() {
  }

}
