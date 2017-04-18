import { Component, OnInit } from '@angular/core';
import { Service317Service } from '../../services/service-317.service';

@Component({
  selector: 'app-comp-317',
  templateUrl: './comp-317.component.html',
  styleUrls: ['./comp-317.component.css']
})
export class Comp317Component implements OnInit {

  constructor(private _service: Service317Service) { }

  ngOnInit() {
  }

}
