import { Component, OnInit } from '@angular/core';
import { Service381Service } from '../../services/service-381.service';

@Component({
  selector: 'app-comp-381',
  templateUrl: './comp-381.component.html',
  styleUrls: ['./comp-381.component.css']
})
export class Comp381Component implements OnInit {

  constructor(private _service: Service381Service) { }

  ngOnInit() {
  }

}
