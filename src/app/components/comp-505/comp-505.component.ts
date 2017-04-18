import { Component, OnInit } from '@angular/core';
import { Service505Service } from '../../services/service-505.service';

@Component({
  selector: 'app-comp-505',
  templateUrl: './comp-505.component.html',
  styleUrls: ['./comp-505.component.css']
})
export class Comp505Component implements OnInit {

  constructor(private _service: Service505Service) { }

  ngOnInit() {
  }

}
