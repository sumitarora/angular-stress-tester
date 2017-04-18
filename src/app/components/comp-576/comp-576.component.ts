import { Component, OnInit } from '@angular/core';
import { Service576Service } from '../../services/service-576.service';

@Component({
  selector: 'app-comp-576',
  templateUrl: './comp-576.component.html',
  styleUrls: ['./comp-576.component.css']
})
export class Comp576Component implements OnInit {

  constructor(private _service: Service576Service) { }

  ngOnInit() {
  }

}
