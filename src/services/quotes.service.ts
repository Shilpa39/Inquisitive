import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class QuotesService{

url: string = 'https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1u4Au8RdC2ZKtsSpQmmWs-arhpH8A2p9wDOi5l7b4Z3k&sheet=Quotes'

    constructor(private http:Http){

    }

    getFacts():Observable<Array<Object>>{
        let FactsArray: [{}];
        return this.http.get(this.url)
                        .map(res => {
                            FactsArray = res.json().Quotes;
                            return FactsArray;
                        })
    }

}
