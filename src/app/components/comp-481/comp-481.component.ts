import { Component, OnInit } from '@angular/core';
import { Service481Service } from '../../services/service-481.service';

@Component({
  selector: 'app-comp-481',
  templateUrl: './comp-481.component.html',
  styleUrls: ['./comp-481.component.css']
})
export class Comp481Component implements OnInit {

  constructor(private _service: Service481Service) { }

  ngOnInit() {
  }

}
