import { Component, OnInit } from '@angular/core';
import { Service305Service } from '../../services/service-305.service';

@Component({
  selector: 'app-comp-305',
  templateUrl: './comp-305.component.html',
  styleUrls: ['./comp-305.component.css']
})
export class Comp305Component implements OnInit {

  constructor(private _service: Service305Service) { }

  ngOnInit() {
  }

}
