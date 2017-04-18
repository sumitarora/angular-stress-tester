import { Component, OnInit } from '@angular/core';
import { Service600Service } from '../../services/service-600.service';

@Component({
  selector: 'app-comp-600',
  templateUrl: './comp-600.component.html',
  styleUrls: ['./comp-600.component.css']
})
export class Comp600Component implements OnInit {

  constructor(private _service: Service600Service) { }

  ngOnInit() {
  }

}
