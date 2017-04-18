import { Component, OnInit } from '@angular/core';
import { Service436Service } from '../../services/service-436.service';

@Component({
  selector: 'app-comp-436',
  templateUrl: './comp-436.component.html',
  styleUrls: ['./comp-436.component.css']
})
export class Comp436Component implements OnInit {

  constructor(private _service: Service436Service) { }

  ngOnInit() {
  }

}
