import { Component, OnInit } from '@angular/core';
import { Service767Service } from '../../services/service-767.service';

@Component({
  selector: 'app-comp-767',
  templateUrl: './comp-767.component.html',
  styleUrls: ['./comp-767.component.css']
})
export class Comp767Component implements OnInit {

  constructor(private _service: Service767Service) { }

  ngOnInit() {
  }

}
