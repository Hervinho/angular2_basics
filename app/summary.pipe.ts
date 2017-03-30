import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'summary'})
export class SummaryPipe implements PipeTransform{
    transform(value: string, args: string[]){
        let limit = (args && args[0]) ? parseInt(args[0]) : 20;//? = then, : = otherwise.
        if(value){
            return value.substr(0, limit) + " ...";
        }
    }
}