import { Component, OnInit } from '@angular/core';
import { Service973Service } from '../../services/service-973.service';

@Component({
  selector: 'app-comp-973',
  templateUrl: './comp-973.component.html',
  styleUrls: ['./comp-973.component.css']
})
export class Comp973Component implements OnInit {

  constructor(private _service: Service973Service) { }

  ngOnInit() {
  }

}
