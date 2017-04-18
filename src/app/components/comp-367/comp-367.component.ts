import { Component, OnInit } from '@angular/core';
import { Service367Service } from '../../services/service-367.service';

@Component({
  selector: 'app-comp-367',
  templateUrl: './comp-367.component.html',
  styleUrls: ['./comp-367.component.css']
})
export class Comp367Component implements OnInit {

  constructor(private _service: Service367Service) { }

  ngOnInit() {
  }

}
