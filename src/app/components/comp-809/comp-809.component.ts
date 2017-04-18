import { Component, OnInit } from '@angular/core';
import { Service809Service } from '../../services/service-809.service';

@Component({
  selector: 'app-comp-809',
  templateUrl: './comp-809.component.html',
  styleUrls: ['./comp-809.component.css']
})
export class Comp809Component implements OnInit {

  constructor(private _service: Service809Service) { }

  ngOnInit() {
  }

}
