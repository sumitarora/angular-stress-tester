import { Component, OnInit } from '@angular/core';
import { Service960Service } from '../../services/service-960.service';

@Component({
  selector: 'app-comp-960',
  templateUrl: './comp-960.component.html',
  styleUrls: ['./comp-960.component.css']
})
export class Comp960Component implements OnInit {

  constructor(private _service: Service960Service) { }

  ngOnInit() {
  }

}
