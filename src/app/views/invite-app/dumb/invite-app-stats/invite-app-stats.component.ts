import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-invite-app-stats',
  templateUrl: './invite-app-stats.component.html',
  styleUrls: ['./invite-app-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteAppStatsComponent implements OnInit {
  @Input() invited;
  @Input() rsvped;
  @Input() totalWithGuests;
  constructor() { }

  ngOnInit() {
  }

}
