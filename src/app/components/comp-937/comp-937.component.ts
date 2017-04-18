import { Component, OnInit } from '@angular/core';
import { Service937Service } from '../../services/service-937.service';

@Component({
  selector: 'app-comp-937',
  templateUrl: './comp-937.component.html',
  styleUrls: ['./comp-937.component.css']
})
export class Comp937Component implements OnInit {

  constructor(private _service: Service937Service) { }

  ngOnInit() {
  }

}
