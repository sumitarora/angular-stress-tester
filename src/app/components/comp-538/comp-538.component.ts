import { Component, OnInit } from '@angular/core';
import { Service538Service } from '../../services/service-538.service';

@Component({
  selector: 'app-comp-538',
  templateUrl: './comp-538.component.html',
  styleUrls: ['./comp-538.component.css']
})
export class Comp538Component implements OnInit {

  constructor(private _service: Service538Service) { }

  ngOnInit() {
  }

}
