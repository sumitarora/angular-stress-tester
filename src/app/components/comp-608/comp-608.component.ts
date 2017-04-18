import { Component, OnInit } from '@angular/core';
import { Service608Service } from '../../services/service-608.service';

@Component({
  selector: 'app-comp-608',
  templateUrl: './comp-608.component.html',
  styleUrls: ['./comp-608.component.css']
})
export class Comp608Component implements OnInit {

  constructor(private _service: Service608Service) { }

  ngOnInit() {
  }

}
