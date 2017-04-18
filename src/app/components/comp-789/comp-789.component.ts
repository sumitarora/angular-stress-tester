import { Component, OnInit } from '@angular/core';
import { Service789Service } from '../../services/service-789.service';

@Component({
  selector: 'app-comp-789',
  templateUrl: './comp-789.component.html',
  styleUrls: ['./comp-789.component.css']
})
export class Comp789Component implements OnInit {

  constructor(private _service: Service789Service) { }

  ngOnInit() {
  }

}
