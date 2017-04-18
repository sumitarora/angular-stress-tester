import { Component, OnInit } from '@angular/core';
import { Service70Service } from '../../services/service-70.service';

@Component({
  selector: 'app-comp-70',
  templateUrl: './comp-70.component.html',
  styleUrls: ['./comp-70.component.css']
})
export class Comp70Component implements OnInit {

  constructor(private _service: Service70Service) { }

  ngOnInit() {
  }

}
