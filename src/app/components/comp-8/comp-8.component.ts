import { Component, OnInit } from '@angular/core';
import { Service8Service } from '../../services/service-8.service';

@Component({
  selector: 'app-comp-8',
  templateUrl: './comp-8.component.html',
  styleUrls: ['./comp-8.component.css']
})
export class Comp8Component implements OnInit {

  constructor(private _service: Service8Service) { }

  ngOnInit() {
  }

}
