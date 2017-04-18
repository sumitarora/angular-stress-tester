import { Component, OnInit } from '@angular/core';
import { Service149Service } from '../../services/service-149.service';

@Component({
  selector: 'app-comp-149',
  templateUrl: './comp-149.component.html',
  styleUrls: ['./comp-149.component.css']
})
export class Comp149Component implements OnInit {

  constructor(private _service: Service149Service) { }

  ngOnInit() {
  }

}
