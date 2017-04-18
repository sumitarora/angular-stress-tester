import { Component, OnInit } from '@angular/core';
import { Service299Service } from '../../services/service-299.service';

@Component({
  selector: 'app-comp-299',
  templateUrl: './comp-299.component.html',
  styleUrls: ['./comp-299.component.css']
})
export class Comp299Component implements OnInit {

  constructor(private _service: Service299Service) { }

  ngOnInit() {
  }

}
