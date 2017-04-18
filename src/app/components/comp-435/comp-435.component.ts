import { Component, OnInit } from '@angular/core';
import { Service435Service } from '../../services/service-435.service';

@Component({
  selector: 'app-comp-435',
  templateUrl: './comp-435.component.html',
  styleUrls: ['./comp-435.component.css']
})
export class Comp435Component implements OnInit {

  constructor(private _service: Service435Service) { }

  ngOnInit() {
  }

}
