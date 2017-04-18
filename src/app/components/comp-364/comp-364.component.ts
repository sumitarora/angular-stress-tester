import { Component, OnInit } from '@angular/core';
import { Service364Service } from '../../services/service-364.service';

@Component({
  selector: 'app-comp-364',
  templateUrl: './comp-364.component.html',
  styleUrls: ['./comp-364.component.css']
})
export class Comp364Component implements OnInit {

  constructor(private _service: Service364Service) { }

  ngOnInit() {
  }

}
