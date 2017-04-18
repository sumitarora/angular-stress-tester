import { Component, OnInit } from '@angular/core';
import { Service820Service } from '../../services/service-820.service';

@Component({
  selector: 'app-comp-820',
  templateUrl: './comp-820.component.html',
  styleUrls: ['./comp-820.component.css']
})
export class Comp820Component implements OnInit {

  constructor(private _service: Service820Service) { }

  ngOnInit() {
  }

}
