import { Component, OnInit } from '@angular/core';
import { Service821Service } from '../../services/service-821.service';

@Component({
  selector: 'app-comp-821',
  templateUrl: './comp-821.component.html',
  styleUrls: ['./comp-821.component.css']
})
export class Comp821Component implements OnInit {

  constructor(private _service: Service821Service) { }

  ngOnInit() {
  }

}
