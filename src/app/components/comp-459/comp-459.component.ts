import { Component, OnInit } from '@angular/core';
import { Service459Service } from '../../services/service-459.service';

@Component({
  selector: 'app-comp-459',
  templateUrl: './comp-459.component.html',
  styleUrls: ['./comp-459.component.css']
})
export class Comp459Component implements OnInit {

  constructor(private _service: Service459Service) { }

  ngOnInit() {
  }

}
