import { Component, input } from '@angular/core';
import { RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-top-nav',
  imports: [RouterModule, RouterLinkActive],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNav {
  scrolled = input<boolean>(false);
}