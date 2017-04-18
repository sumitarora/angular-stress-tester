import { Component, OnInit } from '@angular/core';
import { Service712Service } from '../../services/service-712.service';

@Component({
  selector: 'app-comp-712',
  templateUrl: './comp-712.component.html',
  styleUrls: ['./comp-712.component.css']
})
export class Comp712Component implements OnInit {

  constructor(private _service: Service712Service) { }

  ngOnInit() {
  }

}
