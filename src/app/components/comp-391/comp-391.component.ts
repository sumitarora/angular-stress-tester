import { Component, OnInit } from '@angular/core';
import { Service391Service } from '../../services/service-391.service';

@Component({
  selector: 'app-comp-391',
  templateUrl: './comp-391.component.html',
  styleUrls: ['./comp-391.component.css']
})
export class Comp391Component implements OnInit {

  constructor(private _service: Service391Service) { }

  ngOnInit() {
  }

}
