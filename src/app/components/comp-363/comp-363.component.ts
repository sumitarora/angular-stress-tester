import { Component, OnInit } from '@angular/core';
import { Service363Service } from '../../services/service-363.service';

@Component({
  selector: 'app-comp-363',
  templateUrl: './comp-363.component.html',
  styleUrls: ['./comp-363.component.css']
})
export class Comp363Component implements OnInit {

  constructor(private _service: Service363Service) { }

  ngOnInit() {
  }

}
