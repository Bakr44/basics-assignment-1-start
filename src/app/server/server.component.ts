import { Component } from "@angular/core";

@Component({
    selector: 'app',
    template: `
    <p>this is the first server</p>
    `,
    styles: [`
    p{
        padding: 20px;
        background-color: red;
        border: 1px solid red;
    }
    `
    ]
})

export class ServerComponent {

}