import { Component, OnInit } from '@angular/core';
import { Service337Service } from '../../services/service-337.service';

@Component({
  selector: 'app-comp-337',
  templateUrl: './comp-337.component.html',
  styleUrls: ['./comp-337.component.css']
})
export class Comp337Component implements OnInit {

  constructor(private _service: Service337Service) { }

  ngOnInit() {
  }

}
