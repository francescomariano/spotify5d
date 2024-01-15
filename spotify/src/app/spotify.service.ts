import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCJOMKmxNSjvpOqksjcHiPzgxDzaWZzr9q9ZeGRfSkFyBruPCuULb7tqNh5ncdB_KhcVRdvzhfILjJu-Zzz9owS43d_P9Kc75pMDZ9NaDdNH_EAJ9zGO4CFKk-vjGpzRRlmEdll0rth6uzofHiXfTvdgrc2yyNg9c__ynCfm56jpRsNdVE9rhIQ8_M95YaCROPLTrpPaTsD7DN0Q34'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}


