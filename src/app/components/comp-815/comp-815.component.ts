import { Component, OnInit } from '@angular/core';
import { Service815Service } from '../../services/service-815.service';

@Component({
  selector: 'app-comp-815',
  templateUrl: './comp-815.component.html',
  styleUrls: ['./comp-815.component.css']
})
export class Comp815Component implements OnInit {

  constructor(private _service: Service815Service) { }

  ngOnInit() {
  }

}
