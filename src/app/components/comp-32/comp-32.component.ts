import { Component, OnInit } from '@angular/core';
import { Service32Service } from '../../services/service-32.service';

@Component({
  selector: 'app-comp-32',
  templateUrl: './comp-32.component.html',
  styleUrls: ['./comp-32.component.css']
})
export class Comp32Component implements OnInit {

  constructor(private _service: Service32Service) { }

  ngOnInit() {
  }

}
