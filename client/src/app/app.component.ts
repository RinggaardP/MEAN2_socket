import {Component} from '@angular/core';
import {Blog} from './blog';
import {Http, Response} from '@angular/http';
import './rxjs-operators';
import {BlogService} from "./blog.service";
import { FormsModule } from '@angular/forms';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [BlogService]
})
export class AppComponent {
    isSubmitted: boolean = false;
    title = 'Chat App';
    model = new Blog("", new Date(), "", "");
    public blogMessages = [];
    public state = false;
    public user = "";
    public chatroom = "";
    public msgTxt = "";
    public customChat = "";
    public uniqueChatrooms = [];

    isVisible: boolean = true;

    toggleVisible() {

        if (this.isVisible) {
            this.isVisible = false;
        } else {
            this.isVisible = true;
        }
    }

    constructor(private http: Http, private blogService: BlogService) {
    }

    submitBlog() {
        this.blogService.addBlog(this.model)
            .subscribe(
                blogMsg => {
                    //console.log("Messages:",messages);
                   alert("Your model, sire." + this.model.user +this.model.chatroom +this.model.date+ this.model.msgTxt);

                   //this.model = blogMsg;


                    /*
                     this.model.user = this.user;
                     this.model.date = new Date();
                     this.model.msgTxt = this.msgTxt;
                     this.model.chatroom = this.chatroom;

                     if (!this.isVisible) {
                     this.model.chatroom = this.customChat;
                     } else {
                     this.model.chatroom = this.chatroom;
                     }
                     */
                    this.getBlogs();
                },
                error => this.title = <any>error
            );
    }

    submitName() {

        this.user = this.model.user;
        this.chatroom = this.model.chatroom;
        //The this.model.chatroom is taken from the html input fields

        this.state = true;

        /*

        if (!this.isVisible) {
            this.customChat = this.model.chatroom;
        } else {
            this.chatroom = this.model.chatroom;
        }

         */
    }

    getBlogs() {
        console.log("Subscribe to service");
        this.blogService.getBlogs()
            .subscribe(
                messages => {
                    //console.log("Messages:",messages);
                    this.blogMessages = messages;
                    //this.uniqueChatrooms = set.Array.from([new set.Set(messages.map(item => item.chatroom))]);

                },
                error => this.title = <any>error
            );
    }


    ngOnInit() {
        this.getBlogs();
    }


}
