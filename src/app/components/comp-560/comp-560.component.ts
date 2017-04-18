import { Component, OnInit } from '@angular/core';
import { Service560Service } from '../../services/service-560.service';

@Component({
  selector: 'app-comp-560',
  templateUrl: './comp-560.component.html',
  styleUrls: ['./comp-560.component.css']
})
export class Comp560Component implements OnInit {

  constructor(private _service: Service560Service) { }

  ngOnInit() {
  }

}
