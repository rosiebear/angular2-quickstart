import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    directives: [HeroDetailComponent],
    templateUrl:'app/app.component.html',
    styleUrls:['app/app.component.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes;

    constructor(private _heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
         this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}

