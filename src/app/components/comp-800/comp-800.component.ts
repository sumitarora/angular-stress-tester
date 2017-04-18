import { Component, OnInit } from '@angular/core';
import { Service800Service } from '../../services/service-800.service';

@Component({
  selector: 'app-comp-800',
  templateUrl: './comp-800.component.html',
  styleUrls: ['./comp-800.component.css']
})
export class Comp800Component implements OnInit {

  constructor(private _service: Service800Service) { }

  ngOnInit() {
  }

}
