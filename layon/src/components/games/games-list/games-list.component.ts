import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { GameBoxComponent } from 'components/games';
import { HttpClient } from '@angular/common/http';
import { Game } from 'environments/Models/Game';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit, AfterViewInit {

    @ViewChildren(GameBoxComponent, { read: ElementRef }) gamesNative?: QueryList<ElementRef>;
    @ViewChildren(GameBoxComponent) games?: QueryList<GameBoxComponent>;

    public index: number = 0;

    public gameList: Array<Game> = [];

    public fetched: boolean = false;

    private TOKEN: string = "c1e833f49e1d4c90b041380a305d1ce5";

    constructor(public http: HttpClient) {
        // Backend API, this should return all the games in the PC
        // STILL TO BE DONE, NOT FINISHED YET!
        // this.http.get("https://localhost:5001/openexecutable/searchforgames")
        //     .subscribe( (game: any) => { // <-- ANY WILL BE REMOVED, JUST FOR TESTING!
        //         this.gameList.push(game);
        //     });

        // Connects to the API that returns game images
        this.http.get(`https://api.rawg.io/api/games?key=${this.TOKEN}&dates=2019-09-01,2019-09-30&platforms=18,1,7`)
            .subscribe( (response: any) => {
                this.fetched = false;
                console.log(response);
                for(let i = 0; i < response.results.length; i++) {
                    this.gameList.push(
                        {
                            name: response.results[i].name, 
                            url: response.results[i].background_image,
                            genres: response.results[i].genres
                        }
                    );
                }
                this.fetched = true;
            });
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }

    private highlightAtIndex(index: number) {
        this.gamesNative?.toArray()[index].nativeElement.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });

        if (this.games) {

            this.gamesNative?.forEach((_, j) => {
                //gameNative.nativeElement.scrollIntoView({ behavior: 'smooth', block: "center" });

                if (index != j) {
                    if (this.games) {
                        this.games.toArray()[j].isSelected = false;
                    }
                }
            });

            this.games.toArray()[index].isSelected = true;
        }
    }
    
    // VOID? Function type should be present
    highlightNextGame() {
        if(this.index > this.gameList.length) return;
        this.index++;
        this.highlightAtIndex(this.index);
    }

    highlightPreviousGame() {
        if(this.index-1 < 0) return;
        this.index--;
        this.highlightAtIndex(this.index);
    }
}
