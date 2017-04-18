import { Component, OnInit } from '@angular/core';
import { Service774Service } from '../../services/service-774.service';

@Component({
  selector: 'app-comp-774',
  templateUrl: './comp-774.component.html',
  styleUrls: ['./comp-774.component.css']
})
export class Comp774Component implements OnInit {

  constructor(private _service: Service774Service) { }

  ngOnInit() {
  }

}
