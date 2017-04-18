import { Component, OnInit } from '@angular/core';
import { Service753Service } from '../../services/service-753.service';

@Component({
  selector: 'app-comp-753',
  templateUrl: './comp-753.component.html',
  styleUrls: ['./comp-753.component.css']
})
export class Comp753Component implements OnInit {

  constructor(private _service: Service753Service) { }

  ngOnInit() {
  }

}
