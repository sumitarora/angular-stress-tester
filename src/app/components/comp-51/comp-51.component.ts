import { Component, OnInit } from '@angular/core';
import { Service51Service } from '../../services/service-51.service';

@Component({
  selector: 'app-comp-51',
  templateUrl: './comp-51.component.html',
  styleUrls: ['./comp-51.component.css']
})
export class Comp51Component implements OnInit {

  constructor(private _service: Service51Service) { }

  ngOnInit() {
  }

}
